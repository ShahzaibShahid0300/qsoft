import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Briefcase,
  Building2,
  Stethoscope,
  ShoppingCart,
  Factory,
  Banknote,
  Truck,
  GraduationCap,
  SendHorizontal,
} from "lucide-react";

const industries = [
  {
    icon: Briefcase,
    title: "Professional Services",
    description:
      "Streamline project management, billing, and service delivery with tailored ERP tools.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Automate production workflows, manage inventory, and optimize supply chains.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description:
      "Simplify hospital operations, manage patient records, and stay compliant.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-Commerce",
    description:
      "Integrate POS, inventory, and finance for a unified shopping experience.",
  },
  {
    icon: Truck,
    title: "Logistics & Distribution",
    description:
      "Track fleets, manage warehouses, and enhance delivery efficiency.",
  },
  {
    icon: Building2,
    title: "Construction",
    description:
      "Oversee budgets, site management, and procurement on one platform.",
  },
  {
    icon: Banknote,
    title: "Finance",
    description:
      "Maintain accurate books, generate reports, and meet compliance with ease.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Centralize student data, finances, and staff operations in one ERP.",
  },
];

const Industries = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <>
      <Helmet>
        <title>Industries We Serve | QSoft ERP</title>
        <meta
          name="description"
          content="Explore how QSoft ERP transforms industries with tailored, scalable ERP systems designed to fit every business need."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0077b6] to-[#00aaff] dark:from-[#1e3e62] dark:to-[#00aeef] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold">Industries We Serve</h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl font-light">
          Tailored ERP solutions that address the core challenges of each industry.
        </p>
      </section>

      {/* Industries Section - Vertical Timeline Style */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative dark:bg-[#1e3e62]">
        <div className="border-l-4 border-[#00aeef] dark:border-[#00aeef] pl-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="mb-12 relative before:absolute before:-left-3 before:top-1 before:w-6 before:h-6 before:rounded-full before:bg-[#00aeef] dark:before:bg-[#00aeef]"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#00aeef] dark:bg-[#27496d] p-3 rounded-full text-white dark:text-[#00aeef] shadow">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-black dark:text-white">
                    {industry.title}
                  </h3>
                </div>
                <p className="mt-2 ml-12 text-gray-700 dark:text-[#cbd5e1] text-sm max-w-xl">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section - New Modern Design */}
      <section className="bg-white dark:bg-[#1e3e62] py-16 px-6 text-center shadow-inner">
        <div
          className="max-w-4xl mx-auto"
          data-aos="zoom-in-up"
        >
          <div className="mb-6 flex items-center justify-center gap-3 ">
            <SendHorizontal className="text-[#00aeef] w-8 h-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
              Looking for Industry-Specific ERP?
            </h2>
          </div>
          <p className="text-lg text-gray-700 dark:text-[#cbd5e1] mb-8 max-w-2xl mx-auto">
            Q-Soft Technologies AIMS ERP is built to evolve with your sector. Reach out to our team to learn how we
            can customize the right solution for your industry.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#00aeef] text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-[#0077b6] transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
};

export default Industries;
