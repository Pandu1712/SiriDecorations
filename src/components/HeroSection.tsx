import { motion } from "framer-motion";
import heroImg from "../assets/SiriPoster.jpg"; // 🖼️ Replace with your image

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 text-white py-16 md:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        
        {/* Left Side - Image with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center md:justify-start"
        >
          <img
            src={heroImg}
            alt="Siri Decorations"
            className="rounded-3xl shadow-2xl w-64 sm:w-80 md:w-[450px] lg:w-[500px] h-auto hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Right Side - Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left mt-8 md:mt-0 px-2 sm:px-0"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Siri Decorations ✨
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-pink-100 mb-6 leading-relaxed">
            Making Every Event Beautiful With Artificial — Weddings, Birthdays, Festivals & More
          </p>
          <motion.a
            href="https://wa.me/916303130025"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-white text-purple-700 font-semibold px-6 sm:px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition-all"
          >
            Book Now on WhatsApp
          </motion.a>
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1),transparent_60%)] pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
