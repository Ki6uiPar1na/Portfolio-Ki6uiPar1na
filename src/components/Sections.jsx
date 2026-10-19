import { useEffect, useMemo, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'
import {
  ArrowUpRight, Award, Building2, ClipboardCheck, Code2, Gamepad2, GraduationCap, Github, Linkedin, Mail,
  MapPin, Monitor, Send, Shield, Smartphone, Trophy, Wrench,
} from 'lucide-react'
import {
  CERTIFICATIONS, CONTACT_EMAIL, CONTESTS, COURSES, EDUCATION, HIGHLIGHTS, ORGANIZATIONS, PROFILE, PROJECTS,
  SKILLS, SKILL_GROUPS, STATS,
} from '../data'

/* ───────── helpers ───────── */
const Reveal = ({ children, delay = 0, className = '' }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay }}>
    {children}
  </motion.div>
)

const Wrap = ({ id, kicker, title, intro, children, className = '' }) => (
  <section id={id} className={`mx-auto max-w-6xl px-5 py-14 md:py-28 ${className}`}>
    <Reveal>
      <p className="kicker">{kicker}</p>
      <h2 className="h2 max-w-2xl">{title}</h2>
      {intro && <p className="mt-3 max-w-2xl text-stone-600">{intro}</p>}
    </Reveal>
    <div className="mt-8 md:mt-10">{children}</div>
  </section>
)

function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.6, ease: 'easeOut', onUpdate: (x) => setV(Math.round(x)) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{v}{suffix}</span>
}

/* ───────── Contest names flying out from behind the photo ───────── */
// Each name starts small and faint at the centre ("far away"), then grows and fades as it moves outward.
function ContestFlight() {
  const names = useMemo(() => {
    const clean = (n) => n.replace(/\s*\(.*\)/, '')
    return [...CONTESTS.international, ...CONTESTS.national, ...CONTESTS.programming].slice(0, 10).map((c) => clean(c[0]))
  }, [])
  const DURATION = 12
  return (
    <div className="flight pointer-events-none absolute -inset-x-20 -inset-y-12 z-0 overflow-hidden" aria-hidden>
      {names.map((n, i) => {
        // Alternate right/left, each name in its own vertical lane so they don't stack on top of each other.
        const LANES = [-185, 95, -75, 175, -135, 35, -20, 140, -165, 60]
        const side = i % 2 === 0 ? 1 : -1
        const tx = side * (170 + ((i * 53) % 90))
        return (
          <span key={n} className={`flight-item font-serif font-bold ${i % 3 === 0 ? 'text-accent-dark' : 'text-ink'}`}
            style={{ '--tx': `${tx}px`, '--ty': `${LANES[i % LANES.length]}px`, animationDuration: `${DURATION}s`, animationDelay: `${-(i * DURATION) / names.length}s` }}>
            {n}
          </span>
        )
      })}
    </div>
  )
}

/* ───────── Hero ───────── */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div className="bg-dots mask-fade pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 md:grid-cols-[1.15fr_1fr] md:pb-24">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-surface px-4 py-1.5 text-xs font-semibold text-accent-dark shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" /> Open to security & CTF collaborations
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            I break things <br />to make them <span className="relative whitespace-nowrap text-accent">secure<svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden><path d="M2 7 Q 50 1 100 5 T 198 4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg></span>.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-7 max-w-xl text-lg leading-relaxed text-stone-600">
            <strong className="font-semibold text-ink">{PROFILE.name}</strong> (<span className="text-accent-dark">@{PROFILE.handle}</span>) — {PROFILE.subtitle.split(' | ').join(' · ')}.
            CTF champion, bug-bounty placer and CSE student at JKKNIU.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#achievements" className="btn bg-ink text-paper hover:bg-teal-800">See achievements <ArrowUpRight size={16} /></a>
            <a href="#contact" className="btn border border-stone-300 bg-surface hover:border-ink">Get in touch</a>
            <span className="mx-1 hidden h-6 w-px bg-stone-300 sm:block" />
            {[[Github, PROFILE.github, 'GitHub'], [Linkedin, PROFILE.linkedin, 'LinkedIn'], [Mail, `mailto:${PROFILE.email}`, 'Email']].map(([Icon, href, label]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-11 w-11 place-items-center rounded-full border border-stone-200 bg-surface text-stone-600 transition hover:border-accent hover:text-accent"><Icon size={18} /></a>
            ))}
          </motion.div>
        </div>

        {/* Portrait with floating achievement badges */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative mx-auto w-full max-w-sm">
          <ContestFlight />
          <div className="pointer-events-none absolute inset-x-6 bottom-0 top-10 rounded-full bg-accent/20 blur-3xl" aria-hidden />
          <img src="/me.png" alt={PROFILE.name} className="photo-fade relative z-10 mx-auto h-[27rem] w-auto max-w-full object-contain object-bottom" />
        </motion.div>
      </div>
    </section>
  )
}

