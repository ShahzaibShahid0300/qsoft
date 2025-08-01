import React, { useState } from "react";
import { Helmet } from "react-helmet";

const sections = [
  { id: "Accounting", title: "Accounting" },
  { id: "benefits", title: "Benefits" },
  { id: "features", title: "Features" },
  { id: "customizable", title: "Customizable" },
  { id: "whatsnew", title: "What's New" },
  { id: "brochure", title: "Download Brochure" },
];

const accountingData = [
  {
    title: "Financial Management",
    image: "/image/Financial-Reporting.png",
    description:
      "Internal matters of the business can be managed with real-time reporting. This is achieved through accurate data analysis of the stored financial data on the cloud storage.",
  },
  {
    title: "Compliance Assurance",
    image: "/image/Compliance-Assurance.png",
    description:
      "Our assessment ensures that the concerned accounting standards are followed. Modules are preprogrammed to keep it all up to par while your accountants manage oversight.",
  },
  {
    title: "Chart of Accounts",
    image: "/image/chart-of-account.png",
    description:
      "Manage accounts of all users with access control based on roles and responsibilities.",
  },
  {
    title: "Expense Management",
    image: "/image/Expense-Management.png",
    description:
      "Timely reporting of daily, weekly & monthly transactions to efficiently manage expenses.",
  },
  {
    title: "Accounting Reports",
    image: "/image/Accounting-reports.png",
    description:
      "Balance sheets, ledgers, statements & payment logs with secure print-ready access.",
  },
  {
    title: "Payments and Transactions",
    image: "/image/Payments-Transactions.png",
    description:
      "Track & manage every transaction and payment with full access to information.",
  },
  {
    title: "Accounting Integration",
    image: "/image/Accounting-Integration.png",
    description:
      "Integrate all financial activities for accurate processing and financial management.",
  },
  {
    title: "Budget Management",
    image: "/image/Budget-Management.png",
    description:
      "Plan, monitor, and adjust budgets easily with our ERP’s budgeting modules.",
  },
  {
    title: "Data Access & Control",
    image: "/image/data-Access.png",
    description:
      "Secure user roles and access levels with full control over financial data usage.",
  },
];

const ProductCore = () => {
  const [activeSection, setActiveSection] = useState("Accounting");

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

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r from-[#00aaff] to-black/80 dark:from-[#1e3e62] dark:to-[#00aaff] text-white pt-26 pb-6 px-4 md:px-8 lg:px-16"
        aria-labelledby="core-hero-title"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-left">
            <h1
              id="core-hero-title"
              className="text-4xl md:text-5xl font-semibold leading-tight text-white"
            >
              Financial Concerns
              <br />
              with ERP AIMS (Hybrid) <br />
              <span className="text-[#00aaff]">Accounting Software</span>
            </h1>
          </div>
          <div className="flex-1">
            <img
              src="/image/account-main-01.png"
              alt="ERP Accounting Software"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <nav className="w-full bg-white dark:bg-[#1e3e62] px-4 md:px-8 border-b border-gray-200 dark:border-[#27496d]">
        <div className="max-w-7xl mx-auto flex overflow-x-auto gap-4 py-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`text-sm font-medium px-4 py-2 rounded-md transition-all whitespace-nowrap ${
                activeSection === section.id
                  ? "bg-[#00aeef] text-white dark:text-black"
                  : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#27496d]"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="bg-white dark:bg-[#25476c] px-4 md:px-8 max-w-7xl mx-auto py-10 border-x border-gray-200 dark:border-[#1e3e62] text-black dark:text-white">
        {activeSection === "Accounting" && (
          <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accountingData.map((item, idx) => (
              <div
                key={idx}
                className="group perspective"
                style={{ height: "480px" }}
              >
                <div className="relative w-full h-full duration-700 transform-style preserve-3d group-hover:rotate-y-180">
                  {/* Front */}
                  <div className="absolute inset-0 bg-white dark:bg-[#1e3e62] border border-gray-200 dark:border-[#27496d] rounded-xl overflow-hidden flex flex-col justify-end backface-hidden z-10">
                    <div className="relative w-full h-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                    />

                    {/* Text Overlay */}
                    <div className="absolute bottom-2 w-full bg-white text-black text-center p-4 rounded-xl">
                      <h3 className="text-xl">{item.title}</h3>
                    </div>
                    </div>
                  </div>


                  {/* Back */}
                  <div className="absolute inset-0 text-black rounded-xl border p-4 flex flex-col justify-center rotate-y-180 backface-hidden">
                    <h3 className="text-lg font-bold mb-2 text-center dark:text-white">{item.title}</h3>
                    <p className="text-sm text-center dark:text-[#cbd5e1]">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}

        {activeSection === "benefits" && (
          <section className="p-6 rounded-xl shadow-md border dark:border-[#1e3e62]">
            <h2 className="text-2xl font-bold text-[#00aaff] mb-4 border-b pb-2 border-[#0077b6]">
              Benefits
            </h2>
            <p className="text-gray-700 dark:text-[#cbd5e1] leading-relaxed">
              [Placeholder for Benefits section content...]
            </p>
          </section>
        )}

        {activeSection === "features" && (
          <section className="p-6 rounded-xl shadow-md border dark:border-[#1e3e62]">
            <h2 className="text-2xl font-bold text-[#00aaff] mb-4 border-b pb-2 border-[#0077b6]">
              Features
            </h2>
            <p className="text-gray-700 dark:text-[#cbd5e1] leading-relaxed">
              [Placeholder for Features section content...]
            </p>
          </section>
        )}

        {activeSection === "customizable" && (
          <section className="p-6 rounded-xl shadow-md border dark:border-[#1e3e62]">
            <h2 className="text-2xl font-bold text-[#00aaff] mb-4 border-b pb-2 border-[#0077b6]">
              Customizable
            </h2>
            <p className="text-gray-700 dark:text-[#cbd5e1] leading-relaxed">
              [Placeholder for Customizable section content...]
            </p>
          </section>
        )}

        {activeSection === "whatsnew" && (
          <section className="p-6 rounded-xl shadow-md border dark:border-[#1e3e62]">
            <h2 className="text-2xl font-bold text-[#00aaff] mb-4 border-b pb-2 border-[#0077b6]">
              What's New
            </h2>
            <p className="text-gray-700 dark:text-[#cbd5e1] leading-relaxed">
              [Placeholder for What's New section content...]
            </p>
          </section>
        )}

        {activeSection === "brochure" && (
          <section className="p-6 rounded-xl shadow-md border dark:border-[#1e3e62] text-center">
            <h2 className="text-2xl font-bold text-[#00aaff] mb-4 border-b pb-2 border-[#0077b6]">
              Download Brochure
            </h2>
            <a
              href="/files/qsoft-brochure.pdf"
              className="inline-block mt-4 px-6 py-2 bg-[#00aeef] text-white rounded hover:bg-[#008fcc] transition"
              download
            >
              Download PDF
            </a>
          </section>
        )}
      </main>
    </>
  );
};

export default ProductCore;
