/* 🟣 AboutSection.tsx */
import { motion } from "framer-motion";
import aboutImg from "../assets/SiriPoster.jpg";

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4 sm:px-6 lg:px-8">
        <motion.img
          src={aboutImg}
          alt="About Siri Decorations"
          className="rounded-2xl shadow-lg w-full md:w-1/2 object-cover"
          whileHover={{ scale: 1.05 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-4">
            About Siri Decorations
          </h2>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            At Siri Decorations, we bring your dream events to life with
            elegance, creativity, and perfection. From intimate gatherings to
            grand celebrations, our team crafts stunning environments filled
            with color, light, and joy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
