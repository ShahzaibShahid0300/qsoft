import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export default function FeatureGrid() {
  const features = [
    {
      icon: "📈",
      title: "Drive Revenue Growth",
      desc: "Leverage automation and insights to expand sales channels and maximize profits.",
    },
    {
      icon: "⚙️",
      title: "Unified System Integration",
      desc: "Connect all your business functions into one seamless, efficient platform.",
    },
    {
      icon: "🔌",
      title: "Optimize Workflows",
      desc: "Automate routine tasks and improve operational efficiency across departments.",
    },
    {
      icon: "💰",
      title: "Financial Management Simplified",
      desc: "Gain full control over budgeting, accounting, and cash flow management.",
    },
    {
      icon: "🛒",
      title: "Custom Retail Solutions",
      desc: "Adapt the ERP to support retail channels, inventory, and customer experience.",
    },
    {
      icon: "⚙️",
      title: "Flexible Customization",
      desc: "Tailor modules and reports to fit your unique business processes effortlessly.",
    },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-white dark:bg-[#1e3e62] px-6 pb-24 pt-20">
      <Helmet>
        <title>ERP Key Features | QSoft ERP</title>
        <meta
          name="description"
          content="Discover powerful features of QSoft ERP, from driving revenue growth to streamlining operations and customizing retail solutions."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              transition: `opacity 800ms ease-out ${index * 200}ms, transform 800ms ease-out ${index * 200}ms`,
            }}
            className={`group relative p-10 bg-white dark:bg-[#25476c] border border-gray-200 dark:border-[#27496d] rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center
              transform
              ${animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
              transition-all
              hover:-translate-y-2
              hover:shadow-2xl
              hover:transition-transform
              hover:duration-[1500ms]
              hover:ease-in-out
            `}
          >
            <div className="text-6xl mb-6">{feature.icon}</div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-[#cbd5e1]">
              {feature.title}
            </h2>
            <p className="text-gray-600 dark:text-[#cbd5e1]/80 leading-relaxed text-base">
              {feature.desc}
            </p>

            {/* Bottom animated border on hover */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] transition-all duration-700 group-hover:w-4/5 origin-center rounded-full"
              style={{ backgroundColor: "#00aeef" }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}
