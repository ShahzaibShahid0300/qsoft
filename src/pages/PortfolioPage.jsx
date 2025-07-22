import React from "react";
import { FaDownload } from "react-icons/fa";
import portfolioPDF from "/downloads/Q-Soft Company Profile.pdf";
import qsoftLogo from "../assets/qsoft logo.png";
import heroBg from "../assets/portfolio.jpeg"; // ⬅️ You must have this background image

const PortfolioPage = () => {
  return (
    <div className="bg-white dark:bg-[#1e3e62] text-black dark:text-white">
      {/* Hero Section Like About Page */}
      <section
        className="relative w-full bg-cover bg-center h-[300px] md:h-[400px] flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 62, 98, 0.7), rgba(30, 62, 98, 0.7)), url(${heroBg})`,
        }}
      >
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            Our Portfolio
          </h1>
          <p className="text-[#cbd5e1] max-w-2xl mx-auto text-sm md:text-base animate-fade-in">
            Discover our experience and innovation through our portfolio. We
            design, develop, and deliver custom digital solutions that elevate
            brands.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="px-6 md:px-20 py-16">
        {/* Portfolio Details Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#00aeef]">
              Who We Are
            </h2>
            <p className="text-base text-gray-700 dark:text-[#cbd5e1] mb-6">
              Q-Soft Technologies is a forward-thinking software company
              specializing in ERP systems, custom web & mobile development, and
              digital solutions. We empower businesses by turning complex
              problems into seamless solutions.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#00aeef]">
              What We Do
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-[#cbd5e1] space-y-2">
              <li>Custom ERP (Hybrid & Standard)</li>
              <li>Web & Mobile Application Development</li>
              <li>Software Integration & Automation</li>
              <li>Digital Marketing & SEO</li>
              <li>IT Consultancy</li>
            </ul>

            <div className="mt-8">
              <a
                href={portfolioPDF}
                download="Q-Soft Technologies Company Profile.pdf"
                className="inline-flex items-center bg-[#00aeef] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#0096cb] transition shadow-md"
              >
                <FaDownload className="mr-2" /> Download Portfolio
              </a>
            </div>
          </div>

          <div className="w-full h-full">
            <img
              src={qsoftLogo}
              alt="QSoft Portfolio Graphic"
              className="w-full h-auto object-contain rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Additional Portfolio Highlights */}
        <div className="mt-24 space-y-16">
          <section className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#00aeef] mb-4">
              Our Expertise
            </h2>
            <p className="max-w-3xl mx-auto text-gray-700 dark:text-[#cbd5e1]">
              We combine design thinking, engineering excellence, and
              data-driven strategy to build software that makes a difference.
            </p>
          </section>

          <section className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-[#f0f9ff] dark:bg-[#25476c] p-6 rounded-xl shadow-md hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-[#00aeef]">
                Scalable ERP Systems
              </h3>
              <p className="text-gray-700 dark:text-[#cbd5e1]">
                Designed to grow with your business, from small teams to
                enterprise operations.
              </p>
            </div>
            <div className="bg-[#f0f9ff] dark:bg-[#25476c] p-6 rounded-xl shadow-md hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-[#00aeef]">
                User-Centric Interfaces
              </h3>
              <p className="text-gray-700 dark:text-[#cbd5e1]">
                Intuitive and responsive interfaces tailored for smooth user
                experiences.
              </p>
            </div>
            <div className="bg-[#f0f9ff] dark:bg-[#25476c] p-6 rounded-xl shadow-md hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-[#00aeef]">
                Cross-Platform Apps
              </h3>
              <p className="text-gray-700 dark:text-[#cbd5e1]">
                Robust apps for both Android and iOS, ensuring maximum reach
                and performance.
              </p>
            </div>
          </section>

          <section className="text-center mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#00aeef] mb-4">
              Why Choose Q-Soft Technologies?
            </h2>
            <p className="max-w-3xl mx-auto text-gray-700 dark:text-[#cbd5e1]">
              With a passion for excellence and a track record of delivering
              high-quality solutions, Q-Soft Technologies is your trusted tech
              partner for digital transformation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
