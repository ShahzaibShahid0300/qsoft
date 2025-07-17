import { Helmet } from "react-helmet";
import mobileBanner from "../assets/mobileappdevelopment.jpg";

const MobileAppDevelopment = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-[#1e3e62] dark:text-white">
      <Helmet>
        <title>Mobile App Development | Q-Soft Technologies</title>
        <meta
          name="description"
          content="Q-Soft Technologies builds modern, scalable mobile applications for iOS and Android that elevate your business. Explore our expert mobile app development services."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
        <img
          src={mobileBanner}
          alt="Mobile App Development Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 dark:bg-[#1e3e62]/60 flex items-center justify-center text-center px-4">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Custom Mobile App Development
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Build high-performance apps for Android & iOS that connect and engage your users.
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
            Q-Soft Technologies creates mobile applications that are fast, secure, and beautifully designed. We develop cross-platform and native mobile apps that align perfectly with your business needs.
          </p>
          <ul className="list-disc list-inside pl-2 space-y-2 text-gray-700 dark:text-slate-300">
            <li>Custom Android & iOS app development</li>
            <li>Cross-platform apps using React Native / Flutter</li>
            <li>Integration with backend APIs & databases</li>
            <li>Modern UI/UX with responsive design</li>
            <li>App Store & Play Store deployment support</li>
          </ul>
        </section>

        {/* Section: About Q-Soft Technologies */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#00aeef]">
            About Q-Soft Technologies
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-slate-200">
            Q-Soft Technologies is a leading software company committed to delivering innovative digital solutions. Our mobile development team specializes in building scalable and user-centric apps that help businesses grow in the mobile-first world.
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-slate-300">
            From concept to launch, we ensure your mobile app is functional, visually appealing, and optimized for performance across devices and platforms.
          </p>
        </section>

        {/* CTA Section */}
        <div className="bg-[#00aeef] text-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-2">
            Need a mobile app for your business?
          </h3>
          <p className="text-base md:text-lg mb-4">
            Let Q-Soft Technologies turn your app idea into reality. Start your mobile journey today.
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

export default MobileAppDevelopment;
