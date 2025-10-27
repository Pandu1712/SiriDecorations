import React from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-pink-100 via-purple-100 to-pink-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700 mb-4">
          Get in Touch ✨
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Let's bring your dream event to life — reach out to Siri Decorations today!
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Contact Info */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white">
            <h3 className="text-2xl font-semibold text-purple-700 mb-6">
              Contact Information
            </h3>

            <div className="space-y-5 text-gray-800">
              <p className="flex items-center gap-3">
                <Phone className="text-pink-500" />
                <a
                  href="tel:+916303130025"
                  className="hover:text-pink-600 transition"
                >
                  +91 63031 30025
                </a>
              </p>

              <p className="flex items-center gap-3">
                <Mail className="text-pink-500" />
                <a
                  href="mailto:siridecorations@gmail.com"
                  className="hover:text-pink-600 transition"
                >
                  siridecorations@gmail.com
                </a>
              </p>

              <p className="flex items-center gap-3">
                <MapPin className="text-pink-500" />
                Siri Decorations, Vijayawada, Andhra Pradesh
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-8 justify-center">
              <a
                href="https://wa.me/916303130025"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-3 rounded-full hover:scale-110 transition"
              >
                <MessageCircle size={22} />
              </a>
              <a
                href="#"
                className="bg-pink-600 text-white p-3 rounded-full hover:scale-110 transition"
              >
                <Instagram size={22} />
              </a>
              <a
                href="#"
                className="bg-blue-600 text-white p-3 rounded-full hover:scale-110 transition"
              >
                <Facebook size={22} />
              </a>
            </div>

            {/* Google Map */}
            <div className="mt-10">
              <h4 className="text-xl font-semibold text-purple-700 mb-3">
                Find Us on the Map 🗺️
              </h4>
              <iframe
                title="Siri Decorations Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.5533540493497!2d80.63500007510914!3d16.50617418423248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f021df30f393%3A0xb4e014e3a1df1b6f!2sVijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-xl shadow-md"
              ></iframe>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white">
            <h3 className="text-2xl font-semibold text-purple-700 mb-6">
              Send Us a Message 💌
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Map Section (Full Width for Style) */}
       {/*  <div className="mt-20 shadow-lg rounded-2xl overflow-hidden">
          <iframe
            title="Siri Decorations Map Full"
            src="https://www.google.com/maps?q=Siri+Decorations,+Vijayawada,+Andhra+Pradesh&output=embed"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
