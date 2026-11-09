/*
 * page-policy.test.js — what the page may load, since GitHub Pages cannot send headers: a Content Security Policy in
 * a <meta> tag that allows only the site itself, and no third-party origin (the fonts are self-hosted, so no visitor's
 * address goes to Google). Pages cannot send frame-ancestors or X-Frame-Options, so the policy cannot stop framing.
 */
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const PAGE = readFileSync(new URL('../index.html', import.meta.url), 'utf8')
const STYLES = readFileSync(new URL('../src/styles.css', import.meta.url), 'utf8')
const PACKAGE_FILES = '../node_modules/@fontsource'
const FONT_FILES = [
  '@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2',
  '@fontsource-variable/unbounded/files/unbounded-latin-wght-normal.woff2',
  '@fontsource/dm-mono/files/dm-mono-latin-400-normal.woff2',
  '@fontsource/dm-mono/files/dm-mono-latin-500-normal.woff2',
]

function policy() {
  const match = /<meta\s+http-equiv="Content-Security-Policy"\s+content="([^"]+)"/.exec(PAGE)
  assert.ok(match, 'the page carries a Content-Security-Policy meta tag')
  return match[1]
}

function directive(name) {
  return policy()
    .split(';')
    .map(function trimmed(part) {
      return part.trim()
    })
    .find(function startsWithName(part) {
      return part === name || part.startsWith(`${name} `)
    })
}

test('the policy allows scripts, styles, fonts and requests from the site itself only', function policyIsStrict() {
  for (const name of ['default-src', 'script-src', 'style-src', 'font-src', 'connect-src', 'form-action', 'base-uri']) {
    assert.equal(directive(name), `${name} 'self'`, name)
  }
  assert.equal(directive('object-src'), "object-src 'none'")
  assert.equal(directive('img-src'), "img-src 'self' data:")
  assert.ok(!/unsafe-inline|unsafe-eval|\*/.test(policy()), 'no unsafe-inline, unsafe-eval or wildcard')
})

test('the policy is the first thing in the head after the character set, so it covers everything below it', function policyComesFirst() {
  const head = PAGE.slice(PAGE.indexOf('<head>'))
  const tags = head.match(/<(meta|link|script|title)\b[^>]*>/g) ?? []
  assert.match(tags[0] ?? '', /charset/)
  assert.match(tags[1] ?? '', /Content-Security-Policy/)
})

test('the page loads nothing from another origin: no third-party link, script or font', function noThirdParty() {
  const loading = PAGE.match(/<(link|script)\b[^>]*>/g) ?? []
  for (const tag of loading) assert.ok(!/(?:href|src)="https?:\/\//.test(tag), tag)
  assert.ok(!/fonts\.googleapis\.com|fonts\.gstatic\.com/.test(PAGE + STYLES))
  assert.ok(!/@import\s+url\(\s*['"]?https?:|url\(\s*['"]?https?:/.test(STYLES))
})

test('the three families are self-hosted from the pinned packages, as the Latin files only', function fontsSelfHosted() {
  for (const file of FONT_FILES) assert.ok(STYLES.includes(`url('../node_modules/${file}')`), file)
  assert.ok(!STYLES.includes(`${PACKAGE_FILES}/inter`), 'no leftover font from another site')
})

test('the font variables name the self-hosted families first', function variablesUseSelfHosted() {
  assert.match(STYLES, /--display:\s*'Unbounded Variable',/)
  assert.match(STYLES, /--body:\s*'Manrope Variable',/)
  assert.match(STYLES, /--mono:\s*'DM Mono',/)
})
