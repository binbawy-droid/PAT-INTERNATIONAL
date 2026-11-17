import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer } from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Hirabah from "./pages/Hirabah";
import { AIAdvisor } from "./components/AIAdvisor";
import { useEffect } from "react";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-sec-navy font-sans text-slate-200 selection:bg-neon-cyan selection:text-slate-950 bg-grid-slate-900">
        <ScrollToTop />
        <AIAdvisor />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/insights" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hirabah" element={<Hirabah />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
