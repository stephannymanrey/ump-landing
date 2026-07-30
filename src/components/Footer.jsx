import { motion } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-brown/10 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 mb-12">
          {/* Brand */}
          <div>
            <img src="/images/logo.png" alt="Una Mamá con Propósito" className="h-8 w-auto mb-4" />
            <p className="text-brand-gray text-sm leading-relaxed max-w-xs">
              El primer ecosistema operativo para mamás emprendedoras cristianas
              de habla hispana.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <p className="text-brand-brown font-semibold text-xs tracking-widest uppercase mb-4">El ecosistema</p>
              <ul className="space-y-2.5">
                {[
                  { label: 'UMP Academy', href: 'https://www.umpacademy.co' },
                  { label: 'Mamá CEO', href: 'https://www.mamaceoapp.co' },
                  { label: 'Creanautas', href: null },
                ].map((l) => (
                  <li key={l.label}>
                    {l.href ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-gray hover:text-brand-brown text-sm transition-colors"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <span className="text-brand-gray/40 text-sm">{l.label} (pronto)</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-brand-brown font-semibold text-xs tracking-widest uppercase mb-4">Conoce más</p>
              <ul className="space-y-2.5">
                {[
                  { label: 'La Ruta UMP', href: '#ruta' },
                  { label: 'Stephanny', href: '#stephanny' },
                  { label: 'FAQ', href: '#faq' },
                  { label: 'Discipulado', href: '/discipulado' },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-brand-gray hover:text-brand-brown text-sm transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-brand-brown font-semibold text-xs tracking-widest uppercase mb-4">Unirte</p>
              <ul className="space-y-2.5">
                <li>
                  <a href="#cta" className="text-brand-salmon hover:opacity-80 text-sm transition-opacity font-medium">
                    Empezar ahora →
                  </a>
                </li>
                <li>
                  <a href="https://www.umpacademy.co" target="_blank" rel="noopener noreferrer" className="text-brand-gray hover:text-brand-brown text-sm transition-colors">
                    UMP Academy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-brand-brown/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-gray/60 text-xs">
            © 2026 Una Mamá con Propósito · Stephanny Manrique · Hecho con amor en Colombia 🇨🇴
          </p>
          <div className="flex items-center gap-1">
            <span className="text-brand-gray/40 text-xs">Fe</span>
            <span className="w-1 h-1 rounded-full bg-brand-gold/40 mx-1.5" />
            <span className="text-brand-gray/40 text-xs">Familia</span>
            <span className="w-1 h-1 rounded-full bg-brand-salmon/40 mx-1.5" />
            <span className="text-brand-gray/40 text-xs">Negocio</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
