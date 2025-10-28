import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

// ✅ Import images
import wedding1 from "../assets/gallery/Stagesetup.png";
import wedding2 from "../assets/gallery/floor.jpg";
import wedding3 from "../assets/gallery/Dining.jpg";
import wedding4 from "../assets/gallery/Haldi.png";
import wedding5 from "../assets/gallery/romanticlight.jpg";
import wedding6 from "../assets/gallery/alisn.jpg";


import birthday1 from "../assets/gallery/Pastel Balloon Decor.jpeg";
import birthday2 from "../assets/gallery/cartoontable.webp";
import birthday3 from "../assets/gallery/birthday3.webp";
import birthday4 from "../assets/gallery/birthtable.jpeg";
import birthday5 from "../assets/gallery/partyhats.avif";
import birthday6 from "../assets/gallery/Confetti Explosion.jpg";

import festival1 from "../assets/gallery/Diwali Event Lighting.jpg";
import festival2 from "../assets/gallery/Colorful Festival Backdrop.jpeg";
import festival3 from "../assets/gallery/Rangoli Design Setup.jpeg";
import festival4 from "../assets/gallery/Festival Stage Decor.jpg";
import festival5 from "../assets/gallery/Cultural Event Setup.webp";
import festival6 from "../assets/gallery/Festival Seating Arrangement.jpeg";

import corporate1 from "../assets/gallery/Corporate Lighting Setup.jpeg";
import corporate2 from "../assets/gallery/stagebacdoor.jpeg";
import corporate3 from "../assets/gallery/Elegant Seating Setup - Copy.webp";
import corporate4 from "../assets/gallery/product.jpeg";
import corporate5 from "../assets/gallery/Conference Table Setup.jpeg";
import corporate6 from "../assets/gallery/Award Ceremony Stage.jpeg";

import baby1 from "../assets/gallery/Baby Shower Stage Setup.webp";
import baby2 from "../assets/gallery/Pastel Balloon Decor.jpeg";
import baby3 from "../assets/gallery/Themed Backdrop.jpeg";
import baby4 from "../assets/gallery/Gift Table Setup.jpeg";
import baby5 from "../assets/gallery/Festival Seating Arrangement.jpeg";
import baby6 from "../assets/gallery/Photo Booth Area.avif";

import engagement1 from "../assets/gallery/Ring Ceremony Backdrop.jpeg";
import engagement2 from "../assets/gallery/Floral Stage Decor.jpeg";
import engagement3 from "../assets/gallery/Elegant Seating Setup.webp";
import engagement4 from "../assets/gallery/Engagement Table Decor.jpeg";
import engagement5 from "../assets/gallery/Photo Booth Area.avif";
import engagement6 from "../assets/gallery/Lighting Arrangements.webp";


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
        { src: wedding4, name: "Haldi Setup" },
        { src: wedding5, name: "Romantic Lighting" },
        { src: wedding6, name: "Beautiful Aisle Design" },

    ],
  },
  2: {
    title: "Birthday Parties",
    desc: "Fun and colorful themes designed for every age group with balloons, banners, and lights.",
    images: [
      { src: birthday1, name: "Balloon Arch Setup" },
      { src: birthday2, name: "Cartoon Theme Table Decor" },
        { src: birthday3, name: "Colorful Backdrop" },
        { src: birthday4, name: "Birthday Cake Table" },
        { src: birthday5, name: "Party Hats Display" },
        { src: birthday6, name: "Confetti Explosion" },

    ],
  },
  3: {
    title: "Corporate Events",
    desc: "Professional decoration setups for meetings, product launches, and annual celebrations.",
    images: [{ src: corporate1, name: "Corporate Lighting Setup" },
        { src: corporate2, name: "Stage Backdrop" },
        { src: corporate3, name: "Seating Arrangement" },
        { src: corporate4, name: "Product Launch Decor" },
        { src: corporate5, name: "Conference Table Setup" },
        { src: corporate6, name: "Award Ceremony Stage" },
    ],
  },
  4: {
    title: "Festivals",
    desc: "Traditional and vibrant decorations that bring festive energy to every occasion.",
    images: [{ src: festival1, name: "Diwali Event Lighting" },
        { src: festival2, name: "Colorful Festival Backdrop" },
        { src: festival3, name: "Rangoli Design Setup" },
        { src: festival4, name: "Festival Stage Decor" },
        { src: festival5, name: "Cultural Event Setup" },
        { src: festival6, name: "Festival Seating Arrangement" }
    ],
  },
  5: {
    title: "Baby Showers",
    desc: "Soft pastel themes, balloon arches, and adorable stage decor to celebrate parenthood.",
    images: [{ src: baby1, name: "Baby Shower Stage Setup" },
        { src: baby2, name: "Pastel Balloon Decor" },
        { src: baby3, name: "Themed Backdrop" },
        { src: baby4, name: "Gift Table Setup" },
        { src: baby5, name: "Seating Arrangement" },
        { src: baby6, name: "Photo Booth Area" }

    ],
  },
  6: {
    title: "Engagements",
    desc: "Romantic lighting, floral elegance, and grand stage setups for your engagement day.",
    images: [{ src: engagement1, name: "Ring Ceremony Backdrop" },
        { src: engagement2, name: "Floral Stage Decor" },
        { src: engagement3, name: "Elegant Seating Setup" },
        { src: engagement4, name: "Engagement Table Decor" },
        { src: engagement5, name: "Photo Area Setup" },
        { src: engagement6, name: "Lighting Arrangements" }

    ],
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
