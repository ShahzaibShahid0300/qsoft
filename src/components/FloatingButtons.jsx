import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show scroll-to-top button on scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // WhatsApp number (replace with your number)
  const whatsappNumber = "+923009192114"; // Use country code, e.g. "923001234567"

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">
      {/* Scroll to top */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#00aeef] hover:bg-[#00a7dc] text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ChevronUp size={28} />
        </button>
      )}

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`} 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#1DA851] text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        {/* Official WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-6 h-6"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M20.52 3.48A11.956 11.956 0 0012 0C5.373 0 0 5.372 0 12c0 2.112.556 4.1 1.525 5.817L0 24l6.322-1.53A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12 0-3.22-1.26-6.24-3.48-8.52zM12 21.927c-1.986 0-3.92-.54-5.576-1.55l-.398-.235-3.755.91.974-3.66-.26-.405A9.013 9.013 0 013 12c0-4.962 4.037-9 9-9 2.397 0 4.642.934 6.324 2.624a8.899 8.899 0 012.636 6.376c0 4.962-4.038 9-9 9zm5.382-7.633c-.292-.146-1.727-.85-1.994-.946-.268-.098-.463-.146-.659.146-.195.292-.75.946-.92 1.14-.17.195-.34.22-.633.073-.292-.146-1.232-.454-2.35-1.447-.868-.774-1.452-1.727-1.623-2.02-.17-.292-.018-.45.128-.595.132-.133.292-.34.438-.51.146-.17.195-.292.292-.487.098-.195.05-.366-.025-.512-.073-.146-.658-1.582-.9-2.168-.237-.57-.48-.493-.659-.502-.17-.007-.366-.01-.56-.01-.195 0-.512.073-.78.366-.268.292-1.025 1-1.025 2.44 0 1.44 1.05 2.832 1.196 3.03.146.195 2.07 3.162 5.02 4.432.7.302 1.245.482 1.67.616.7.22 1.34.19 1.847.115.563-.085 1.727-.704 1.972-1.384.244-.68.244-1.265.17-1.384-.073-.122-.268-.195-.56-.34z" />
        </svg>
      </a>
    </div>
  );
};

export default FloatingButtons;
