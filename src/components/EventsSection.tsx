import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const events = [
  {
    id: 'alimentaria',
    title: 'Feria Alimentaria',
    date: 'Del 23 al 26 de marzo 2026',
    location: 'Barcelona, España',
    description: 'Visita nuestro stand y descubre las nuevas rutas de exportación hacia mercados emergentes.',
    badge: 'Presencia Confirmada',
    icon: Calendar,
    featured: true,
  },
  {
    id: 'training',
    title: 'Cursos de Formación',
    date: 'Q2 2026',
    location: 'Online & Presencial',
    description: 'Actualización normativa para equipos de calidad y seguridad alimentaria.',
    badge: 'Próximamente',
    icon: GraduationCap,
    featured: false,
  },
];

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="events" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-4 block">
            Agenda 2026
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Próximos eventos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:shadow-card-hover ${
                event.featured 
                  ? 'bg-primary text-primary-foreground shadow-card' 
                  : 'bg-muted border border-border'
              }`}
            >
              {/* Badge */}
              <Badge 
                variant={event.featured ? "secondary" : "outline"}
                className={`absolute top-6 right-6 ${event.featured ? 'bg-champagne text-primary border-0' : ''}`}
              >
                {event.badge}
              </Badge>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                event.featured ? 'bg-secondary/20' : 'bg-secondary'
              }`}>
                <event.icon className={event.featured ? 'text-secondary' : 'text-primary-foreground'} size={28} />
              </div>

              {/* Content */}
              <h3 className="font-heading text-2xl font-bold mb-2">
                {event.title}
              </h3>
              
              <div className={`flex items-center gap-4 mb-4 text-sm ${event.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {event.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {event.location}
                </span>
              </div>

              <p className={event.featured ? 'text-primary-foreground/90' : 'text-muted-foreground'}>
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
