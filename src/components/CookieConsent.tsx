import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show after a short delay to allow page load
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 lg:left-auto lg:right-8 lg:max-w-md z-50"
        >
          <div className="bg-card border border-border rounded-2xl shadow-2xl p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-heading text-lg font-bold text-primary">
                Cookies en Thalassa Hub
              </h3>
              <button
                onClick={declineCookies}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Cerrar"
              >
                <X size={20} />
              </button>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y personalizar contenido. 
              Puedes aceptar todas las cookies o gestionar tus preferencias. 
              <a href="#" className="underline ml-1">Más información</a>
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={acceptCookies}
                variant="default"
                className="flex-1"
              >
                Aceptar todas
              </Button>
              <Button
                onClick={declineCookies}
                variant="outline"
                className="flex-1"
              >
                Rechazar
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;