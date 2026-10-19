import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { About, Achievements, Contact, Credentials, Hero, Marquee, Projects, Skills, StatsBand } from './components/Sections'
import { PROFILE, SECTIONS } from './data'

const NAV = SECTIONS.filter((s) => s.id !== 'hero')

export default function PortfolioApp() {
  const [open, setOpen] = useState(false)
  // Dark by default; choice is saved. index.html applies it before first paint.
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name=theme-color]')?.setAttribute('content', theme === 'dark' ? '#0a0a0b' : '#faf9f7')
    try { localStorage.setItem('theme', theme) } catch { /* storage blocked */ }
  }, [theme])
  const toggle = (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      className="grid h-9 w-9 place-items-center rounded-full border border-stone-200 text-stone-600 transition hover:border-accent hover:text-accent">
      {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  )
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 px-4 pt-3">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-stone-200/80 bg-surface/80 px-4 py-2 shadow-sm backdrop-blur-lg">
          <a href="#top" className="flex items-center gap-2 font-serif text-lg font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-xs font-bold text-paper">K</span>
            {PROFILE.handle}
          </a>
          <nav aria-label="Sections" className="hidden items-center gap-1 md:flex">
            {NAV.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="rounded-full px-3 py-1.5 text-sm text-stone-600 transition hover:bg-stone-100 hover:text-ink">{s.label}</a>
            ))}
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            {toggle}
            <a href="#contact" className="btn !py-2 bg-ink text-paper hover:bg-teal-800">Hire / Contact</a>
          </div>
          <div className="flex items-center gap-2 md:hidden">{toggle}
          <button className="grid h-9 w-9 place-items-center rounded-full" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button></div>
        </div>
        {open && (
          <nav className="mx-auto mt-2 max-w-6xl rounded-3xl border border-stone-200 bg-surface p-3 shadow-lg md:hidden">
            {NAV.map((s) => (
              <a key={s.id} href={`#${s.id}`} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-stone-700 hover:bg-stone-50">{s.label}</a>
            ))}
          </nav>
        )}
      </header>

      <main id="top">
        <Hero />
        <Marquee />
        <StatsBand />
        <About />
        <Skills />
        <Achievements />
        <Credentials />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-stone-200 px-6 py-8 text-center text-xs text-stone-400">
        © {new Date().getFullYear()} {PROFILE.name} · Built with React &amp; Tailwind
      </footer>
    </>
  )
}
