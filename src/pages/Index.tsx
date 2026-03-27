import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { OrderSection } from "@/components/OrderSection";
import { ComplaintSection } from "@/components/ComplaintSection";
import { FacebookSection } from "@/components/FacebookSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      {/* ================= Future Stats ================= */}
      {/* <StatsSection />  */}
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <OrderSection />
      <ComplaintSection />
      <FacebookSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
