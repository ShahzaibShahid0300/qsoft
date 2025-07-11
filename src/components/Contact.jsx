import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us | QSoft ERP</title>
        <meta
          name="description"
          content="Get in touch with QSoft for expert ERP, web, app, and software solutions tailored to your business. Let’s build something great together."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0077b6] to-[#00aaff] dark:from-[#1e3e62] dark:to-[#00aeef] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold">Get in Touch</h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl font-light">
          Reach out to our team to discuss your project, partnership, or service inquiry.
        </p>
      </section>

      {/* Contact Info + Image */}
      <section className="py-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="w-full lg:w-1/2" data-aos="fade-right">
          <img
            src="/image/contact.jpg"
            alt="Contact QSoft"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right Contact Info */}
        <div
          className="w-full lg:w-1/2 backdrop-blur-sm bg-white/80 dark:bg-[#1e3e62] p-8 rounded-2xl shadow-lg"
          data-aos="fade-left"
        >
          <h2 className="text-3xl font-bold text-[#1e3e62] dark:text-white mb-4">
            We'd love to hear from you
          </h2>
          <p className="text-gray-700 dark:text-[#cbd5e1] mb-6 text-base leading-relaxed">
            Whether you have a question about features, pricing, a demo, or anything else —
            our team is ready to answer.
          </p>

          <div className="space-y-4 text-left">
            <div className="flex items-start gap-3">
              <span className="text-[#00aeef] text-xl">📍</span>
              <div>
                <p className="text-sm text-gray-500 dark:text-[#cbd5e1]">Our Office</p>
                <p className="text-md font-medium text-[#1e3e62] dark:text-white">
                  QSoft HQ, Software Park, Islamabad, Pakistan
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#00aeef] text-xl">✉️</span>
              <div>
                <p className="text-sm text-gray-500 dark:text-[#cbd5e1]">Email Us</p>
                <p className="text-md font-medium text-[#1e3e62] dark:text-white">
                  support@qsofterp.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#00aeef] text-xl">☎️</span>
              <div>
                <p className="text-sm text-gray-500 dark:text-[#cbd5e1]">Call Us</p>
                <p className="text-md font-medium text-[#1e3e62] dark:text-white">
                  +92 300 1234567
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#00aeef] text-xl">🕐</span>
              <div>
                <p className="text-sm text-gray-500 dark:text-[#cbd5e1]">Working Hours</p>
                <p className="text-md font-medium text-[#1e3e62] dark:text-white">
                  Mon – Sat: 9:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex gap-4">
            <a
              href="https://facebook.com/qsofterp"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-[#00aeef] hover:bg-[#0077b6] rounded-full text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://linkedin.com/company/qsofterp"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-[#00aeef] hover:bg-[#0077b6] rounded-full text-white transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 pb-20 max-w-7xl mx-auto" data-aos="fade-up">
        <div className="w-full overflow-hidden rounded-xl shadow-lg border dark:border-[#27496d]">
          <iframe
            title="QSoft Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.5852531494124!2d73.0551!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df952db9d7e8ef%3A0xf9b3ff781d17a7f3!2sIslamabad%20Software%20Technology%20Park!5e0!3m2!1sen!2s!4v1613759600876!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[400px]"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
