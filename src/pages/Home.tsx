import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import GallerySection from "../components/GallerySection";
import VideoGallery from "../components/VideoGallery";
import ContactSection from "../pages/Contact"

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <VideoGallery />
      <ContactSection />
    </>
  );
};

export default Home;
