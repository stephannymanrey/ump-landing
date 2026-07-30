import { motion } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]
const viewport = { once: true, amount: 0.2 }

const testimonials = [
  {
    name: 'María González',
    location: 'Barranquilla, Colombia',
    role: 'Consultora de imagen personal',
    text: 'Llevaba dos años intentando organizar mi negocio entre las clases de mi hija y las reuniones de clientes. UMP Academy fue la primera vez que sentí que alguien entendía mi realidad real — no me pedía elegir entre ser mamá y crecer.',
    stars: 5,
    avatar: 'MG',
    color: '#FF8C82',
  },
  {
    name: 'Carolina Restrepo',
    location: 'Medellín, Colombia',
    role: 'Diseñadora gráfica y emprendedora',
    text: 'Mamá CEO me ayudó a dejar de cobrar por hora y empezar a cobrar por valor. Mis ingresos crecieron y trabajo menos horas. Lo que más me impacta es que el sistema no me pide sacrificar tiempo con mis hijos para crecer.',
    stars: 5,
    avatar: 'CR',
    color: '#C23B6E',
  },
  {
    name: 'Daniela Torres',
    location: 'Ciudad de México',
    role: 'Coach de bienestar y mamá de tres',
    text: 'Lo más valioso de UMP no es ninguna app específica. Es que todo tiene coherencia: la fe, el negocio, la familia. Por fin una plataforma que no me pide que sea una versión productiva de mí misma — me pide que sea yo.',
    stars: 5,
    avatar: 'DT',
    color: '#D4AF37',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-16"
        >
          <p className="section-eyebrow">Lo que dicen ellas</p>
          <h2 className="section-title mt-2">
            Mamás reales. Resultados reales.
          </h2>
          <p className="section-sub mt-4 max-w-lg mx-auto">
            No buscamos testimoniales perfectos. Buscamos historias honestas
            de mamás que encontraron su camino.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, ease, delay: i * 0.12 }}
              className="flex flex-col rounded-2xl border border-brand-brown/10 p-7 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, idx) => (
                  <svg key={idx} className="w-4 h-4" viewBox="0 0 24 24" fill={t.color}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-brand-gray text-sm leading-relaxed flex-1">
                "{t.text}"
              </blockquote>

              {/* Author */}
              <div className="mt-6 pt-6 border-t border-brand-brown/10 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-brand-brown text-sm">{t.name}</p>
                  <p className="text-brand-gray text-xs">{t.role}</p>
                  <p className="text-brand-gray/60 text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
