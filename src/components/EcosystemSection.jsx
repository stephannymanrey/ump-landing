import { motion } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94]
const viewport = { once: true, amount: 0.15 }

const apps = [
  {
    id: 'academy',
    name: 'UMP Academy',
    tagline: 'La ruta completa',
    color: '#FF8C82',
    bgLight: 'rgba(255,140,130,0.06)',
    description:
      'Formación estratégica para mamás emprendedoras. Cursos, talleres y la Ruta UMP: el programa paso a paso que te lleva desde donde estás hasta la independencia real.',
    features: [
      'La Ruta UMP: 5 fases de transformación',
      'Mentoría y acompañamiento personalizado',
      'Comunidad privada de mamás emprendedoras',
      'Clases de fe, maternidad y negocio',
    ],
    status: 'Disponible',
    cta: 'Empezar en UMP Academy',
    href: '#cta',
    icon: '📚',
  },
  {
    id: 'ceo',
    name: 'Mamá CEO',
    tagline: 'Tu negocio y tu hogar',
    color: '#C23B6E',
    bgLight: 'rgba(194,59,110,0.06)',
    description:
      'Tu CRM, tus métricas y la gestión de tu hogar — todo integrado. Deja de trabajar con notas de voz y hojas de Excel. Entra en control.',
    features: [
      'CRM de clientes con seguimiento de leads',
      'Dashboard de ventas y metas mensuales',
      'Automatizaciones con agente de IA en WhatsApp',
      'Gestión del hogar integrada a tu rutina',
    ],
    status: 'Disponible',
    cta: 'Explorar Mamá CEO',
    href: '#cta',
    icon: '📊',
  },
  {
    id: 'creanautas',
    name: 'Creanautas',
    tagline: 'Para los pequeños del hogar',
    color: '#D4AF37',
    bgLight: 'rgba(212,175,55,0.06)',
    description:
      'Porque ser mamá presente también es darles a tus hijos un espacio para crear. Actividades creativas guiadas para que los niños exploren mientras tú construyes.',
    features: [
      'Actividades creativas organizadas por edad',
      'Proyectos guiados para aprender creando',
      'Espacio seguro y estimulante para tu hijo',
      'Diseñado para niños de mamás emprendedoras',
    ],
    status: 'Próximamente',
    cta: 'Próximamente',
    href: null,
    icon: '🎨',
  },
]

export default function EcosystemSection() {
  return (
    <section id="ecosistema" className="bg-brand-beige py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease }}
          className="mb-16 lg:mb-20"
        >
          <p className="section-eyebrow">El ecosistema</p>
          <h2 className="section-title mt-2 max-w-2xl">
            Las herramientas que necesitas, en un solo lugar.
          </h2>
          <p className="section-sub mt-4 max-w-xl">
            Tres aplicaciones diseñadas desde la realidad de la maternidad. Cada una
            cubre un área. Las tres juntas forman la ruta completa.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {apps.map((app, i) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.75, ease, delay: i * 0.12 }}
              className="bg-white rounded-2xl border border-brand-brown/10 overflow-hidden hover:shadow-xl transition-shadow duration-400 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px]">
                <div className="p-8 lg:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ background: app.bgLight }}
                    >
                      {app.icon}
                    </div>
                    <div>
                      <p
                        className="font-semibold text-xs tracking-widest uppercase"
                        style={{ color: app.color }}
                      >
                        {app.tagline}
                      </p>
                      <h3 className="font-playfair font-bold text-2xl text-brand-brown mt-0.5">
                        {app.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-brand-gray leading-relaxed mb-6">
                    {app.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {app.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-brand-brown/80">
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5"
                          style={{ background: app.color }}
                        >
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {app.href ? (
                    <a
                      href={app.href}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-opacity hover:opacity-90"
                      style={{ background: app.color }}
                    >
                      {app.cta}
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-brand-beige text-brand-gray cursor-default">
                      {app.cta}
                    </span>
                  )}
                </div>

                <div
                  className="border-t lg:border-t-0 lg:border-l border-brand-brown/10 flex flex-col items-center justify-center gap-4 p-8 text-center"
                  style={{ background: app.bgLight }}
                >
                  <div
                    className="text-5xl font-playfair font-bold leading-none"
                    style={{ color: app.color }}
                  >
                    {i === 0 ? '5' : i === 1 ? '∞' : '🚀'}
                  </div>
                  <p className="text-sm text-brand-gray leading-snug">
                    {i === 0 ? 'fases en\nla Ruta UMP' : i === 1 ? 'automatizaciones\nde IA incluidas' : 'próximamente\npara tus hijos'}
                  </p>
                  <span
                    className="px-4 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      background: app.status === 'Disponible' ? app.bgLight : 'rgba(212,175,55,0.12)',
                      color: app.status === 'Disponible' ? app.color : '#D4AF37',
                      border: `1px solid ${app.status === 'Disponible' ? app.color + '30' : '#D4AF3730'}`,
                    }}
                  >
                    {app.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
