import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const solutions = [
  {
    title: "Desktop App Development",
    description:
      "From ERP to CRM, we develop scalable software tailored to your workflows, saving time and boosting productivity.",
    image: "/image/software-development.jpg",
    direction: "left",
    path: "/solutions/softwaredevelopment",
  },
  {
    title: "Web Development",
    description:
      "We build responsive, fast, and modern websites that scale with your business — from landing pages to full-stack platforms.",
    image: "/image/web-development.jpg",
    direction: "right",
    path: "/solutions/webdevelopment",
  },
  {
    title: "Mobile App Development",
    description:
      "Get custom-built mobile apps using React Native for Android and iOS, optimized for performance and UX.",
    image: "/image/app-development.jpg",
    direction: "left",
    path: "/solutions/mobileappdevelopment",
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your brand visibility and ROI with result-driven digital marketing strategies — from SEO and PPC to social media campaigns.",
    image: "/image/digital-marketing.jpeg",
    direction: "right",
    path: "/digitalmarketing",
  },
  {
    title: "IT Consultancy",
    description:
      "Leverage our expert IT consulting to align your technology with business goals, optimize infrastructure, and drive digital transformation.",
    image: "/image/it-consultancy.jpg",
    direction: "left",
    path: "/itconsultancy",
  },
];

const Solutions = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <>
      <Helmet>
        <title>Solutions | QSoft ERP</title>
        <meta
          name="description"
          content="Discover QSoft's powerful web, app, and software solutions built to drive digital transformation and business efficiency."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-[#0077b6] to-[#00aaff] dark:from-[#1e3e62] dark:to-[#00aeef] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold">Our Solutions</h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl font-light">
          Empowering businesses with cutting-edge digital products and scalable technology.
        </p>
      </section>

      {/* Solution Sections */}
      {solutions.map((item, index) => (
        <section
          key={index}
          className={`flex flex-col md:flex-row items-center dark:bg-[#1e3e62] gap-10 px-6 py-20 max-w-7xl mx-auto ${
            item.direction === "right" ? "md:flex-row-reverse" : ""
          }`}
          data-aos="fade-up"
        >
          <div className="w-full md:w-1/2">
            <Link to={item.path}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3e62] dark:text-white mb-4 no-underline hover:no-underline">
                {item.title}
              </h2>
            </Link>
            <p className="text-gray-700 dark:text-[#cbd5e1] text-lg leading-relaxed">
              {item.description}
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Link to={item.path}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto rounded-xl shadow-lg"
                loading="lazy"
              />
            </Link>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-[#0077b6] to-[#00aeef] dark:from-[#1e3e62] dark:to-[#00aeef] py-20 px-6 text-center text-white overflow-hidden">
        <div data-aos="zoom-in" className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Build Your Digital Solution?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Let our expert team craft a tailored solution that transforms your business with next-gen digital tools.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#0077b6] font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('/images/web-development.jpg')] bg-cover bg-center"></div>
      </section>
    </>
  );
};

export default Solutions;
