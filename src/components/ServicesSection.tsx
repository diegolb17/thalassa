import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import strategyIcon from '@/assets/strategy.png';
import marketsIcon from '@/assets/markets.png';
import learningIcon from '@/assets/learning.png';

const services = [
  {
    id: 'strategy',
    title: 'Strategy',
    icon: strategyIcon,
    description: 'Donde se analiza el negocio completo, y se decide hacia dónde y cómo crecer.',
    details: [
      'Cumplimiento normativo con enfoque estratégico',
      'Gestión de requisitos de clientes.',
      'Programas de auditorías: Gap Análisis, Evaluación de proveedores.',
      'Implantación de requisitos de estándares internacionales para entidades de certificación.',
    ],
    colorClass: 'card-strategy',
    hoverGlow: 'group-hover:shadow-[0_0_40px_-10px_hsl(214,50%,62%)]',
  },
  {
    id: 'markets',
    title: 'Markets',
    icon: marketsIcon,
    description: 'Donde la estrategia se convierte en relaciones comerciales, acuerdos y presencia en mercados clave.',
    details: [
      'Dirección comercial externalizada.',
      'Desarrollo de cuentas clave y acuerdos estratégicos.',
      'Apoyo estratégico en la toma de decisiones.',
      'Negociación estratégica nacional e internacional.',
    ],
    colorClass: 'card-markets',
    hoverGlow: 'group-hover:shadow-[0_0_40px_-10px_hsl(47,60%,64%)]',
  },
  {
    id: 'learning',
    title: 'Learning',
    icon: learningIcon,
    description: 'Donde formamos a los profesionales para que desarrollen criterio y aporten valor real a sus organizaciones.',
    details: [
      'Seguridad Alimentaria',
      'Cursos oficiales de BRCGS, IFS, FSSC 22000',
      'Sostenibilidad y medioambiente',
      'Cursos a medida',
    ],
    colorClass: 'card-learning',
    hoverGlow: 'group-hover:shadow-[0_0_40px_-10px_hsl(17,68%,55%)]',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 bg-muted" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-body font-semibold text-sm uppercase tracking-widest mb-4 block">
            Nuestras líneas de negocio
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Un Hub. Tres líneas. Un mismo criterio.
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            Crecimiento, marca y expansión para empresas del sector alimentario que quieren ir más allá.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative bg-card rounded-xl p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover ${service.colorClass} ${service.hoverGlow}`}
            >
              {/* Icon */}
              <div className="w-24 h-24 mb-6">
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                {service.description}
              </p>
              
              {/* Details List */}
              <ul className="space-y-2">
                {service.details.map((detail, i) => (
                  <li key={i} className="text-muted-foreground font-body text-sm flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
