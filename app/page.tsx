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
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <WhyChose />
      </div>
      <div id="">
        <AnalyticsFeature />
      </div>
      <div id="feature">
        <Feature />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id="">
        <Pricing />
      </div>
      <Explore />
      <Footer />
    </>
  );
};
export default HomePage;
