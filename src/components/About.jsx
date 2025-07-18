import React from "react";
import { Helmet } from "react-helmet";
import { Lightbulb, ShieldCheck, Headphones, Layers } from "lucide-react";

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We utilize advanced ERP technologies to build intelligent, modern business solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "We operate with full transparency, ensuring honest and ethical ERP practices.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Our expert support team is committed to assisting clients at every stage of ERP adoption.",
  },
  {
    icon: Layers,
    title: "Scalability",
    description: "Our ERP systems are designed to grow alongside your evolving business needs.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About QSoft ERP Solutions</title>
        <meta
          name="description"
          content="Discover QSoft ERP—Pakistan's leading ERP software company empowering businesses with scalable, customizable, and user-friendly ERP systems."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className="overflow-x-hidden bg-white text-black dark:bg-[#1e3e62] dark:text-white">
        {/* Hero Section */}
        <section
          className="relative bg-gradient-to-r from-[#0077b6] to-[#00aaff] dark:from-[#1e3e62] dark:to-[#00aaff] text-white py-20 px-6 text-center"
          aria-labelledby="about-hero-title"
        >
          <h1
            id="about-hero-title"
            className="text-4xl md:text-6xl font-extrabold tracking-wide max-w-4xl mx-auto"
          >
            About QSoft AIMS ERP
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl font-light dark:text-[#cbd5e1]">
            Driving business success through innovative ERP software solutions tailored for real-world growth.
          </p>
        </section>

        {/* Who We Are Section */}
        <section className="py-10 px-6 max-w-7xl mx-auto text-gray-800 dark:text-[#cbd5e1]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-left dark:text-white">Who We Are</h2>
              <p className="text-lg leading-relaxed text-left">
                Since 2010, QSoft has established itself as a trusted ERP software company, delivering integrated
                solutions that automate operations, improve accuracy, and enable smart decision-making. Our
                scalable ERP platforms are designed to meet the complex demands of modern businesses across
                diverse industries.
              </p>
            </div>

            {/* Right: Image with angled left edge */}
            <div>
              <img
                src="/image/about.png"
                alt="QSoft Team"
                className="w-full h-auto rounded-xl shadow-lg object-cover object-center clip-left-angled"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-[#f0faff] py-16 px-6 dark:bg-[#25476c]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <article className="bg-white p-8 rounded-lg shadow-lg dark:bg-[#1e3e62]">
              <h3 className="text-2xl font-semibold mb-4 text-[#00aeef]">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed dark:text-[#cbd5e1]">
                To develop cutting-edge ERP software that simplifies business workflows, accelerates efficiency, and empowers organizations to scale with confidence.
              </p>
            </article>
            <article className="bg-white p-8 rounded-lg shadow-lg dark:bg-[#1e3e62]">
              <h3 className="text-2xl font-semibold mb-4 text-[#00aeef]">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed dark:text-[#cbd5e1]">
                To become a global leader in ERP innovation, delivering smart, flexible, and future-ready software that transforms how businesses operate.
              </p>
            </article>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 px-6 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 dark:text-white">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {coreValues.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-default dark:bg-[#27496d] dark:shadow-[#00aeef]/60"
                tabIndex={0}
                aria-label={item.title}
              >
                {React.createElement(item.icon, {
                  className: "mx-auto h-16 w-16 text-[#00aeef] mb-4",
                })}
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-[#cbd5e1]">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#00aeef] py-12 px-6 text-white text-center rounded-t-3xl mt-12 max-w-5xl mx-auto shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Business?</h2>
          <p className="mb-6 max-w-xl mx-auto text-lg">
            Get in touch today and discover how QSoft ERP can streamline your operations, save costs, and unlock growth potential.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#00aeef] font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </section>
      </main>
    </>
  );
};

export default About;
