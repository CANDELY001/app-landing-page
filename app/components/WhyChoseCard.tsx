import React from "react";
import Image from "next/image";
type Props = {
  image: string;
  title: string;
  linkText: string;
  description?: string;
};
const WhyChoseCard = ({ image, title, linkText, description }: Props) => {
  // SEO-optimized default descriptions based on common workspace app features
  const getDefaultDescription = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (
      lowerTitle.includes("productivity") ||
      lowerTitle.includes("efficient")
    ) {
      return "Maximize your efficiency with advanced productivity tools designed to streamline your workflow and boost team performance.";
    } else if (
      lowerTitle.includes("collaboration") ||
      lowerTitle.includes("team")
    ) {
      return "Connect and collaborate seamlessly with your team using real-time communication and project management features.";
    } else if (lowerTitle.includes("security") || lowerTitle.includes("safe")) {
      return "Keep your data secure with enterprise-grade encryption and advanced security protocols for peace of mind.";
    } else if (
      lowerTitle.includes("integration") ||
      lowerTitle.includes("connect")
    ) {
      return "Integrate with your favorite apps and tools to create a unified workspace that works the way you do.";
    } else if (
      lowerTitle.includes("analytics") ||
      lowerTitle.includes("insights")
    ) {
      return "Gain valuable insights into your productivity patterns with detailed analytics and performance tracking.";
    } else if (
      lowerTitle.includes("mobile") ||
      lowerTitle.includes("anywhere")
    ) {
      return "Access your workspace from anywhere with our mobile-optimized platform that keeps you productive on the go.";
    } else {
      return "Experience powerful features designed to enhance your productivity and streamline your daily workflow.";
    }
  };

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
        {description || getDefaultDescription(title)}
      </p>
      <p className="text-center font-semibold text-blue-900 hover:text-blue-950 transition-all duration-200 cursor-pointer">
        {linkText} &#8594;
      </p>
    </div>
  );
};

export default WhyChoseCard;
