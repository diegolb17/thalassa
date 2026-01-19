import { Anchor } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary py-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Anchor className="text-secondary" size={20} />
            <span className="text-primary-foreground/80 text-sm">
              © 2026 Thalassa Hub. Todos los derechos reservados.
            </span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Términos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
