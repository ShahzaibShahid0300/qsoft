import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "The new platform makes processing, shipping, and tracking orders more streamlined, and product inventory is easier to update. The dynamic system allows for all products to be viewed and purchased in one location. Brainvire Infotech Inc's team was communicative and...",
    author: "Mr. Kevin Clor",
    title: "CIO - Tent and Table",
  },
  {
    text: "Your team has shown great caliber in meeting my project’s timeline and delivered the highest level solution for my business. Thank you Control ERP!",
    author: "Uttam Soni",
    title: "CTO - Insomnia Cookies",
  },
  {
    text: "The implementation team was very helpful and ensured a smooth ERP transition. I would highly recommend their services to others.",
    author: "Sarah Morgan",
    title: "COO - Retail Mart",
  },
  {
    text: "Exceptional service and great support from start to finish. Our operations are now seamless thanks to Control ERP.",
    author: "John Richards",
    title: "Operations Head - AutoZone Supplies",
  },
];

const TestimonialSlider = () => {
  return (
    <section className="bg-[#f6f6f6] py-26 px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Left Text Section */}
        <div className="md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1d] mb-2">
            Control ERP Testimonials
          </h2>
          <p className="italic text-lg text-[#4d4d4d] mb-4">
            What our clients are saying
          </p>
          <p className="text-[#666] text-base">
            Client testimonials speak a lot about any product’s true market value. We, at Control ERP, take their word for it and strive to achieve excellence all along.
          </p>
        </div>

        {/* Right Slider Section */}
        <div className="md:w-2/3 w-full relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop={true}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative">
                  {/* Rotated shadow behind card */}
                  <div className="absolute inset-0 bg-black/10 flex w-[290px] -z-10 transform rotate-[6deg]" />

                  {/* Testimonial card */}
                  <div className="bg-white shadow-lg p-6 px-10 h-full flex w-[290px] flex-col justify-between">
                    <p className="text-[#444] italic text-base mb-6">{item.text}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-sm text-[#1a1a1a]">{item.author}</p>
                        <p className="text-sm text-gray-500">{item.title}</p>
                        <div className="flex gap-1 mt-2 text-yellow-500 text-sm">
                          ★★★★★
                        </div>
                      </div>
                      <Quote className="text-gray-300 w-8 h-8" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination */}
          <div className="custom-pagination flex justify-center mt-6 gap-2"></div>

          {/* Pagination styling */}
          <style jsx>{`
            .custom-pagination .swiper-pagination-bullet {
              width: 24px;
              height: 4px;
              background: #ccc;
              border-radius: 2px;
              transition: all 0.3s ease;
              opacity: 1;
            }

            .custom-pagination .swiper-pagination-bullet-active {
              background: #1fb3c4;
              transform: scaleX(1.4);
            }

            .custom-pagination .swiper-pagination-bullet:hover {
              background: #1fb3c4;
              transform: scaleX(1.2);
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
