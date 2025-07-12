import React, { useState } from "react";
import { Helmet } from "react-helmet";

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-3">All-in-One Business Accounting Software</h3>
        <p>
          AIMS (Hybrid) is the first .NET Accounting and ERP software that is Connected, Customizable and Scalable. This software is a powerful, yet simple to use accounting and ERP solution. You will find much time has been spent in making the interface appealing and easy to understand yet still provides all the power your organization needs to run your business. This will save you a lot of time and money when implementing the software.
        </p>
        <p>
          AIMS (Hybrid) software has all of the functions you need like order entry, AR, AP, purchasing, general ledger, inventory manager, manufacturing, reporting, payroll, POS, job costing, CRM and banking, but it also has features that will be crucial as you grow. It even allows you to integrate with other programs like your shopping cart, Payment Processing, ShipRush, AbleCommerce and almost any other application locally or over the web.
        </p>
        <h3 className="text-xl font-semibold mb-3">Customizable Software without Limitations</h3>
        <p className="mt-3">
          One of the most daunting prospects for most businesses is the idea of customizing their accounting and ERP application. Everyone has heard horror stories of the astronomical amount of effort required to maintain a custom system and the panic that ensues when a vendor ceases supporting a custom application. AIMS (Hybrid) accounting software solutions allows you to easily create a customized version for your business.
        </p>
        <p>
          AIMS (Hybrid) is architected to allow you to create customized forms based on the standard forms that can "inherit" the qualities of the standard forms rather than overwriting them. This means that when a new update of AIMS (Hybrid) accounting software is released, you can simply install it on your system normally and your custom form will be unaltered.
        </p>
        <p>
          This breakthrough means that you won't have to do a major implementation every time you receive an update or bug fix for your software and you can feel free to make AIMS (Hybrid) an application uniquely suited to your business without eliminating your ability to upgrade.
        </p>
        <h3 className="text-xl font-semibold mb-3">Connect with Coworkers, Clients, Trading Partners and Vendors</h3>
        <p className="mt-3">
          One of the biggest trends of the past decade has been globalization. Even small businesses now have employees telecommuting and many businesses have established offices all over the globe. This can be a challenge when trying to share information because of the significant costs associated with creating electronic ties between two or more locations. AIMS (Hybrid) can solve this solution by allowing you to share information in the accounting software through the internet.
        </p>
        <p>
          The .NET framework handles these challenges easily by allowing you to use the regular internet to connect to your data from any location. The data is protected by the security of SQL Server as well as the built-in security of AIMS (Hybrid), but it is accessible to your users by simply typing in the server location (IP address) and name. You can then login normally. There is no new software to install and you have full access to all the functions of the software without the limitations of a browser-based application that is completely Web-based.
        </p>
        <h3 className="text-xl font-semibold mb-3">Simple Licensing Options</h3>
        <p className="mt-3">
          It can be extremely frustrating to evaluate software that is priced by the "module" or even "granule" and try to understand what you are actually getting. It's similar to walking into a model home that is in your price range and falling in love with it, only to find out later that most of what you've seen in the model isn't included.
        </p>
        <p>
          When you view the demo of AIMS (Hybrid) accounting software, you will be seeing exactly what you will receive. We don't create confusing pricing structures because we know that it can be overwhelming and difficult to comparison shop. Also, we know that your business can change and we want you to have all of the available functionality at your fingertips so that if your needs grow, your accounting software will be prepared to accommodate them.
        </p>
      </>
    ),
  },
  {
    id: "benefits",
    title: "Benefits",
   content: (
      <>
        <h3 className="text-xl font-semibold mb-3">All-in-One Business Solution</h3>
        <p>
          AIMS (Hybrid) tightly integrates all its modules eliminating the need for your business to purchase multiple applications.  This integration gives you a very consistent look and feel and cuts the learning time down considerably.
        </p>
        <p>
          Not only does AIMS (Hybrid) include all the major modules you would need to run your business, it can also be integrated with most external applications and be customized any way you want.
        </p>
        <h3 className="text-xl font-semibold mb-3">User Interface</h3>
        <p className="mt-3">
          One of the major advantages of using AIMS (Hybrid) is the incredible user interface designed around our powerful ERP application. Tens of thousands of hours have gone into creating the best user interface on the market. This is a great benefit to our customers as they have a much easier time learning AIMS (Hybrid) and it reduces implementation and training.
        </p>
        <p>
          With our users in mind, Qsoft has implemented the ability to change and save the layout of grids, columns of information and filtering and searching options. This will allow users to optimize their time which will increase productivity.
        </p>
        <p>
          Another user specific feature is the ability to change desktop graphics and themes. Graphics and the visual display of information can make a user feel comfortable and content as they work
        </p>
        <h3 className="text-xl font-semibold mb-3">Greatly reduce implementation times</h3>
        <p className="mt-3">
          AIMS (Hybrid) is so easy to install, update and learn that it will save you time, money, training and setup. Many of our customers said it took them half the amount of time to implement than their previous solution.
        </p>
        <h3 className="text-xl font-semibold mb-3">Customizable to fit any Business</h3>
        <p className="mt-3">
          AIMS (Hybrid) can be customized to fit any of your business needs. Whether you have a team on staff to handle making custom changes, or hiring our development team, we provide the tools and knowledge you need to make AIMS (Hybrid) work for your business.
        </p>
        <p>
          The AIMS (Hybrid) SDK contains details of forms, controls, tables, fields, functions, stored procedures, namespaces and class modules with descriptions and examples. It will allow you to integrate any other Visual Studio application with AIMS (Hybrid). You will be able to customize AIMS (Hybrid) and even add new functionality using the SDK. The advantage of doing customization work with the SDK is that the changes made will be separate from the core application which makes debugging the code much easier. With this approach you will be able to take advantage of all future updates to AIMS (Hybrid) and it will not affect your customization work.
        </p>
        <h3 className="text-xl font-semibold mb-3">Latest Technology</h3>
        <p className="mt-3">
          The .NET framework allows us to customize and add features faster than most other solutions. It also guarantees that you will be in the most up to date technology.
        </p>
        <h3 className="text-xl font-semibold mb-3">Innovation</h3>
        <p className="mt-3">
          We are constantly innovating and enhancing AIMS (Hybrid) based on customer feedback. If our customer has a suggestion, we listen and often implement that suggestion in months rather than years like our competitors.
        </p>
        <h3 className="text-xl font-semibold mb-3">Works for many types of Industries</h3>
        <p className="mt-3">
          AIMS (Hybrid) works for many industries right out of the box. Several of the industries AIMS (Hybrid) works best for, include the following:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-[#cbd5e1] space-y-2">
          <li>Wholesale</li>
          <li>Manufacturing</li>
          <li>Distribution</li>
          <li>Automotive</li>
          <li>Medical</li>
          <li>Nonprofit</li>
          <li>Contractors</li>
          <li>Professional Services</li>
          <li>Retailers</li>
          <li>Hospitality</li>
        </ul>
        <h3 className="text-xl font-semibold mb-3">Prompt round the clock Support</h3>
        <p className="mt-3">
          We pride ourselves on customer satisfaction and support is a big part of that. We provide prompt and friendly support 24 hours a day, 6 days a week. Our dedicated and hardworking product experts work around the clock to deliver the best solutions on the market.
        </p>
        <p className="mt-3">
          Qsoft's support turnaround times are some of the best in the industry, so you get the answers to your questions when you need them. This is our way of saying you deserve nothing less than proactive strategic assistance, mission-critical services and collaborative support solutions when you need it.
        </p>
      </>
    ),
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
        className="inline-block mt-4 px-6 py-3 bg-[#0077b6] text-white rounded-lg shadow-lg hover:bg-[#005a9c] hover:scale-105 transition duration-300"
        download
      >
        📄 Download PDF Brochure
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
              AIMS ERP (Hybrid)
            </h1>
            <p className="mt-4 text-lg md:text-xl font-light">
              Discover the advanced capabilities of AIMS ERP, built to power your growing enterprise.
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

      {/* Main Content */}
      <main className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 md:px-8 gap-8 py-12 text-black dark:text-white">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4">
          <nav className="sticky top-4 bg-white dark:bg-[#25476c] rounded-xl shadow-md p-4 space-y-3">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`block text-left w-full px-3 py-2 rounded-lg transition font-semibold focus:outline-none focus:ring-2 focus:ring-[#00aaff] ${
                  activeSection === section.id
                    ? "bg-[#00aaff] text-white"
                    : "hover:bg-gray-100 dark:hover:bg-[#1e3e62] text-black dark:text-white"
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <section className="flex-1 bg-white dark:bg-[#25476c] rounded-xl shadow-md p-6 border border-gray-200 dark:border-[#1e3e62]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#00aaff] mb-4 border-b pb-2 border-[#0077b6]">
            {sections.find((s) => s.id === activeSection)?.title}
          </h2>
          <div className="text-gray-700 dark:text-[#cbd5e1] leading-relaxed space-y-4">
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
