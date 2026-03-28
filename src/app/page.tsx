import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBar from "@/components/MarqueeBar";
import StatsSection from "@/components/StatsSection";
import HeroBanner from "@/components/HeroBanner";
import ProblemsSection from "@/components/ProblemsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import PrivacySection from "@/components/PrivacySection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeBar />
        <StatsSection />
        <HeroBanner />
        <ProblemsSection />
        <ServicesSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <PrivacySection />
        <CTABanner />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
