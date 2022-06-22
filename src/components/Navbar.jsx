import React from "react";

export default function Navbar() {
  return (
    <nav className="relative container mx-auto p-6">
      {/* Flex container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img src="images/logo.svg" alt="" />
        </div>
        {/* Menu Items */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>
      </div>
    </nav>
  );
}
