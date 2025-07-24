import React from "react";
import Hero from "./components/Hero";
import ResponsiveNav from "./components/ResponsiveNav";
import WhyChose from "./components/WhyChose";
import AnalyticsFeature from "./components/AnalyticsF";
import Feature from "./components/Feature";
import Testimonial from "./components/Testimonial";
const HomePage = () => {
  return (
    <>
      <ResponsiveNav />
      <Hero />
      <WhyChose />
      <AnalyticsFeature />
      <Feature />
      <Testimonial />
    </>
  );
};
export default HomePage;
