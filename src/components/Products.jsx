import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "QSoft AIMS ERP Hybrid",
    description:
      "A comprehensive ERP solution tailored for medium to large enterprises to streamline operations, manage inventory, finance, and human resources with ease.",
    image: "/image/hybrid.png",
    link: "/products/core",
  },
  {
    id: 2,
    name: "QSoft AIMS ERP Standard",
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map(({ id, name, description, image, link }) => (
              <article
                key={id}
                className="bg-white dark:bg-[#25476c] rounded-xl shadow-lg overflow-hidden transform transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:-translate-y-1 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#00aaff] max-w-[320px] mx-auto dark:shadow-[#00aeef]/60"
                tabIndex={0}
                aria-label={name}
              >
                <div className="overflow-hidden">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-36 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <h2 className="text-2xl font-semibold mb-4 text-[#00aaff]">{name}</h2>
                  <p className="text-gray-700 dark:text-[#cbd5e1] text-base leading-relaxed mb-6">
                    {description}
                  </p>
                  <Link
                    to={link}
                    className="inline-block px-6 py-3 bg-[#00aaff] text-white font-semibold rounded-full shadow-md hover:bg-black transition"
                    aria-label={`Learn more about ${name}`}
                  >
                    Learn More
                  </Link>
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
