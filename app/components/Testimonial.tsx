"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const Testimonial = () => {
  return (
    <div className="pt-16 pb-16 bg-[#fcf6fa]">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        What our customers say about us
      </h1>
      <div className="mt-20 w-[90%] md:w-[80%] mx-auto">
        <Carousel
          arrows={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          showDots={true}
        >
          <ReviewCard
            name="Sarah Johnson"
            image="/assets/c1.png"
            jobTitle="Product Manager at TechCorp"
            testimonial="This workspace app has completely transformed how our team collaborates. The analytics features give us incredible insights into our productivity patterns, and the real-time collaboration tools have made remote work seamless. Highly recommend!"
            rating={5}
          />
          <ReviewCard
            name="Michael Chen"
            image="/assets/c2.png"
            jobTitle="Senior Developer at StartupXYZ"
            testimonial="As a developer, I appreciate how well this app integrates with our existing tools. The customizable dashboards help me track my coding productivity, and the team features make code reviews and project management so much easier."
            rating={5}
          />
          <ReviewCard
            name="Emily Rodriguez"
            image="/assets/c1.png"
            jobTitle="Marketing Director at Digital Agency"
            testimonial="The user behavior tracking and insights have been game-changing for our marketing campaigns. We can now make data-driven decisions that actually improve our ROI. The mobile app ensures I stay productive even when I'm on the go."
            rating={5}
          />
          <ReviewCard
            name="David Thompson"
            image="/assets/c2.png"
            jobTitle="Operations Manager at Global Inc"
            testimonial="Managing multiple teams across different time zones was a nightmare before this app. Now with the advanced analytics and real-time collaboration features, our team productivity has increased by 40%. Best investment we've made!"
            rating={5}
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
