/*
 * workflow.test.js — the Pages workflow is the only gate this site has, since a push to main deploys it: every
 * deploy waits for a check job (audit, tests, secret scan, Semgrep, build), builds from pnpm-lock.yaml with the pnpm
 * version package.json names, uses actions pinned to a commit, and gives each job only the permissions it needs
 * (hosting security standard, Code and Proof rows).
 */
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const WORKFLOW = readFileSync(new URL('../.github/workflows/deploy.yml', import.meta.url), 'utf8')
const PACKAGE = readFileSync(new URL('../package.json', import.meta.url), 'utf8')
const SEMGREP_RULESETS = ['p/typescript', 'p/javascript', 'p/nodejsscan', 'p/owasp-top-ten', 'p/security-audit']

function jobText(name) {
  const start = WORKFLOW.search(new RegExp(`^  ${name}:\\s*$`, 'm'))
  assert.notEqual(start, -1, `the workflow has a ${name} job`)
  const rest = WORKFLOW.slice(start + 1)
  const next = rest.search(/^  [a-z-]+:\s*$/m)
  return next === -1 ? rest : rest.slice(0, next)
}

function usesLines() {
  return WORKFLOW.split('\n').filter(function isUses(line) {
    return /^\s*(- )?uses:/.test(line)
  })
}

test('every action is pinned to a full commit hash, so a moved tag cannot change what runs', function actionsPinned() {
  assert.ok(usesLines().length >= 4)
  for (const line of usesLines()) assert.match(line, /uses:\s+[\w.-]+\/[\w.-]+@[0-9a-f]{40}\b/, line.trim())
})

test('only GitHub\'s own actions are used, so no third-party action sees the code or the token', function onlyGithubActions() {
  for (const line of usesLines()) assert.match(line, /uses:\s+actions\//, line.trim())
})

test('nothing runs with write permission at the top level, and the check job can only read', function permissionsMinimal() {
  assert.match(WORKFLOW, /^permissions:\s*\n\s+contents: read\s*$/m)
  const check = jobText('check')
  assert.ok(!/pages: write|id-token: write/.test(check))
})

test('the deploy job waits for the check job and is the only one that can publish', function deployNeedsCheck() {
  const deploy = jobText('deploy')
  assert.match(deploy, /needs:\s*check\b/)
  assert.match(deploy, /pages: write/)
  assert.match(deploy, /id-token: write/)
  assert.match(deploy, /name: github-pages/)
})

test('both jobs install from pnpm-lock.yaml with the pnpm version package.json names, on a pinned Node, never npm install', function lockedInstall() {
  const pinned = /"packageManager":\s*"pnpm@(\d+\.\d+\.\d+)"/.exec(PACKAGE)?.[1]
  assert.ok(pinned, 'package.json names an exact pnpm version')
  assert.ok(!/(?<!p)npm install(?! --global)|(?<!p)npm ci/.test(WORKFLOW))
  for (const name of ['check', 'deploy']) {
    assert.ok(jobText(name).includes(`npm install --global pnpm@${pinned}`), name)
    assert.match(jobText(name), /run: pnpm install --frozen-lockfile\b/, name)
    assert.match(jobText(name), /node-version: 24\b/, name)
  }
  assert.ok(!/lts\/\*|node-version: latest/.test(WORKFLOW))
})

test('the check job audits at moderate, scans the whole history for secrets, runs Semgrep and builds', function checkJobScans() {
  const check = jobText('check')
  assert.match(check, /fetch-depth: 0/)
  assert.match(check, /run: pnpm audit --audit-level=moderate/)
  assert.match(check, /sha256sum -c/)
  assert.match(check, /gitleaks git --redact --no-banner --exit-code 1/)
  assert.match(check, /pipx install semgrep==\d+\.\d+\.\d+/)
  assert.match(check, /--error/)
  assert.match(check, /--metrics off/)
  for (const ruleset of SEMGREP_RULESETS) assert.ok(check.includes(`--config ${ruleset}`), ruleset)
  assert.match(check, /run: pnpm test\b/)
  assert.match(check, /run: pnpm run build\b/)
})

test('the gitleaks download is verified against a checksum written into the workflow', function gitleaksVerified() {
  assert.match(jobText('check'), /[0-9a-f]{64}\s+gitleaks_[\d.]+_linux_x64\.tar\.gz/)
})
