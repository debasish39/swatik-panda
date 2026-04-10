import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 400, once: false });
  }, []);

  // 🔥 Auto import all images
  const imagesObj = import.meta.glob('../assets/gallery/*.jpeg', { eager: true });
  const allImages = Object.values(imagesObj).map((img) => img.default);

  // 🧠 Assign categories
  const categorizedImages = allImages.map((img, i) => ({
    src: img,
    category:
      i % 3 === 0
        ? 'Acting'
        : i % 3 === 1
        ? 'Modeling'
        : 'Events',
  }));
const handleDownload = async (url, index) => {
  const response = await fetch(url);
  const blob = await response.blob();

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `chandan-${index + 1}.jpg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(12);
  const [index, setIndex] = useState(-1);
  const [loading, setLoading] = useState(false); // ✅ spinner state

  // 🎯 Filter logic
  const filteredImages =
    activeFilter === 'All'
      ? categorizedImages
      : categorizedImages.filter((img) => img.category === activeFilter);

  const visibleImages = filteredImages.slice(0, visibleCount);

  return (
    <section id="gallery" className="px-6 py-16 text-white">

      {/* Title */}
      <h2
        className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-300 via-rose-200 to-purple-300 text-transparent bg-clip-text"
        data-aos="fade-up"
      >
        Gallery
      </h2>

      {/* 🔥 Filters */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {['All', 'Acting', 'Modeling', 'Events'].map((filter) => (
          <button
            key={filter}
            onClick={() => {
              setActiveFilter(filter);
              setVisibleCount(12);
            }}
            className={`px-4 py-2 rounded-full text-sm transition ${
              activeFilter === filter
                ? 'bg-white text-black'
                : 'bg-white/10 hover:bg-white/20'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* 🖼️ Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {visibleImages.map((img, i) => (
          <div
            key={i}
            data-aos="zoom-in"
            data-aos-delay={i * 50}
            className="overflow-hidden rounded-xl"
          >
            <img
              src={img.src}
              alt={`Gallery ${i}`}
              onClick={() => setIndex(i)}
              className="w-full h-48 object-cover cursor-pointer 
                         transition duration-300 
                         hover:scale-110 
                         hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            />
          </div>
        ))}
      </div>

      {/* 🔽 Load More with Spinner */}
      {visibleCount < filteredImages.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => {
              setLoading(true);

              setTimeout(() => {
                setVisibleCount((prev) => prev + 8);
                setLoading(false);
              }, 800); // simulate loading
            }}
            disabled={loading}
            className={`px-6 py-2 rounded-lg transition flex items-center gap-2 justify-center mx-auto
              ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-pink-300 text-black hover:bg-gray-300'
              }`}
          >
            {loading ? (
              <>
                {/* Spinner */}
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                Loading...
              </>
            ) : (
              'Load More...'
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