/* ───────── Marquee of events ───────── */
export function Marquee() {
  const names = [...CONTESTS.international, ...CONTESTS.national, ...CONTESTS.programming].map((c) => c[0].replace(/\s*\(.*\)/, ''))
  const row = (k) => names.map((n, i) => (
    <span key={k + i} className="flex shrink-0 items-center gap-6 text-sm font-medium text-stone-500">{n}<span className="h-1.5 w-1.5 rounded-full bg-accent/60" /></span>
  ))
  return (
    <div className="marquee overflow-hidden border-y border-stone-200 bg-surface py-4" aria-label="Events competed in">
      <div className="flex w-max animate-marquee gap-6">{row('a')}{row('b')}</div>
    </div>
  )
}

/* ───────── Stats band (dark) ───────── */
export const StatsBand = () => (
  <section className="bg-band text-white">
    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-5 py-14 md:grid-cols-4">
      {STATS.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08} className="text-center md:border-l md:border-white/10 first:md:border-0">
          <div className="font-serif text-5xl font-semibold text-teal-200 md:text-6xl"><Counter to={s.value} suffix={s.suffix} /></div>
          <div className="mt-2 text-sm text-stone-400">{s.label}</div>
        </Reveal>
      ))}
    </div>
  </section>
)

/* ───────── About — bento grid ───────── */
export const About = () => (
  <Wrap id="about" kicker="About" title="Security researcher by passion, programmer by training.">
    <div className="grid gap-4 md:grid-cols-6">
      <Reveal className="md:col-span-4 md:row-span-2">
        <div className="tile h-full !p-8">
          <p className="text-xl leading-relaxed text-stone-700 md:text-2xl md:leading-relaxed">{PROFILE.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Penetration testing', 'Bug bounty', 'Reverse engineering', 'Web security', 'OSINT'].map((t) => <span key={t} className="chip">{t}</span>)}
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.05} className="md:col-span-2">
        <div className="tile h-full">
          <GraduationCap className="text-accent" />
          <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-stone-400">Education</p>
          <p className="mt-1 font-serif text-xl font-semibold">B.Sc. in CSE</p>
          <p className="text-sm text-stone-600">Jatiya Kabi Kazi Nazrul Islam University</p>
          <p className="mt-3 font-serif text-4xl font-semibold text-accent">3.65 <span className="text-sm font-sans font-normal text-stone-400">CGPA</span></p>
        </div>
      </Reveal>
      <Reveal delay={0.1} className="md:col-span-2">
        <div className="tile h-full !border-0 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
          <Shield className="text-teal-200" />
          <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-teal-200">Leadership</p>
          <p className="mt-1 font-serif text-2xl font-semibold">President</p>
          <p className="text-sm text-teal-100">JKKNIU Cyber Security Club — led teams in national competitions.</p>
        </div>
      </Reveal>
      <Reveal delay={0.05} className="md:col-span-3">
        <div className="tile h-full">
          <Code2 className="text-accent" />
          <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-stone-400">Problem solving</p>
          <div className="mt-3 grid grid-cols-3 gap-3 text-center">
            {[['1087', 'CF max rating'], ['550+', 'CF solved'], ['150+', 'LeetCode']].map(([n, l]) => (
              <div key={l} className="rounded-2xl bg-stone-50 py-3"><div className="font-serif text-2xl font-semibold">{n}</div><div className="text-xs text-stone-500">{l}</div></div>
            ))}
          </div>
          <p className="mt-3 text-sm text-stone-600">2★ on CodeChef · ACM ICPC 2025 Regionalist</p>
        </div>
      </Reveal>
      <Reveal delay={0.1} className="md:col-span-3">
        <div className="tile h-full">
          <MapPin className="text-accent" />
          <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-stone-400">Based in</p>
          <p className="mt-1 font-serif text-xl font-semibold">{PROFILE.location}</p>
          <p className="mt-3 text-sm text-stone-600">Also active in Mid-Day Programming Club and Rotaract Club of JKKNIU.</p>
        </div>
      </Reveal>
    </div>
  </Wrap>
)

