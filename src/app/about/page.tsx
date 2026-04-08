import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import PrivacySection from "@/components/PrivacySection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "About Us | Vikram Bhai Joshi — Best Ambaji Upasak Astrologer",
  description: "Learn about Vikram Bhai Joshi — 5th generation Vedic astrologer & Best Ambaji Upasak with 25+ years experience, 90K+ consultations, serving all religions globally from Ahmedabad, Gujarat.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        <AboutHero />
        <WhyChooseUs />
        <PrivacySection />
        <CTABanner />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
