import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const slides = [
  {
    image: "image/1.jpg",
    title: "Streamline Business Operations",
  },
  {
    image: "image/2.jpg",
    title: "Empower Teams With Integrated ERP",
  },
  {
    image: "image/3.png",
    title: "Make Data-Driven Decisions",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrent(index);

  return (
    <div className="relative h-[360px] md:h-[440px] w-full overflow-hidden">
      <Helmet>
        <title>{slides[current].title} | QSoft ERP</title>
        <meta
          name="description"
          content={`Discover how QSoft ERP can help you: ${slides[current].title}.`}
        />
      </Helmet>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-contain md:bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      ></div>

      {/* Overlay Content - LEFT aligned and low */}
      <div className="absolute inset-0 bg-black/40 z-10 flex items-end justify-start px-4 md:px-20 pb-8 md:pb-14">
        <div className="text-left text-white max-w-lg">
          <h1 className="text-lg md:text-3xl font-semibold mb-4 whitespace-nowrap">
            {slides[current].title}
          </h1>
          {/* Buttons if you want in future:
          <div className="flex gap-3 flex-wrap">
            <button className="bg-[#00aeef] text-white px-5 py-1.5 md:px-6 md:py-2 text-sm md:text-sm rounded font-medium shadow">
              Schedule Demo
            </button>
            <button className="bg-[#00aeef] text-white px-5 py-1.5 md:px-6 md:py-2 text-sm md:text-sm rounded font-medium shadow">
              Learn More
            </button>
          </div>
          */}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