/* ───────── Skills ───────── */
const SKILL_ICON = { sec: Shield, tool: Wrench, dev: Code2, os: Monitor }
const SKILL_TINT = { sec: 'bg-teal-50 text-teal-700', tool: 'bg-indigo-50 text-indigo-700', dev: 'bg-sky-50 text-sky-700', os: 'bg-amber-50 text-amber-700' }

export const Skills = () => (
  <div className="bg-stone-100/70">
    <Wrap id="skills" kicker="Toolbox" title="What I work with" intro="Offensive-security tooling, the languages I build with, and the systems I live in.">
      <div className="grid gap-4 md:grid-cols-2">
        {SKILL_GROUPS.map((g, i) => {
          const Icon = SKILL_ICON[g.key]
          return (
            <Reveal key={g.key} delay={i * 0.06}>
              <div className="tile h-full">
                <div className="flex items-center gap-3">
                  <span className={`grid h-11 w-11 place-items-center rounded-2xl ${SKILL_TINT[g.key]}`}><Icon size={20} /></span>
                  <h3 className="font-serif text-xl font-semibold">{g.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">{SKILLS.filter((s) => s.group === g.key).map((s) => <span key={s.name} className="chip">{s.name}</span>)}</div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Wrap>
  </div>
)

/* ───────── Achievements ───────── */
const yearOf = (d) => (d.match(/20\d\d/g) || ['—']).slice(-1)[0]
const pill = (r) => {
  if (/champion|^1st/i.test(r)) return 'bg-amber-100 text-amber-800'
  if (/runners|^2nd|^3rd/i.test(r)) return 'bg-stone-200 text-stone-800'
  const n = parseInt(r, 10)
  if (!Number.isNaN(n) && n <= 12) return 'bg-accent-soft text-accent-dark'
  if (/qualified|top|regionalist/i.test(r)) return 'bg-accent-soft text-accent-dark'
  return 'bg-stone-100 text-stone-600'
}
const FILTERS = [['all', 'All'], ['national', 'National CTF'], ['international', 'International CTF'], ['programming', 'Programming']]

function Timeline() {
  const [f, setF] = useState('all')
  const groups = useMemo(() => {
    const rows = Object.entries(CONTESTS).flatMap(([track, list]) => list.map(([name, result, date]) => ({ track, name, result, date, year: yearOf(date) })))
    const by = rows.sort((a, b) => b.year - a.year).filter((r) => f === 'all' || r.track === f).reduce((m, r) => ((m[r.year] ||= []).push(r), m), {})
    return Object.entries(by).sort((a, b) => b[0] - a[0])
  }, [f])

  return (
    <div className="mt-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h3 className="font-serif text-2xl font-semibold">Every contest, by year</h3>
        <div role="tablist" className="flex flex-wrap gap-2">
          {FILTERS.map(([k, l]) => (
            <button key={k} role="tab" aria-selected={f === k} onClick={() => setF(k)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${f === k ? 'bg-ink text-paper' : 'border border-stone-200 bg-surface text-stone-600 hover:border-ink'}`}>{l}</button>
          ))}
        </div>
      </div>
      <div className="mt-8 space-y-10">
        {groups.map(([year, items]) => (
          <div key={year} className="grid gap-4 md:grid-cols-[7rem_1fr]">
            <div className="font-serif text-3xl font-semibold text-stone-300 md:text-4xl md:sticky md:top-24 md:self-start">{year}</div>
            <ul className="space-y-2">
              {items.map((r) => (
                <li key={r.name + r.date} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-2xl border border-stone-200 bg-surface px-4 py-3 transition hover:border-accent/50">
                  <span><span className="block font-medium">{r.name}</span><span className="block text-xs text-stone-500">{r.date}</span></span>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${pill(r.result)}`}>{r.result}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export const Achievements = () => {
  const [hero, ...rest] = HIGHLIGHTS
  return (
    <Wrap id="achievements" kicker="Achievements" title="Podiums, bounties and finals." intro="Highlights from national and international CTFs, plus programming contests.">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        <Reveal className="col-span-2 md:row-span-2">
          <div className="relative h-full min-h-64 overflow-hidden rounded-3xl md:min-h-72 bg-gradient-to-br from-[#0c0a09] via-[#0c0a09] to-teal-900 ring-1 ring-white/10 p-8 text-white">
            <Trophy className="absolute -right-6 -top-6 h-40 w-40 text-white/5" />
            <span className="inline-block rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold text-amber-300">{hero.note}</span>
            <div className="mt-8 font-serif text-7xl font-semibold text-amber-300 md:mt-10 md:text-8xl">{hero.rank}</div>
            <p className="mt-2 font-serif text-2xl">{hero.title}</p>
          </div>
        </Reveal>
        {rest.map((h, i) => (
          <Reveal key={h.title} delay={0.05 * (i + 1)}>
            <div className="tile h-full">
              <div className="font-serif text-3xl font-semibold text-accent md:text-4xl">{h.rank}</div>
              <p className="mt-2 text-sm font-semibold leading-snug">{h.title}</p>
              <p className="mt-1 text-xs text-stone-500">{h.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Timeline />
    </Wrap>
  )
}

/* ───────── Credentials ───────── */
const orgGroups = () => Object.entries(ORGANIZATIONS.reduce((m, o) => ((m[o.org] ||= []).push(o), m), {}))

export const Credentials = () => (
  <div className="bg-stone-100/70">
    <Wrap id="credentials" kicker="Credentials" title="Certified, educated, and leading.">
      <h3 className="mb-4 flex items-center gap-2 font-serif text-xl font-semibold"><Award size={20} className="text-accent" /> Certifications</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {CERTIFICATIONS.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.06}>
            <div className="tile h-full">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-soft font-serif text-lg font-bold text-accent-dark">{c.issuer[0]}</span>
              <p className="mt-4 font-semibold leading-snug">{c.name}</p>
              <p className="mt-1 text-sm text-stone-500">{c.issuer} · {c.date}</p>
              <p className="mt-3 break-all rounded-lg bg-stone-50 px-2 py-1 font-mono text-[11px] text-stone-400">ID {c.id}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-4 text-sm text-stone-600"><span className="font-semibold">Course:</span> {COURSES[0]}</p>

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-5 flex items-center gap-2 font-serif text-xl font-semibold"><GraduationCap size={20} className="text-accent" /> Education</h3>
          <ol className="relative space-y-6 border-l-2 border-stone-200 pl-6">
            {EDUCATION.map((e) => (
              <li key={e.degree} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-paper bg-accent" />
                <p className="text-xs font-semibold text-accent">{e.period}</p>
                <p className="font-semibold">{e.degree}</p>
                <p className="text-sm text-stone-600">{e.school}</p>
                <p className="mt-1 inline-block rounded-full bg-surface px-2.5 py-0.5 text-xs font-medium ring-1 ring-stone-200">{e.score}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="mb-5 flex items-center gap-2 font-serif text-xl font-semibold"><Building2 size={20} className="text-accent" /> Leadership</h3>
          <div className="space-y-3">
            {orgGroups().map(([org, roles]) => (
              <div key={org} className="tile !p-5">
                <p className="font-semibold">{org}</p>
                <ul className="mt-2 space-y-1">
                  {roles.map((r) => (
                    <li key={r.role + r.period} className="flex justify-between gap-3 text-sm"><span className="text-stone-700">{r.role}</span><span className="shrink-0 text-stone-400">{r.period}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrap>
  </div>
)

/* ───────── Projects ───────── */
const PROJECT_ICON = [Gamepad2, Smartphone, ClipboardCheck]

export const Projects = () => (
  <Wrap id="projects" kicker="Projects" title="Things I've built.">
    <div className="grid gap-5 md:grid-cols-3">
      {PROJECTS.map((p, i) => {
        const Icon = PROJECT_ICON[i % PROJECT_ICON.length]
        return (
          <Reveal key={p.title} delay={i * 0.07}>
            <article className="group overflow-hidden rounded-3xl border border-stone-200 bg-surface transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-stone-900/10">
              <div className="relative grid h-44 place-items-center overflow-hidden" style={{ background: `linear-gradient(135deg, hsl(${p.hue} 55% 20%), hsl(${p.hue} 60% 42%))` }}>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '22px 22px' }} aria-hidden />
                <Icon size={56} strokeWidth={1.2} className="relative text-white/90 transition duration-500 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="rounded-full bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-700">{t}</span>)}</div>
                <a href={p.github} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-dark"><Github size={15} /> View code <ArrowUpRight size={14} /></a>
              </div>
            </article>
          </Reveal>
        )
      })}
    </div>
  </Wrap>
)

/* ───────── Contact ───────── */
export function Contact() {
  const [f, setF] = useState({ name: '', email: '', msg: '' })
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  // No backend: opens the visitor's mail app with the message filled in.
  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    const body = encodeURIComponent(`From: ${f.name} <${f.email}>\n\n${f.msg}`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Portfolio contact from ' + f.name)}&body=${body}`
  }
  const input = 'mt-1.5 w-full rounded-xl border border-stone-300 bg-surface px-4 py-2.5 text-ink outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/15'

  return (
    <section id="contact" className="px-4 pb-20 md:pb-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-band p-6 text-white ring-1 ring-white/10 sm:p-8 md:rounded-[2.5rem] md:p-14">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl" aria-hidden />
        <div className="relative grid gap-10 md:grid-cols-2">
          <div>
            <p className="kicker !text-teal-200 before:!bg-teal-200">Contact</p>
            <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">Let's talk security, CTFs or code.</h2>
            <p className="mt-4 max-w-md text-stone-400">Open to collaborations, team-ups, internships and conversations about offensive security.</p>
            <a href={`mailto:${PROFILE.email}`} className="mt-8 inline-flex max-w-full items-center gap-2 text-[15px] font-semibold sm:text-lg text-teal-200 underline-offset-4 hover:underline"><Mail size={18} /> {PROFILE.email}</a>
            <div className="mt-6 flex gap-3">
              {[[Github, PROFILE.github, 'GitHub'], [Linkedin, PROFILE.linkedin, 'LinkedIn']].map(([Icon, href, label]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="btn border border-white/20 !py-2.5 hover:bg-white hover:!text-[#0c0a09]"><Icon size={16} /> {label}</a>
              ))}
            </div>
          </div>
          <form onSubmit={submit} className="space-y-4 rounded-3xl bg-surface p-6 text-ink">
            <label className="block text-sm font-medium text-stone-600">Name<input required className={input} value={f.name} onChange={set('name')} /></label>
            <label className="block text-sm font-medium text-stone-600">Email<input required type="email" className={input} value={f.email} onChange={set('email')} /></label>
            <label className="block text-sm font-medium text-stone-600">Message<textarea required rows={4} className={`${input} resize-none`} value={f.msg} onChange={set('msg')} /></label>
            <button className="btn w-full justify-center bg-teal-700 text-white hover:bg-teal-800"><Send size={15} /> Send message</button>
            {sent && <p className="text-center text-xs text-stone-500">Opening your email app with the message filled in…</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
