import { motion } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]
const viewport = { once: true, amount: 0.15 }

const stages = [
  {
    number: '01',
    name: 'Despierta',
    title: 'Identidad y propósito',
    text: 'Saber quién eres antes de saber qué construir. Claridad en tu llamado, tu visión y por qué esto importa.',
    color: '#D4AF37',
  },
  {
    number: '02',
    name: 'Ordena',
    title: 'Balance real',
    text: 'Fe, familia y negocio en equilibrio — no como ideal, sino como sistema práctico que funciona en tu vida real.',
    color: '#FF8C82',
  },
  {
    number: '03',
    name: 'Construye',
    title: 'Sistema y herramientas',
    text: 'Las herramientas y la estructura que tu negocio necesita. Deja de improvisar y empieza a operar con intención.',
    color: '#5A8A6A',
  },
  {
    number: '04',
    name: 'Lanza',
    title: 'Primeros resultados',
    text: 'Tus primeros clientes. Tus primeros ingresos. Tu primera prueba de que esto funciona — y es real.',
    color: '#C23B6E',
  },
  {
    number: '05',
    name: 'Escala',
    title: 'Impacto y legado',
    text: 'De negocio a misión. De resultados a impacto. De tú sola a un movimiento que trasciende.',
    color: '#4A3428',
  },
]

export default function RutaSection() {
  return (
    <section id="ruta" className="bg-white py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease }}
          className="mb-16 lg:mb-20"
        >
          <p className="section-eyebrow">Tu camino</p>
          <h2 className="section-title mt-2">La Ruta UMP</h2>
          <p className="section-sub mt-4 max-w-xl">
            Cinco fases diseñadas para llevarte exactamente desde donde estás
            hasta donde Dios puso el sueño. Sin saltar pasos.
          </p>
        </motion.div>

        {/* Desktop: horizontal steps */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* connecting line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewport}
              transition={{ duration: 1.2, ease, delay: 0.3 }}
              className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-brand-gold via-brand-salmon to-brand-brown origin-left"
              style={{ top: '2rem' }}
            />

            <div className="grid grid-cols-5 gap-6">
              {stages.map((s, i) => (
                <motion.div
                  key={s.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.7, ease, delay: 0.15 + i * 0.1 }}
                  className="pt-0"
                >
                  {/* dot */}
                  <div
                    className="w-4 h-4 rounded-full border-2 border-white shadow-md mb-6 relative z-10"
                    style={{ background: s.color }}
                  />

                  <p
                    className="font-playfair font-bold text-4xl mb-1"
                    style={{ color: s.color, opacity: 0.2 }}
                  >
                    {s.number}
                  </p>
                  <h3 className="font-playfair font-bold text-xl text-brand-brown mb-1">
                    {s.name}
                  </h3>
                  <p className="font-semibold text-xs tracking-wide uppercase mb-3" style={{ color: s.color }}>
                    {s.title}
                  </p>
                  <p className="text-brand-gray text-sm leading-relaxed">{s.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="lg:hidden space-y-0">
          {stages.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.65, ease, delay: i * 0.08 }}
              className="flex gap-5"
            >
              <div className="flex flex-col items-center">
                <div
                  className="w-4 h-4 rounded-full flex-shrink-0 mt-1.5"
                  style={{ background: s.color }}
                />
                {i < stages.length - 1 && (
                  <div className="w-px flex-1 min-h-[2rem] my-2 bg-brand-brown/15" />
                )}
              </div>
              <div className="pb-10">
                <p
                  className="font-playfair font-bold text-5xl leading-none mb-2"
                  style={{ color: s.color, opacity: 0.18 }}
                >
                  {s.number}
                </p>
                <h3 className="font-playfair font-bold text-xl text-brand-brown">
                  {s.name}
                </h3>
                <p className="font-semibold text-xs tracking-wide uppercase mt-1 mb-2" style={{ color: s.color }}>
                  {s.title}
                </p>
                <p className="text-brand-gray text-sm leading-relaxed">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <a href="#cta" className="btn-primary inline-flex text-base px-8 py-4">
            Quiero empezar la Ruta
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
