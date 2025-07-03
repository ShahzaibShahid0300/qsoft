import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-tr from-[#0a0a0a] via-[#111111] to-[#222222] text-white pt-12 pb-8 shadow-inner"
      role="contentinfo"
    >
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Feature Section */}
        <section
          aria-labelledby="footer-features"
          className="flex flex-col items-center text-center"
        >
          <h3
            id="footer-features"
            className="font-extrabold uppercase text-xl tracking-wider mb-6"
          >
            Features
          </h3>
          <ul className="space-y-3 text-sm font-semibold">
            {[
              "Inventory Management",
              "Accounting",
              "Purchase",
              "Sales",
              "Production Planning",
              "Point Of Sale",
              "HR & Payroll",
              "Control ERP Commerce Integration",
            ].map((item, idx) => (
              <li
                key={idx}
                className="transition-transform duration-300 ease-in-out hover:text-[#00aeef] hover:scale-105 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Services Section */}
        <section
          aria-labelledby="footer-services"
          className="flex flex-col items-center text-center"
        >
          <h3
            id="footer-services"
            className="font-extrabold uppercase text-xl tracking-wider mb-6"
          >
            Services
          </h3>
          <ul className="space-y-3 text-sm font-semibold">
            {["Implementation", "Development", "Support", "Training"].map(
              (item, idx) => (
                <li
                  key={idx}
                  className="transition-transform duration-300 ease-in-out hover:text-[#00aeef] hover:scale-105 cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </section>

        {/* Related Links Section */}
        <section
          aria-labelledby="footer-related-links"
          className="flex flex-col items-center text-center"
        >
          <h3
            id="footer-related-links"
            className="font-extrabold uppercase text-xl tracking-wider mb-6"
          >
            Related Links
          </h3>
          <ul className="space-y-3 text-sm font-semibold">
            {[
              { text: "Contact Us", href: "/contact" },
              { text: "Portfolio", href: "/portfolio" },
              { text: "Case Study", href: "/case-study" },
            ].map(({ text, href }, idx) => (
              <li key={idx}>
                <a
                  href={href}
                  className="transition-transform duration-300 ease-in-out hover:text-[#00aeef] hover:scale-105 inline-block"
                  aria-label={`${text} page`}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-xs text-gray-400 px-4 select-none">
        &copy; 2025 QSoft. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
