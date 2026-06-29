import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-24 sm:pb-12 px-5 border-t border-slate-900">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-8 items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-display font-black text-white mb-2 tracking-tight">LC Marketing</h3>
          <p className="text-sm">Hacemos crecer tu negocio en Instagram.</p>
        </div>
        
        <div className="flex sm:justify-end gap-4">
          <a 
            href="https://instagram.com/lorny_calvetee" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all border border-slate-800"
            aria-label="Instagram de LC Marketing"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="mailto:contacto@ejemplo.com" 
            className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all border border-slate-800"
            aria-label="Enviar un email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto border-t border-slate-800 pt-8 text-center text-sm">
        <p>© {new Date().getFullYear()} LC Marketing. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
