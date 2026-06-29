import { Search, PenTool, Rocket, Camera } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "1. Diagnóstico",
    description: "Analizamos tu cuenta actual y tu competencia para entender tu punto de partida."
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "2. Estrategia",
    description: "Diseñamos un plan de contenidos a medida que conecte con tu cliente ideal."
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "3. Producción",
    description: "Creamos y editamos los Reels, fotos y copys profesionales para tu marca."
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "4. Crecimiento",
    description: "Publicamos y optimizamos el contenido para atraer más seguidores y ventas."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Process() {
  return (
    <section className="py-20 px-5 sm:px-12 lg:px-24 bg-brand-900 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight mb-6">¿Cómo trabajamos?</h2>
          <p className="text-brand-100 text-lg max-w-2xl mx-auto">
            Un proceso simple y efectivo diseñado para sacarte dolores de cabeza y darte resultados.
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div variants={item} key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-brand-800 rounded-full flex items-center justify-center mb-6 text-brand-300 shadow-inner border border-brand-700/50">
                {step.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{step.title}</h3>
              <p className="text-brand-100/80 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
