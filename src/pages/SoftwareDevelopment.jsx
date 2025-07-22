import { Helmet } from "react-helmet";
import softwareBanner from "../assets/desktopdevelopment.jpg";

const SoftwareDevelopment = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-[#1e3e62] dark:text-white">
      <Helmet>
        <title>Desktop Software Development | Q-Soft Technologies</title>
        <meta
          name="description"
          content="Q-Soft Technologies develops powerful, user-friendly desktop applications tailored to your business processes. Discover our expert software development services."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
        <img
          src={softwareBanner}
          alt="Software Development Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 dark:bg-[#1e3e62]/60 flex items-center justify-center text-center px-4">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Software Development
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Build powerful, secure, and efficient desktop applications to streamline your operations.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">
        {/* Section: What We Offer */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#00aeef]">
            What We Offer
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-slate-200">
            Q-Soft Technologies designs and develops high-performance desktop software tailored to your business processes. Whether it’s a standalone solution or part of a larger enterprise system, our desktop applications are fast, intuitive, and scalable.
          </p>
          <ul className="list-disc list-inside pl-2 space-y-2 text-gray-700 dark:text-slate-300">
            <li>Custom Windows & cross-platform software</li>
            <li>Modern UI/UX design for desktop interfaces</li>
            <li>Integration with databases, ERP & third-party APIs</li>
            <li>High-performance data processing & automation tools</li>
            <li>Security-first approach and offline capabilities</li>
          </ul>
        </section>

        {/* Section: About Q-Soft Technologies */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#00aeef]">
            About Q-Soft Technologies
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-slate-200">
            Q-Soft Technologies is your trusted technology partner for custom software development. With a dedicated team of developers and a passion for solving real-world problems, we help businesses automate workflows and increase productivity.
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-slate-300">
            From planning to deployment and long-term support, we ensure each desktop solution aligns with your goals, scales with your needs, and delivers exceptional performance across platforms.
          </p>
        </section>

        {/* CTA Section */}
        <div className="bg-[#00aeef] text-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-2">
            Need a reliable desktop application?
          </h3>
          <p className="text-base md:text-lg mb-4">
            Reach out to Q-Soft Technologies and let's build your custom desktop solution.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-[#00aeef] font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;
