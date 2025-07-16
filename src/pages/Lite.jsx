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
        <h3 className="text-xl font-semibold mb-3">Here’s we’re going to describe a set of versatile AIMS ERP (Hybrid) Features:</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-[#cbd5e1] space-y-2">
          <li>Accounts Management Module</li>
          <li>Inventory Management Module</li>
          <li>CRM CMS Module</li>
          <li>Manufacturing / Production Module</li>
          <li>HR / Payroll Management</li>
          <li>Fixed Assets Management Module</li>
          <li>Project Management Module</li>
          <li>Documents Management Module</li>
          <li>Cheque Management Module</li>
          <li>POS Module</li>
          <li>Tenancy Management Module</li>
          <li>Budget Management Module</li>
        </ul>
        <h3 className="text-xl font-semibold mb-3">Accounts Management Module</h3>
        <p className="mt-3">
          Accounts and Finance Module gives you the power to take control of your each and every financial decision. You can easily manage routine business transactions using our user friendly voucher system, Accounts Receivables and Accounts Payables.
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-[#cbd5e1] space-y-2">
          <li>Manage Accounts Receivables & Accounts Payables</li>
          <li>Manage Bank Received & Payment Vouchers</li>
          <li>Manage Cash Received & Payment Vouchers</li>
          <li>General Ledger / Accounts Ledger / Expense Ledger</li>
          <li>Cash Book / Bank Book</li>
          <li>Financial Reporting (Trial Balance, Profit & Loss, Balance Sheet)</li>
          <li>And much more…</li>
        </ul> 
        <h3 className="text-xl font-semibold mb-3">Inventory Management Module</h3>
        <p className="mt-3">
          Use Cutting-Edge automation and advanced routes to manage any warehouse Inventory. Track every stock move With AIMS ERP (Hybrid) Unique Double-Entry Inventory System and Instant Access any stock on your fingertips. Easy to Use and get the most efficient stocking and improve all your internal operations like Inventory Purchases, Sales, Stock Issue, Stock Received, Stock Transfer, Stock Adjustments between different locations or stores.
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-[#cbd5e1] space-y-2">
          <li>Dynamic Product Chart with Multi-UOM</li>
          <li>Inventory Forecasting & Valuations</li>
          <li>Inventory Handling using Multiple Locations & Stores</li>
          <li>Stock Received / Issued Note, Inward/Outward Gate Pass</li>
          <li>Stock Transfer between Locations</li>
          <li>Slow & Fast Moving Stock</li>
        </ul>
        <h3 className="text-xl font-semibold mb-3">Sales Management Module</h3>
        <p className="mt-3">
          Enter Invoices with Ease. Easily create and maintain all your Quotes, Prepayments, A/R Payments, Sales Orders, Back Orders, Sales Invoices with a very intuitive user interface. Quickly copy and create new based on existing or convert Quotes to Sales Orders, Sales Orders to Delivery Orders, Delivery Orders to Sales Invoices and Sales Invoices to Returns saving you time. Be alerted to Customers Credit Limits or existing credits that can be applied to an order and lookup customers past history as well as the price they last paid for an item
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-[#cbd5e1] space-y-2">
          <li>Sales Inquiry / Quotations / Sales Order / Delivery Order</li>
          <li>Sales Order Status</li>
          <li>Sales Tax Invoice</li>
          <li>Sales Invoice (Without Tax)</li>
          <li>Sales Return</li>
         </ul>  
         <h3 className="text-xl font-semibold mb-3">Purchase Management Module</h3>
        <p className="mt-3">
          Easily create and maintain all your Purchase Orders, Purchase Invoices, Prepayments and A/R Payments with a very intuitive user interface. Quickly copy and create new based on existing or convert Purchase Orders to Goods Received Note and Good Received Note to Purchase Invoices and Purchase Invoices to Purchase Returns saving you time. Be alerted to vendor credit limits or existing credits that can be applied to an order. Lookup vendors past order history and item pricing. Lookup vendor past history as well as the price you last paid for an item.
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-[#cbd5e1] space-y-2">
          <li>Purchase Requisitation / RFQ / Purchase Order / Goods Received Note</li>
          <li>Purchase Order Status</li>
          <li>Purchase Tax Invoice</li>
          <li>Purchase Invoice (Without Tax)</li>
          <li>Purchase Return</li>
         </ul> 
         <h3 className="text-xl font-semibold mb-3">CRM Module</h3>
        <p className="mt-3">
         At the heart of Sales & Marketing is one of the CRM module in which you can generate Leads, Opportunities creations and follow up a customer in each and every steps of routine deals. Check your customers history, Estimate/Quotes, To Do, Notes, Contacts, Emails, File Attachments, Activities, Analysis, Credit Limits etc. and much more.
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-[#cbd5e1] space-y-2">
          <li>Create Leads, Opportunities, Campaign</li>
          <li>Create Quotes / Estimates / Orders</li>
          <li>Create To Do Tasks</li>
          <li>Create Notes</li>
         </ul> 
         <h3 className="text-xl font-semibold mb-3">Manufacturing / Production Module</h3>
        <p className="mt-3">
         Streamline your entire manufacturing process to help you respond quickly to customer demands. The integrated manufacturing module gives you the tools you need including, bill of materials (BOM), Factory Overhead expenses, Raw Material Costs and routine Finished Goods / Production details etc.
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-[#cbd5e1] space-y-2">
          <li>Production Planner</li>
          <li>Finished Goods</li>
          <li>Bill Of Material (BOM)</li>
          <li>Outsource Manufacturing Handling</li>
          <li>Raw Material Issuing Note</li>
          <li>Control Daily / Monthly Production</li>
          <li>Work Order</li>
          <li>Control Raw Material Consumption</li>
          <li>Work-In-Progress (WIP)</li>
          <li>Control Factory Overheads (FOH)</li>
          <li>And much more…</li>
         </ul> 
         <h3 className="text-xl font-semibold mb-3">HR Payroll Module</h3>
        <p className="mt-3">
          Helps you to prepare salary sheets in an efficient and timely manner with generation of all reports. It do comes with salary settings, holiday settings, attendance, pay heads, designations, advance payment, salary voucher and pay slip options.
        </p>
         <h3 className="text-xl font-semibold mb-3">Fixed Assets Module</h3>
        <p className="mt-3">
          Fixed Asset Management Module provides a central repository for storing and retrieving your asset records, allowing you to quickly look up information about a specific asset or group of assets. Check-in, Check-out, Assets Sales/Disposal details etc. Fixed Asset module is designed to work “out of the box” with very little configuration required. You can manage all kind of your organizations Assets and calculate Yearly/Monthly Depreciation with all the financial depreciation methods in a single click.
        </p>
         <h3 className="text-xl font-semibold mb-3">Project Management Module</h3>
        <p className="mt-3">
          Integrated Project Module is a powerful and comprehensive software designed to track, manage, and optimize your company's projects sourcing. You can managing all kind of project related routine task and resources utilizing for a specific project and calculate profit & loss for any project.
        </p>
         <h3 className="text-xl font-semibold mb-3">Documents Management Module</h3>
        <p className="mt-3">
          Our Document Management module allow you to store and download company's important documents in digital format within software and reduce paper work load. It's capable of keeping a record of the various versions created and modified by different users. You can manage all documents in one place under different grouping and categories option. Our purpose is to provide you most secure and paperless work for your business.
        </p>
         <h3 className="text-xl font-semibold mb-3">Cheques Management Module</h3>
        <p className="mt-3">
          Its Integrated applications helps you to efficiently manage Post Dated Cheques (PDC) Payable, Receivable and PDC clearance. Automatically convert PDC to Ledger Transactions, PDC Due Date Notifications an much more…
        </p>
         <h3 className="text-xl font-semibold mb-3">Point Of Sale (POS) Module</h3>
        <p className="mt-3">
          Point of Sale option will give you control over many different areas of your business operations increasing efficiency and profitability. It is easy to create new invoice within seconds. More suitable for counter sales.
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-[#cbd5e1] space-y-2">
          <li>POS Quick Invoicing with Barcode Scanning or Manual Products Lookup Search</li>
          <li>Print POS Receipts</li>
          <li>Day Open and Day Closing option</li>
          <li>Daily Day End Report</li>
          <li>Barcode Labels Generating on fingertips</li>
          <li>Customize Barcode Designing option</li>
          <li>Check Profit Margin on POS Screen option</li>
          <li>Daily / Monthly Sales Reports</li>
          <li>And much more…</li>

          {/*<li className="flex items-center gap-2">
            <Check className="text-[#00aeef] flex-shrink-0" size={18} />
              <span className="leading-tight">
                This is your text which can be short or very very long spanning multiple lines.
              </span>
          </li> */}

          {/* <li className="flex gap-2">
            <div className="flex items-center" style={{ minHeight: 18, width: 18 }}>
              <Check className="text-[#00aeef]" size={18} />
            </div>
            <span className="leading-tight">
              Your text here.
            </span>
          </li> */}
        </ul> 
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
              AIMS ERP Standard
            </h1>
            <p className="mt-4 text-lg md:text-xl font-light">
              Discover QSoft AIMS ERP Standard — the perfect choice for growing small businesses.
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
