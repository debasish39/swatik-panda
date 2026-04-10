import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-stone-300 px-4 sm:px-6 py-12">

      <hr className="mb-8 border-white/10" />

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center sm:text-left">

        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-white">
            Chandan Kumar
          </h3>
          <p className="mt-3 text-sm leading-relaxed">
            Actor, performer, and creative artist from Paradip, currently based in Bhubaneswar. 
            Passionate about storytelling through acting, music, and visual expression.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="text-xl font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#projects" className="hover:text-white transition">Portfolio</a></li>
            <li><a href="#gallery" className="hover:text-white transition">Gallery</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="text-xl font-semibold mb-3 text-white">Follow Me</h4>
          <div className="flex gap-4 justify-center sm:justify-start flex-wrap">

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition 
                         hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/swati_official.93?igsh=MWg0NTR0cnV3N2N5cA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition 
                         hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              <FaInstagram />
            </a>

            <a
              href="https://youtube.com/@swatipragnyapanda?si=MXMdNJtLCmqFCjdn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition 
                         hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              <FaYoutube />
            </a>

            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition 
                         hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              <FaWhatsapp />
            </a>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-xs text-stone-500 border-t border-white/10 pt-4">
        © {new Date().getFullYear()} Chandan Kumar. All rights reserved.
      </div>

    </footer>
  );
}