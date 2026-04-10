import React from "react";
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import About from "./components/About";
import Serials from "./components/Serials";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ScrollToTopButton from './components/ScrollToTopButton';
import { Toaster } from 'sonner';
import ClickSpark from './components/ClickSpark';

export default function App() {
  return (
    <ClickSpark 
      sparkColor="#ff4dc4"
      sparkSize={18} 
      sparkRadius={3} 
      sparkCount={30} 
      duration={400} 
      easing="ease-out"
      extraScale={1.0}
    >
      <Toaster position="top-right" richColors />

      <div className="overflow-x-hidden text-pink-100 antialiased">
        
        {/* ===== NEW BACKGROUND ===== */}
        <div className="fixed inset-0 -z-10">
          <div className="relative h-full w-full bg-black">

            {/* Left Glow */}
            <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] 
              h-[500px] w-[500px] rounded-full 
              bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,0.15),rgba(255,255,255,0))]">
            </div>

            {/* Right Glow */}
            <div className="absolute bottom-0 right-[-20%] top-[-10%] 
              h-[500px] w-[500px] rounded-full 
              bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,0.15),rgba(255,255,255,0))]">
            </div>

          </div>
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="container mx-auto px-0 cursor-pointer">
          <Navbar />
          <Hero className="mt-9 sm:mt-0" />
          <About />
          <Serials />
          <Gallery />
          <Contact />
          <Footer />
          <ScrollToTopButton />
        </div>

      </div>
    </ClickSpark>
  );
}