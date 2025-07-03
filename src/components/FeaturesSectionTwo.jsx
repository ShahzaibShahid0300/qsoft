import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const features = [
  {
    icon: "/icons/inventory.png",
    title: "INVENTORY MANAGEMENT",
    description: "Experience a centralized Inventory Management, manage everything with Odoo+Magento.",
  },
  {
    icon: "/icons/accounting.png",
    title: "ACCOUNTING",
    description: "Streamline the various accounting activities as per your country localization.",
  },
  {
    icon: "/icons/purchase.png",
    title: "PURCHASE",
    description: "Get a complete end-to-end purchasing solution and track supplier details.",
  },
  {
    icon: "/icons/sales.png",
    title: "SALES",
    description: "Manage sales easily and analyze sales performance in a robust way.",
  },
  {
    icon: "/icons/production.png",
    title: "PRODUCTION & PLANNING",
    description: "Manage all production & manufacturing related processes seamlessly.",
  },
  {
    icon: "/icons/pos.png",
    title: "POINT OF SALE",
    description: "Take advantage of all-in-one POS features and a lot more with the real-time data!",
  },
  {
    icon: "/icons/hr.png",
    title: "HR & PAYROLL",
    description: "Track activities related to Human Resource and manage payrolls of employees.",
  },
  {
    icon: "/icons/magento.png",
    title: "CONTROL ERP MAGENTO INTEGRATION",
    description: "A perfect omnichannel experience through an integrated platform to support your web store.",
  },
];

const FeaturesSectionTwo = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <Helmet>
        <title>ERP Features | QSoft ERP</title>
        <meta
          name="description"
          content="Discover advanced features of QSoft ERP including inventory, accounting, POS, HR, and Magento integration to power your omnichannel business."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          Control ERP Features
        </h2>
        <p className="italic text-gray-500 text-lg mt-2 mb-10">
          Thanks for choosing our services
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`group bg-white rounded-xl shadow-md p-6 text-center transform transition-all duration-700 ease-in-out ${
                animate ? "opacity-100 scale-100" : "opacity-0 scale-95"
              } md:hover:-translate-y-2 md:hover:shadow-xl`}
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="mx-auto h-12 mb-4 transition-transform duration-500 group-hover:scale-110"
              />
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#00aeef] transition">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {feature.description}
              </p>
              <button className="bg-[#00aeef] text-white px-5 py-2 text-sm font-bold rounded hover:bg-black transition">
                READ MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSectionTwo;
