import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaShareAlt,
  FaFeatherAlt,
  FaHome,
  FaUser,
  FaFilm,
  FaImages,
  FaEnvelope,
} from "react-icons/fa";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  // 🔽 Hide/Show Navbar on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (window.innerWidth < 768) {
        setShowNavbar(currentY < lastScrollY || currentY < 50);
      } else {
        setShowNavbar(currentY <= lastScrollY || currentY < 60);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // 🔥 Scroll Spy (auto active section)
  useEffect(() => {
    const handleScrollSpy = () => {
      let current = "#hero";

      document.querySelectorAll("section").forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = `#${section.id}`;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Portfolio", href: "#projects", icon: <FaFilm /> },
    { name: "Gallery", href: "#gallery", icon: <FaImages /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  const socialLinks = [
    { icon: FaFacebook, url: "https://www.facebook.com/" },
    { icon: FaInstagram, url: "https://www.instagram.com/swati_official.93" },
    { icon: FaYoutube, url: "https://youtube.com/@swatipragnyapanda" },
    { icon: FaShareAlt, action: "share" },
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Chandan Kumar Portfolio",
        text: "Check out my portfolio!",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied!");
    }
  };

  const navBg =
    "bg-gradient-to-r from-[#0a0a0f]/80 via-[#111118]/70 to-[#0a0a0f]/80 backdrop-blur-2xl border border-pink-500/10 shadow-[0_8px_40px_rgba(255,0,182,0.15)]";

  return (
    <>
      {/* ================= Desktop Navbar ================= */}
      <nav
        className={`hidden md:block fixed top-3 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 
        transition-all duration-500 
        ${showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-18"}
        ${navBg} rounded-2xl`}
        data-aos="fade-down"
      >
        <div className="flex items-center justify-between px-6 py-3">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 text-xl font-semibold group">
            <FaFeatherAlt className="text-pink-400 group-hover:rotate-12 transition" />
            <span
              className="text-xl bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              Swatik
            </span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  setActive(link.href);
                }}
                className={`relative px-3 py-1 text-sm font-medium transition-all duration-300
                ${
                  active === link.href
                    ? "text-white drop-shadow-[0_0_8px_rgba(255,0,182,0.8)]"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                {link.name}
                {active === link.href && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-pink-400 rounded-full" />
                )}
              </a>
            ))}

            {/* Social Icons */}
            <div className="flex gap-3 text-lg ml-4">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.url || "#"}
                    onClick={(e) => {
                      if (item.action === "share") {
                        e.preventDefault();
                        handleShare();
                      }
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-full transition duration-300
                    hover:bg-pink-500/20 hover:scale-110
                    hover:shadow-[0_0_12px_rgba(255,0,182,0.5)]"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* ================= Mobile Top Navbar ================= */}
      <div
        className={`md:hidden fixed top-3 left-1/2 -translate-x-1/2 w-[96%] max-w-md z-[999] 
        transition-all duration-500 ${showNavbar ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}
        ${navBg} rounded-2xl`}
      >
        <div className="flex items-center justify-between px-4 py-3">

          <div className="flex items-center gap-2">
            <FaFeatherAlt className="text-pink-400" />
            <span className="text-lg text-white font-semibold">Swatik</span>
          </div>

          <div className="flex gap-3 text-lg">
            {socialLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.url || "#"}
                  onClick={(e) => {
                    if (item.action === "share") {
                      e.preventDefault();
                      handleShare();
                    }
                  }}
                  className="p-2 bg-white/5 rounded-full hover:bg-pink-500/20 transition"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= Mobile Bottom Navbar ================= */}
      <div
        className={`md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-[999] 
        transition-all duration-500 ${showNavbar ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}
        ${navBg} rounded-2xl flex justify-around items-center py-3`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
              setActive(link.href);
            }}
            className={`flex flex-col items-center text-xs transition-all duration-300
            ${active === link.href ? "text-white scale-110" : "text-stone-400"}`}
          >
            <span className="text-lg">{link.icon}</span>
            {link.name}
            {active === link.href && (
              <span className="mt-1 w-1.5 h-1.5 bg-pink-400 rounded-full" />
            )}
          </a>
        ))}
      </div>
    </>
  );
}