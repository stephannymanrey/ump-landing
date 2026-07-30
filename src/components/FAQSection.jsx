import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]
const viewport = { once: true, amount: 0.15 }

const faqs = [
  {
    q: '¿Necesito tener ya un negocio para entrar al ecosistema?',
    a: 'No. La Ruta UMP está diseñada para mamás en todos los puntos del camino — desde las que todavía no saben qué negocio quieren construir, hasta las que ya tienen clientes y quieren crecer con más sistema. El primer paso (Despierta) te ayuda a encontrar claridad antes de construir.',
  },
  {
    q: '¿Puedo usar las apps si tengo poco tiempo?',
    a: 'Exactamente para eso están diseñadas. UMP Academy tiene clases de 15 a 30 minutos pensadas para las ventanas de tiempo de una mamá real. Mamá CEO automatiza el trabajo repetitivo para que uses tu tiempo en lo que importa. No necesitas bloques de 3 horas — necesitas un sistema que trabaje cuando tú no puedes.',
  },
  {
    q: '¿Qué pasa si no soy emprendedora cristiana?',
    a: 'Eres bienvenida. La fe es uno de los tres pilares de UMP porque es parte de la historia de quienes lo construimos y de muchas mamás que sirven. Pero la ruta, las herramientas y la comunidad son valiosas independientemente de tu fe. Si los valores de familia, propósito y negocio responsable resuenan contigo, estás en el lugar correcto.',
  },
  {
    q: '¿Las tres apps tienen costo adicional?',
    a: 'No. Con tu membresía UMP tienes acceso a todo el ecosistema: UMP Academy, Mamá CEO y Creanautas (cuando esté disponible), más la comunidad, los recursos y las sesiones en vivo. Un plan, todo incluido, sin costos escondidos.',
  },
  {
    q: '¿Puedo cancelar cuando quiera?',
    a: 'Sí. No hay contratos de largo plazo ni penalidades. Si decides salir, cancelas y tu acceso continúa hasta el final del período pagado. Queremos que estés porque el valor es real — no porque sea difícil salir.',
  },
  {
    q: '¿El ecosistema funciona en cualquier país?',
    a: 'Sí. UMP está diseñado para mamás hispanas en cualquier país. Todo el contenido está en español, y la comunidad incluye mamás de Colombia, México, Estados Unidos, Venezuela, Argentina y más países. Nos une el idioma, la fe y el propósito — no la geografía.',
  },
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.6, ease, delay: index * 0.06 }}
      className="border-b border-brand-brown/15"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-6 text-left"
        aria-expanded={open}
      >
        <span className="font-medium text-brand-brown text-sm lg:text-base leading-snug">
          {faq.q}
        </span>
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200"
          style={{ background: open ? 'rgba(255,140,130,0.15)' : 'rgba(74,52,40,0.07)' }}
        >
          <svg
            className="w-4 h-4 transition-transform duration-300"
            style={{ color: open ? '#FF8C82' : '#6B6B6B', transform: open ? 'rotate(45deg)' : '' }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-brand-gray text-sm leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  return (
    <section id="faq" className="bg-brand-beige py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease }}
          >
            <p className="section-eyebrow">Preguntas frecuentes</p>
            <h2 className="section-title mt-2">
              Todo lo que necesitas saber.
            </h2>
            <p className="section-sub mt-4">
              Si tienes una pregunta que no está aquí, escríbenos — siempre respondemos.
            </p>
            <a
              href="#cta"
              className="mt-8 btn-primary inline-flex"
            >
              Quiero empezar
            </a>
          </motion.div>

          <div className="divide-y-0">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
