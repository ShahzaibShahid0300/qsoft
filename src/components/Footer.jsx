import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-12 bg-white dark:bg-[#000000] text-black dark:text-[#ffffff] px-10 py-10 text-center">
      {/* top blue separator line */}
      <div className="w-full h-px bg-[#00aeef] mb-6"></div>

      {/* top links section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
        {/* Products */}
        <nav>
          <h6 className="text-sm font-bold uppercase mb-4">Products</h6>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/products/core" className="hover:text-[#00aeef] cursor-pointer">
                AIMS ERP Hybrid
              </a>
            </li>
            <li>
              <a href="/products/lite" className="hover:text-[#00aeef] cursor-pointer">
                AIMS ERP Standard
              </a>
            </li>
          </ul>
        </nav>

        {/* Services */}
        <nav>
          <h6 className="text-sm font-bold uppercase mb-4">Services</h6>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/services/implementation" className="hover:text-[#00aeef] cursor-pointer">
                Implementation
              </a>
            </li>
            <li>
              <a href="/services/development" className="hover:text-[#00aeef] cursor-pointer">
                Development
              </a>
            </li>
            <li>
              <a href="/services/support" className="hover:text-[#00aeef] cursor-pointer">
                Support
              </a>
            </li>
            <li>
              <a href="/services/training" className="hover:text-[#00aeef] cursor-pointer">
                Training
              </a>
            </li>
          </ul>
        </nav>

        {/* Related Links */}
        <nav>
          <h6 className="text-sm font-bold uppercase mb-4">Related Links</h6>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/contact" className="hover:text-[#00aeef] cursor-pointer">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/portfolio" className="hover:text-[#00aeef] cursor-pointer">
                Portfolio
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* bottom section */}
      <div className="flex flex-col items-center border-t border-gray-300 pt-6 mt-4 text-xs">
        {/* social icons */}
        <div className="flex gap-6 text-2xl mb-4">
          <a
            href="https://www.linkedin.com/company/qsoft" // replace with your actual LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#00aeef] transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.facebook.com/qsoft" // replace with your actual Facebook URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-[#00aeef] transition"
          >
            <FaFacebookF />
          </a>
        </div>
        {/* copyright */}
        <div className="text-center text-black dark:text-[#ffffff] text-xs">
          &copy; 2025 QSoft. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
