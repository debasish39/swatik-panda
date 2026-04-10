import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPaperPlane } from 'react-icons/fa';
import { toast } from 'sonner';

export default function Contact() {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Validation
    if (!data.name || !data.email || !data.message) {
      toast.error("All fields are required ⚠️");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      toast.error("Enter a valid email 📧");
      return;
    }

    setLoading(true);
    data.access_key = accessKey;

    const loadingToast = toast.loading("Sending message...");

    try {
      const response = await axios.post(
        'https://api.web3forms.com/submit',
        data,
        { headers: { 'Content-Type': 'application/json' } }
      );

      toast.dismiss(loadingToast);

      if (response.data.success) {
        toast.success("Message sent 🚀");
        form.reset();
      } else {
        toast.error("Something went wrong");
      }

    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Submission failed");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="px-6 py-3 text-pink-100">

      <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-bold mb-6 
          bg-gradient-to-r from-pink-300 via-rose-200 to-purple-300 
          text-transparent bg-clip-text">
          Contact Me
        </h2>

        <p className="mb-12 text-stone-400 text-lg">
          Feel free to reach out. I’ll get back to you as soon as possible.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid gap-6">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            data-aos="fade-right"
            className="w-full px-4 py-3 rounded-xl 
            bg-white/5 backdrop-blur-xl border border-white/10
            text-white placeholder-stone-400
            focus:outline-none focus:ring-2 focus:ring-pink-400/50
            focus:border-pink-400/40 transition duration-300"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            data-aos="fade-left"
            className="w-full px-4 py-3 rounded-xl 
            bg-white/5 backdrop-blur-xl border border-white/10
            text-white placeholder-stone-400
            focus:outline-none focus:ring-2 focus:ring-pink-400/50
            focus:border-pink-400/40 transition duration-300"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            data-aos="fade-up"
            className="w-full px-4 py-3 rounded-xl 
            bg-white/5 backdrop-blur-xl border border-white/10
            text-white placeholder-stone-400
            focus:outline-none focus:ring-2 focus:ring-pink-400/50
            focus:border-pink-400/40 transition duration-300"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            data-aos="zoom-in"
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold 
justify-center transition duration-300 cursor-pointer
${
  loading
    ? 'bg-pink-400/40 cursor-not-allowed'
    : 'bg-gradient-to-r from-pink-500 to-purple-500  hover:shadow-[0_0_20px_rgba(255,0,182,0.6)]'
}`}
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </>
            ) : (
              <>
                <FaPaperPlane />
                Send Message
              </>
            )}
          </button>

        </form>
      </div>
    </section>
  );
}