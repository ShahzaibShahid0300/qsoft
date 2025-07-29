import React, { useEffect, useRef, useState } from "react";

export default function VideoSection() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only run once
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Fade-in animation keyframes */}
      <style>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>

      <section
        ref={ref}
        className="bg-white dark:bg-[#1e3e62] py-16 px-4 md:px-8 lg:px-16"
      >
        <div
          className={`max-w-6xl mx-auto text-center transition-opacity duration-700 ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Meet Q-Soft Technologies in Action
          </h2>
          <p className="text-gray-600 dark:text-[#cbd5e1] mb-10 text-sm md:text-base max-w-3xl mx-auto">
            Watch how Q-Soft Technologies transforms your business with modern ERP and digital solutions —
            powered by technology, trusted by clients.
          </p>

          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-[#25476c]">
            <video
              src="/videos/QSoft_Video.mp4"
              controls
              poster="/videos/QSoft_Thumbnail.png"
              className="w-full h-full object-contain"
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* ✅ New paragraph below the video */}
          <p className="text-gray-700 dark:text-[#cbd5e1] mt-6 text-base md:text-lg max-w-2xl mx-auto">
            Thousands of users trust Q-Soft to manage their operations, automate their workflow, and drive growth.
            Scroll down to see some of the clients we proudly serve.
          </p>
        </div>
      </section>
    </>
  );
}
