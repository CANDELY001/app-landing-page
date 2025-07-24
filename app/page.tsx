"use client";
import React, { useEffect } from "react";
import Hero from "./components/Hero";
import ResponsiveNav from "./components/ResponsiveNav";
import WhyChose from "./components/WhyChose";
import AnalyticsFeature from "./components/AnalyticsF";
import Feature from "./components/Feature";
import Testimonial from "./components/Testimonial";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Explore from "./components/Explore";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");

      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <>
      <ResponsiveNav />
      <Hero />
      <WhyChose />
      <AnalyticsFeature />
      <Feature />
      <Testimonial />
      <Pricing />
      <Explore />
      <Footer />
    </>
  );
};
export default HomePage;
