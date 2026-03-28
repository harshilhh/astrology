import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBar from "@/components/MarqueeBar";
import StatsSection from "@/components/StatsSection";
import HeroBanner from "@/components/HeroBanner";
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
        <CTABanner />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
