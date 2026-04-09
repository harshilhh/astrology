import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TestimonialsContent from "@/components/TestimonialsContent";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "Testimonials | Vikram Astrologer — Real Stories, Real Results",
  description: "Read real testimonials from 90,000+ satisfied clients of Vikram Bhai Joshi. Love back, marriage solutions, career growth, black magic removal — see what people are saying.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        <TestimonialsContent />
        <CTABanner />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
