import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Check } from "lucide-react"; // ✅ Tick icon import

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
    content: (
      <>
        <h3 className="text-xl font-semibold mb-3">AIMS (Standard) - Accounts & Inventory Management System</h3>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
        <img
          src="/image/standard1.png"
          alt="Standard Screenshot 1"
          className="w-full md:w-1/2 rounded shadow"
        />
        </div>
        <h3 className="text-xl font-semibold mb-3">Complete Package for Any Business Domain</h3>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
        <img
          src="/image/standard2.png"
          alt="Standard Screenshot 2"
          className="w-full md:w-1/2 rounded shadow"
        />
        </div>
        <h3 className="text-xl font-semibold mb-3">INTRODUCTION</h3>
        <p className="mt-3">
          Plan, Source, Stock, Sell, Recover, and Analyze – all in one, unified IT platform. By integrating workflows and technology with your CUSTOMERS, SUPPLIERS, WORKFORCE, BUSINESS PROCESSES. You can find hidden ROI within your business and deliver meaningful customer experiences.
        </p>
        <p className="mt-3">
          AIMS (standard) covers all aspects of accountancy as per the prescription of International Standards of Bookkeeping, Manages the Taxation, offers plenty of space for data management and assists the Management to perform the Business Operations smoothly.
        </p>
        <h3 className="text-xl font-semibold mb-3">User Login</h3>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
        <img
          src="/image/standard3.png"
          alt="Standard Screenshot 3"
          className="w-64 h-120 rounded shadow"
        />
        </div>
        <h3 className="text-xl font-semibold mb-3">DASHBOARD OVERVIEW</h3>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
        <img
          src="/image/standard4.png"
          alt="Standard Screenshot 4"
          className="w-full md:w-1/2 rounded shadow"
        />
        </div>
        <ul className="list-disc list-inside text-gray-700 dark:text-[#cbd5e1] space-y-2">
          <li>Dash board with a Real-Time</li>
          <li>Graphical view of your Business</li>
          <li>Purchases & Sales</li>
          <li>Active & Inactive Products</li>
          <li>Dead Sales Items</li>
          <li>Reorder Items</li>
          <li>Documents Statistics</li>
          <li>Scheduled Tasks</li>
          <li>To Do List</li>
        </ul>
        <h3 className="text-xl font-semibold mb-3">Accounts Management (AM)</h3>
        <p className="mt-3">
          AIMS (Standard) Accounts and Finance Module gives you the power to take control of your each and every financial decision. It is the best solution that reconciles progress and prosperity for the businesses in Pakistan.
        </p>
        <p className="mt-3">
          AIMS (Standard) Accounts and Finance Module works in accordance with the International Standards for Bookkeeping so that you can prepare your reports as per the auditory standards of Pakistan. Along with that, it gives you the complete and comprehensive report of your that, it gives you the complete and comprehensive report of your business performance which helps you in making strategic decisions for your organization.
        </p>
        <p className="mt-3">
          AIMS (Standard) offer all those services that are necessary to run a successful business. AIMS (Standard) accounts Module is one of our key services, and we have the upper hand because of our expertise in accounts and related fields. It is obvious that with such Financial Software Solutions in Pakistan businesses could cut their running cost and can maximize their profits. 
        </p>
        <h3 className="text-xl font-semibold mb-3">KEY FEATURES OF AM</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-[#cbd5e1] space-y-2">
          <li>Flexible GL Account (Chart of Account) and Sub-Account</li>
          <li>Payment & Receipt Vouchers</li>
          <li>Cash & Bank Vouchers with Cheques Management</li>
          <li>Journal Vouchers</li>
          <li>Ability to Create Custom Vouchers</li>
          <li>Scheduled/Recurring Transactions</li>
          <li>Reversing Entries</li>
          <li>Bulk Payment and Receipt Entry</li>
          <li>Auto Receipt and Payment for Cash</li>
          <li>Transactions</li>
          <li>Bank Reconciliation</li>
          <li>Multi Level Trial Balance</li>
          <li>Final Statements </li>
        </ul>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <img
            src="/image/standard5.png"
            alt="Standard Screenshot 5"
            className="w-full md:w-1/2 rounded shadow"
          />
          <img
            src="/image/standard6.png"
            alt="Standard Screenshot 6"
            className="w-full md:w-1/2 rounded shadow"
          />
        </div>  
        <h3 className="text-xl font-semibold mb-3">Create Supplier & Customer</h3>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
        <img
          src="/image/standard7.png"
          alt="Standard Screenshot 7"
          className="w-full md:w-1/2 rounded shadow"
        />
        <img
          src="/image/standard8.png"
          alt="Standard Screenshot 8"
          className="w-full md:w-1/2 rounded shadow"
        />
        </div>
        <h3 className="text-xl font-semibold mb-3">Cash Received & Cash Payment Voucher</h3>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
        <img
          src="/image/standard9.png"
          alt="Standard Screenshot 9"
          className="w-full md:w-1/2 rounded shadow"
        />
        <img
          src="/image/standard10.png"
          alt="Standard Screenshot 10"
          className="w-full md:w-1/2 rounded shadow"
        />
        </div>
        <h3 className="text-xl font-semibold mb-3">Bank Received & Bank Payment Voucher</h3>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
        <img
          src="/image/standard11.png"
          alt="Standard Screenshot 11"
          className="w-full md:w-1/2 rounded shadow"
        />
        <img
          src="/image/standard12.png"
          alt="Standard Screenshot 12"
          className="w-full md:w-1/2 rounded shadow"
        />
        </div>
        <h3 className="text-xl font-semibold mb-3">Journal Voucher</h3>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
        <img
          src="/image/standard13.png"
          alt="Standard Screenshot 13"
          className="w-full md:w-1/2 rounded shadow"
        />
        </div>
        <h3 className="text-xl font-semibold mb-3">Inventory Management (IM)</h3>            
        <p className="mt-3">
          One of the finest examples of First-In-First-Out Inventory Management Software development in Pakistan. With AIMS (Standard) Inventory and Warehouse Management it could become much easier. This comprehensive solution acts as the warehouse manager through its easy blistering features. It all begins with the Standard Inventory Management, in which the database solution offers plenty of slots to register your stock. It keeps on notifying the management about the current stock status and valuations.
        </p>
        <p className="mt-3">
          AIMS (Standard) Inventory and Warehouse Management Module makes the set of a complete business solution from Procure, Warehouse Management up to sales. It is a new definition of the Business Management tools that allows Advance Sales without disturbing Cost. And as a result prosperity is guaranteed. When it is about the business, the clientele matters a lot, as that is fundamental to earning a profit. With AIMS (Standard) Inventory and Warehouse Management, you can satisfy the needs of your clients without any delay. 
        </p>
        <h3 className="text-xl font-semibold mb-3">KEY FEATURES OF IM</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-[#cbd5e1] space-y-2">
          <li>Dynamic Product Chart with Multi Units of Measure</li>
          <li>Active & In-Active Products</li>
          <li>Unicode Language Option</li>
          <li>Multiple Bar-coding</li>
          <li>Advanced & Customized Filtration</li>
          <li>Grouping & Categorization of Products</li>
          <li>Automated & Manual Re-Order Management</li>
          <li>Inventory Forecasting & Valuation</li>
          <li>Inventory Optimization</li>
          <li>Multiple Location/Warehouses</li>
          <li>Warehouse Management</li>
          <li>Billing & Invoicing</li>
          <li>Purchase vs. Sales, History, Product Image</li>
        </ul>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <img
            src="/image/standard14.png"
            alt="Standard Screenshot 14"
            className="w-full md:w-1/2 rounded shadow"
          />
          <img
            src="/image/standard15.png"
            alt="Standard Screenshot 15"
            className="w-full md:w-1/2 rounded shadow"
          />
        </div>  
        <h3 className="text-xl font-semibold mb-3">Add/Search Multiple Barcode & Batch Barcode Printing</h3>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
        <img
          src="/image/standard16.png"
          alt="Standard Screenshot 16"
          className="w-full md:w-1/2 rounded shadow"
        />
        <img
          src="/image/standard17.png"
          alt="Standard Screenshot 17"
          className="w-full md:w-1/2 rounded shadow"
        />
        </div>
        <h3 className="text-xl font-semibold mb-3">Purchase Order Management (POM)</h3>            
        <p className="mt-3">
          Smart Purchases are worthy for any business. AIMS (Standard) has a unique Purchase Order Management System that includes System Generated as well as Manual Purchase Order. Purchase Order Status and tracking system allows you to track that specific product.
        </p>
        <p className="mt-3">
         Purchase Invoices and Purchase Returns with Multi UOM allows to quick management of purchases. Document History and to quick management of purchases. Document History and Powerful Advanced Filtration allows you to track and quickly navigate from one document to other.
        </p>
         <p className="mt-3">
         On-invoice Purchase Expenses Controls gives you easily load the delivery and handling costs on products to get accurate profit margins. The Dynamic On-Invoice Cash Payment allows you to directly settle down the liability of purchases.
        </p>
        <h3 className="text-xl font-semibold mb-3">KEY FEATURES OF POM</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-[#cbd5e1] space-y-2">
          <li>Full-functioned Management system for all purchases</li>
          <li>Orders created in detail or in summary form</li>
          <li>On-screen using stock items</li>
          <li>All order transactions may be viewed, modified, printed and/or deleted up to the point when the goods are marked received.</li>
          <li>Orders may be emailed directly to the Suppliers</li>
          <li>Orders may be searched by Supplier, Date or by ‘KEY-WORD search’</li>
          <li>Manual Purchase Order</li>
          <li>Purchase History</li>
          <li>Attachment with Every PO/PI </li>
        </ul>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <img
            src="/image/standard18.png"
            alt="Standard Screenshot 18"
            className="w-full md:w-1/2 rounded shadow"
          />
          <img
            src="/image/standard19.png"
            alt="Standard Screenshot 19"
            className="w-full md:w-1/2 rounded shadow"
          />
        </div>  
        <h3 className="text-xl font-semibold mb-3">Sales Invoice Management (SIM)</h3>            
        <p className="mt-3">
         Smart Sales are Healthy for any Business. AIMS (Standard) has a unique Sales Order Management System in Multi UOM that includes Sales Orders, Sales Invoice, and Sales Returns with on-invoice Expenses Controls and On-Invoice Cash Receipt along with Salesman Credit Balance Control System.
        </p>
        <p className="mt-3">
         Multiple Sales Discounts and Bonuses with FIFO method allows you to run smooth Business Operation. On-invoice Profit Calculator allows Management to calculate accurate Sales Margin in respected invoice.
        </p>
         <p className="mt-3">
         Admin controlled rights to Edit & Delete Invoice. Multiple page size, Multiple Language prints gives you the ease of billing. This Module Allows you to make Advance Sales with accurate profit calculations. 
        </p>
        <h3 className="text-xl font-semibold mb-3">KEY FEATURES OF SIM</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-[#cbd5e1] space-y-2">
          <li>Sales Orders</li>
          <li>Sales Invoice, and Sales Returns</li>
          <li>On-Invoice Expenses Controls</li>
          <li>On-Invoice Cash Receipt along with Salesman Credit Balance control system.</li>
          <li>Multiple Sales Discounts and Bonuses with</li>
          <li>FIFO method</li>
          <li>On-invoice Profit Calculator</li>
          <li>Admin controlled rights to Edit & Delete</li>
          <li>Invoice</li>
          <li>Multiple Page Size and Language Prints.</li>
          <li>Advance Sales with Accurate Profit</li>
          <li>Calculations</li>
          <li>Audit Tracking For Every Purchase Vs. Sales</li>
          <li>On-invoice Detailed History</li>
        </ul>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <img
            src="/image/standard20.png"
            alt="Standard Screenshot 20"
            className="w-full md:w-1/2 rounded shadow"
          />
          <img
            src="/image/standard21.png"
            alt="Standard Screenshot 21"
            className="w-full md:w-1/2 rounded shadow"
          />
        </div>
        <h3 className="text-xl font-semibold mb-3">Point of Sale (POS)</h3>            
        <p className="mt-3">
         AIMS (Standard) - POS offers flexible, high-speed Point-of-Sale software functionalities that are specifically designed for specialized retail operations, and can be used with Barcode Readers, Cash Drawers, Receipt Printers and Display Pole.
        </p>
        <p className="mt-3">
         Whether you need to manage a single retail location, operate a cash and carry business, or face the challenge of tying together a few brick and mortar stores, increase your accuracy.
        </p>
         <p className="mt-3">
         This POS Software in Pakistan has been mainly designed to cut your transaction processing costs as well save your time so that you may do more and more business in less time.
        </p>
        <p className="mt-3">
         Ahead of the ease, the AIMS (Standard) - POS assists you with keeping an eye on your stock. It makes a count of everything you have in your inventory and notifies you if anything is running out of stock. 
        </p>
        <h3 className="text-xl font-semibold mb-3">KEY FEATURES OF SIM</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-[#cbd5e1] space-y-2">
          <li>Sales Orders</li>
          <li>Sales Invoice, and Sales Returns</li>
          <li>On-Invoice Expenses Controls</li>
          <li>On-Invoice Cash Receipt along with Salesman Credit Balance control system.</li>
          <li>Multiple Sales Discounts and Bonuses with</li>
          <li>FIFO method</li>
          <li>On-invoice Profit Calculator</li>
          <li>Admin controlled rights to Edit & Delete</li>
          <li>Invoice</li>
          <li>Multiple Page Size and Language Prints.</li>
          <li>Advance Sales with Accurate Profit</li>
          <li>Calculations</li>
          <li>Audit Tracking For Every Purchase Vs. Sales</li>
          <li>On-invoice Detailed History</li>
        </ul>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <img
            src="/image/standard20.png"
            alt="Standard Screenshot 20"
            className="w-full md:w-1/2 rounded shadow"
          />
          <img
            src="/image/standard21.png"
            alt="Standard Screenshot 21"
            className="w-full md:w-1/2 rounded shadow"
          />
        </div>
        <h3 className="text-xl font-semibold mb-3">Key Features</h3>
        <ul className="space-y-3 text-gray-700 dark:text-[#cbd5e1]">
          {[
            "First and only one ERP (HYBRID) solution in Pakistani Market means you can use our software on any device anywhere like Desktop (Windows) and Cloud (Web & Mobiles) with same data structure.",
            "Each document has attachment facility means you can attach any type of related documents in PDF, Word, Picture or any other format with current document.",
            "Built-in reports creating module means user can create any report or modify existing reports by himself without help of any developers.",
            "Built-in form layout design/redesign feature means you can customize entire forms layout by just drag & drop",
            "Highly secured user’s data entries mean you can catch even a single click of user in whole application with Audit Trail.",
            "Analysis Any data with Charts / Graphs and save these analyses on user level for later analysis.",
            "Create multiple customized Analysis for any module data using built-in charts and pivot table.",
            "Developed using Latest Microsoft. Net Core Technologies with premium tools.",
            "Extra-Ordinary High-Level user security features.",
            "Built-In data validation rules applicable on user’s level.",
            "Rich High-Level Excel Style unique data filtration",
            "Most Importantly! First ERP in which we can make 60% customizable on user level by using our powerful built-in App Model.",
            "Modern Sleek-Look User Interface (UI) with hundredth of eye-catching different themes/styles.",
            "Multiple Dynamic Dashboard creation option/modification on user level.",
            "Microsoft Word Style reporting creation options.",
            "Copy one document to another document like sales to sales return, purchase to purchase return, cash payment voucher to cash received voucher and so on.",
            "Mobile friendly search like a google.",
            "Notes in all the documents editing using our built-in word just like a Microsoft word.",
            "Three Levels data entry posting facility like Posted By, Checked By & Approved By.",
            "Built-In SQL Query Builder to edit and deploy SQL database queries",
            "Built-In Customized additional fields adding option on any form or document.",
            "Top level Documents Security/Permission options like navigation permission options, Forms Type Permission options, Content’s or data levels permission options, Criteria based permission options with certain conditions.",
            "Unlimited Chart of Accounts Level.",
            "Powerful fixed Asset Management Modules with built-in auto Depreciation Schedule.",
            "Conditional Appearance rules applicable on user level.",
            "Built-In Customizable Barcode & QR-Code Generation module.",
            "Built-In Font Size Change option to increase/decrease for all the application contents.",
            "Drilldown option on every document to navigate data and quickly jump from one screen to another screen.",
            "Unique delete feature means when user deleted a record it is recoverable any time by admin.",
            "Built-in Office means you can use our own Microsoft Office like Word, Excel, PDF Reader, Scheduler as our own office without installing Microsoft Office.",
            "Exporting & Emailing document like in PDF, Word, Excel, HTML, Image format etc...",
            "Multiple Languages support.",
            "Multiple Currencies Support.",
            "And many more exciting features",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="text-[#00aeef] flex-shrink-0" size={18} />
              <span className="leading-tight">{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
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
  const activeContent = sections.find((s) => s.id === activeSection);

  return (
    <>
      {/* SEO Head */}
      <Helmet>
        <title>QSoft ERP Lite Details</title>
        <meta
          name="description"
          content="Learn about QSoft ERP Lite — affordable ERP for small businesses with essential features."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
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
              AIMS ERP (Standard)
            </h1>
            <p className="mt-4 text-lg md:text-xl font-light">
              Discover Q-Soft AIMS ERP Standard — the perfect choice for growing small businesses.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/image/standard.jpeg"
              alt="QSoft ERP Lite Software Illustration"
              className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main
        className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 md:px-8 gap-8 py-12 text-black dark:text-white dark:bg-[#1e3e62]"
        role="main"
      >
        {/* Sidebar */}
        <aside className="w-full md:w-1/4" aria-label="Product navigation">
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
                aria-current={activeSection === section.id ? "page" : undefined}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <section
          className="flex-1 bg-white dark:bg-[#25476c] rounded-xl shadow-md p-6 border border-gray-200 dark:border-[#1e3e62]"
          aria-labelledby={`${activeContent?.id}-title`}
        >
          <h2
            id={`${activeContent?.id}-title`}
            className="text-2xl md:text-3xl font-bold text-[#00aaff] mb-4 border-b pb-2 border-[#0077b6]"
          >
            {activeContent?.title}
          </h2>
          <article
            className="text-gray-700 dark:text-[#cbd5e1] leading-relaxed space-y-4"
            role="region"
            aria-label={activeContent?.title}
          >
            {typeof activeContent?.content === "string" ? (
              <p>{activeContent.content}</p>
            ) : (
              activeContent?.content
            )}
          </article>
        </section>
      </main>
    </>
  );
};

export default Lite;
