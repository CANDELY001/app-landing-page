import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";
type Props = {
  name: string;
  image: string;
  testimonial: string;
  jobTitle: string;
  rating?: number;
};
const ReviewCard = ({
  image,
  name,
  testimonial,
  jobTitle,
  rating = 5,
}: Props) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`w-6 h-6 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="w-full lg:w-[90%] relative mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div>
        <FaQuoteLeft className="w-14 h-14 opacity-10 absolute top-8" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
        <div className="col-span-3 order-2 lg:order-1">
          <p className="mt-8 text-sm sm:text-base md:text-lg font-medium leading-[1.5rem] sm:eading-[1.8rem] md:leading-[2.5rem]">
            {testimonial}
          </p>
          <div className="flex items-center mt-6">{renderStars()}</div>
          <h1 className="mt-8 text-xl font-semibold">{name}</h1>
          <p className="mt-2 text-lg text-gray-600 font-medium mb-6">
            {jobTitle}
          </p>
        </div>
        <div className="col-span-2 mx-auto order-1 lg:order-2">
          <Image
            src={image}
            alt={name}
            height={250}
            width={250}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
