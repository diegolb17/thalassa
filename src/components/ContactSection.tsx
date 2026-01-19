import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import calendlyLogo from '@/assets/calendly-logo.png';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [accepted, setAccepted] = useState(false);

  return (
    <section id="contact" className="py-24 bg-primary" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-card-dark rounded-2xl p-8 flex flex-col items-center justify-center text-center"
          >
            <img 
              src={calendlyLogo} 
              alt="Calendly" 
              className="w-32 h-32 object-contain mb-6"
            />
            <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">
              Agenda tu reunión inicial
            </h3>
            <p className="text-primary-foreground/80 font-body mb-8 max-w-sm">
              Reserva directamente en nuestro calendario el horario que mejor te convenga.
            </p>
            
            {/* Checkbox */}
            <div className="flex items-center space-x-2 mb-6 self-start">
              <Checkbox 
                id="privacy" 
                checked={accepted}
                onCheckedChange={(checked) => setAccepted(checked === true)}
              />
              <label
                htmlFor="privacy"
                className="text-sm text-primary-foreground/80 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                He leído y acepto la <a href="#" className="underline">Política de privacidad</a>
              </label>
            </div>
            
            {/* Button */}
            <a
              href={accepted ? "https://calendly.com/susana-serna-thalassahub/30min" : "#"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => !accepted && e.preventDefault()}
            >
              <Button variant="contact" size="lg" className="group" disabled={!accepted}>
                AGENDAR REUNION INICIAL
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
