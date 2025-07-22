import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import FeatureGrid from "./components/FeatureGrid";
import FeaturesSection from "./components/FeaturesSection";
import ClientSection from "./components/ClientSection";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import { Helmet } from "react-helmet";

import About from "./components/About";
import Products from "./components/Products";
import ProductCore from "./pages/ProductCore";
import Lite from "./pages/Lite";
import Features from "./components/Features";
import Industries from "./components/Industries";
import Solutions from "./components/Solutions";
import Contact from "./components/Contact";
import PortfolioPage from "./pages/PortfolioPage";
import NotFound from "./components/NotFound";

// ✅ Solution detail pages from `pages/` folder (NOT inside components/)
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import WebDevelopment from "./pages/WebDevelopment";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import DigitalMarketing from "./pages/DigitalMarketing";
import ITConsultancy from "./pages/ITConsultancy";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative min-h-screen">
      <Helmet>
        <title>ERP Solution | QSoft</title>
        <meta
          name="description"
          content="QSoft ERP helps manage your business processes seamlessly with modern features and a clean design."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <ScrollToTop />
      <Navbar toggleTheme={toggleTheme} theme={theme} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSlider theme={theme} />
              <FeatureGrid theme={theme} />
              <FeaturesSection theme={theme} />
              <ClientSection />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/core" element={<ProductCore />} />
        <Route path="/products/lite" element={<Lite />} />
        <Route path="/features" element={<Features />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<PortfolioPage />} />


        {/* ✅ Solution Pages from /pages */}
        <Route path="/solutions/softwaredevelopment" element={<SoftwareDevelopment />} />
        <Route path="/solutions/webdevelopment" element={<WebDevelopment />} />
        <Route path="/solutions/mobileappdevelopment" element={<MobileAppDevelopment />} />
        <Route path="/solutions/digitalmarketing" element={<DigitalMarketing />} />
        <Route path="/solutions/itconsultancy" element={<ITConsultancy />} />
       
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
