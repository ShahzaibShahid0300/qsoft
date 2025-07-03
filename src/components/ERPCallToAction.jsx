import React from "react";

const ERPCallToAction = () => {
  return (
    <section className="bg-[#00B2F3] py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text */}
        <div className="text-center md:text-left">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
            Plan your ERP system with the experts now!
          </h2>
          <p className="text-white italic mt-2 text-base sm:text-lg">
            Control ERP is here.
          </p>
        </div>

        {/* Button */}
        <div>
          <a
            href="#contact"
            className="border-2 border-white text-white font-bold uppercase px-8 py-4 text-sm sm:text-base hover:bg-white hover:text-[#00B2F3] transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ERPCallToAction;
