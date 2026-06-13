import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Platform } from "./components/Platform";
import { Services } from "./components/Services";
import { ThreatIntelligence } from "./components/ThreatIntelligence";
import { WhyUs } from "./components/WhyUs";
import { Team } from "./components/Team";
import { Clients } from "./components/Clients";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#060d1f] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Platform />
      <Services />
      <ThreatIntelligence />
      <WhyUs />
      <Team />
      <Clients />
      <CTASection />
      <Footer />
    </div>
  );
}
