import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import EventsSection from '@/components/EventsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WaveDivider from '@/components/WaveDivider';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WaveDivider color="white" />
      <AboutSection />
      <WaveDivider color="muted" />
      <ServicesSection />
      <WaveDivider color="white" flip />
      <EventsSection />
      <WaveDivider color="primary" />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
