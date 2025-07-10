import React, { useState } from "react";
import { Helmet } from "react-helmet";

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: `QSoft ERP Core is a powerful .NET-based ERP system designed for medium to large organizations. It integrates accounting, HR, inventory, and more, helping you streamline your operations and grow efficiently.`,
  },
  {
    id: "benefits",
    title: "Benefits",
    content: `Benefit from a centralized platform that improves data accuracy, boosts team productivity, and reduces operational costs. QSoft ERP Core scales as you grow.`,
  },
  {
    id: "features",
    title: "Features",
    content: `Order management, accounts receivable/payable, inventory, general ledger, payroll, manufacturing, CRM, banking integrations, and much more.`,
  },
  {
    id: "customizable",
    title: "Customizable",
    content: `Easily customize workflows, reports, and modules to match your industry and business needs without heavy coding.`,
  },
  {
    id: "whatsnew",
    title: "What's New",
    content: `Version 3.2 introduces faster reporting, a modern UI refresh, enhanced security, and new integrations with third-party payment gateways.`,
  },
  {
    id: "brochure",
    title: "Download Brochure",
    content: (
      <a
        href="/downloads/AIMS ERP 9 (HYBRID) NEW.pdf"
        className="inline-block mt-4 px-4 py-2 bg-[#0077b6] text-white rounded shadow hover:bg-[#005a9c] transition"
        download
      >
        Download PDF Brochure
      </a>
    ),
  },
];

const ProductCore = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const activeContent = sections.find((s) => s.id === activeSection)?.content;

  return (
    <>
      <Helmet>
        <title>QSoft ERP Core Details</title>
        <meta
          name="description"
          content="Learn about QSoft ERP Core — its features, benefits, customization options, and more."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero section with image */}
      <section
        className="relative bg-gradient-to-r from-[#0077b6] to-[#00aaff] dark:from-[#1e3e62] dark:to-[#00aaff] text-white py-20 px-6 text-center"
        aria-labelledby="core-hero-title"
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h1
              id="core-hero-title"
              className="text-4xl md:text-6xl font-extrabold tracking-wide"
            >
              AIMS ERP Hybrid
            </h1>
            <p className="mt-4 text-lg md:text-xl font-light">
              Discover the advanced capabilities of QSoft AIMS ERP, built to power your growing enterprise.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/image/hybrid.png"
              alt="QSoft ERP Core"
              className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="flex flex-col md:flex-row max-w-7xl mx-auto p-4 md:p-8 gap-8 text-black dark:text-white">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4">
          <nav className="sticky top-4 bg-white dark:bg-[#25476c] rounded shadow p-4 space-y-3">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`block text-left w-full px-3 py-2 rounded transition font-semibold ${
                  activeSection === section.id
                    ? "bg-[#00aaff] text-white"
                    : "hover:bg-gray-100 dark:hover:bg-[#1e3e62]"
                }`}
                aria-current={activeSection === section.id ? "page" : undefined}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content area */}
        <section className="flex-1 bg-white dark:bg-[#25476c] rounded shadow p-6 border border-gray-200 dark:border-[#1e3e62]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#00aaff] mb-4 border-b pb-2 border-[#0077b6]">
            {sections.find((s) => s.id === activeSection)?.title}
          </h2>
          <div className="text-gray-700 dark:text-[#cbd5e1] leading-relaxed">
            {typeof activeContent === "string" ? (
              <p>{activeContent}</p>
            ) : (
              activeContent
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductCore;
