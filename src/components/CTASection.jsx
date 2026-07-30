import { motion } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]
const viewport = { once: true, amount: 0.25 }

export default function CTASection() {
  return (
    <section id="cta" className="bg-brand-dark py-24 lg:py-36 overflow-hidden relative">
      {/* Decorative gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(255,140,130,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.9, ease }}
          >
            <p className="text-brand-salmon font-semibold text-xs tracking-widest uppercase mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-brand-salmon block" />
              El momento es ahora
            </p>

            <h2
              className="font-playfair text-white text-balance"
              style={{ fontSize: 'clamp(36px, 5.5vw, 68px)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
            >
              El momento nunca va a ser perfecto.
            </h2>

            <p className="mt-6 text-white/60 text-base lg:text-lg leading-relaxed max-w-lg">
              Pero hay un momento en que decides que ya es suficiente. Que mereces un
              sistema que trabaje para ti — no al revés. Que tu propósito merece la
              misma atención que les das a todos los demás.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.umpacademy.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-salmon text-white font-medium text-base rounded-full hover:opacity-90 transition-opacity"
              >
                Quiero empezar hoy
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://www.mamaceoapp.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium text-base rounded-full hover:border-white/40 transition-colors"
              >
                Probar Mamá CEO
              </a>
            </div>

            <p className="mt-6 text-white/30 text-sm">
              Sin tarjeta de crédito · 14 días gratis · Cancela cuando quieras
            </p>
          </motion.div>

          {/* Right: QR */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="flex flex-col items-center lg:items-end gap-4"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-4 max-w-xs w-full">
              <p className="text-white/60 text-xs tracking-widest uppercase font-semibold">Comparte en tus historias</p>
              <div className="bg-white rounded-xl p-4">
                <img
                  src="/images/qr.png"
                  alt="QR unamamaconproposito.co"
                  className="w-40 h-40 block"
                />
              </div>
              <p className="text-white/40 text-xs text-center">
                Escanea para ir a<br />
                <span className="text-white/70 font-medium">www.unamamaconproposito.co</span>
              </p>
            </div>

            <p className="text-white/30 text-xs text-center max-w-xs">
              Comparte el ecosistema con otras mamás emprendedoras.
              Porque juntas llegamos más lejos.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
