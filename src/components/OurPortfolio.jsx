import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const portfolioItems = [
  {
    img: "/image/port1.png",
    text: "AS/400 to Odoo ERP: Digital Transformation Journey of 70-year-old New York-based International Equipment Supplier",
  },
  {
    img: "/image/port2.png",
    text: "Control ERP Automates the Business Workflow of a Leading Retailer of Personalized Jewelry",
  },
  {
    img: "/image/port3.png",
    text: "Brainvire Crafts a Magento E-Commerce Website for an American Healthcare Supplement Business with Odoo Backend Support",
  },
  {
    img: "/image/port4.png",
    text: "America’s Prominent Retail Chain Embraces Digital Makeover Through an On-Demand Food Delivery App",
  },
  {
    img: "/image/port5.png",
    text: "Odoo ERP Implementation for a Global Electronics Supplier to Streamline Warehouse & Distribution",
  },
  {
    img: "/image/port6.png",
    text: "Control ERP Deployment for a Textile Company to Automate Their Sales and Purchase Cycle",
  },
  {
    img: "/image/port7.png",
    text: "Magento Integrated ERP for a Luxury Watch Brand for Inventory and Customer Management",
  },
];

const OurPortfolio = () => {
  return (
    <section aria-labelledby="portfolio-heading">
      <div className="bg-[#00aeef] py-8">
        <h2
          id="portfolio-heading"
          className="text-center text-3xl font-semibold text-white"
        >
          Our Portfolio
        </h2>
      </div>

      <div className="relative px-4 bg-white py-12 mt-0 max-w-[92%] mx-auto rounded-xl shadow-xl">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".portfolio-button-next",
            prevEl: ".portfolio-button-prev",
          }}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          speed={1000}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {portfolioItems.map((item, index) => (
            <SwiperSlide key={index}>
              <article className="flex flex-col items-center text-center px-4 py-6 group transition hover:shadow-lg rounded-md">
                <img
                  src={item.img}
                  alt={`Portfolio: ${item.text.slice(0, 40)}...`}
                  className="h-40 object-contain mb-4 transition-transform duration-300 group-hover:scale-105 rounded-md"
                />
                <p className="text-black text-sm font-medium transition group-hover:text-[#00aeef]">
                  {item.text}
                </p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          aria-label="Previous Portfolio"
          className="portfolio-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#123149] text-white p-3 rounded-md z-10 focus:outline-none focus:ring-2 focus:ring-[#00aeef]"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          aria-label="Next Portfolio"
          className="portfolio-button-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#123149] text-white p-3 rounded-md z-10 focus:outline-none focus:ring-2 focus:ring-[#00aeef]"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default OurPortfolio;
