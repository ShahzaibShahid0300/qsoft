import React, { useState } from "react";
import { Helmet } from "react-helmet";

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: `QSoft ERP Lite is a lightweight and cost-effective ERP for small businesses, offering essential features to manage sales, purchases, inventory, and basic accounting with a user-friendly interface.`,
  },
  {
    id: "benefits",
    title: "Benefits",
    content: `Affordable pricing, rapid deployment, ease of use, and scalable modules that let you start small and expand as your business grows.`,
  },
  {
    id: "features",
    title: "Features",
    content: `Sales management, purchase orders, inventory tracking, supplier management, basic accounting, and reporting features tailored to small business needs.`,
  },
  {
    id: "customizable",
    title: "Customizable",
    content: `Customize reports, fields, and user roles to adapt to your specific small business workflows with minimal technical skills required.`,
  },
  {
    id: "whatsnew",
    title: "What's New",
    content: `Version 2.1 introduces a faster dashboard, improved mobile support, and enhanced integration with popular accounting platforms.`,
  },
  {
    id: "brochure",
    title: "Download Brochure",
    content: (
      <a
        href="/downloads/AIMS Broucher New).pdf"
        className="inline-block mt-4 px-4 py-2 bg-[#0077b6] text-white rounded shadow hover:bg-[#005a9c] transition"
        download
      >
        Download PDF Brochure
      </a>
    ),
  },
];

const Lite = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const activeContent = sections.find((s) => s.id === activeSection)?.content;

  return (
    <>
      <Helmet>
        <title>QSoft ERP Lite Details</title>
        <meta
          name="description"
          content="Learn about QSoft ERP Lite — affordable ERP for small businesses with essential features."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero section with image */}
      <section
        className="relative bg-gradient-to-r from-[#0077b6] to-[#00aaff] dark:from-[#1e3e62] dark:to-[#00aaff] text-white py-20 px-6 text-center"
        aria-labelledby="lite-hero-title"
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h1
              id="lite-hero-title"
              className="text-4xl md:text-6xl font-extrabold tracking-wide"
            >
              AIMS ERP Standard
            </h1>
            <p className="mt-4 text-lg md:text-xl font-light">
              Discover QSoft AIMS ERP Standard — the perfect choice for growing small businesses.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/image/standard.jpeg"
              alt="QSoft ERP Lite"
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

        {/* Content */}
        <section className="flex-1 bg-white dark:bg-[#25476c] rounded shadow p-6 border border-gray-200 dark:border-[#1e3e62]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#005a9c] dark:text-[#00aaff] mb-4 border-b pb-2 border-[#0077b6] dark:border-[#00aeef]">
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

export default Lite;
