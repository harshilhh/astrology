import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import MarqueeBar from "@/components/MarqueeBar";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ReviewsCarousel />
        <MarqueeBar />
        <CTABanner />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
