import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

// ✅ Import images
import wedding1 from "../assets/gallery/wedding1.jpg";
import wedding2 from "../assets/gallery/wedding2.jpg";
import wedding3 from "../assets/gallery/wedding2.jpg";
import birthday1 from "../assets/gallery/birthday1.jpg";
import birthday2 from "../assets/gallery/birthday2.jpg";
import festival1 from "../assets/gallery/birthday1.jpg";
import corporate1 from "../assets/gallery/birthday2.jpg";
import baby1 from "../assets/gallery/birthday1.jpg";
import engagement1 from "../assets/gallery/wedding2.jpg";

// ✅ Define TypeScript interfaces
interface ImageItem {
  src: string;
  name: string;
}

interface ServiceItem {
  title: string;
  desc: string;
  images: ImageItem[];
}

const serviceData: Record<number, ServiceItem> = {
  1: {
    title: "Wedding Decorations",
    desc: "Elegant floral designs, thematic backdrops, and lighting arrangements to make your special day unforgettable.",
    images: [
      { src: wedding1, name: "Royal Stage Setup" },
      { src: wedding2, name: "Elegant Floral Backdrop" },
      { src: wedding3, name: "Luxury Table Setup" },
    ],
  },
  2: {
    title: "Birthday Parties",
    desc: "Fun and colorful themes designed for every age group with balloons, banners, and lights.",
    images: [
      { src: birthday1, name: "Balloon Arch Setup" },
      { src: birthday2, name: "Cartoon Theme Table Decor" },
    ],
  },
  3: {
    title: "Corporate Events",
    desc: "Professional decoration setups for meetings, product launches, and annual celebrations.",
    images: [{ src: corporate1, name: "Corporate Lighting Setup" }],
  },
  4: {
    title: "Festivals",
    desc: "Traditional and vibrant decorations that bring festive energy to every occasion.",
    images: [{ src: festival1, name: "Diwali Event Lighting" }],
  },
  5: {
    title: "Baby Showers",
    desc: "Soft pastel themes, balloon arches, and adorable stage decor to celebrate parenthood.",
    images: [{ src: baby1, name: "Baby Shower Stage Setup" }],
  },
  6: {
    title: "Engagements",
    desc: "Romantic lighting, floral elegance, and grand stage setups for your engagement day.",
    images: [{ src: engagement1, name: "Ring Ceremony Backdrop" }],
  },
};

const ServiceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = id ? serviceData[Number(id)] : undefined;

  if (!service) {
    return (
      <p className="text-center text-gray-600 py-20 text-lg">
        ⚠️ Service not found!
      </p>
    );
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-pink-50 to-purple-50 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title & Description */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-purple-700 mb-4"
        >
          {service.title}
        </motion.h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-10">{service.desc}</p>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {service.images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.name}
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              />
              <p className="text-lg font-semibold text-gray-800 py-3">
                {img.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/916303130025"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          Book Now on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default ServiceDetails;
