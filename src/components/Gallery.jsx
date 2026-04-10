import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { FaDownload, FaEye } from 'react-icons/fa';

export default function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 500, once: false });
  }, []);

  // 🔥 Import images
  const imagesObj = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png}', { eager: true });
  const allImages = Object.values(imagesObj).map((img) => img.default);

  // 🧠 Categories
  const categorizedImages = allImages.map((img, i) => ({
    src: img,
    category:
      i % 3 === 0
        ? 'Acting'
        : i % 3 === 1
        ? 'Modeling'
        : 'Events',
  }));

  // 📥 Download
  const handleDownload = async (url, index) => {
    const response = await fetch(url);
    const blob = await response.blob();

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `swati-${index + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(12);
  const [index, setIndex] = useState(-1);
  const [loading, setLoading] = useState(false);

  // 🔍 Filter logic
  const filteredImages =
    activeFilter === 'All'
      ? categorizedImages
      : categorizedImages.filter((img) => img.category === activeFilter);

  const visibleImages = filteredImages.slice(0, visibleCount);

  return (
    <section id="gallery" className="px-6 py-16 text-pink-100">

      {/* 🌸 Title */}
      <h2
        className="text-3xl sm:text-5xl font-bold mb-12 text-center 
        bg-gradient-to-r from-pink-300 via-rose-200 to-purple-300 
        text-transparent bg-clip-text"
        data-aos="fade-up"
      >
        Gallery
      </h2>

      {/* 💎 Filters */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {['All', 'Acting', 'Modeling', 'Events'].map((filter) => (
          <button
            key={filter}
            onClick={() => {
              setActiveFilter(filter);
              setVisibleCount(12);
            }}
            className={`px-5 py-2 rounded-full text-sm transition-all duration-300
              backdrop-blur-xl border
              ${
                activeFilter === filter
                  ? 'bg-white/20 border-pink-300/40 shadow-[0_0_12px_rgba(255,105,180,0.4)]'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-pink-200/30'
              }
            `}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* 🖼️ Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {visibleImages.map((img, i) => {
          const realIndex = filteredImages.indexOf(img);

          return (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 60}
              className="group relative rounded-xl overflow-hidden 
              bg-white/5 backdrop-blur-xl border border-white/10
              transition duration-300 hover:scale-[1.04]
              hover:shadow-[0_0_25px_rgba(255,105,180,0.4)]"
            >
              {/* Image */}
              <img
                src={img.src}
                alt={`Gallery ${i}`}
                onClick={() => setIndex(realIndex)}
                className="w-full h-52 object-cover cursor-pointer 
                transition duration-500 group-hover:scale-110"
              />

              {/* 🏷 Category Badge */}
              <span className="absolute top-2 left-2 text-xs px-2 py-1 
              bg-black/40 backdrop-blur-md rounded-md">
                {img.category}
              </span>


            </div>
          );
        })}
      </div>

      {/* 🔽 Load More */}
      {visibleCount < filteredImages.length && (
        <div className="text-center mt-12">
          <button
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setVisibleCount((prev) => prev + 8);
                setLoading(false);
              }, 800);
            }}
            disabled={loading}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 justify-center mx-auto
              backdrop-blur-xl border border-white/10 transition duration-300
              ${
                loading
                  ? 'bg-white/10 cursor-not-allowed'
                  : 'bg-white/5 hover:bg-white/10 hover:border-pink-300/30 hover:shadow-[0_0_12px_rgba(255,105,180,0.4)]'
              }
            `}
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-pink-200 border-t-transparent rounded-full animate-spin"></span>
                Loading...
              </>
            ) : (
              'Load More'
            )}
          </button>
        </div>
      )}

      {/* 🔍 Lightbox */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={filteredImages.map((img) => ({ src: img.src }))}
        index={index}
        on={{ view: ({ index }) => setIndex(index) }}
      />

    </section>
  );
}