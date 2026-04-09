import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactContent from "@/components/ContactContent";
import PrivacySection from "@/components/PrivacySection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "Contact Us | Vikram Astrologer Ahmedabad — Free Consultation",
  description: "Contact Vikram Bhai Joshi for a free consultation. Available 24/7 via phone or WhatsApp. Located in Ahmedabad, Gujarat. Fast, confidential astrology solutions.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        <ContactContent />
        <PrivacySection />
        <CTABanner />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
