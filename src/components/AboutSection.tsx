import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';


const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-4 block">
              Sobre Nosotros
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              25 años navegando la Industria Alimentaria
            </h2>
            <div className="space-y-4 text-foreground/80 font-body text-lg">
              <p>
                En Thalassa Hub creemos que la seguridad alimentaria funciona mejor cuando se entiende desde la realidad del negocio.
              </p>
              <p>
                <strong className="text-primary">Susana Serna</strong>, fundadora y CEO, es <strong className="text-primary">Ingeniera de Industrias Alimentarias</strong> y cuenta con más de <strong className="text-primary">25 años de experiencia</strong> en <strong className="text-primary">entidades internacionales</strong>, trabajando con empresas de <strong className="text-primary">toda la cadena de suministro alimentaria</strong>: desde la producción primaria hasta la industria, el retail y el canal HORECA.
              </p>
              <p>
                Esta visión transversal le ha permitido comprender de primera mano los <strong className="text-primary">retos y oportunidades</strong> de cada eslabón de la cadena y acompañar a las organizaciones no solo a cumplir, sino a <strong className="text-primary">consolidar sus marcas y expandirse</strong>, convirtiendo los <strong className="text-primary">requisitos normativos y las exigencias de clientes</strong> en <strong className="text-primary">oportunidades reales de diferenciación</strong>.
              </p>
              <p>
                Thalassa Hub se apoya en una <strong className="text-primary">red de colaboradores senior,</strong> profesionales con amplia trayectoria y conocimiento profundo del sector, que comparten una misma forma de entender la seguridad alimentaria: con criterio, experiencia y sentido práctico.
              </p>
              <p className="text-primary font-semibold text-xl italic border-l-4 border-secondary pl-4">
                "Vamos más allá del requisito.<br />
                Convertimos la complejidad en criterio, foco y decisiones claras."
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card">
               <img 
                 src="/susana.png" 
                 alt="Susana Serna - Founder & CEO of Thalassa Hub" 
                  className="w-full h-auto object-contain sm:object-cover max-h-[300px] sm:max-h-[500px] object-center"
               />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-champagne/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
