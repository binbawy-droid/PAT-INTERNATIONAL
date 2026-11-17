import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, 
  X, 
  Globe2, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Shield,
  Briefcase,
  Users,
  Compass
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Navigation ---
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Projects", path: "/projects" },
    { title: "Hirabah", path: "/hirabah" },
    { title: "Insights", path: "/insights" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-sec-navy/90 border-b border-white/5 py-4 backdrop-blur-lg" : "bg-transparent py-6 border-b border-transparent"}`}>
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex flex-col group">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tighter text-white underline underline-offset-4 decoration-2 decoration-neon-cyan">PAT GROUP</span>
              <div className="flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                <div className="w-1 h-1 rounded-full bg-neon-green animate-pulse"></div>
                <span className="text-[7px] font-mono text-neon-cyan uppercase tracking-widest leading-none">AI Active</span>
              </div>
            </div>
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-slate-500">Uganda Ltd</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-[10px] uppercase tracking-[0.2em] transition-all hover:text-slate-950 ${location.pathname === link.path ? "text-slate-950 font-bold border-b-2 border-slate-950 pb-1" : "text-slate-400 font-medium"}`}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-950">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
      >
        <div className="px-10 py-8 space-y-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-xs uppercase tracking-widest font-bold text-slate-900"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

// --- Footer ---
export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white px-10 py-6 border-t border-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-white mb-1">PAT INTERNATIONAL GROUP OF COMPANIES UGANDA LTD</p>
          <p className="text-[9px] uppercase tracking-[0.2em] opacity-40">© 2026 Professional Advisory & Trading Group. Regional Headquarters: Kampala, Uganda.</p>
        </div>
        
        <div className="flex gap-8">
          {[
            { city: "Kampala", color: "text-neon-cyan" },
            { city: "Nairobi", color: "text-neon-red" },
            { city: "Dar es Salaam", color: "text-neon-purple" },
            { city: "Kigali", color: "text-neon-green" }
          ].map((item, i) => (
            <span key={item.city} className={`text-[9px] uppercase tracking-[0.2em] font-bold ${item.color} ${i === 0 ? "opacity-100" : "opacity-40 hover:opacity-100 transition-opacity"}`}>
              {item.city}
            </span>
          ))}
        </div>

        <div className="flex gap-6">
          <button className="text-[9px] uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity">Privacy</button>
          <button className="text-[9px] uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity">Terms</button>
        </div>
      </div>
    </footer>
  );
};
