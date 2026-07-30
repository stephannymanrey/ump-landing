import { motion } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]

export default function HeroSection() {
  return (
    <section className="bg-brand-beige pt-28 lg:pt-36 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="max-w-4xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="flex items-center gap-3 text-brand-salmon font-semibold text-xs tracking-widest uppercase mb-8"
          >
            <span className="w-8 h-px bg-brand-salmon block" />
            Primer ecosistema operativo · Mamás emprendedoras · América Latina
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="font-playfair font-bold text-brand-brown text-balance"
            style={{ fontSize: 'clamp(48px, 7vw, 88px)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            No naciste para elegir entre tu familia
            {' '}
            <em className="italic text-brand-salmon not-italic" style={{ fontStyle: 'italic' }}>
              y tu propósito.
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.35 }}
            className="mt-6 text-brand-gray text-base lg:text-xl leading-relaxed max-w-2xl"
          >
            Una Mamá con Propósito es el primer ecosistema operativo para mamás
            emprendedoras cristianas de habla hispana. Fe, familia y negocio
            integrados en un solo lugar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a href="#ecosistema" className="btn-primary text-base px-8 py-4">
              Explorar el ecosistema
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#ruta" className="btn-outline text-base px-8 py-4">
              Conoce la ruta
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 flex items-center gap-6 text-sm text-brand-gray"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-gold" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>Fe · Familia · Negocio</span>
            </div>
            <div className="w-px h-4 bg-brand-brown/20" />
            <span>Diseñado para mamás hispanas</span>
            <div className="w-px h-4 bg-brand-brown/20 hidden sm:block" />
            <span className="hidden sm:block">100% en español</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Banner image — full width, slightly overlapping */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease, delay: 0.4 }}
        className="mt-16 w-full"
      >
        <img
          src="/images/banner.png"
          alt="Ecosistema UMP — las tres aplicaciones"
          className="w-full object-cover object-top"
          style={{ maxHeight: '560px' }}
        />
      </motion.div>
    </section>
  )
}
