import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PartnersSection } from './components/PartnersSection';
import { UniversitiesSection } from './components/UniversitiesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-white font-rubik antialiased selection:bg-nuca-secondary selection:text-white">
      {/* Cabeçalho Fixo */}
      <Header />

      {/* Seções Principais da Landing Page */}
      <main>
        {/* Seção 1: Hero */}
        <HeroSection />

        {/* Seção 2: Quem somos & Onde estamos */}
        <AboutSection />

        {/* Seção 3: Serviços e Áreas de atuação */}
        <ServicesSection />
        {/* Seção 4: Parceiros (MEJ & Empresas) */}
        <PartnersSection />
        {/* Seção de Universidades Parceiras */}
        <UniversitiesSection />

        {/* Seção 5: Entre em contato */}
        <ContactSection />
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}

export default App;
