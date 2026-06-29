import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-200 selection:text-brand-900 theme-indigo">
      <Hero />
      <Benefits />
      <Process />
      <Pricing />
      <ContactForm />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5492346684646?text=¡Hola!%20Vengo%20de%20la%20landing%20page%20y%20me%20gustaría%20más%20información."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl hover:-translate-y-1 transition-all"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </a>
    </div>
  );
}
