import { motion } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]
const viewport = { once: true, amount: 0.2 }

const features = [
  { icon: '📱', title: 'Acceso completo a las 3 apps', text: 'UMP Academy, Mamá CEO y Creanautas en un solo plan.' },
  { icon: '🎓', title: 'Cursos y talleres cada mes', text: 'Contenido nuevo y relevante, actualizado con las necesidades reales de las mamás.' },
  { icon: '👥', title: 'Comunidad privada', text: 'Mamás que entienden tu realidad. Networking real, sin ruido, con propósito.' },
  { icon: '🎙️', title: 'Sesiones grupales en vivo', text: 'Llamadas de mentoría, preguntas en tiempo real y acompañamiento constante.' },
  { icon: '📂', title: 'Biblioteca de recursos', text: 'Plantillas, guías, scripts y herramientas listas para usar en tu negocio hoy.' },
  { icon: '🤖', title: 'Agente de IA incluido', text: 'Automatizaciones inteligentes en WhatsApp para atender tus clientes sin parar.' },
]

export default function IncludesSection() {
  return (
    <section className="bg-brand-brown py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease }}
          className="mb-16 lg:mb-20 max-w-2xl"
        >
          <p className="text-brand-salmon font-semibold text-xs tracking-widest uppercase mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-brand-salmon block" />
            Lo que incluye
          </p>
          <h2
            className="font-playfair text-white text-balance"
            style={{ fontSize: 'clamp(32px, 5vw, 54px)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
          >
            Esto no es una membresía.
            {' '}
            <em className="text-brand-salmon" style={{ fontStyle: 'normal' }}>
              Es tu sistema operativo.
            </em>
          </h2>
          <p className="mt-6 text-white/60 text-base lg:text-lg leading-relaxed">
            Todo lo que necesitas para operar tu negocio, tu familia y tu fe desde
            un solo lugar — con herramientas que trabajan mientras tú duermes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.65, ease, delay: i * 0.07 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors duration-200"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-white font-semibold text-base mb-2">{f.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease, delay: 0.4 }}
          className="mt-14 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
        >
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-salmon text-white font-medium text-sm rounded-full hover:opacity-90 transition-opacity"
          >
            Quiero todo esto
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p className="text-white/40 text-sm">Un solo plan · Todo incluido · Sin sorpresas</p>
        </motion.div>
      </div>
    </section>
  )
}
