import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 400, once: false });
  }, []);

  const musicAlbums = [
    "Prema Kina Bika Bajare (Female)",
    "Kalia Tu Karide Mana",
    "Tora Mora Prema Sara Duniata Janiba (Female)",
    "Mane Jebe Lage Nia (Female)",
    "Mo Dukha Pasora",
    "To Binu Anya Gati Nahi",
    "Ashique Raja",
    "Tor Deewana",
    "Pratibimba (Female)",
  ];

  const serials = [
    "Kanyadana",
    "To Pain Tori Pain",
  ];

  const shortMovies = [
    "Rakhyasa",
    "Viswas",
    "Joker",
  ];

  const sungSongs = [
    "Viswas Title Song (Female)",
    "Kaise Jiyun Main",
    "Kaise Jiyun Main 2.0",
    "Jagannath Sahasranama",
  ];

  const Section = ({ title, items }) => (
    <div className="mb-14">
      <h3
        className="text-2xl sm:text-3xl font-semibold mb-6 text-center 
        bg-gradient-to-r from-pink-300 via-rose-200 to-purple-300 
        text-transparent bg-clip-text"
        data-aos="fade-up"
      >
        {title}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {items.map((item, i) => (
          <div
            key={i}
            data-aos="zoom-in-up"
            data-aos-delay={i * 60}
            className="bg-gradient-to-br from-pink-900/30 to-purple-900/20 
            border border-pink-400/20 rounded-xl p-4 
            backdrop-blur-lg
            hover:shadow-[0_0_20px_rgba(255,105,180,0.4)]
            transition-all duration-300 
            hover:scale-[1.04]"
          >
            <p className="text-sm sm:text-base text-pink-100 text-center">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="projects" className="px-4 sm:px-6 py-10 text-pink-100">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2
          className="text-3xl sm:text-5xl font-bold mb-10 text-center 
          bg-gradient-to-r from-pink-300 via-rose-200 to-purple-300 
          text-transparent bg-clip-text"
          data-aos="fade-up"
        >
          My Profile
        </h2>

        {/* Sections */}
        <Section title="🎵 Music Albums" items={musicAlbums} />
        <Section title="📺 Serials" items={serials} />
        <Section title="🎬 Short Movies" items={shortMovies} />
        <Section title="🎤 Sung Songs" items={sungSongs} />

      </div>
    </section>
  );
}