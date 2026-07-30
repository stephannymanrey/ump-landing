import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        <a href="/" aria-label="Una Mamá con Propósito">
          <img src="/images/logo.png" alt="UMP" className="h-9 lg:h-10 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {['Ecosistema', 'La Ruta', 'Stephanny', 'FAQ'].map((label, i) => {
            const href = ['#ecosistema', '#ruta', '#stephanny', '#faq'][i]
            return (
              <a
                key={label}
                href={href}
                className="px-4 py-2 text-sm text-brand-gray hover:text-brand-brown transition-colors duration-150 font-medium"
              >
                {label}
              </a>
            )
          })}
        </nav>

        <a
          href="#cta"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-brand-salmon text-white text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
        >
          Únete al ecosistema
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-brand-brown"
          aria-label="Menú"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            {open
              ? <path d="M6 18L18 6M6 6l12 12" />
              : <path d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-brand-brown/10 px-6 py-4 flex flex-col gap-3"
        >
          {['Ecosistema', 'La Ruta', 'Stephanny', 'FAQ'].map((label, i) => {
            const href = ['#ecosistema', '#ruta', '#stephanny', '#faq'][i]
            return (
              <a key={label} href={href} onClick={() => setOpen(false)} className="text-sm font-medium text-brand-gray py-2">
                {label}
              </a>
            )
          })}
          <a href="#cta" onClick={() => setOpen(false)} className="mt-2 btn-primary text-center">
            Únete al ecosistema
          </a>
        </motion.div>
      )}
    </motion.header>
  )
}
