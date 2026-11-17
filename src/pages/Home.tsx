import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Shield, 
  BarChart3, 
  Users2, 
  Zap,
  CheckCircle2,
  ExternalLink,
  BrainCircuit
} from "lucide-react";

const Home = () => {
  return (
    <div className="overflow-hidden bg-transparent min-h-screen">
      {/* Dynamic Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-sec-navy"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-neon-cyan/5 rounded-full blur-[120px]"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-sec-charcoal/50 -skew-x-12 translate-x-32"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-10 w-full">
          <div className="grid grid-cols-12 gap-10 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="col-span-12 lg:col-span-8 px-8 py-16 bg-sec-charcoal/40 backdrop-blur-sm border border-white/5 rounded-3xl"
            >
              <div className="inline-block border-l-2 border-neon-cyan pl-4 mb-8">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500">East African Hub 2026</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-10">
                Uganda <br />
                <span className="text-neon-cyan underline underline-offset-[20px] decoration-8 decoration-neon-cyan/20">Operational</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-12 max-w-lg font-medium">
                PAT INTERNATIONAL GROUP OF COMPANIES UGANDA LTD is the anchor of East African industrial strategy. We navigate regional volatility through neural-assisted advisory and large-scale logistics.
              </p>
              <div className="flex items-center gap-10">
                <Link to="/projects" className="bg-white text-sec-navy text-[10px] uppercase tracking-[0.3em] font-black px-12 py-6 hover:bg-neon-cyan transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  Execute Strategy
                </Link>
                <Link to="/about" className="text-[10px] uppercase tracking-[0.3em] font-bold text-white border-b border-white/20 pb-1 hover:text-neon-cyan hover:border-neon-cyan transition-all">
                  Neural Methodology
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block col-span-4 relative group"
            >
              <div className="bg-sec-charcoal border border-white/10 p-6 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-neon-gradient opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="aspect-[3/4] bg-sec-navy rounded-[2rem] flex items-center justify-center overflow-hidden border border-white/5">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                    alt="Corporate"
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-8 flex justify-between items-end">
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-slate-500 font-bold mb-1">Regional HQ</p>
                    <p className="text-sm font-bold text-white tracking-widest uppercase">Kampala_Uganda</p>
                  </div>
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                     <ExternalLink size={16} className="text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid Services Section */}
      <section className="py-32 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-center pr-10">
              <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neon-purple mb-6 flex items-center gap-2">
                <BrainCircuit size={14} /> AI Capabilities
              </h2>
              <h3 className="text-5xl font-black tracking-tighter text-white leading-tight">
                East African <span className="text-neon-cyan">Market</span> <br />
                <span className="italic text-slate-600">Leader</span>
              </h3>
              <p className="text-slate-400 text-lg mt-10 leading-relaxed font-medium">
                Our neural intelligence layers ensure infrastructure projects across Uganda, Kenya, Tanzania, and Rwanda remain sustainable and high-performing.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Risk Mitigation", desc: "Rigorous frameworks for international volatility.", color: "text-neon-red", bg: "bg-red-500/5" },
                { title: "Project Governance", desc: "Server-authoritative oversight of massive assets.", color: "text-neon-green", bg: "bg-green-500/5" },
                { title: "Strategic Trade", desc: "Connecting global supply nodes with efficiency.", color: "text-neon-cyan", bg: "bg-cyan-500/5" },
                { title: "Market Entry", desc: "Navigating regional nuance for multinational firms.", color: "text-neon-purple", bg: "bg-purple-500/5" }
              ].map((item, i) => (
                <div key={i} className={`${item.bg} backdrop-blur-md p-10 border border-white/5 rounded-[2rem] hover:border-white/20 transition-all group relative overflow-hidden h-72 flex flex-col justify-between`}>
                  <div className={`absolute top-0 right-0 w-24 h-24 blur-[60px] opacity-20 ${item.color.replace('text', 'bg')}`}></div>
                  <span className={`text-[10px] font-mono font-bold ${item.color} tracking-[0.3em] block`}>SEC_NODE_0{i+1}</span>
                  <div>
                    <h4 className="text-xl font-black text-white mb-3 uppercase tracking-tighter">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium uppercase tracking-wider">{item.desc}</p>
                  </div>
                  <div className="h-1 bg-white/5 w-full rounded-full overflow-hidden">
                     <div className={`h-full w-12 bg-current ${item.color} group-hover:w-full transition-all duration-700`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Project Preview */}
      <section className="py-32 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex justify-between items-end mb-20 border-b border-white/5 pb-8">
             <h2 className="text-5xl font-black tracking-tighter text-white uppercase italic">Active <span className="text-neon-cyan not-italic">Nodes</span></h2>
             <Link to="/projects" className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500 hover:text-white transition-colors">
               Explore Full Portfolio →
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { id: "01", name: "Northern Corridor Hub", location: "Mombasa/Kampala", date: "2023", color: "text-neon-purple" },
                { id: "02", name: "Standard Gauge Extension", location: "Malaba", date: "2024", color: "text-neon-green" },
                { id: "03", name: "Nile Energy Zone", location: "Jinja", date: "2025", color: "text-neon-cyan" }
              ].map((proj, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-sec-charcoal/50 border border-white/5 p-10 flex flex-col justify-between aspect-square group shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all rounded-[2.5rem] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-neon-gradient opacity-0 group-hover:opacity-5 transition-opacity"></div>
                <div className="flex justify-between items-start">
                  <span className={`text-5xl font-black transition-colors ${proj.color} opacity-20 group-hover:opacity-100`}>{proj.id}</span>
                  <span className="text-[9px] uppercase tracking-widest font-bold text-slate-500">{proj.date}</span>
                </div>
                <div>
                  <p className={`text-[10px] uppercase tracking-widest ${proj.color} font-bold mb-4`}>Venture_Node</p>
                  <h4 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">{proj.name}</h4>
                  <p className="text-sm text-slate-500 font-medium italic">{proj.location}</p>
                </div>
                <div className="pt-6 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="text-[10px] uppercase tracking-widest font-bold text-white">Access Metrics</span>
                   <ArrowRight size={16} className={proj.color} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal CTA */}
      <section className="py-40 bg-transparent text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon-purple/5 blur-[150px]"></div>
        <div className="max-w-4xl mx-auto px-10 relative z-10">
           <h2 className="text-6xl font-black tracking-tighter text-white mb-10 leading-tight uppercase">
             Ready for <span className="text-neon-cyan italic underline underline-offset-[12px] decoration-neon-cyan/20">Operational</span> Escalation?
           </h2>
           <p className="text-slate-400 mb-12 text-xl italic font-medium max-w-2xl mx-auto">
             Connect with our strategic advisors to refine your global footprint using our neural infrastructure.
           </p>
           <Link to="/contact" className="inline-block bg-white text-sec-navy text-[11px] uppercase tracking-[0.5em] font-black px-20 py-8 hover:bg-neon-cyan transition-all shadow-2xl">
             Initialize Protocol
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
