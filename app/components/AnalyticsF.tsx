import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
const AnalyticsFeature = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="w-[90%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <Image
            src="/assets/a.jpg"
            alt="Analytics image"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        <div className="p-6">
          <h1 className="text-base font-semibold text-orange-400">
            Audience tracking and insights
          </h1>
          <h1 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Powerful analytics tools that put you in control and are fully
            customizable.
          </h1>
          <p className="mt-4 text-gray-600 text-sm font-medium leading-[2rem]">
            Unlock the power of data-driven decisions with our comprehensive
            analytics suite. Track user engagement, monitor performance metrics,
            and gain actionable insights to optimize your workflow and boost
            productivity across your entire organization.
          </p>
          <ul className="mt-7 space-y-2 text-gray-800">
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" /> Real-time data
              visualization and reporting
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" /> Advanced user
              behavior tracking and insights
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" /> Customizable
              dashboards and KPI monitoring
            </li>
          </ul>
          <button className="mt-8 px-8 py-3 bg-gray-100 text-gray-800 font-semibod rounded-full hover:bg-blue-800 transition-all duration-200 hover:text-white">
            Learn More About Analytics &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsFeature;
