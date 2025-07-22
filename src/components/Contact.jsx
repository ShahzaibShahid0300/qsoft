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
          content="Get in touch with QSoft for expert ERP, web, app, and software solutions tailored to your business."
        />
      </Helmet>

      <section className="bg-white text-black dark:bg-[#1e3e62] dark:text-white">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] flex items-center justify-center text-center px-4">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-no-repeat bg-center bg-cover transition-all duration-300"
            style={{
              backgroundImage: `url('/image/contact.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay for dark mode */}
            <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 rounded-xl max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-200 dark:text-[#cbd5e1]">
              We'd love to hear from you. Reach out today and let's build
              something amazing together.
            </p>
          </div>
        </div>

        {/* Heading Section */}
        <div className="mt-16 px-4 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-700 dark:text-[#cbd5e1] mb-8">
            Whether you have a question about features, pricing, or a custom
            solution — our team is ready to help.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto px-4 pb-20">
          {/* Contact Info */}
          <div className="space-y-6" data-aos="fade-right">
            <div className="bg-gray-100 dark:bg-[#25476c] p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold text-[#00aeef] mb-1">📍 Address</h3>
              <p className="text-gray-700 dark:text-[#cbd5e1]">
                15 Ghazi Road, Sector P, Phase 1, DHA, Lahore, Punjab - Pakistan.
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-[#25476c] p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold text-[#00aeef] mb-1">✉️ Email</h3>
              <p className="text-gray-700 dark:text-[#cbd5e1]">info@qsoft.pk</p>
            </div>

            <div className="bg-gray-100 dark:bg-[#25476c] p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold text-[#00aeef] mb-1">☎️ Phone</h3>
              <p className="text-gray-700 dark:text-[#cbd5e1]">+92 300 9192114</p>
              <p className="text-gray-700 dark:text-[#cbd5e1]">+92 333 7444484</p>
            </div>

            <div className="bg-gray-100 dark:bg-[#25476c] p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold text-[#00aeef] mb-1">🕐 Working Hours</h3>
              <p className="text-gray-700 dark:text-[#cbd5e1]">
                Mon – Sat: 11:00 AM – 7:00 PM
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a
                href="http://facebook.com/qsoft.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[#00aeef] hover:bg-[#0077b6] text-white rounded-full transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/company/40727163/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[#00aeef] hover:bg-[#0077b6] text-white rounded-full transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div
            className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-[#27496d]"
            data-aos="fade-left"
          >
            <iframe
              title="QSoft Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.5852531494124!2d73.0551!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df952db9d7e8ef%3A0xf9b3ff781d17a7f3!2sIslamabad%20Software%20Technology%20Park!5e0!3m2!1sen!2s!4v1613759600876!5m2!1sen!2s"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[400px]"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
