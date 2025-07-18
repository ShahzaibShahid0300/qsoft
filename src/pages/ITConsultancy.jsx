import { Helmet } from "react-helmet";
import itConsultancyBanner from "../assets/itconsultancy.jpg";

const ITConsultancy = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-[#1e3e62] dark:text-white">
      <Helmet>
        <title>IT Consultancy Services | Q-Soft Technologies</title>
        <meta
          name="description"
          content="Q-Soft Technologies offers expert IT consultancy services to align technology with your business goals, optimize your infrastructure, and drive digital transformation."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
        <img
          src={itConsultancyBanner}
          alt="IT Consultancy Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 dark:bg-[#1e3e62]/60 flex items-center justify-center text-center px-4">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Expert IT Consultancy Services
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Align your IT strategy with business goals and accelerate digital transformation.
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
            At Q-Soft Technologies, our IT consultancy services help businesses evaluate and optimize their technology infrastructure, streamline processes, and implement solutions that drive growth and efficiency.
          </p>
          <ul className="list-disc list-inside pl-2 space-y-2 text-gray-700 dark:text-slate-300">
            <li>IT strategy planning and alignment</li>
            <li>Infrastructure assessment and optimization</li>
            <li>Cloud migration and management</li>
            <li>Cybersecurity risk assessment and solutions</li>
            <li>Digital transformation roadmap and implementation</li>
          </ul>
        </section>

        {/* Section: About Q-Soft Technologies */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#00aeef]">
            About Q-Soft Technologies
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-slate-200">
            Q-Soft Technologies is committed to delivering strategic IT consultancy that bridges the gap between technology and business objectives. Our expert consultants collaborate closely with your team to develop tailored solutions that maximize ROI and reduce operational risks.
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-slate-300">
            Partner with us to navigate complex technology challenges, adopt innovative tools, and future-proof your IT environment.
          </p>
        </section>

        {/* CTA Section */}
        <div className="bg-[#00aeef] text-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-2">
            Ready to optimize your IT strategy?
          </h3>
          <p className="text-base md:text-lg mb-4">
            Contact Q-Soft Technologies today and leverage expert consultancy to transform your business technology.
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

export default ITConsultancy;
