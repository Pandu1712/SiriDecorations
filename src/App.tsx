import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import WhatsAppChat from "./components/WhatsAppChat";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ServiceDetails from "./pages/ServiceDetails";
import ServicesSection from "./components/ServicesSection";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
      </Routes>
      <ScrollToTopButton />
      <WhatsAppChat />
      <Footer />
    </div>
  );
};

export default App;
