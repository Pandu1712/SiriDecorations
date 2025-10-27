import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Gift, Briefcase, Sun, Baby } from "lucide-react";

const services = [
  { id: 1, name: "Wedding Decorations", icon: <Heart /> },
  { id: 2, name: "Birthday Parties", icon: <Gift /> },
  { id: 3, name: "Corporate Events", icon: <Briefcase /> },
  { id: 4, name: "Festivals", icon: <Sun /> },
  { id: 5, name: "Baby Showers", icon: <Baby /> },
  { id: 6, name: "Engagements", icon: <span className="text-4xl">💍</span> },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-white" id="services">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-purple-600 mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => navigate(`/service/${service.id}`)}
              className="cursor-pointer bg-gradient-to-r from-pink-500 to-purple-600 text-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            >
              <div className="flex justify-center mb-3 text-4xl">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg">{service.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
