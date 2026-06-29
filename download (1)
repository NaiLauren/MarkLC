import { Check, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const plans = [
  {
    name: 'Pack 1 - Esencial',
    price: '$50.000',
    features: [
      '8 posts (4 Reels / 4 Fotos)',
      '8 Stories',
      'Planificación de contenido',
      'Traslado incluido*'
    ],
    highlighted: false,
  },
  {
    name: 'Pack 2 - Crecimiento',
    price: '$70.000',
    features: [
      '12 posts (6 Reels / 6 Fotos)',
      '12 Stories',
      'Planificación de contenido',
      'Traslado incluido*'
    ],
    highlighted: true,
  },
  {
    name: 'Pack 3 - Impulso Total',
    price: '$90.000',
    features: [
      '14 posts (mix)',
      '14 Stories',
      'Planificación de contenido',
      'Subida de contenido',
      'Optimización de horarios',
      'Traslado incluido*'
    ],
    highlighted: false,
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function Pricing() {
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-12 lg:px-24 bg-brand-50/50" id="planes">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 mb-6 tracking-tight leading-tight">Elegí el plan ideal</h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">Opciones flexibles pensadas para acompañar cada etapa de tu crecimiento digital.</p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 items-start"
        >
          {plans.map((plan, index) => (
            <motion.div variants={item} key={index} className={`relative rounded-3xl p-6 sm:p-8 transition-transform duration-300 ${plan.highlighted ? 'bg-brand-900 text-white shadow-2xl mt-4 md:mt-0 shadow-brand-900/20 md:-translate-y-4 hover:-translate-y-6' : 'bg-white text-slate-900 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-2'}`}>
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex items-center gap-1">
                  <span className="bg-brand-500 text-white px-6 py-1.5 rounded-full text-sm font-bold tracking-wide shadow-md whitespace-nowrap flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    Más elegido
                  </span>
                </div>
              )}
              
              <div className={`mb-8 border-b pb-8 ${plan.highlighted ? 'border-white/20' : 'border-slate-100'}`}>
                <h3 className={`text-2xl font-display font-bold mb-4 ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-5xl font-display font-black tracking-tight">{plan.price}</span>
                  <span className={`text-lg font-medium ml-2 ${plan.highlighted ? 'text-brand-200' : 'text-slate-500'}`}>/mes</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 ${plan.highlighted ? 'bg-brand-700/50' : 'bg-brand-50'}`}>
                      <Check className={`w-4 h-4 ${plan.highlighted ? 'text-white' : 'text-brand-600'}`} strokeWidth={3} />
                    </div>
                    <span className={`font-medium ${plan.highlighted ? 'text-brand-50' : 'text-slate-700'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contacto"
                className={`block w-full py-4 px-6 rounded-2xl text-center text-lg font-bold transition-all ${plan.highlighted ? 'bg-brand-500 text-white hover:bg-brand-400 shadow-md hover:shadow-lg' : 'bg-brand-50 text-brand-700 hover:bg-brand-100'}`}
                onClick={() => {
                  const select = document.getElementById('plan-select') as HTMLSelectElement;
                  if(select) {
                    select.value = plan.name;
                  }
                }}
              >
                Seleccionar plan
              </a>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12 bg-white rounded-xl p-4 inline-block mx-auto max-w-2xl border border-slate-100 shadow-sm"
        >
          <p className="text-sm text-slate-600 font-medium">
            * <span className="font-bold text-slate-900">El traslado incluido</span> es válido únicamente dentro del área de Chivilcoy y su zona de influencia.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
