import { motion } from "motion/react";
import { 
  Settings, 
  Lightbulb, 
  ShieldCheck, 
  Truck
} from "lucide-react";

const Services = () => {
  const services = [
    {
      idx: "01",
      title: "Regional Project Management",
      desc: "Architectural oversight for massive infrastructure projects in Uganda and East Africa. We manage the delicate balance between timeline, budget, and regional regulation.",
      icon: <Settings size={28} />,
      details: ["Hoima Oil Logistics", "Northern Corridor Sync", "Cross-Border Compliance"]
    },
    {
      idx: "02",
      title: "East African Advisory",
      desc: "Precision market analysis for firms entering the EAC market. Risk intelligence led by veterans of the Kampala and Nairobi financial sectors.",
      icon: <Lightbulb size={28} />,
      details: ["Regional Geopolitics", "EAC Trade Protocols", "Market Linkage Analysis"]
    },
    {
      idx: "03",
      title: "Industrial Trade & Supply",
      desc: "End-to-end sourcing and logistics coordination for critical industrial assets. Optimizing global supply nodes for resilience.",
      icon: <Truck size={28} />,
      details: ["Procurement Hubs", "Route Optimization", "Vendor Auditing"]
    },
    {
      idx: "04",
      title: "ESG & Compliance Governance",
      desc: "Transforming standard auditing into strategic value through robust ESG reporting and international compliance frameworks.",
      icon: <ShieldCheck size={28} />,
      details: ["Carbon Footprint Audits", "Anti-Corruption Gates", "Standardization"]
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-10">
        
        <header className="mb-20 grid grid-cols-12 gap-10">
           <div className="col-span-12 lg:col-span-8">
              <h1 className="text-6xl font-light tracking-tighter text-slate-950 mb-8 leading-tight">
                Specialized <br />
                <span className="font-bold underline underline-offset-8 decoration-4">Capabilities</span>
              </h1>
              <p className="text-base text-slate-500 font-medium italic max-w-lg mb-10">
                PAT Group Uganda provides deep-sector expertise to navigate the friction of East African expansion.
              </p>
           </div>
           <div className="col-span-12 lg:col-span-4 flex flex-col justify-end">
              <div className="border-t border-slate-950 pt-6">
                 <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-950 mb-2">Service Lifecycle — 2026</p>
                 <p className="text-xs text-slate-400 font-medium tracking-widest leading-relaxed uppercase">Integrated Solutions for High-Performance Ventures.</p>
              </div>
           </div>
        </header>

        {/* Services List - Clean Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 p-12 hover:shadow-2xl transition-all duration-500 group flex flex-col"
            >
              <div className="flex justify-between items-start mb-12">
                 <span className="text-xs font-bold text-slate-300 tracking-[0.5em]">{service.idx}</span>
                 <div className="text-slate-950 group-hover:text-blue-600 transition-colors">{service.icon}</div>
              </div>
              <h3 className="text-2xl font-bold text-slate-950 mb-6 italic underline underline-offset-4 decoration-slate-100 group-hover:decoration-blue-600 transition-all">{service.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-10 italic">
                "{service.desc}"
              </p>
              <div className="mt-auto pt-8 border-t border-slate-50 space-y-4">
                 {service.details.map((detail, j) => (
                   <div key={j} className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-slate-950"></div>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">{detail}</span>
                   </div>
                 ))}
              </div>
            </motion.div>
          ))}
        </section>

        {/* Methodology Rail */}
        <section className="mt-32 pt-24 border-t border-slate-200 flex flex-col lg:flex-row gap-20">
           <div className="lg:w-1/3">
              <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-slate-400 mb-6">The Methodology</h4>
              <h3 className="text-3xl font-light tracking-tighter text-slate-950 italic">Process <span className="font-bold">Honesty</span></h3>
           </div>
           <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
              {[
                { s: "α", t: "Discovery", d: "Deep regional dive into stakeholders." },
                { s: "β", t: "Strategizing", d: "Hard-coding contingency layers." },
                { s: "γ", t: "Execution", d: "Tactical field delivery and audit." },
                { s: "δ", t: "Hand-over", d: "Post-operational optimization." }
              ].map((step, i) => (
                <div key={i} className="bg-white p-10 hover:bg-slate-50 transition-colors">
                  <span className="text-2xl font-bold text-slate-100 mb-4 block group-hover:text-slate-950">{step.s}</span>
                  <h5 className="text-sm font-bold text-slate-950 mb-2 uppercase tracking-widest">{step.t}</h5>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-loose italic">{step.d}</p>
                </div>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
