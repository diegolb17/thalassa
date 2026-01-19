import { Anchor } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 min-h-[250px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/PIE.png" 
          alt="Thalassa Hub" 
          className="w-full h-full object-cover object-bottom"
        />
      </div>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 z-10 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-20 py-8">
        <div className="container mx-auto px-6">
          {/* Legal text */}
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 text-white text-xs space-y-2 mb-4 max-w-3xl mx-auto">
            <p className="text-center">Objeto del sitio web El presente sitio web tiene como finalidad informar sobre los servicios de Thalassa Hub S.L, especializada en consultoría para empresas de la Industria Alimentaria, y facilitar el contacto y reserva de reuniones profesionales</p>
            <p className="text-center">Propiedad intelectual Todos los contenidos de esta web (textos, imágenes, logotipos, diseños, códigos) son propiedad de Thalassa Hub S.L  o de terceros que han autorizado su uso. Queda prohibida su reproducción, distribución o transformación sin autorización expresa.</p>
            <p className="text-center">Responsabilidad Thalassa Hub S.L no se responsabiliza de errores, mal uso de la información o contenido de terceros accesible desde enlaces externos.</p>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a href="#" className="bg-black/40 backdrop-blur-sm px-3 py-1 rounded-md text-white hover:bg-black/60 transition-colors">
              Aviso legal
            </a>
            <a href="#" className="bg-black/40 backdrop-blur-sm px-3 py-1 rounded-md text-white hover:bg-black/60 transition-colors">
              Política de privacidad
            </a>
          </div>
          
          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/20 pt-4">
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-2 rounded-md">
              <Anchor className="text-secondary" size={20} />
              <span className="text-white text-sm">
                © 2026 Thalassa Hub. Todos los derechos reservados.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
