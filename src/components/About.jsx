import React from "react"; 
import { Helmet } from "react-helmet";
import { Lightbulb, ShieldCheck, Headphones, Layers } from "lucide-react";

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We leverage cutting-edge technology to provide the best ERP solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Transparency and honesty are at the core of our business practices.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "We offer dedicated support to help our clients succeed.",
  },
  {
    icon: Layers,
    title: "Scalability",
    description: "Our solutions grow with your business needs.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About QSoft ERP Solutions</title>
        <meta
          name="description"
          content="Learn more about QSoft ERP, our mission, vision, and the core values that drive us to deliver top-tier ERP solutions for modern businesses."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section
          className="relative bg-gradient-to-r from-[#0077b6] to-[#00aaff] text-white py-20 px-6 text-center"
          aria-labelledby="about-hero-title"
        >
          <h1
            id="about-hero-title"
            className="text-4xl md:text-6xl font-extrabold tracking-wide max-w-4xl mx-auto"
          >
            About QSoft ERP
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl font-light">
            Empowering your business through seamless and innovative ERP software tailored to your needs.
          </p>
        </section>

        {/* Company Introduction */}
        <section className="py-16 px-6 max-w-7xl mx-auto text-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-center">Who We Are</h2>
          <p className="max-w-4xl mx-auto text-center text-lg leading-relaxed">
            Founded in 2010, QSoft has grown to become a trusted leader in ERP software development. Our
            mission is to simplify and automate complex business processes so companies can focus on growth
            and innovation. With over a decade of experience, we specialize in providing scalable and
            customizable ERP solutions for industries of all sizes.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="bg-[#f0faff] py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <article className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-[#0077b6]">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide innovative and easy-to-use ERP solutions that enhance operational efficiency and
                empower businesses to achieve their full potential.
              </p>
            </article>
            <article className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-[#0077b6]">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the world’s most reliable ERP provider, delivering products that adapt to the evolving
                needs of businesses globally.
              </p>
            </article>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 px-6 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {coreValues.map(({ icon, title, description }, index) => {
              const Icon = icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-default"
                  tabIndex={0}
                  aria-label={title}
                >
                  <Icon className="mx-auto h-16 w-16 text-[#0077b6] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#0077b6] py-12 px-6 text-white text-center rounded-t-3xl mt-12 max-w-5xl mx-auto shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Business?</h2>
          <p className="mb-6 max-w-xl mx-auto text-lg">
            Contact us today for a free consultation and discover how QSoft ERP can transform your operations.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#0077b6] font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </section>
      </main>
    </>
  );
};

export default About;
