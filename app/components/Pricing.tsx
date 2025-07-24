import React from "react";
import PricingCard from "./PriceCard";
const Pricing = () => {
  return (
    <div className="pt-16 pb-16 bg-[#f0f7ff]">
      <h2 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Meet exciting Pricing Plans
      </h2>
      <div className="mt-20 w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <PricingCard price={15} plan="Starter" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <PricingCard price={45} plan="Business" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
