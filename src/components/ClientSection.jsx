import React from "react";
import { Helmet } from "react-helmet";

const clients = [
  "/logos/client1.png",
  "/logos/client2.png",
  "/logos/client3.png",
  "/logos/client4.png",
  "/logos/client5.png",
  "/logos/client6.png",
  "/logos/client7.png",
  "/logos/client8.png",
  "/logos/client9.png",
  "/logos/client10.png",
];

const ClientSection = () => {
  return (
    <section className="bg-white dark:bg-[#1e3e62] py-24 overflow-hidden">
      <Helmet>
        <title>Trusted Clients | QSoft ERP</title>
        <meta
          name="description"
          content="QSoft ERP is trusted by clients across industries. See our partners who rely on our ERP solutions to power their businesses."
        />
      </Helmet>

      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee {
          display: flex;
          width: max-content;
          animation: scrollLeft 30s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-12 text-gray-900 dark:text-white">
          Trusted by These Leading Brands
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="marquee gap-x-10">
            {[...clients, ...clients].map((logo, index) => (
              <div
                key={index}
                className="flex justify-center items-center min-w-[150px] px-4"
              >
                <img
                  src={logo}
                  alt={`ERP client logo ${index + 1}`}
                  className="h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
