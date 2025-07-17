import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "AIMS ERP (Hybrid)",
    description:
      "A versatile AI-Powered ERP Solution for your business with customizations available on user levelwithout any technical or programming expertise",
    image: "/image/hybrid.png",
    link: "/products/core",
  },
  {
    id: 2,
    name: "AIMS ERP (Standard)",
    description:
      "A lightweight and affordable ERP solution designed for small businesses, offering essential features for sales, purchases, and basic accounting.",
    image: "/image/standard.jpeg",
    link: "/products/lite",
  },
];

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Our Products | QSoft ERP Solutions</title>
        <meta
          name="description"
          content="Discover QSoft ERP Core and QSoft ERP Lite — innovative ERP solutions tailored for businesses of all sizes. Learn more about our products."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className="overflow-x-hidden bg-white text-black dark:bg-[#1e3e62] dark:text-white">
        {/* Hero Section */}
        <section
          className="relative bg-gradient-to-r from-[#0077b6] to-[#00aaff] dark:from-[#1e3e62] dark:to-[#00aaff] text-white py-20 px-6 text-center"
          aria-labelledby="products-hero-title"
        >
          <h1
            id="products-hero-title"
            className="text-4xl md:text-6xl font-extrabold tracking-wide max-w-4xl mx-auto"
          >
            Our Products
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl font-light text-[#cbd5e1]">
            Discover powerful, flexible ERP software built to streamline and grow your business.
          </p>
        </section>

        {/* Products Section */}
        <section className="px-6 py-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {products.map(({ id, name, description, image, link }) => (
              <article
                key={id}
                tabIndex={0}
                aria-label={name}
                className="bg-white dark:bg-[#25476c] shadow rounded-xl max-w-[320px] mx-auto cursor-pointer"
                style={{ perspective: "1200px" }}
              >
                <div
                  className="overflow-hidden rounded-t-xl transition-transform duration-700 ease-in-out transform will-change-transform"
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center center",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                  }}
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;

                    // Rotation limits
                    const rotateX = ((y - centerY) / centerY) * 15;
                    const rotateY = ((x - centerX) / centerX) * -15;

                    // Shadow offset inversely proportional to rotateX, rotateY
                    const shadowX = -rotateY * 1.5;
                    const shadowY = rotateX * 1.5;

                    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05) translateZ(30px)`;
                    card.style.boxShadow = `
                      ${shadowX}px ${shadowY}px 15px rgba(0, 174, 239, 0.5),
                      ${shadowX / 2}px ${shadowY / 2}px 30px rgba(0, 174, 239, 0.25),
                      0 8px 20px rgba(0, 0, 0, 0.1)
                    `;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.15)";
                  }}
                >
                <Link to={link}>
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-36 object-cover"
                    loading="lazy"
                  />
                </Link>
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-semibold text-[#00aaff] mb-2 text-center">{name}</h2>
                  <p className="text-gray-700 dark:text-[#cbd5e1] text-sm text-center leading-snug mb-4">
                    {description}
                  </p>
                  <div className="text-center">
                    <Link
                      to={link}
                      className="inline-block bg-[#00aaff] text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-[#0077b6] transition"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Products;
