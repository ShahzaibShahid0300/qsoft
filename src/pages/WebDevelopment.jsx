import { Helmet } from "react-helmet";

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-[#1e3e62] dark:text-white">
      <Helmet>
        <title>Web Development Services | Q-Soft Technologies</title>
        <meta
          name="description"
          content="Q-Soft Technologies offers cutting-edge web development services tailored to modern business needs. Explore how our custom solutions can transform your online presence."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Web Development Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 dark:bg-[#1e3e62]/60 flex items-center justify-center text-center px-4">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Professional Web Development
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              We build high-performance websites and scalable web applications tailored to your business goals.
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
            At Q-Soft Technologies, we specialize in building fast, responsive, and dynamic websites using the latest technologies such as React.js, Next.js, Tailwind CSS, Node.js, and more. Whether you need a simple business site or a complex web application, our expert developers are ready to deliver a solution tailored to your goals.
          </p>
          <ul className="list-disc list-inside pl-2 space-y-2 text-gray-700 dark:text-slate-300">
            <li>Responsive and mobile-first design</li>
            <li>Custom frontend & backend development</li>
            <li>CMS integration (WordPress, Headless CMS)</li>
            <li>E-commerce and ERP system development</li>
            <li>Performance optimization and SEO best practices</li>
          </ul>
        </section>

        {/* Section: About Q-Soft Technologies */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#00aeef]">
            About Q-Soft Technologies
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-slate-200">
            Q-Soft Technologies is a forward-thinking IT company providing innovative software solutions to businesses worldwide. With a passion for clean design and efficient systems, we empower companies through our ERP systems, digital solutions, and modern development services.
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-slate-300">
            Our team believes in building long-term partnerships by delivering value, consistency, and quality — whether you're launching a new website or upgrading an existing platform, Q-Soft Technologies is your reliable digital partner.
          </p>
        </section>

        {/* CTA Section */}
        <div className="bg-[#00aeef] text-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-2">
            Ready to build your next website?
          </h3>
          <p className="text-base md:text-lg mb-4">
            Contact Q-Soft Technologies today and let's bring your vision to life.
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

export default WebDevelopment;
