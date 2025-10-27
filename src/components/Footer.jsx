import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-6 border-t border-gray-700 flex flex-col items-center md:flex-row md:justify-between px-6 md:px-8 text-neutral-400">
      
      {/* Left side: Copyright */}
      <p className="text-center md:text-left text-sm">
        © {new Date().getFullYear()} Rajat Sharma. All rights reserved.
      </p>

      {/* Right side: Social icons */}
      <div className="flex gap-6 mt-4 md:mt-0 text-2xl">
        <a
          href="https://www.linkedin.com/in/rajat-sharma-50831a314"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-colors"
        >
          <FaLinkedin size={24} />
        </a>

        <a
          href="https://github.com/RajatSharma4"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-colors"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
