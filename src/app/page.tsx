import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection"; // Ajusta la ruta
import { ScrollingServicesSection } from "@/components/ScrollingServicesSection"; // Ajusta la ruta
import { ComparisonSection } from "@/components/ComparisonSection";
import { StepsSection } from "@/components/StepsSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <FloatingWhatsAppButton />
      <Header />
      <HeroSection />
      <AboutSection />
      <ScrollingServicesSection />
      <ServicesSection />
      <ComparisonSection />
      <StepsSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
