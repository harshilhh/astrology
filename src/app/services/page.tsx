import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MainServicesContent from "@/components/MainServicesContent";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "Main Services | Vikram Astrologer — Love, Marriage, Career & More",
  description: "Explore all main astrology services by Vikram Bhai Joshi — Love marriage solution, Kundali matching, Black magic removal, Child birth prediction, Career & business guidance & more.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        <MainServicesContent />
        <CTABanner />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
