import { Helmet } from "react-helmet";

export default function FeatureGrid() {
  const features = [
    {
      icon: "📈",
      title: "Boost Your Sales",
      desc: "With automation, sky's the limit for scaling up your sales graph.",
    },
    {
      icon: "⚙️",
      title: "Integrate Your Services",
      desc: "Optimize business process management with seamless integration of services.",
    },
    {
      icon: "🔌",
      title: "Streamline Your Operations",
      desc: "Smoothen the flow of your business operations in a systematic manner.",
    },
    {
      icon: "💰",
      title: "Manage Your Finance",
      desc: "Organize your financial budgets and plan them in advance.",
    },
    {
      icon: "🛒",
      title: "Tailored Retail Solution",
      desc: "A perfect Retail ERP solution that can be tailored for an omnichannel experience.",
    },
    {
      icon: "⚙️",
      title: "Customizable",
      desc: "Enjoy complete freedom to customize the ERP software as per your business needs.",
    },
  ];

  return (
    <section className="bg-white px-6 pb-24 pt-20">
      <Helmet>
        <title>ERP Key Features | QSoft ERP</title>
        <meta
          name="description"
          content="Discover powerful features of QSoft ERP, from boosting sales to streamlining operations and customizing retail experiences."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative p-10 bg-white border border-gray-200 rounded-2xl shadow-xl md:hover:shadow-2xl md:hover:-translate-y-2 transition-all duration-500 text-center"
          >
            <div className="text-6xl mb-6">{feature.icon}</div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {feature.title}
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">{feature.desc}</p>

            {/* Bottom animated border */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] transition-all duration-700 group-hover:w-4/5 origin-center rounded-full"
              style={{ backgroundColor: "#1DA1F2" }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}
