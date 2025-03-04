import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import FreeDemo from "./components/FreeDemo";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";
import NewProject from "./components/NewProject";
import HorizontalVideo from "./components/HorizontalVideos"; // ✅ Horizontal Video Eklendi
import Footer from "./components/Footer"; 

export default function App() {
  const location = useLocation(); // ✅ Mevcut sayfanın URL'sini al

  // Footer'ı göstermemesi gereken sayfalar
  const hideFooterPages = ["/free-demo", "/new-project", "/horizontal-video"];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <div className="pt-20">
                <Hero />
                <About />
                <Services />
                <HowItWorks />
              </div>
            }
          />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/free-demo" element={<FreeDemo />} />
          <Route path="/new-project" element={<NewProject />} />
          <Route path="/horizontal-video" element={<HorizontalVideo />} /> {/* ✅ Yeni Route Eklendi */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
      </div>

      {/* Footer - Belirtilen sayfalarda gizle */}
      {!hideFooterPages.includes(location.pathname) && <Footer />}
    </div>
  );
}
