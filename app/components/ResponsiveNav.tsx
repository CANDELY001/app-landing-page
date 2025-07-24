"use client";
import React, { useState } from "react";
import Header from "./Header";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNavShow = () => {
    setShowNav(true);
  };

  const handleNavHide = () => {
    setShowNav(false);
  };

  return (
    <div>
      <Header openNav={handleNavShow} showMobileNav={showNav} />
      {showNav && <MobileNav showNav={showNav} closeNav={handleNavHide} />}
    </div>
  );
};
export default ResponsiveNav;
