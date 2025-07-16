import React, { useState } from "react";

import { Helmet } from "react-helmet";
import { Check } from "lucide-react"; // ✅ Tick icon import

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
    content: (
      <>
        <h3 className="text-xl font-semibold mb-3">Customization Services</h3>
        <p>
          AIMS (Hybrid) Software Developer Kit (SDK) makes it easy for you to customize the forms in AIMS (Hybrid) without source code and stay current with our latest releases. You can create new forms using Visual Studio. Using our SDK you will be able to keep all your customizations in projects separate from AIMS (Hybrid) making upgrading easy.
        </p>
        <p>
          Visual Studio allows precise customization to AIMS (Hybrid) as if you had the source code without the need to spend countless hours understanding the source code.
        </p>
        <h3 className="text-xl font-semibold mb-3">SDK</h3>
        <p className="mt-3">
          The AIMS (Hybrid) Software Developer Kit (SDK) makes it easy for you to customize the forms in AIMS (Hybrid) without source code and stay current with our latest releases. You can create new forms using Visual Studio. Using our SDK you will be able to keep all your customizations in projects separate from AIMS (Hybrid) making upgrading easy. Visual Studio allows precise customization to AIMS (Hybrid) as if you had the source code without the need to spend countless hours understanding the source code.
        </p>
        <p>
          For example, you could customize the Invoice form by adding new fields, controls or buttons. You could also remove fields your company does not use or move existing fields on any form. You can even override any code or properties used on any form. All of this can be done without source code. Your customized forms and code will run on top of the AIMS (Hybrid) code so you can take advantage of all new updates we release.
        </p>
        <p>
          The SDK will contain details, descriptions and examples. It will allow you to integrate any other .NET application with AIMS (Hybrid). You will be able to customize AIMS (Hybrid) and even add new functionality using the SDK. All customization work we do or anyone else does can be done using the SDK. This will keep all customizations separate from the core application making debugging the code much easier. With this approach you will be able to take advantage of all future updates to AIMS (Hybrid) and it will not affect your customization work.
        </p>
        <p>
          AIMS (Hybrid) ships with a powerful Data Dictionary that can be used to add new fields and tables to a AIMS (Hybrid) company data file. We use this Data Dictionary internally when we need to add new fields or tables to AIMS (Hybrid) so you can be assured its flexible and reliable.
        </p>
        <p>
          AISM (Hybrid) includes a revolutionary BRL Core which eliminates repetitive tasks. It makes it extremely easy to connect a custom new form to AIMS (Hybrid). This takes all the complexity out of writing and debugging this code yourself. Now you can add a new table or field using the Data Dictionary and use the BRL Core from any form to and add, edit, delete, save and navigate the data with only a few lines of code. This uses an n-Tier architecture with a disconnected data model and allows you to update your data over the Internet if you want. Not only is the combination of our Data Dictionary and BRL Core extremely powerful it's also so easy to use a beginner in .NET could do it.
        </p>
        <p>
          AIMS (Hybrid) Components can also be integrated into ASP.NET applications with very little effort. Using ASP.NET and our own BRL Core tied directly into AIMS (Hybrid), we wrote a feature rich Support Center called BizCore Central (an optional add-on that works with AIMS (Hybrid)). This is the same support center a customer would use to log in to download updates, post on our forums and view knowledgebase articles.
        </p>
        <h3 className="text-xl font-semibold mb-3">Source Code</h3>
        <p className="mt-3">
         If you need to make complex customization changes you can contact QSoft Technologies about licensing source code.  The source code is available if you need to make complex customization changes or have special integration needs.  Using the Source Code you can Private Label the accounting software if you choose.  You can contact QSoft Technologies about licensing the source code.
        </p>
      </>
    ),
  },
  {
    id: "whatsnew",
    title: "What's New",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-3">What's New in Version 5.5 Build 621</h3>
        <p>
          Released: 06/03/2013
        </p>
        <ul className="space-y-3 text-gray-700 dark:text-[#cbd5e1]">
          {[
            "AIMS (Hybrid) is now fully compatible with SQL Server 2012",
            "AIMS (Hybrid) is compatible with Windows 8",
            "The AIMS (Hybrid) installer now includes a digitally signed certificate",
            "Added additional indexes to enhance performance",
            "Added Customers button on Schedule Activity form. Details",
            "Added an Allocate field on Inventory Form > Stock tab. Details",
            "Added a Freight column in Batch Bill Detail report. Details",
            "Added an Inventory Serial Number on Security > Menu Permission. Details",
            "Added Invoice No., Price and Extension Price columns on Items Sold by Category report. Details",
            "Added ShipToCountry field on Sales Summary report criteria. Details",
            "Added a new report named 'Balance Sheet MTD Comparison'. Details",
            "Added a new report named 'Income Statement Budget vs. Actual'. Details",
            "Added a new report named 'Income Statement Budget vs. Actual by Department'. Details",
            "Added a new report named 'Vendor Payment History with GL Accounts'. Details",
            "Added Show all accounts regardless of activity or balance option for Trial Balance report. Details",
            "Added a notification message when changing the Account Description on General Journal. Details",
            "Added a notification message when depreciating Assets upon closing the Fiscal year. Details",
            "Added a validation on the Customer, Prospect, Lead, Sales Rep, and VendorID's if it already exists. Details",
            "Added an Expected Date column on Stock drill down > Inventory On Order form. Details",
            "Added options when filter type is Invoice in Batch Report Processing form. Details",
            "Added a Tax Amount and Total Tax columns on Sales Invoice and Credit Memo form. Details",
            "Exposed Memo field on column chooser of Bank Reconciliation form. Details",
            "Tax Code Component Search function. Details",
            "Allowed adding up to 25 columns on Column Designer. Details",
            "Allowed the custom Customer Statement report to be selected in Batch Report Processing form. Details",
            "Allowed editing the Color, Size, Warranty and Notes field of Inventory Serial Number. Details",
            "Allowed sorting of data by clicking on columns of Recurring Transaction form. Details",
            "Ability to save Emails with attachments on the Customer Email tab. Details",
            "Ability to save Emails with attachments on the Lead Email tab. Details",
            "Ability to save Emails with attachments on the Prospect Email tab. Details",
            "Ability to save Emails with attachments on the Sales Rep Email tab. Details",
            "Ability to save Emails with attachments on the Sales Rep Group Email tab. Details",
            "Ability to save Emails with attachments on the Vendor Email tab. Details",
            "Ability to not calculate the Fixed Asset if the Adjustment Cost less the Salvage Value is 0. Details",
            "Ability to search Serial numbers on the Inventory Serial Number form. Details",
            "Ability to sort Fill Back Order by columns. Details",
            "Dropdown list used in the report criteria. Details",
            "Enhanced the displaying of error messages when the data is not imported through Data Utility. Details",
            "Enhanced the AIMS (Hybrid) SDK",
            "Enhanced the displaying of reconciled transactions in Bank Reconciliation form. Details",
            "Data Utility and Import from Excel in Order/Invoice Form now SDK ready",
            "Saved the expanded and collapsed state of the Account Group. Details",
            "Sorted Account Groups and AccountID's of Chart of Accounts in ascending order. Details",
            "TLS Email account is now supported in sending email. Details",
            "Used the Check Date as the default date when creating Check Reversal. Details",
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
  const activeContent = sections.find((s) => s.id === activeSection);

  return (
    <>
      {/* SEO Head */}
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
              alt="AIMS ERP Hybrid Software Illustration"
              className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <main
        className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 md:px-8 gap-8 py-12 text-black dark:text-white dark:bg-[#1e3e62]"
        role="main"
      >
        {/* Navigation Sidebar */}
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

        {/* Section Content */}
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

export default ProductCore;
