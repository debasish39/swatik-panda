import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Pro from '../assets/pro.png';
import { MdEmail, MdPhone } from 'react-icons/md';

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false });
  }, []);

  return (
    <section className="pt-12 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-16" id="hero">
      <div className="flex flex-col md:flex-row items-center gap-12 mt-9">

        {/* Image Section */}
        <div
          className="w-full md:w-1/2 flex justify-center"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          <img
            src={Pro}
            alt="Swati Pragnya Panda"
            className="w-full max-w-[400px] md:max-w-[380px] max-h-[390px] lg:max-w-[440px] xl:max-w-[480px] 
            rounded-full shadow-2xl border-1 border-pink-400/30
            transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left md:mt-9">

          {/* Name */}
          <h1
            className="text-2xl sm:text-3xl md:text-5xl xl:text-5xl font-bold 
            bg-gradient-to-r from-pink-300 via-rose-200 to-purple-300 
            text-transparent bg-clip-text mb-2"
            style={{ fontFamily: 'Lobster, cursive' }}
            data-aos="zoom-in"
          >
            Swati Pragnya Panda
          </h1>

          {/* Role */}
          <span
            className="inline-block mb-4 text-2xl sm:text-3xl font-semibold uppercase 
            text-transparent bg-gradient-to-r from-pink-200 to-rose-300 bg-clip-text"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Actress
          </span>

          {/* Bio */}
          <p
            className="text-pink-100 text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed text-justify"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Swati Pragnya Panda is a passionate young actress from Cuttack, known for her
            expressive screen presence and dedication to performance. With a strong interest
            in storytelling and the arts, she continues to grow and refine her skills in the
            entertainment industry.
          </p>

        

          {/* Buttons */}
          <div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a
              href="mailto:pratimapanda928@gmail.com"
              className="px-6 py-3 flex items-center gap-2 rounded-lg 
              bg-gradient-to-r from-pink-500 to-rose-400 text-white 
              text-sm sm:text-base font-semibold shadow-md
              hover:scale-105 hover:shadow-[0_0_15px_rgba(255,105,180,0.6)]
              transition duration-300 justify-center"
            >
              <MdEmail size={20} /> Email Me
            </a>

            <a
              href="tel:+91XXXXXXXXXX"
              className="px-6 py-3 flex items-center gap-2 rounded-lg 
              bg-gradient-to-r from-purple-500 to-pink-400 text-white 
              text-sm sm:text-base font-semibold shadow-md
              hover:scale-105 hover:shadow-[0_0_15px_rgba(255,105,180,0.6)]
              transition duration-300 justify-center"
            >
              <MdPhone size={20} /> Call Me
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}