import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Mail, Anchor, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import calendlyLogo from '@/assets/calendly-logo.png';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 bg-primary" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Anchor className="text-secondary" size={32} />
              <span className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest">
                Contacto
              </span>
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Antes de dar el salto, conviene tener claro el rumbo.
            </h2>
            
            <p className="text-primary-foreground/80 font-body text-lg mb-8">
              Agenda una reunión inicial sin compromiso y hablemos de cómo crecer con sentido.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <a 
                href="tel:+34693055276"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body"
              >
                <Phone size={20} className="text-secondary" />
                <span>+34 693 055 276</span>
              </a>
              <a 
                href="mailto:hola@thalassahub.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body"
              >
                <Mail size={20} className="text-secondary" />
                <span>hola@thalassahub.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/company/thalassahub/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-primary-foreground hover:bg-secondary/40 transition-colors"
              >
                <Linkedin size={22} />
              </a>
              <a 
                href="mailto:hola@thalassahub.com"
                className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-primary-foreground hover:bg-secondary/40 transition-colors"
              >
                <Mail size={22} />
              </a>
            </div>
          </motion.div>

          {/* Calendly CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card-dark rounded-2xl p-8 flex flex-col items-center justify-center text-center"
          >
            <img 
              src={calendlyLogo} 
              alt="Calendly" 
              className="w-32 h-32 object-contain mb-6"
            />
            <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">
              Agenda tu reunión
            </h3>
            <p className="text-primary-foreground/80 font-body mb-8 max-w-sm">
              Reserva directamente en nuestro calendario el horario que mejor te convenga.
            </p>
            <a
              href="https://calendly.com/susana-serna-thalassahub/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="contact" size="lg" className="group">
                Agendar Reunión
                <Calendar className="ml-2 group-hover:scale-110 transition-transform" size={18} />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
