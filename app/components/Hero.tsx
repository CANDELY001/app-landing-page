import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6f6]">
      <div className="flex  justify-center flex-col h-full w-[90%] sm:w-[80%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* text content */}
          <div>
            <div className="w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white">
              <div className="px-3 py-1 md:px-5 md:py-1 rounded-full bg-blue-700 md:text-base sm:text-sm text-xs text-white">
                News
              </div>
              <p className="text-xs sm:text-sm">
                We have updated our terms and conditions policy.
              </p>
            </div>
            <h1
              data-aos="fade-up"
              className="text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:loading-[3rem] lg:leading-[3.5rem]"
            >
              The premier workspace companion for your daily needs
            </h1>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
              aspernatur iure ut dignissimos aut eum ipsam. Sapiente quia velit
              eum veritatis doloribus non hic repellat a, exercitationem
              incidunt omnis iusto!
            </p>
            {/* Playstore and Appstore buttons */}
            <div className="flex mt-8 mb-8 items-center space-x-4">
              <Image
                src="/assets/gp.png"
                alt="playstore"
                width={150}
                height={150}
              />
              <Image
                src="/assets/as.png"
                alt="appstore"
                width={150}
                height={50}
              />
            </div>
          </div>
          {/* img content */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="hidden lg:block"
          >
            <Image
              src="/assets/hero.png"
              alt="hero image"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
