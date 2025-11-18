import { useRef } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  const contactRef = useRef(null)

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="font-extrabold tracking-tight text-white">Blue IT</a>
          <nav className="hidden md:flex items-center gap-6 text-blue-100/80">
            <a href="#services" className="hover:text-white">Layanan</a>
            <a href="#contact" className="hover:text-white">Kontak</a>
            <a href="/test" className="hover:text-white">Status</a>
          </nav>
          <button onClick={scrollToContact} className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold">Konsultasi</button>
        </div>
      </header>

      <main>
        <Hero onContactClick={scrollToContact} />
        <Services />
        <Contact ref={contactRef} />
      </main>

      <footer className="border-t border-white/10 py-8 mt-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-blue-200/70 text-sm">
          <div>© {new Date().getFullYear()} Blue IT. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-white">Layanan</a>
            <a href="#contact" className="hover:text-white">Kontak</a>
            <a className="hover:text-white" href="mailto:hello@example.com">hello@example.com</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
