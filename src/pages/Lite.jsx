import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Check } from "lucide-react"; // ✅ Tick icon import

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-3">
          All-in-One Business Accounting & Inventory Solution
        </h3>
        <p>
         AIMS (Standard) is a robust Accounts and Inventory Management System specifically tailored to meet the needs of growing businesses in Pakistan. Built on international standards of bookkeeping and financial control, it offers a fully integrated platform to Plan, Source, Stock, Sell, Recover, and Analyze your entire business lifecycle. It seamlessly unifies your operations with your customers, suppliers, employees, and processes, unlocking hidden ROI and improving productivity across the organization.
        </p>

        <h3 className="text-xl font-semibold mb-3">
          Powerful Financial Management
        </h3>
        <p className="mt-3">
        The Accounts & Finance Module of AIMS (Standard) empowers businesses to maintain accurate records, manage transactions, and gain clear financial insights. It supports flexible GL accounts, journal vouchers, payment and receipt handling, and full bank reconciliation, allowing management to make informed, strategic decisions with confidence. With built-in compliance to international auditing standards, businesses can prepare reports that are audit-ready and fully transparent.
        </p>

        <h3 className="text-xl font-semibold mb-3">
         Smart Inventory Management
        </h3>
        <p className="mt-3">
          AIMS (Standard) offers FIFO-based inventory tracking with real-time updates and forecasting tools. The Inventory Module helps register, monitor, and optimize stock levels using multi-unit measurement, batch barcoding, and automated reorder suggestions. Whether managing one warehouse or multiple locations, the system provides a centralized view of inventory and ensures efficient procurement-to-sales flow, minimizing losses and maximizing client satisfaction.
        </p>

        <h3 className="text-xl font-semibold mb-3">
          Smart Inventory Management
        </h3>
        <p className="mt-3">
          AIMS (Standard) offers FIFO-based inventory tracking with real-time updates and forecasting tools. The Inventory Module helps register, monitor, and optimize stock levels using multi-unit measurement, batch barcoding, and automated reorder suggestions. Whether managing one warehouse or multiple locations, the system provides a centralized view of inventory and ensures efficient procurement-to-sales flow, minimizing losses and maximizing client satisfaction.
        </p>
    
        <h3 className="text-xl font-semibold mb-3">
          Efficient Purchase & Sales Operations
        </h3>
        <p className="mt-3">
          With a streamlined Purchase Order Management (POM) system, businesses can generate and track purchase orders, manage supplier records, and accurately calculate costs including on-invoice expenses. The Sales Invoice Management (SIM) module includes advanced tools for sales orders, profit margin analysis, discount handling, and real-time sales reporting. Admin rights ensure data security, while support for multiple languages and formats enhances billing flexibility.
        </p>

        <h3 className="text-xl font-semibold mb-3">
          Retail-Ready Point of Sale (POS)
        </h3>
        <p className="mt-3">
          Designed for retail environments, AIMS (Standard) includes a high-speed POS system that supports barcode scanners, receipt printers, cash drawers, and even credit/debit card processing. It synchronizes with the accounting and inventory modules, enabling businesses to track stock, handle multiple payment types, and process transactions offline or in the cloud. POS reports offer valuable insights into customer behavior, sales trends, and inventory performance.
        </p>

        <h3 className="text-xl font-semibold mb-3">
          Advanced Reporting & Business Intelligence
        </h3>
        <p className="mt-3">
           The system includes over 100 customizable reports across various modules such as Sales, Inventory, Warehousing, Accounts, and Expenses. With powerful filters and export capabilities, reports can be generated in PDF, Excel, Word, HTML, or image formats. Managers can quickly assess key metrics like profit margins, overdue invoices, sales by product or salesman, and make data-driven decisions to grow the business.
        </p>

        <h3 className="text-xl font-semibold mb-3">
         User-Centric Features & Simplicity
        </h3>
        <p className="mt-3">
           From role-based user access to easy document attachments, SMS device integration, and quick recovery tools, AIMS (Standard) is designed for usability and efficiency. It supports multi-level dashboards, reminder tools, and real-time insights — all contributing to smooth operations. Whether a startup or a scaling enterprise, AIMS (Standard) offers a comprehensive, scalable, and cost-effective ERP experience.
        </p>
      </>
    ),
  },
  {
    id: "benefits",
    title: "Benefits",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-3">
          Designed for Growing Businesses
        </h3>
        <p>
         AIMS (Standard) is tailored specifically for small to medium-sized businesses in Pakistan. It delivers a complete suite of integrated tools for managing finances, inventory, sales, and operations. With a user-friendly interface and localized features, it simplifies complex processes and supports business growth without the overhead costs of large-scale ERP systems.
        </p>

        <h3 className="text-xl font-semibold mb-3">
          Affordable and Scalable ERP Solution
        </h3>
        <p className="mt-3">
        Unlike many expensive ERP platforms, AIMS (Standard) offers an affordable pricing model without compromising on features. Its modular design ensures businesses only pay for what they use, while retaining the ability to scale seamlessly as operations expand. Whether managing a single branch or multiple locations, AIMS adapts to the organization’s needs over time.
        </p>

        <h3 className="text-xl font-semibold mb-3">
         Boosts Operational Efficiency
        </h3>
        <p className="mt-3">
          By automating core accounting and inventory tasks, AIMS (Standard) minimizes manual work and reduces the chances of errors. From generating invoices and purchase orders to tracking stock and calculating taxes, the software simplifies day-to-day operations and enables faster decision-making.
        </p>

        <h3 className="text-xl font-semibold mb-3">
          Real-Time Visibility & Control
        </h3>
        <p className="mt-3">
          AIMS (Standard) provides real-time data insights across your entire business — from sales and inventory levels to customer balances and expenses. This transparency empowers business owners to make informed decisions, avoid stock-outs, and control cash flow with confidence. It also reduces dependency on external consultants for everyday reporting.
        </p>
    
        <h3 className="text-xl font-semibold mb-3">
          Seamless Integration Across Departments
        </h3>
        <p className="mt-3">
          All modules in AIMS (Standard) — including Accounts, Inventory, POS, Purchase, Sales, and Reporting — are interconnected. This means data entered in one module automatically updates related modules, eliminating duplication and ensuring consistency across departments. This integration enhances internal collaboration and workflow.
        </p>

        <h3 className="text-xl font-semibold mb-3">
          Localized Features for the Pakistani Market
        </h3>
        <p className="mt-3">
          AIMS (Standard) is built with a deep understanding of local business practices, tax structures, and reporting needs. It supports Urdu and English interfaces, GST/SRB integration, and prepares audit-ready financials aligned with Pakistani regulatory standards. These features make compliance easy and reliable.
        </p>

        <h3 className="text-xl font-semibold mb-3">
          Robust Data Security & User Access Control
        </h3>
        <p className="mt-3">
           The software offers role-based access controls, ensuring sensitive financial and operational data is only available to authorized users. Each employee can be granted specific rights to view or edit records, reducing risks and enforcing accountability. Frequent data backups and secure logins ensure business continuity.
        </p>

        <h3 className="text-xl font-semibold mb-3">
         Customer Support & Training
        </h3>
        <p className="mt-3">
           AIMS (Standard) includes dedicated customer support and training resources. Whether it’s initial setup, migration from other platforms, or advanced usage queries, businesses receive expert guidance. This ensures maximum ROI and smooth adoption throughout the organization.
        </p>
      </>
    ),
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
          <li>Multiple Sales Discounts and Bonuses with FIFO method</li>
          <li>On-invoice Profit Calculator</li>
          <li>Admin-controlled permissions to edit and delete invoices</li>
          <li>Multiple Page Size and Language Prints.</li>
          <li>Advance Sales with Accurate Profit Calculations</li>
          <li>Audit tracking for every purchase and sale, with on-invoice detailed history</li>
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
        <h3 className="text-xl font-semibold mb-3">KEY FEATURES OF POS</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-[#cbd5e1] space-y-2">
          <li>Multiple Store Configuration</li>
          <li>Multiple Payment types including on account</li>
          <li>Integrated with Accounting System, GL, AR, Inventory, Commissions, Sales Reports</li>
          <li>Supports Multiple-Barcode scanners</li>
          <li>Cash Drawers, Slip & Laser printers</li>
          <li>Supports Credit/Debit Cards</li>
          <li>Customizable on-screen tab order for efficient data entry</li>
          <li>Print to full page invoices or narrow</li>
          <li>Column receipt printers</li>
          <li>Hold an Invoice & Invoices History</li>
          <li>Works offline and/or at Cloud</li>
        </ul>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <img
            src="/image/standard22.png"
            alt="Standard Screenshot 22"
            className="w-full md:w-1/2 rounded shadow"
          />
        </div>
        <h3 className="text-xl font-semibold mb-3">Reports & Business Intelligence</h3>            
        <p className="mt-3">
         High Quality Business Reporting is the Heart of Strong & Sustainable Organization and allows management to make further decisions, including Customers & Suppliers, Products, Sales, Purchase, Receivables & Payables, Profit & Loss, Business’ Net Worth.
        </p>
        <p className="mt-3">
         Real Time Transaction Reporting of Profit, Item Wise Profit Margin, Purchase Invoice wise Profits are very necessary to Margin, Purchase Invoice wise Profits are very necessary to make business decisions.
        </p>
         <p className="mt-3">
         AIMS (Standard) - Reports includes more than 100 Customized Reports of Sales, Inventory, Warehouses, Accounts, Expenses, Salesman Reports, Financial Reports, With Very Powerful & Advance Customized Filtration, Export Facility To pdf, xls, xlsx, doc, jvs, HTML, image, text file, csv, Watermark Printing etc for day to day Business Activities. 
        </p>
        <h3 className="text-xl font-semibold mb-3">Business Intelligence</h3>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <img
            src="/image/standard23.png"
            alt="Standard Screenshot 23"
            className="w-full md:w-1/2 rounded shadow"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <img
            src="/image/standard24.png"
            alt="Standard Screenshot 24"
            className="w-full md:w-1/2 rounded shadow"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <img
            src="/image/standard25.png"
            alt="Standard Screenshot 25"
            className="w-full md:w-1/2 rounded shadow"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <img
            src="/image/standard26.png"
            alt="Standard Screenshot 26"
            className="w-full md:w-1/2 rounded shadow"
          />
        </div>
        <h3 className="text-xl font-semibold mb-3">Key Features</h3>
        <p className="mt-3">
          Master
        </p>
        <ul className="space-y-3 text-gray-700 dark:text-[#cbd5e1]">
          {[
            "Product Chart",
            "Product Group Creation",
            "Categories Creation",
            "UOM Creation",
            "Accounts Group",
            "Chart Of Accounts",
            "Edit Opening Balance",
            "Create Service",
            "Suppliers Center",
            "Customers Center",
            "Area/Route Creation",
            "Create Store/Warehouse",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="text-[#00aeef] flex-shrink-0" size={18} />
              <span className="leading-tight">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3">
          Accounts
        </p>
        <ul className="space-y-3 text-gray-700 dark:text-[#cbd5e1]">
          {[
            "Cash Payment",
            "Cash Received",
            "Bank Payment",
            "Bank Received",
            "Bank Cheque Details",
            "Journal Voucher",
            "Quick Recovery",
            "Service Voucher",
            "Reports",
            "Cash Book",
            "Bank Book",
            "Accounts (Ledger Wise)",
            "All Product List With Stock",
            "Purchases Reports",
            "Purchase Day-Book",
            "Purchases By Category",
            "Sales Man Ledger ( Single Customer )",
            "Sales Man General Ledger",
            "Sales Man Activity Report",
            "Customers Recovery By Area",
            "AR Aging Report",
            "Accounts Group Report",
            "Expense Summery",
            "All Ledger Summery Report",
            "Accounts Activity",
            "Transaction Activity Chart",
            "Daily Business Activity",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="text-[#00aeef] flex-shrink-0" size={18} />
              <span className="leading-tight">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3">
          Purchase
        </p>
        <ul className="space-y-3 text-gray-700 dark:text-[#cbd5e1]">
          {[
            "Purchase Order",
            "Purchase Invoice",
            "Purchase Return",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="text-[#00aeef] flex-shrink-0" size={18} />
              <span className="leading-tight">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3">
          Sales
        </p>
        <ul className="space-y-3 text-gray-700 dark:text-[#cbd5e1]">
          {[
            "Sales Order",
            "Sales Invoice",
            "Sales Tax Invoice",
            "Sales Return",
            "Due Invoices List",
            "Stock Transfer",
            "Stock View By Store",
            "Stock Adjustment",
            "Bulk Price Change",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="text-[#00aeef] flex-shrink-0" size={18} />
              <span className="leading-tight">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3">
          Barcodes
        </p>
        <ul className="space-y-3 text-gray-700 dark:text-[#cbd5e1]">
          {[
            "Multiple Barcodes",
            "Barcodes Printing",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="text-[#00aeef] flex-shrink-0" size={18} />
              <span className="leading-tight">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3">
          Final Reports
        </p>
        <ul className="space-y-3 text-gray-700 dark:text-[#cbd5e1]">
          {[
            "Trial Balance",
            "Income Statement",
            "Stock Valuation By Category",
            "Product Sales By Customers",
            "Re-Order Value Report",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="text-[#00aeef] flex-shrink-0" size={18} />
              <span className="leading-tight">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3">
          Sales Report
        </p>
        <ul className="space-y-3 text-gray-700 dark:text-[#cbd5e1]">
          {[
            "Bulk Invoice Printing",
            "Godown Issue Summery",
            "Over Due Invoices",
            "Sales Day-Book",
            "Sales Summery By Products",
            "Daily Sale Report",
            "Multi Level Sale Summery",
            "Sales By Products",
            "Sales By Sales Man",
            "Monthly Sales Analyst",
            "Dead Items Sales",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="text-[#00aeef] flex-shrink-0" size={18} />
              <span className="leading-tight">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3">
          Purchases By Products
        </p>
        <ul className="space-y-3 text-gray-700 dark:text-[#cbd5e1]">
          {[
            "Purchases By Supplier",
            "Monthly Purchase Analyst",
            "Order Level Report",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="text-[#00aeef] flex-shrink-0" size={18} />
              <span className="leading-tight">{item}</span>
            </li>
          ))}
        </ul>
         <p className="mt-3">
          Tools
        </p>
        <ul className="space-y-3 text-gray-700 dark:text-[#cbd5e1]">
          {[
            "Quick Search",
            "Application Settings",
            "SMS Device Connection",
            "Transaction Posting",
            "User Maintenance",
            "Show Smart Menu",
            "Calculate",
            "Email",
            "Network Computers ",
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
    content: (
      <>
        <h3 className="text-xl font-semibold mb-3">
          Tailored to Fit Your Unique Business Needs
        </h3>
        <p>
         Every business operates differently, and AIMS (Standard) understands that one-size-fits-all solutions often fall short. That’s why the system is built with customization flexibility at its core, empowering businesses to shape the software according to their exact workflows and preferences.
        </p>
        <p>
         From the very first setup, AIMS (Standard) allows you to choose and activate only the modules relevant to your operations—be it Accounting, Inventory, POS, Purchase, Sales, or Reporting. As your business grows, you can add more modules without needing a complete system overhaul.
        </p>

        <h3 className="text-xl font-semibold mb-3">
          Flexible Chart of Accounts & Reporting
        </h3>
        <p className="mt-3">
          The system supports custom Chart of Accounts (COA) structures, allowing organizations to align their financial records with internal policies or external regulatory requirements. Reporting formats can also be customized, including branded invoice templates, tax summaries, and multi-level dashboards tailored to the management team’s KPIs.
        </p>

        <h3 className="text-xl font-semibold mb-3">
         User Roles, Access & Workflows
        </h3>
        <p className="mt-3">
          With customizable user roles and permissions, you can control who accesses what within the platform. You can also define approval hierarchies, set up email alerts for specific actions, and create automated workflows that match your internal processes—whether for order approvals, stock transfers, or payment verifications.
        </p>

        <h3 className="text-xl font-semibold mb-3">
          Field Customization & Localization
        </h3>
        <p className="mt-3">
          Businesses can rename fields, add custom fields to forms, and even hide or show data based on user type. The software supports both Urdu and English, and localized tax rules (GST/SRB) can be configured based on region and industry. Currency, units of measurement, and barcode formats are all adjustable.
        </p>
    
        <h3 className="text-xl font-semibold mb-3">
          Built for Adaptability
        </h3>
        <p className="mt-3">
          Whether you are a retailer, wholesaler, manufacturer, or service provider, AIMS (Standard) provides the flexibility to adapt without needing any coding knowledge. Our technical team can also offer advanced customizations on request, helping businesses meet complex operational or compliance needs with ease.
        </p>
      </>
    ),
  },
  {
    id: "whatsnew",
    title: "What's New",
    content: (
      <> 
        <p className="mt-3">
          What’s New in AIMS (Standard)
        </p>
        <ul className="space-y-3 text-gray-700 dark:text-[#cbd5e1]">
          {[
            "Revamped user interface with a fresh, modern, and intuitive layout for easier navigation across all devices.",
            "Advanced reporting engine with 100+ customizable reports, filters, and export options (PDF, Excel, Word).",
            "Smart document attachment system to link invoices, receipts, and contracts directly with transactions.",
            "Enhanced security with role-based access control, OTP verification, login history, and auto session timeout.",
            "Improved POS integration with faster barcode scanning, real-time sync, and offline support.",
            "Auto reorder alerts based on stock thresholds and intelligent purchase suggestions.",
            "AI-powered insights to predict sales trends, overdue payments, and slow-moving inventory.",
            "Multi-language interface (English & Urdu) for broader accessibility and ease of use.",
            "Email and SMS notification features for instant updates on purchases, sales, and payments.",
            "Custom field creation in sales, purchase, customer, and product forms without development effort.",
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
              Discover Q-Soft Technologies AIMS ERP (Standard) — the perfect choice for growing small businesses.
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
