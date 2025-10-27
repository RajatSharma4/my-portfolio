import React, { useState } from "react";
import { Link } from "react-scroll"; // 👈 imported from react-scroll

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent backdrop-blur-sm mb-20 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-bold text-white cursor-pointer">
          <Link
            to="hero"
            smooth={true}
            duration={600}
            offset={-70} // adjust based on your navbar height

            className="hover:text-purple-400"
          >
            RS
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-lg font-medium text-neutral-300">
          <Link
            to="about"
            smooth={true}
            duration={600}
            offset={-50}
            className="cursor-pointer hover:text-purple-400 transition duration-300"
          >
            About
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={600}
            offset={-50}
            className="cursor-pointer hover:text-purple-400 transition duration-300"
          >
            Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={600}
            offset={-50}
            className="cursor-pointer hover:text-purple-400 transition duration-300"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-50}
            className="cursor-pointer hover:text-purple-400 transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-300 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden text-center py-4 space-y-3 text-lg text-neutral-300 font-medium">
          <Link
            to="about"
            smooth={true}
            duration={600}
            offset={-50}
            onClick={() => setIsOpen(false)}
            className="block cursor-pointer hover:text-cyan-300 transition duration-300"
          >
            About
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={600}
            offset={-50}
            onClick={() => setIsOpen(false)}
            className="block cursor-pointer hover:text-cyan-300 transition duration-300"
          >
            Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={600}
            offset={-50}
            onClick={() => setIsOpen(false)}
            className="block cursor-pointer hover:text-cyan-300 transition duration-300"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-50}
            onClick={() => setIsOpen(false)}
            className="block cursor-pointer hover:text-cyan-300 transition duration-300"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
