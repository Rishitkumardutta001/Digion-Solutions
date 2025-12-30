import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import WhatWeEngineer from "@/components/WhatWeEngineer";
import HowWeWork from "@/components/HowWeWork";
import Experience from "@/components/Experience";
import WhyDigiOn from "@/components/WhyDigiOn";
import Industries from "@/components/Industries";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Hero />
      <TrustBar />
      <About />
      <WhatWeEngineer />
      <Experience />
      <Industries />
      <HowWeWork />
      <WhyDigiOn />
      <FinalCTA />
    </main>
  );
}
