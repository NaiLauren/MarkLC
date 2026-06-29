import { Target, Zap, Clock, Star } from 'lucide-react';
import { motion } from 'motion/react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Benefits() {
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-12 lg:px-24 bg-white relative overflow-hidden">
      {/* Decorative star */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 text-brand-100 hidden lg:block"
      >
        <Star className="w-24 h-24 fill-current" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 tracking-tight">¿Por qué elegirnos?</h2>
          <div className="w-24 h-1.5 bg-brand-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-10 sm:gap-12"
        >
          <motion.div variants={item} className="flex flex-col items-center group text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-brand-50 group-hover:bg-brand-100 group-hover:scale-110 transition-all duration-300 rounded-3xl flex items-center justify-center mb-6 sm:mb-8 text-brand-600 shadow-sm border border-brand-100/50">
              <Target className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3 sm:mb-4">Estrategia Personalizada</h3>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              No hacemos copy-paste. Analizamos tu rubro y creamos un plan a medida para destacar frente a tu competencia.
            </p>
          </motion.div>
          
          <motion.div variants={item} className="flex flex-col items-center group text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-brand-50 group-hover:bg-brand-100 group-hover:scale-110 transition-all duration-300 rounded-3xl flex items-center justify-center mb-6 sm:mb-8 text-brand-600 shadow-sm border border-brand-100/50">
              <Zap className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3 sm:mb-4">Contenido de Alta Calidad</h3>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Producción profesional de Reels y Fotos que capturan la esencia de tu marca y enganchan a tu audiencia.
            </p>
          </motion.div>
          
          <motion.div variants={item} className="flex flex-col items-center group text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-brand-50 group-hover:bg-brand-100 group-hover:scale-110 transition-all duration-300 rounded-3xl flex items-center justify-center mb-6 sm:mb-8 text-brand-600 shadow-sm border border-brand-100/50">
              <Clock className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3 sm:mb-4">Ahorro de Tiempo</h3>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Delegá la creación y planificación del contenido. Recuperá tu tiempo para enfocarte en lo que mejor sabés hacer.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
