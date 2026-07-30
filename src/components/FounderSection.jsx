import { motion } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]
const viewport = { once: true, amount: 0.2 }

export default function FounderSection() {
  return (
    <section id="stephanny" className="bg-brand-beige py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.9, ease }}
            className="relative"
          >
            <div className="relative mx-auto lg:mx-0 max-w-sm">
              {/* Decorative ring */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-30"
                style={{ background: 'radial-gradient(ellipse at 30% 40%, rgba(255,140,130,0.4), rgba(212,175,55,0.2), transparent 70%)' }}
              />

              {/* Photo container */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-brand-salmon/20 to-brand-gold/10 border border-brand-brown/10">
                {/* Placeholder — user will add real photo via CSS or src update */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 gap-4">
                  <div className="text-6xl">👩‍💼</div>
                  <p className="font-playfair text-brand-brown/50 text-sm italic">Foto de Stephanny</p>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.7, ease, delay: 0.4 }}
                className="absolute -bottom-4 -right-4 lg:-right-8 bg-white rounded-2xl shadow-lg px-5 py-3.5 border border-brand-brown/10"
              >
                <p className="font-playfair italic text-brand-brown font-bold text-sm">
                  "Hecho con amor<br />desde Colombia 🇨🇴"
                </p>
                <p className="text-brand-gray text-xs mt-1">— Stephanny Manrique</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
          >
            <p className="section-eyebrow">La fundadora</p>
            <h2 className="section-title mt-2">
              Soy Stephanny, y sé exactamente cómo se siente.
            </h2>

            <div className="mt-8 space-y-5 text-brand-gray leading-relaxed">
              <p>
                Querer crecer sin descuidar lo que más importa. Sentir que el tiempo
                nunca alcanza. Buscar herramientas y no encontrar ninguna que entienda
                que eres mamá primero y emprendedora también.
              </p>
              <p>
                Pasé años buscando esa combinación — fe auténtica, maternidad presente
                y un negocio real — sin tener que elegir entre ellos. No la encontré.
                Así que la construí.
              </p>
              <p className="text-brand-brown font-medium">
                Una Mamá con Propósito no es una plataforma. Es la respuesta a todo
                lo que yo necesitaba y no existía. Es para ti.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-brand-brown/15 grid grid-cols-3 gap-6">
              {[
                { value: '3', label: 'Aplicaciones del ecosistema' },
                { value: '5', label: 'Fases en la Ruta UMP' },
                { value: '🇨🇴', label: 'Hecho para Latinoamérica' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-playfair font-bold text-3xl text-brand-brown">{stat.value}</p>
                  <p className="text-brand-gray text-xs mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          className="mt-20 lg:mt-28 max-w-3xl mx-auto text-center"
        >
          <div
            className="w-12 h-px mx-auto mb-8"
            style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.6), transparent)' }}
          />
          <blockquote
            className="font-playfair italic text-brand-brown text-balance"
            style={{ fontSize: 'clamp(22px, 3.5vw, 36px)', lineHeight: 1.35 }}
          >
            "No vine a darte otro curso. Vine a darte el sistema que yo misma necesitaba."
          </blockquote>
          <p className="mt-6 text-brand-gray text-sm font-medium tracking-wide">
            — Stephanny Manrique, fundadora de UMP
          </p>
        </motion.div>
      </div>
    </section>
  )
}
