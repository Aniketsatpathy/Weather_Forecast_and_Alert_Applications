import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import InteractiveSection from "@/components/map/InteractiveSection";

export default function Home() {
  return (
    <main className="overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <HeroSection />

      {/* INTERACTIVE SECTION */}
      <InteractiveSection />

    </main>
  );
}