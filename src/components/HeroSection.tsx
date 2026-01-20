import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Carousel className="w-full h-full" opts={{ loop: true }} setApi={setApi}>
          <CarouselContent className="h-full">
            {['/LANDING1.png', '/LANDING2.png', '/LANDING3.png'].map((src, index) => (
              <CarouselItem key={index} className="h-full">
                <img
                  src={src}
                  alt={`Landing ${index + 1}`}
                   className="w-full h-full object-cover object-center"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
           <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden sm:block" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden sm:block" />
        </Carousel>
         <div className="absolute inset-0 bg-black/50 sm:bg-black/30 z-10" />
      </div>

      {/* Wave Symbol Animation */}
       <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 w-48 h-24 sm:w-[400px] sm:h-[200px]"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 100 50" className="text-primary-foreground fill-current">
          <path d="M0 25 Q 12.5 15, 25 25 T 50 25 T 75 25 T 100 25" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M0 35 Q 12.5 25, 25 35 T 50 35 T 75 35 T 100 35" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M0 45 Q 12.5 35, 25 45 T 50 45 T 75 45 T 100 45" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
           <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight">
            Estrategia que nace del conocimiento
            <br />
            <span className="text-secondary">y crece con conexiones.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
           className="text-base sm:text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-6 sm:mb-10 font-body"
        >
          Consultoría estratégica especializada en la Industria Alimentaria.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            onClick={scrollToServices}
            size="lg"
            variant="hero"
            className="group"
          >
            Nuestras líneas de negocio
            <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
         <ChevronDown className="text-primary-foreground/50 h-6 w-6 sm:h-8 sm:w-8" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
