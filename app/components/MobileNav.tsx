import React from "react";
import { navLinks } from "../constant/Constant";
import Link from "next/link";
import "../globals.css";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean,
  closeNav: () => void,
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "-translate-x-[-100%]";
  return (
    <>
      {/* overlay */}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[10000] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* Navlinks */}
      <div
        className={`text-white ${navOpen} fixed left-0 top-0 justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-indigo-900 space-y-6 z-[10006]`}
      >
        {navLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url} className="block ml-12">
              <p className="nav_link text-white text-[20px] border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                {link.label}
              </p>
            </Link>
          );
        })}
        {/* Close icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 w-6 h-6"
        />
      </div>
    </>
  );
};

export default MobileNav;
