import { useEffect, useState } from 'react'
import { disciplines, principles, profile, projects } from './profile.js'

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function ProjectIcon({ title }) {
  if (title === 'SBB Software') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M5 24V8l11-4 11 4v16" />
        <path d="M3 24h26M10 11h3M19 11h3M10 16h3M19 16h3M14 24v-4h4v4" />
      </svg>
    )
  }
  if (title === 'SiteReviveSA') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M6 24V10l10-5 10 5v14" />
        <path d="M3 24h26M11 24v-8h10v8M12 11h8" />
      </svg>
    )
  }
  if (title === 'Fenlow Procurement') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="m5 10 11-5 11 5-11 5L5 10Z" />
        <path d="M5 10v12l11 5 11-5V10M16 15v12" />
        <path d="m10.5 7.5 11 5" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 3c1.8 5.8 4.2 8.2 10 10-5.8 1.8-8.2 4.2-10 10-1.8-5.8-4.2-8.2-10-10 5.8-1.8 8.2-4.2 10-10Z" />
      <path d="M25 21c.7 2.2 1.8 3.3 4 4-2.2.7-3.3 1.8-4 4-.7-2.2-1.8-3.3-4-4 2.2-.7 3.3-1.8 4-4Z" />
    </svg>
  )
}

function AbilityIcon({ code }) {
  const paths = {
    '01': <><rect x="4" y="6" width="24" height="18" rx="1" /><path d="M4 11h24M9 8.5h.01M12 8.5h.01M10 28h12M16 24v4" /></>,
    '02': <><rect x="5" y="4" width="22" height="7" rx="1" /><rect x="5" y="21" width="22" height="7" rx="1" /><path d="M9 7.5h.01M13 7.5h8M9 24.5h.01M13 24.5h8M16 11v10" /></>,
    '03': <><circle cx="16" cy="16" r="11" /><path d="m20.5 11.5-2.2 6.8-6.8 2.2 2.2-6.8 6.8-2.2Z" /><circle cx="16" cy="16" r="1.2" /></>,
    '04': <><path d="M18 4c4 1.1 7.3 4.4 8.4 8.4L18 21l-7-7 7-10Z" /><path d="m12 17-5 1-3 5 7 1 1-7ZM20 20l-1 7-5 1 1-6" /><circle cx="20.5" cy="9.5" r="2" /></>,
  }
  return <svg viewBox="0 0 32 32" aria-hidden="true">{paths[code]}</svg>
}

