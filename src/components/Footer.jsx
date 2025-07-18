import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#000000] text-black dark:text-[#ffffff] px-10 py-10 text-center">
      <div className="w-full h-px bg-[#00aeef] mb-6"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
        {/* Products Section */}
        <nav>
          <h6 className="text-sm font-bold uppercase mb-4">Products</h6>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/products/core" className="hover:text-[#00aeef] cursor-pointer">
                AIMS ERP (Hybrid)
              </Link>
            </li>
            <li>
              <Link to="/products/lite" className="hover:text-[#00aeef] cursor-pointer">
                AIMS ERP (Standard)
              </Link>
            </li>
          </ul>
        </nav>

        {/* Services Section */}
        <nav>
          <h6 className="text-sm font-bold uppercase mb-4">Services</h6>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/solutions/softwaredevelopment" className="hover:text-[#00aeef] cursor-pointer">
                Desktop App Development
              </Link>
            </li>
            <li>
              <Link to="/solutions/webdevelopment" className="hover:text-[#00aeef] cursor-pointer">
                Web Development
              </Link>
            </li>
            <li>
              <Link to="/solutions/mobileappdevelopment" className="hover:text-[#00aeef] cursor-pointer">
                Mobile App Development
              </Link>
            </li>
            <li>
              <Link to="/solutions/digitalmarketing" className="hover:text-[#00aeef] cursor-pointer">
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link to="/solutions/itconsultancy" className="hover:text-[#00aeef] cursor-pointer">
                IT Consultancy
              </Link>
            </li>
          </ul>
        </nav>

        {/* Related Links Section */}
        <nav>
          <h6 className="text-sm font-bold uppercase mb-4">Related Links</h6>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/contact" className="hover:text-[#00aeef] cursor-pointer">
                Contact Us
              </Link>
            </li>
            <li>
              <a
                href="/downloads/Q-Soft Company Profile.pdf"
                download="Q-Soft Company Profile.pdf"
                className="hover:text-[#00aeef] cursor-pointer"
              >
                Portfolio
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Socials & Copyright */}
      <div className="flex flex-col items-center border-t border-gray-300 pt-6 mt-4 text-xs">
        <div className="flex gap-6 text-2xl mb-4">
          <a
            href="https://www.linkedin.com/company/qsoft"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#00aeef] transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.facebook.com/qsoft"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-[#00aeef] transition"
          >
            <FaFacebookF />
          </a>
        </div>
        <div className="text-center text-black dark:text-[#ffffff] text-xs">
          &copy; 2025 QSoft. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
