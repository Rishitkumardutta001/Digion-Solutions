import Hero from "@/components/Hero";
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
      <About />
      <WhatWeEngineer />
      <HowWeWork />
      <Experience />
      <WhyDigiOn />
      <Industries />
      <FinalCTA />
    </main>
  );
}
