import { motion } from "framer-motion";

// ✅ Import each image individually

import img2 from "../assets/gallery/wedding.jpg";
import img3 from "../assets/gallery/cloth3.jpg";
import img4 from "../assets/gallery/Cloths1.jpg";
import img5 from "../assets/gallery/floor.jpg";
import img6 from "../assets/gallery/floor2.jpg";
import img7 from "../assets/gallery/flowers.jpg";
import img8 from "../assets/gallery/flowers2.jpg";
import img9 from "../assets/gallery/flowers3.jpg";
import img10 from "../assets/gallery/Greenmat.jpg";
import img11 from "../assets/gallery/poster1.jpg";
import img12 from "../assets/gallery/poster2.jpg";
import img13 from "../assets/gallery/poster3.jpg";
import img14 from "../assets/gallery/sheet.jpg";
import img15 from "../assets/gallery/Sidewall1.jpg";
import img16 from "../assets/gallery/sidewall2.jpg";
import img17 from "../assets/gallery/sidewall3.jpg";
import img18 from "../assets/gallery/sidewall4.jpg";
import img19 from "../assets/gallery/sidewall5.jpg";
import img20 from "../assets/gallery/sidewall6.jpg";
import img21 from "../assets/gallery/SiriItems.jpg";
import img22 from "../assets/gallery/tharma.jpg";
import img23 from "../assets/gallery/tharma2.jpg";
import img24 from "../assets/gallery/tharma3.jpg";
import img25 from "../assets/gallery/tharma4.jpg";
import img26 from "../assets/gallery/tharma5.jpg";
import img27 from "../assets/gallery/tharma6.jpg";
import img28 from "../assets/gallery/wall.jpg";
import img29 from "../assets/gallery/wallFlower.jpg";

const images = [
 img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29
];

const Gallery = () => {
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-pink-600 mb-12">
          ✨ Our Gallery ✨
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl shadow-lg group bg-gray-200 flex items-center justify-center"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center">
                <p className="text-white text-lg font-semibold mb-4">
                  Event #{index + 1}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
