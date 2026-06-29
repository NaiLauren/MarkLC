import { useState } from 'react';
import { Send, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    plan: 'Pack 1 - Esencial',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `¡Hola LC Marketing! Mi nombre es ${formData.name}.
Tengo un negocio de: ${formData.business}.
Me interesa el plan: ${formData.plan}.
Mi número de contacto es: ${formData.phone}.
Me gustaría empezar a impulsar mi marca.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5492346684646?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-12 lg:px-24 bg-slate-900 text-white relative overflow-hidden" id="contacto">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-900/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 left-10 text-brand-800 opacity-50 hidden lg:block"
      >
        <Instagram className="w-32 h-32" />
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2rem] p-6 sm:p-12 shadow-2xl text-slate-900 relative"
        >
          
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-5xl font-display font-black mb-4 tracking-tight">¡Empecemos a crecer!</h2>
            <p className="text-lg text-slate-600">Elegí tu plan y contame sobre tu negocio. Te contactaré a la brevedad.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Nombre y Apellido</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:bg-white focus:ring-0 focus:border-brand-500 outline-none transition-all font-medium"
                  placeholder="Ej: Juan Pérez"
                />
              </div>
              <div>
                <label htmlFor="business" className="block text-sm font-bold text-slate-700 mb-2">Rubro / Negocio</label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  required
                  value={formData.business}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:bg-white focus:ring-0 focus:border-brand-500 outline-none transition-all font-medium"
                  placeholder="Ej: Local de ropa, Gimnasio"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">WhatsApp de contacto</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:bg-white focus:ring-0 focus:border-brand-500 outline-none transition-all font-medium"
                placeholder="+54 9 2346..."
              />
            </div>

            <div>
              <label htmlFor="plan" className="block text-sm font-bold text-slate-700 mb-2">Plan de interés</label>
              <select
                id="plan-select"
                name="plan"
                required
                value={formData.plan}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:bg-white focus:ring-0 focus:border-brand-500 outline-none transition-all cursor-pointer font-medium"
              >
                <option value="Pack 1 - Esencial">Pack 1 - Esencial ($50.000)</option>
                <option value="Pack 2 - Crecimiento">Pack 2 - Crecimiento ($70.000)</option>
                <option value="Pack 3 - Impulso Total">Pack 3 - Impulso Total ($90.000)</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full py-5 px-6 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-lg font-bold transition-all shadow-xl shadow-brand-600/20 flex items-center justify-center gap-3 mt-8 transform hover:-translate-y-1 hover:scale-[1.01] active:scale-95"
            >
              <span>¡Quiero impulsar mi marca ahora!</span>
              <Send className="w-5 h-5 flex-shrink-0" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
