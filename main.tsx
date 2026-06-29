import { ArrowRight, Sparkles, Instagram, Star, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-16 sm:pt-24 lg:pt-32 pb-20 px-5 sm:px-12 lg:px-24 overflow-hidden min-h-[80vh] flex flex-col justify-start">
      {/* Background Image with Soft Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/fod.jfif")',
        }}
      />
      <div className="absolute inset-0 z-0 bg-white/70 backdrop-blur-[2px]"></div>

      {/* Elementos decorativos animados */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-brand-200 blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-brand-300 blur-3xl pointer-events-none"
      />

      {/* Floating Icons */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] hidden md:flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-xl shadow-brand-500/10 text-brand-500 -rotate-12"
      >
        <Instagram className="w-8 h-8" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-1/3 right-[10%] hidden md:flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-brand-500 to-brand-400 rounded-full shadow-lg shadow-brand-500/30 text-white rotate-12"
      >
        <Heart className="w-6 h-6 fill-current" />
      </motion.div>

      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-[20%] hidden md:block text-brand-400 opacity-60"
      >
        <Star className="w-8 h-8 fill-current" />
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-brand-700 font-bold text-sm sm:text-base mb-8 shadow-sm border border-brand-100"
        >
          <Sparkles className="w-4 h-4 text-brand-500" />
          Agencia de Marketing Digital
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[2.5rem] sm:text-6xl lg:text-7xl font-display font-black text-slate-900 tracking-tight mb-6 leading-[1.1]"
        >
          ¿Tu marca en Instagram está <span className="text-brand-600 block sm:inline mt-2 sm:mt-0 relative">
            estancada?
            <motion.span 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute -top-6 -right-8 text-brand-400"
            >
              <Sparkles className="w-8 h-8" />
            </motion.span>
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-3xl font-display font-bold text-slate-900 mb-8"
        >
          Es hora de convertir seguidores en clientes.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-slate-800 font-medium mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Nos encargamos de todo: planificación, creación de contenido profesional y estrategia de crecimiento orgánico. Vos ocupate de tu negocio, nosotros de tu presencia digital.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#contacto" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 sm:py-5 text-lg font-bold bg-brand-600 hover:bg-brand-700 transition-all rounded-2xl text-white shadow-xl shadow-brand-600/20 transform hover:-translate-y-1">
            ¡Quiero impulsar mi marca ahora!
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
