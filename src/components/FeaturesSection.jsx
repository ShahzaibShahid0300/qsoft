import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import image from "../assets/image.png";

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
          content="Learn how QSoft Control ERP centralizes and streamlines your data with omnichannel support, giving you real-time updates and customer insights."
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
            Power your business with omnichannel Control ERP
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Centralize and streamline your <br /> data with Omni-channel ERP
          </h2>

          {/* Blue line */}
          <div className="w-16 h-1 bg-sky-500 mx-auto md:mx-0 mb-6 rounded-full" />

          <p className="text-gray-700 text-base leading-relaxed">
            Control ERP has brought the omnichannel feature for your ERP systems
            to automatically synchronize and reflect real-time updates for any changes
            in the back-end on all the selling channels. <br />
            The added benefits include customer insights,{" "}
            <span className="text-sky-500 font-semibold">inventory</span> visibility,
            and omnichannel sales benefits.
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
            alt="ERP team working together"
            className="w-full h-auto object-cover rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
