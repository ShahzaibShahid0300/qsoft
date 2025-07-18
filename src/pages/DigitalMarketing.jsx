import { Helmet } from "react-helmet";
import digitalBanner from "../assets/digitalmarketing.png";

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-[#1e3e62] dark:text-white">
      <Helmet>
        <title>Digital Marketing Services | Q-Soft Technologies</title>
        <meta
          name="description"
          content="Grow your business online with Q-Soft Technologies’ expert digital marketing services. We offer SEO, social media, PPC, and content marketing strategies tailored to your goals."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
        <img
          src={digitalBanner}
          alt="Digital Marketing Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 dark:bg-[#1e3e62]/60 flex items-center justify-center text-center px-4">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Digital Marketing That Delivers Results
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Boost your online presence with our proven digital marketing strategies.
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
            Q-Soft Technologies offers a full suite of digital marketing solutions to help your business grow online. Whether you want to increase traffic, improve conversions, or build brand awareness — we've got you covered.
          </p>
          <ul className="list-disc list-inside pl-2 space-y-2 text-gray-700 dark:text-slate-300">
            <li>Search Engine Optimization (SEO)</li>
            <li>Social Media Marketing & Management</li>
            <li>Google Ads & Pay-Per-Click (PPC) Campaigns</li>
            <li>Content Marketing & Blogging</li>
            <li>Email Marketing & Automation</li>
          </ul>
        </section>

        {/* Section: About Q-Soft Technologies */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#00aeef]">
            About Q-Soft Technologies
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-slate-200">
            At Q-Soft Technologies, we believe in data-driven, results-oriented digital strategies. Our expert team crafts custom marketing plans designed to increase visibility, generate leads, and boost ROI for businesses across industries.
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-slate-300">
            With continuous monitoring, optimization, and creative campaigns, we ensure your brand stands out in today’s competitive digital world.
          </p>
        </section>

        {/* CTA Section */}
        <div className="bg-[#00aeef] text-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-2">
            Ready to grow your business online?
          </h3>
          <p className="text-base md:text-lg mb-4">
            Partner with Q-Soft Technologies for expert digital marketing services that drive real results.
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

export default DigitalMarketing;