function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('top')
  const navItems = [
    ['work', 'Work'],
    ['abilities', 'Abilities'],
    ['about', 'About'],
    ['contact', 'Contact'],
  ]

  useEffect(() => {
    const ids = ['top', ...navItems.map(([id]) => id)]
    let frame = 0
    const updateActive = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const marker = window.scrollY + window.innerHeight * 0.34
        let current = 'top'
        ids.forEach((id) => {
          const section = document.getElementById(id)
          if (section && section.offsetTop <= marker) current = id
        })
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24) {
          current = 'contact'
        }
        setActive(current)
      })
    }
    const resolveHash = () => {
      const id = window.location.hash.slice(1)
      if (!ids.includes(id)) return false
      const section = document.getElementById(id)
      if (!section) return false
      section.scrollIntoView()
      setActive(id)
      return true
    }

    // On a direct hash load, the browser looks for the anchor before React
    // has mounted the sections. Resolve it once the rendered DOM exists.
    requestAnimationFrame(() => {
      if (!resolveHash()) updateActive()
    })
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)
    window.addEventListener('hashchange', resolveHash)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
      window.removeEventListener('hashchange', resolveHash)
    }
  }, [])

  return (
    <header className="header">
      <a className="brand" href="#top" aria-label="Waldo Trytsman home">
        <span className="brand-rune">W</span>
        <span><strong>Waldo Trytsman</strong><small>Developer profile</small></span>
      </a>
      <div className="nav-shell">
        <nav id="nav" className={open ? 'nav is-open' : 'nav'} aria-label="Primary navigation">
          {navItems.map(([id, label]) => (
            <a
              href={`#${id}`}
              className={active === id ? 'active' : undefined}
              aria-current={active === id ? 'location' : undefined}
              onClick={() => setOpen(false)}
              key={id}
            >
              <span className="nav-sigil" aria-hidden="true" />
              {label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href={`mailto:${profile.email}`}>Open a channel <Arrow /></a>
        <button className="menu" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div
        className="hero-art"
        role="img"
        aria-label="An enchanted pickle wizard standing in a moonlit forest"
        style={{ '--art': `url(${import.meta.env.BASE_URL}art/pickle-banner.webp)` }}
      />
      <div className="hero-vignette" />
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> The gate is open</p>
        <h1>Full-stack developer.<br /><em>Uncommon</em> point of view.</h1>
        <p>{profile.intro}</p>
        <div className="hero-actions">
          <a className="button primary" href="#work">Explore the work <span aria-hidden="true">↓</span></a>
          <a className="button ghost" href={profile.business} target="_blank" rel="noreferrer">Visit SiteReviveSA <Arrow /></a>
        </div>
      </div>
      <div className="hero-side-note" aria-hidden="true"><span>Scroll to enter</span><i /></div>
    </section>
  )
}

function ProjectCard({ project, index, onOpenCaseStudy }) {
  return (
    <article className={`project-card${project.featured ? ' featured' : ''}${project.preview ? ' has-preview' : ''}`}>
      {project.preview && <div className={`project-preview ${project.previewKind || ''}-preview`} style={{ '--preview': `url(${project.preview})` }} aria-hidden="true" />}
      <div className="project-mark">
        <span className="project-icon"><ProjectIcon title={project.title} /></span>
        <span className="project-number">Project {index + 1}</span>
      </div>
      <p className="card-kicker">{project.type}</p>
      {project.status && <span className="project-status"><i />{project.status}</span>}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="tag-list" aria-label={`${project.title} technologies`}>
        {project.stack.map((item) => <li key={item}>{item}</li>)}
      </ul>
      {project.note ? (
        <span className="project-note">{project.note}</span>
      ) : project.caseStudy ? (
        <button className="project-action" type="button" onClick={onOpenCaseStudy}>{project.action} <span aria-hidden="true">↓</span></button>
      ) : (
        <a href={project.href} target={project.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
          {project.action} <Arrow />
        </a>
      )}
    </article>
  )
}

function SbbCaseStudy({ open, onToggle }) {
  const base = import.meta.env.BASE_URL
  return (
    <section className="case-study" id="sbb-case-study" aria-labelledby="sbb-case-title">
      <details open={open} onToggle={(event) => onToggle(event.currentTarget.open)}>
        <summary>
          <span><small>Selected client work</small><strong id="sbb-case-title">Inside the SBB Software redesign</strong></span>
          <span className="case-toggle" aria-hidden="true">Explore <i>+</i></span>
        </summary>
        <div className="case-body">
          <header className="case-intro">
            <p className="eyebrow">From information to intention</p>
            <h2>A redesign that makes experience <em>impossible to miss.</em></h2>
            <p>Repositioned an experienced software engineer’s dated informational website into a focused, responsive service experience—clarifying her expertise, strengthening trust, and shortening the route from interest to contact.</p>
            <dl>
              <div><dt>Role</dt><dd>Strategy, UX, visual design &amp; frontend</dd></div>
              <div><dt>Status</dt><dd>Purchased · deployment pending</dd></div>
              <div><dt>Build</dt><dd>React · Vite · responsive CSS</dd></div>
            </dl>
          </header>

          <div className="comparison" aria-label="Original website and purchased redesign comparison">
            <figure>
              <div className="browser-frame"><img src={`${base}art/sbb-original.webp`} alt="Original SBB Software website before the redesign" loading="lazy" /></div>
              <figcaption><span>Before</span><strong>Useful information without a strong narrative</strong></figcaption>
            </figure>
            <figure>
              <div className="browser-frame"><img src={`${base}art/sbb-redesign-full.webp`} alt="Purchased SBB Software redesign" loading="lazy" /></div>
              <figcaption><span>After</span><strong>A focused service experience built around trust</strong></figcaption>
            </figure>
          </div>

          <div className="case-decisions">
            <article><span>01</span><h3>Clarified the promise</h3><p>A direct opening statement now explains the value before asking visitors to decode a list of technologies.</p></article>
            <article><span>02</span><h3>Made experience visible</h3><p>Thirty-plus years, formal training, and real industry context became prominent proof—not buried biography.</p></article>
            <article><span>03</span><h3>Structured the services</h3><p>Three distinct offers make it easier for a potential client to recognise their problem and the right next step.</p></article>
            <article><span>04</span><h3>Shortened the journey</h3><p>Repeated, clear contact actions turn interest into a conversation without forcing visitors to hunt for details.</p></article>
          </div>

          <footer className="case-outcome">
            <div><small>The result</small><p>A responsive, credible presentation that sells the specialist behind the software—not merely the software itself.</p></div>
            <a className="button ghost" href="https://salomebecker.co.za/" target="_blank" rel="noreferrer">View current live site (before) <Arrow /></a>
          </footer>
        </div>
      </details>
    </section>
  )
}

function App() {
  const [progress, setProgress] = useState(0)
  const [caseStudyOpen, setCaseStudyOpen] = useState(false)

  const openCaseStudy = () => {
    setCaseStudyOpen(true)
    requestAnimationFrame(() => document.getElementById('sbb-case-study')?.scrollIntoView({ behavior: 'smooth' }))
  }

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />

        <section className="section work" id="work">
          <div className="section-heading">
            <p className="eyebrow">The quest log opens</p>
            <h2>Built to solve something.<br /><em>Styled to be remembered.</em></h2>
            <p>Each project is labelled honestly: client work, a working product, and the business behind the builds.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} onOpenCaseStudy={project.caseStudy ? openCaseStudy : undefined} />)}
          </div>
          <SbbCaseStudy open={caseStudyOpen} onToggle={setCaseStudyOpen} />
        </section>

        <section className="section abilities" id="abilities">
          <div className="section-heading compact">
            <p className="eyebrow">Beneath the armour</p>
            <h2>Across the stack,<br /><em>without the fake percentages.</em></h2>
          </div>
          <div className="ability-grid">
            {disciplines.map((item) => (
              <article className="ability-card" key={item.code}>
                <div className="ability-mark">
                  <span className="ability-icon"><AbilityIcon code={item.code} /></span>
                  <span className="ability-code">Ability {Number(item.code)}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <ul className="ability-tools">{item.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="lore" id="about">
          <div
            className="lore-art"
            role="img"
            aria-label="A pickle character meditating peacefully"
            style={{ '--art': `url(${import.meta.env.BASE_URL}art/meditating-pickle.webp)` }}
          />
          <div className="lore-copy">
            <p className="eyebrow">Behind the pixels</p>
            <h2>Serious about the work.<br /><em>Not solemn about it.</em></h2>
            <p>I’m {profile.name}, a developer and designer based in Pretoria. I care about the full journey from a vague idea to a dependable product—and I believe technically sound work can still have a sense of humour.</p>
            <dl>
              <div><dt>Base</dt><dd>{profile.location}</dd></div>
              <div><dt>Business</dt><dd><a href={profile.business}>SiteReviveSA <Arrow /></a></dd></div>
              <div><dt>Working style</dt><dd>Direct, curious, end to end</dd></div>
            </dl>
          </div>
        </section>

        <section className="section principles">
          <div className="section-heading compact">
            <p className="eyebrow">The laws of the craft</p>
            <h2>A small spellbook for<br /><em>making useful things.</em></h2>
          </div>
          <ol className="principle-list">
            {principles.map(([title, text], index) => (
              <li key={title}>
                <span className="law-number"><small>Law</small>{index + 1}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <span className="law-mark" aria-hidden="true">✦</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="contact" id="contact">
          <div
            className="contact-backdrop"
            aria-hidden="true"
            style={{ '--art': `url(${import.meta.env.BASE_URL}art/portal.webp)` }}
          />
          <div className="contact-copy">
            <p className="eyebrow">The next quest waits</p>
            <h2>Have an interesting<br /><em>problem to build?</em></h2>
            <p>Bring the half-formed idea, the awkward system, or the website that no longer fits. We’ll work out what it should become.</p>
            <div className="hero-actions">
              <a className="button primary" href={`mailto:${profile.email}`}>Start a conversation <Arrow /></a>
              <a className="button ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
              {profile.github && <a className="button ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>}
            </div>
          </div>
        </section>
      </main>
      <footer className="enchanted-footer">
        <div className="footer-fireflies" aria-hidden="true"><i /><i /><i /><i /><i /></div>
        <div className="footer-brand">
          <span className="pickle-sigil" aria-hidden="true">
            <svg viewBox="0 0 72 72">
              <path className="sigil-ring" d="M36 3 61 17v29L36 69 11 46V17L36 3Z" />
              <path className="sigil-hat" d="M18 29c7-4 12-5 18-5l-2-4 5-14 5 10 7 3-4 7c4 1 7 2 10 4-12 4-27 4-39-1Z" />
              <path className="sigil-body" d="M26 30c-3 5-4 11-4 18 0 9 5 15 14 15s14-6 14-15c0-7-1-13-4-18-6 2-14 2-20 0Z" />
              <path className="sigil-face" d="m28 42 6 2M44 42l-6 2M32 53c2-1 6-1 8 0" />
              <path className="sigil-staff" d="M18 39v21M18 39l-4-5 4-6 4 6-4 5Z" />
              <path className="sigil-runes" d="M29 35h.01M44 36h.01M28 50h.01M45 48h.01" />
            </svg>
          </span>
          <div>
            <strong>The build rests. The ideas don’t.</strong>
            <p>Designed and built by {profile.name}. No kingdoms were harmed.</p>
            <small>© {new Date().getFullYear()} · Pretoria → Worldwide</small>
          </div>
        </div>
        <div className="footer-status">
          <span className="status-orb" aria-hidden="true" />
          <div><small>Realm status</small><strong>Accepting thoughtful quests</strong></div>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          <a href={profile.business} target="_blank" rel="noreferrer">SiteReviveSA <Arrow /></a>
          <a href="#top">Back to the moon ↑</a>
        </nav>
      </footer>
    </>
  )
}

export default App

