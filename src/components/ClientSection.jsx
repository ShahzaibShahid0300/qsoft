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
    <section className="bg-white py-16">
      <Helmet>
        <title>Trusted Clients | QSoft ERP</title>
        <meta
          name="description"
          content="QSoft ERP is trusted by clients across industries. See our partners who rely on our ERP solutions to power their businesses."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Trusted by These Leading Brands
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-[70px] gap-x-10 items-center justify-center">
          {clients.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={logo}
                alt={`ERP client logo ${index + 1}`}
                className="h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
