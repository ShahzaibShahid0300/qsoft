import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import FeatureGrid from "./components/FeatureGrid";
import FeaturesSection from "./components/FeaturesSection";
import ClientSection from "./components/ClientSection";
import FeaturesSectionTwo from "./components/FeaturesSectionTwo";
import StatsSection from "./components/StatsSection";
import CaseStudySlider from "./components/CaseStudySlider";
import OurPortfolio from "./components/OurPortfolio";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import { Helmet } from "react-helmet";

// page components inside components folder
import About from "./components/About";
import Products from "./components/Products";
import ProductCore from "./pages/ProductCore";
import Lite from "./pages/Lite";
import Features from "./components/Features";
import Industries from "./components/Industries";
import Solutions from "./components/Solutions";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="relative">
      <Helmet>
        <title>ERP Solution | QSoft</title>
        <meta
          name="description"
          content="QSoft ERP helps manage your business processes seamlessly with modern features and a clean design."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />

      <Routes>
        {/* Home route shows all your current home components */}
        <Route
          path="/"
          element={
            <>
              <HeroSlider />
              <FeatureGrid />
              <FeaturesSection />
              <ClientSection />
              <FeaturesSectionTwo />
              <StatsSection />
              <CaseStudySlider />
              <OurPortfolio />
            </>
          }
        />

        {/* Other routes */}
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/core" element={<ProductCore />} />
        <Route path="/products/lite" element={<Lite />} />
        <Route path="/features" element={<Features />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />

        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
