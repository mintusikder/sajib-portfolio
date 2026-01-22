// src/components/Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-24">
      <div className="px-6 md:px-16 lg:px-24 xl:px-32">
        
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-berkshire text-white">
              Sajib Portfolio
            </h2>
            <p className="text-sm mt-2 text-gray-400">
              Creative Professional & Brand Strategist
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:bg-blue-600 hover:text-white transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:bg-pink-600 hover:text-white transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:bg-blue-700 hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:bg-red-600 hover:text-white transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Sajib. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
