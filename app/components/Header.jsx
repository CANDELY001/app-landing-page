"use client";
import React, { useState, useEffect, use } from "react";
import { navLinks } from "../constant/Constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import "../globals.css";
export default function Header() {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return (
    <div
      className={`fixed ${
        navBg ? "bg-white shadow-md" : "fixed"
      } w-full  transition-all duration-200 h-[12vh] z-[1000]`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto ">
        <h1 className="text-xl md:text-2xl font-bold">
          <span className="text-3xl md:text-3xl text-pink-700">A</span>ppify
        </h1>
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link key={link.id} href={link.url} className="nav_link">
                <p className="nav_link">{link.label}</p>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center space-x-4">
          <button className="md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-blue-700 hover:bg-blue-900 transition-all duration-200 rounded-full">
            Join Now
          </button>
          <HiBars3BottomRight className="w-8 h-8 cursor-pointer text-back" />
        </div>
      </div>
    </div>
  );
}
