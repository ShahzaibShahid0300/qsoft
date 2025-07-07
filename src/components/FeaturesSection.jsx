import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import image from "../assets/Image.png";

export default function FeaturesSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full bg-white py-10 md:py-20 px-4 md:px-16">
      <Helmet>
        <title>Omnichannel ERP Features | QSoft ERP</title>
        <meta
          name="description"
          content="Explore how QSoft Control ERP streamlines your business operations through real-time data synchronization, centralized management, and omnichannel capabilities."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* LEFT COLUMN */}
        <div
          className={`w-full md:w-1/2 text-center md:text-left transform transition-all duration-1000 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="italic text-gray-600 text-lg mb-2">
            Seamlessly connect your business channels
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Streamline operations and unify data with QSoft’s AIMS ERP
          </h2>

          {/* Blue line */}
          <div className="w-16 h-1 bg-sky-500 mx-auto md:mx-0 mb-6 rounded-full" />

          <p className="text-gray-700 text-base leading-relaxed">
            QSoft AIMS ERP delivers a centralized platform that ensures all your sales channels stay synchronized in real time. Access up-to-date inventory levels, comprehensive customer data, and critical business insights—all designed to improve efficiency and customer satisfaction. Simplify your workflows and empower growth with a scalable ERP solution tailored for modern enterprises.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div
          className={`w-full md:w-1/2 transform transition-all duration-1000 ${
            animate ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <img
            src={image}
            alt="Team collaborating on ERP solution"
            className="w-full h-auto object-cover rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
