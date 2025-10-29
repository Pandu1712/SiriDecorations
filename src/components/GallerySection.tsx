import { motion } from "framer-motion";

// ✅ Import your images

import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";
import img7 from "../assets/gallery/7.jpg";
import img8 from "../assets/gallery/8.jpg";
import img9 from "../assets/gallery/9.jpg";
import img10 from "../assets/gallery/10.jpg";
import img11 from "../assets/gallery/11.jpg";
import img12 from "../assets/gallery/12.jpg";
import img13 from "../assets/gallery/13.jpg";

import img15 from "../assets/gallery/15.jpg";
import img16 from "../assets/gallery/16.jpg";
import img17 from "../assets/gallery/17.jpg";
import img18 from "../assets/gallery/18.jpg";
import img19 from "../assets/gallery/19.jpg";
import img20 from "../assets/gallery/20.jpg";
import img21 from "../assets/gallery/21.jpg";
import img22 from "../assets/gallery/22.jpg";
import img23 from "../assets/gallery/23.jpg";
import img24 from "../assets/gallery/24.jpg";
import img25 from "../assets/gallery/25.jpg";
import img26 from "../assets/gallery/26.jpg";
import img27 from "../assets/gallery/27.jpg";
import img28 from "../assets/gallery/28.jpg";
import img29 from "../assets/gallery/29.jpg";
import img30 from "../assets/gallery/30.jpg";
import img31 from "../assets/gallery/31.jpg";
import img32 from "../assets/gallery/32.jpg";
import img33 from "../assets/gallery/33.jpg";
import img34 from "../assets/gallery/34.jpg";
import img35 from "../assets/gallery/35.jpg";
import img36 from "../assets/gallery/36.jpg";
import img37 from "../assets/gallery/37.jpg";
import img38 from "../assets/gallery/38.jpg";
import img39 from "../assets/gallery/39.jpg";
import img40 from "../assets/gallery/40.jpg";
import img41 from "../assets/gallery/41.jpg";
import img42 from "../assets/gallery/42.jpg";
import img43 from "../assets/gallery/43.jpg";
import img44 from "../assets/gallery/44.jpg";
import img45 from "../assets/gallery/45.jpg";



const images = [
  img1,img2, img4,img3, img5, img6, img7, img8, img9, img10,
  img11, img12, img13,img15,  img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29,img30,img31,img32,img33,img34,img35,img36,img37,img38,img39,img40,img41,img42,img43,img44,img45
];

const Gallery = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 via-white to-indigo-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
       <h2
  className="text-4xl md:text-5xl font-extrabold text-center text-[#32667c] mb-12 whitespace-nowrap scale-90 sm:scale-100"
>
  ✨ Our Gallery ✨
</h2>



        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center">
                <p className="text-white text-lg font-semibold mb-4">
                  Decoration #{index + 1}
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
