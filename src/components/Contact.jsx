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

    // 🔥 VALIDATION
    if (!data.name || !data.email || !data.message) {
      toast.error("All fields are required ⚠️");

      if (!data.name) form.elements.name.focus();
      else if (!data.email) form.elements.email.focus();
      else if (!data.message) form.elements.message.focus();

      return;
    }

    // 🔥 EMAIL VALIDATION
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      toast.error("Enter a valid email address 📧");
      form.elements.email.focus();
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
        toast.success("Message sent successfully 🚀");
        form.reset();
      } else {
        toast.error("Something went wrong. Try again.");
      }

    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Submission failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="px-6 py-16 text-white">
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="mb-10 text-stone-300 text-lg">
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
            data-aos-delay="300"
            className="w-full px-4 py-3 rounded-lg bg-transparent text-white 
                       placeholder-stone-400 border border-gray-600 
                       focus:outline-none focus:ring-2 focus:ring-stone-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            data-aos="fade-left"
            data-aos-delay="400"
            className="w-full px-4 py-3 rounded-lg bg-transparent text-white 
                       placeholder-stone-400 border border-gray-600 
                       focus:outline-none focus:ring-2 focus:ring-stone-500"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            data-aos="fade-up"
            data-aos-delay="500"
            className="w-full px-4 py-3 rounded-lg bg-transparent text-white 
                       placeholder-stone-400 border border-gray-600 
                       focus:outline-none focus:ring-2 focus:ring-stone-500"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            data-aos="zoom-in"
            data-aos-delay="600"
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold 
              justify-center transition duration-300
              ${
                loading
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-stone-600 to-stone-800 hover:scale-105 hover:shadow-lg'
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