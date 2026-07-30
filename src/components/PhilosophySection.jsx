import { motion } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]
const viewport = { once: true, amount: 0.2 }

const pillars = [
  {
    icon: '✝️',
    color: '#D4AF37',
    bgColor: 'rgba(212,175,55,0.10)',
    name: 'Fe',
    label: 'El fundamento',
    text: 'Un negocio construido sobre valores bíblicos no es más vulnerable. Es más sólido. Aquí la fe no es un extra — es la base de todo lo que construyes.',
  },
  {
    icon: '🤱',
    color: '#FF8C82',
    bgColor: 'rgba(255,140,130,0.10)',
    name: 'Familia',
    label: 'Tu mayor porqué',
    text: 'Tu familia no es un obstáculo para tu negocio. Es tu mayor razón para hacerlo bien. Construir con ellos en mente cambia el tipo de negocio que decides crear.',
  },
  {
    icon: '🌱',
    color: '#5A8A6A',
    bgColor: 'rgba(90,138,106,0.10)',
    name: 'Negocio',
    label: 'Con propósito',
    text: 'No necesitas trabajar más horas. Necesitas trabajar en el sistema correcto. Un negocio real, sostenible, que crezca sin que tengas que sacrificar lo que más importa.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
}

export default function PhilosophySection() {
  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="section-eyebrow">La filosofía UMP</p>
          <h2 className="section-title mt-2">
            Tres pilares. Un propósito.
          </h2>
          <p className="section-sub mt-4 max-w-xl mx-auto">
            No son áreas separadas de tu vida. Son un sistema integrado diseñado
            para que puedas vivir todo a la vez — sin elegir.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.name}
              variants={item}
              className="rounded-2xl border border-brand-brown/10 p-8 lg:p-10 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6"
                style={{ background: p.bgColor }}
              >
                {p.icon}
              </div>

              <p
                className="font-semibold text-xs tracking-widest uppercase mb-2"
                style={{ color: p.color }}
              >
                {p.label}
              </p>

              <h3
                className="font-playfair font-bold text-3xl mb-4"
                style={{ color: p.color }}
              >
                {p.name}
              </h3>

              <p className="text-brand-gray leading-relaxed text-sm lg:text-base">
                {p.text}
              </p>

              <div
                className="mt-8 h-0.5 rounded-full transition-all duration-500 group-hover:opacity-100 opacity-30"
                style={{ background: `linear-gradient(to right, ${p.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
