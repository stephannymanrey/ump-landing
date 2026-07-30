import { motion } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]
const viewport = { once: true, amount: 0.25 }

export default function ProblemSection() {
  return (
    <section className="bg-brand-brown py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease }}
            className="text-brand-salmon font-semibold text-xs tracking-widest uppercase mb-8 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-brand-salmon block" />
            El problema real
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="font-playfair text-white text-balance"
            style={{ fontSize: 'clamp(32px, 5vw, 60px)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
          >
            ¿Y si el problema nunca fue tu falta de tiempo?
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease, delay: 0.25 }}
          className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
        >
          <div className="space-y-6 text-white/75 text-base lg:text-lg leading-relaxed">
            <p>
              Llevas años sintiendo que el tiempo se acaba, que la energía no alcanza,
              que hay algo más que deberías estar haciendo — pero no sabes por dónde empezar
              o cómo encajarlo todo.
            </p>
            <p>
              La verdad es que no te falta motivación. Lo que te falta es un{' '}
              <span className="text-white font-medium">sistema diseñado para ti</span>:
              para la mamá que quiere crecer en su fe, estar presente en su hogar y
              construir un negocio con propósito — todo al mismo tiempo.
            </p>
          </div>

          <div className="space-y-6 text-white/75 text-base lg:text-lg leading-relaxed">
            <p>
              No necesitas más cursos genéricos ni consejos de productividad que asumen
              que tienes ocho horas libres al día. Necesitas una ruta construida desde
              la realidad de la maternidad.
            </p>
            <p>
              Eso es exactamente lo que hemos construido:{' '}
              <span className="text-brand-salmon font-medium">
                el primer ecosistema operativo para mamás emprendedoras cristianas.
              </span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
          className="mt-16 h-px bg-gradient-to-r from-brand-salmon/60 via-brand-gold/40 to-transparent origin-left"
        />

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease, delay: 0.5 }}
          className="mt-12 font-playfair italic text-white/90"
          style={{ fontSize: 'clamp(20px, 3vw, 30px)', lineHeight: 1.4 }}
        >
          "Tu familia no es un obstáculo para tu negocio. Es tu mayor razón para hacerlo bien."
        </motion.blockquote>
      </div>
    </section>
  )
}
