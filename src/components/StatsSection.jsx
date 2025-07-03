import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { number: 11, label: "Offices" },
  { number: 553, label: "Consultants" },
  { number: 8, label: "Verticals" },
  { number: 85, label: "Implementations" },
];

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      className="bg-[#00384E] py-16 text-white"
      aria-labelledby="stats-heading"
    >
      <h2 id="stats-heading" className="sr-only">
        Company Statistics
      </h2>

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`relative px-4 py-6 ${
              index !== 0 ? "md:border-l border-white/10" : ""
            }`}
          >
            <div className="text-5xl font-bold mb-2">
              {inView ? <CountUp end={stat.number} duration={2} /> : 0}
            </div>
            <div className="flex justify-center mb-2" aria-hidden="true">
              <svg
                height="10"
                width="60"
                viewBox="0 0 60 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,5 Q5,0 10,5 T20,5 T30,5 T40,5 T50,5 T60,5"
                  fill="none"
                  stroke="#D02EFF"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <div className="text-lg font-semibold">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
