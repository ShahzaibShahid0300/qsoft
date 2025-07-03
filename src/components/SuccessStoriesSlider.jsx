import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const stories = [
  {
    title: "Control ERP helped Jewelry Retailer Streamline Operations",
    date: "March 10, 2024",
    video: "/videos/video1.mp4",
  },
  {
    title: "How Control ERP Transformed a Textile Business",
    date: "Feb 5, 2024",
    video: "/videos/video2.mp4",
  },
  {
    title: "Case Study: Odoo Integration with Magento",
    date: "Jan 15, 2024",
    video: "/videos/video3.mp4",
  },
];

const VideoStorySlider = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title Above Slider */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4 md:text-4xl mb-12">
          Our Client Stories
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {stories.map((story, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-lg shadow-sm p-3 flex flex-col items-center max-w-[480px] h-[320px] mx-auto">
                <img
                  src="/image/odoo.png"
                  alt="Odoo"
                  className="h-14 mb-2"
                />
                <h3 className="text-sm font-semibold text-gray-800 mb-1 text-center px-2">
                  {story.title}
                </h3>
                <p className="text-xs text-gray-500 mb-2">{story.date}</p>
                <video
                  src={story.video}
                  controls
                  className="w-full h-[260px] object-cover rounded"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VideoStorySlider;
