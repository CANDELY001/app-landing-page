import React from "react";
import WhyChoseCard from "./WhyChoseCard";

const WhyChose = () => {
  return (
    <div className="pt-16 pd-16">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Why you choose this application
      </h1>
      <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <WhyChoseCard
            image="/assets/i1.png"
            title="Create Free Account"
            linkText="Start Earning"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <WhyChoseCard
            image="/assets/i2.png"
            title="Monitor User Analytics"
            linkText="Sign up your store"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <WhyChoseCard
            image="/assets/i3.png"
            title="Safe & Trusted"
            linkText="Get The App"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <WhyChoseCard
            image="/assets/i4.png"
            title="Fast Customer Support"
            linkText="Learn More"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChose;
