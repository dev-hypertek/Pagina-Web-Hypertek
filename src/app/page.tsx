import FloatingWhatsAppButton from "@/components/common/FloatingWhatsAppButton";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ScrollingServicesSection from "@/components/sections/ScrollingServicesSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import StepsSection from "@/components/sections/StepsSection";
import FaqSection from "@/components/sections/FaqSection";

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
