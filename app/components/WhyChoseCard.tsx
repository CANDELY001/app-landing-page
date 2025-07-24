import React from "react";
import Image from "next/image";
type Props = {
  image: string;
  title: string;
  linkText: string;
};
const WhyChoseCard = ({ image, title, linkText }: Props) => {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="object-contain mx-auto"
      />
      <h1 className="text-center text-lg mt-5 mb-5 font-semibold">{title}</h1>
      <p className="text-gray-600 text-center font-medium text-sm mb-7">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil aperiam
        ex porro similique. Error quod a iste officia amet libero repellat,
        nihil ut non aperiam illum harum illo voluptatem sapiente.
      </p>
      <p className="text-center font-semibold text-blue-900 hover:text-blue-950 transition-all duration-200 cursor-pointer">
        {linkText} &#8594;
      </p>
    </div>
  );
};

export default WhyChoseCard;
