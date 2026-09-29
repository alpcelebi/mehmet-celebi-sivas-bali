import React, { useEffect } from "react";
import Lenis from "lenis";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Honeycomb3DBackground } from "./components/Honeycomb3DBackground";
import { MarqueeTicker } from "./components/MarqueeTicker";
import { Features } from "./components/Features";
import { Products } from "./components/Products";
import { HarvestJourney } from "./components/HarvestJourney";
import { About } from "./components/About";
import { FloraGuide } from "./components/FloraGuide";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

function App() {
  // Lenis Smooth Scroll Setup for fluid scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animId);
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen relative flex flex-col bg-[#FFFDF9] dark:bg-[#080d1a] text-slate-800 dark:text-slate-100 transition-colors duration-300 honeycomb-3d-pattern">
        
        {/* Three.js Interactive 3D Honeycomb Background */}
        <Honeycomb3DBackground />

        {/* Navigation Bar with Theme Switcher */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1 relative z-10">
          <Hero />
          
          {/* Infinite Ticker Marquee */}
          <MarqueeTicker />

          <Features />
          <Products />

          {/* Sticky Scroll Storytelling Stream */}
          <HarvestJourney />

          {/* Reverse Marquee Separator */}
          <MarqueeTicker reverse={true} />

          <About />
          <FloraGuide />
          <Testimonials />
          <Faq />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Quick WhatsApp Action */}
        <FloatingWhatsApp />
      </div>
    </ThemeProvider>
  );
}

export default App;
