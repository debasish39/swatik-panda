import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {  
    AOS.init({ duration: 500, once: false });
  }, []);

  const biodata = [
    ["Full Name", "Swati Pragnya Panda"],
    ["Date of Birth", "27/05/2010"],
    ["Home Town", "Cuttack"],
    ["Living In", "Cuttack"],
    ["Mother", "Pratima Panda"],
    ["Father", "Chitta Ranjan Panda"],
    ["Height", "5’3”"],
    ["Weight", "45 Kg"],
    ["Complexion", "Fair"],
    ["Eye Colour", "Black"],
  ];

  return (
    <section
      id="about"
      className="px-4 sm:px-6 py-6 text-pink-100"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl sm:text-5xl font-bold 
          bg-gradient-to-r from-pink-300 via-rose-200 to-purple-300 
          text-transparent bg-clip-text mb-2">
            About Me
          </h2>
          <div className="w-24 h-[2px] bg-pink-400/30 mx-auto"></div>
        </div>

        {/* Intro */}
        <div
          className="max-w-7xl mx-auto text-justify mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="text-lg sm:text-xl leading-relaxed">
            I am <span className="text-pink-300 font-semibold">Swati Pragnya Panda</span>, 
            a passionate young actress from <span className="text-pink-200">Cuttack</span>.  
            I have a deep interest in acting and storytelling, and I continuously 
            work on improving my skills through dedication, creativity, and practice.  
            My goal is to express emotions authentically and connect with audiences 
            through meaningful performances.
          </p>
        </div>

        {/* Biodata Card */}
        <div
          className="relative p-6 sm:p-8 rounded-2xl 
          bg-gradient-to-br from-pink-900/30 to-purple-900/20 
          border border-pink-400/20 backdrop-blur-xl 
          shadow-[0_10px_40px_rgba(255,105,180,0.2)]"
          data-aos="zoom-in"
        >
          <h3 className="text-xl font-semibold text-pink-200 mb-6 text-center">
            Personal Details
          </h3>

          <div className="space-y-3">
            {biodata.map(([label, value], i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b border-pink-300/10 pb-2"
              >
                <span className="text-pink-200/70">{label}</span>
                <span className="text-pink-100 font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div
          className="mt-8 max-w-7xl mx-auto text-justify sm:text-center"
          data-aos="fade-up"
        >
          <p className="text-lg leading-relaxed text-pink-100/90">
            I aspire to build a strong identity as an actress and explore diverse 
            roles that challenge me creatively. Through passion and hard work, I aim 
            to grow in the entertainment industry and inspire others with my journey.
          </p>
        </div>

      </div>
    </section>
  );
}