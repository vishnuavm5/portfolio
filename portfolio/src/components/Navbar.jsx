import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Hero from "./Hero";
import Footer from "./Footer";
import Skills from "./Skills";
import Projects from "./Projects";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-24">
        <h1 className="text-2xl font-bold">
          {" "}
          <AnchorLink href="#Hero">Portfolio</AnchorLink>
        </h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <AnchorLink
                href="#Projects"
                className="font-semibold hover:text-gray-300"
              >
                Projects
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#skills"
                className="font-medium hover:text-gray-300"
              >
                Skills
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#contact"
                className="font-medium hover:text-gray-300"
              >
                Contact
              </AnchorLink>
            </li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={toggleMobileMenu}>
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden">
          <ul className="px-2 py-3 space-y-2">
            <li>
              <a href="#" className="block font-semibold hover:text-gray-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="block font-medium hover:text-gray-300">
                Skills
              </a>
            </li>
            <li>
              <a href="#" className="block font-medium hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
