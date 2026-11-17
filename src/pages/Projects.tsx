import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, MapPin, Filter, SortAsc, Share2, Check } from "lucide-react";
import { useState, useMemo } from "react";

const getPhaseBadge = (phase: string) => {
  switch (phase) {
    case "Completed":
      return {
        bg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
        dot: "bg-emerald-400 shadow-[0_0_8px_#10b981]",
        label: "Completed"
      };
    case "In Progress":
      return {
        bg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
        dot: "bg-cyan-400 shadow-[0_0_8px_#06b6d4]",
        label: "In Progress"
      };
    case "Upcoming":
      return {
        bg: "bg-purple-500/10 border-purple-500/20 text-purple-400",
        dot: "bg-purple-400 shadow-[0_0_8px_#a855f7]",
        label: "Upcoming"
      };
    default:
      return {
        bg: "bg-slate-500/10 border-slate-500/20 text-slate-400",
        dot: "bg-slate-400",
        label: phase
      };
  }
};

const getPhaseColor = (phase: string) => {
  switch (phase) {
    case "Completed": return "text-emerald-400";
    case "In Progress": return "text-cyan-400";
    case "Upcoming": return "text-purple-400";
    default: return "text-slate-400";
  }
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activePhase, setActivePhase] = useState("All");
  const [sortStatus, setSortStatus] = useState("Default");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleShare = (idx: string) => {
    const url = `${window.location.origin}${window.location.pathname}?p=${idx}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(idx);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const projects = [
    {
      idx: "01",
      title: "Albertine Graben Logistics Hub",
      location: "Hoima, Uganda",
      category: "Oil & Gas",
      status: "Operational",
      phase: "Completed",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"
    },
    {
      idx: "02",
      title: "Mombasa-Kampala Transit Corridor",
      location: "Malaba / Busia",
      category: "Logistics",
      status: "Expansion Phase",
      phase: "In Progress",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800"
    },
    {
      idx: "03",
      title: "Great Lakes Water Transport",
      location: "Lake Victoria / Jinja",
      category: "Connectivity",
      status: "Commissioning",
      phase: "In Progress",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800"
    },
    {
      idx: "04",
      title: "Nairobi-Kigali Digital backbone",
      location: "Regional East Africa",
      category: "Digital Infra",
      status: "Active",
      phase: "Completed",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
    },
    {
      idx: "05",
      title: "Entebbe Industrial Park",
      location: "Entebbe, Uganda",
      category: "Special Economic Zone",
      status: "Construction",
      phase: "In Progress",
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=800"
    },
    {
      idx: "06",
      title: "Dar es Salaam Port Link",
      location: "Tanzania Corridor",
      category: "Maritime",
      status: "Strategic Advisory",
      phase: "Upcoming",
      image: "https://images.unsplash.com/photo-1494412574742-97c724122822?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const categories = useMemo(() => {
    const cats = ["All", ...new Set(projects.map(p => p.category))];
    return cats;
  }, []);

  const filteredAndSortedProjects = useMemo(() => {
    let result = [...projects];

    if (activeCategory !== "All") {
      result = result.filter(p => p.category === activeCategory);
    }

    if (activePhase !== "All") {
      result = result.filter(p => p.phase === activePhase);
    }

    if (sortStatus !== "Default") {
      result.sort((a, b) => {
        if (a.status === sortStatus) return -1;
        if (b.status === sortStatus) return 1;
        return a.status.localeCompare(b.status);
      });
    }

    return result;
  }, [activeCategory, activePhase, sortStatus]);

  return (
    <div className="pt-32 pb-24 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-10">
        <header className="mb-12 flex flex-col md:flex-row justify-between items-end border-b border-white/5 pb-12">
          <div>
            <h1 className="text-6xl font-black tracking-tighter text-white mb-4 uppercase italic">Regional <span className="text-neon-cyan not-italic">Portfolio</span></h1>
            <p className="text-sm text-slate-400 font-medium italic">Strategic infrastructures and logistics nodes managed locally by PAT Group in East Africa.</p>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-[10px] ui-mono font-bold text-slate-500 tracking-[0.4em] uppercase">Archival Series — SEC_042</span>
          </div>
        </header>

        {/* Filter & Sort Controls */}
        <div className="mb-16 bg-sec-charcoal/30 border border-white/5 p-6 rounded-3xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-6 pb-6 border-b border-white/5">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-slate-500 mr-2">
                <Filter size={14} className="text-neon-cyan" />
                <span className="text-[10px] font-black uppercase tracking-widest">Sector:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                      activeCategory === cat 
                      ? "bg-neon-cyan text-sec-navy shadow-[0_0_12px_rgba(0,255,255,0.4)]" 
                      : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-slate-500">
                <SortAsc size={14} className="text-neon-purple" />
                <span className="text-[10px] font-black uppercase tracking-widest">Priority Status:</span>
              </div>
              <select 
                value={sortStatus}
                onChange={(e) => setSortStatus(e.target.value)}
                className="bg-sec-charcoal border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-neon-cyan cursor-pointer"
              >
                <option value="Default">Initial Order</option>
                <option value="Operational">Operational First</option>
                <option value="Expansion Phase">Expansion Phase First</option>
                <option value="Strategic Advisory">Advisory First</option>
                <option value="Construction">Construction First</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-slate-500 mr-2">
              <Filter size={14} className="text-neon-purple" />
              <span className="text-[10px] font-black uppercase tracking-widest">Phase Filter:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["All", "Completed", "In Progress", "Upcoming"].map(phase => {
                const isActive = activePhase === phase;
                let activeStyle = "bg-white text-sec-navy font-bold";
                if (isActive) {
                  if (phase === "Completed") activeStyle = "bg-emerald-500 text-white shadow-[0_0_12px_rgba(16,185,129,0.4)]";
                  else if (phase === "In Progress") activeStyle = "bg-cyan-500 text-white shadow-[0_0_12px_rgba(6,182,212,0.4)]";
                  else if (phase === "Upcoming") activeStyle = "bg-purple-500 text-white shadow-[0_0_12px_rgba(168,85,247,0.4)]";
                }
                return (
                  <button
                    key={phase}
                    onClick={() => setActivePhase(phase)}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                      isActive 
                      ? activeStyle 
                      : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {phase}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredAndSortedProjects.map((project, i) => (
              <motion.div 
                layout
                key={project.idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 255, 255, 0.1)"
                }}
                transition={{ duration: 0.4 }}
                className="group bg-sec-charcoal/50 border border-white/5 p-8 flex flex-col justify-between hover:border-neon-cyan/20 transition-all duration-500 relative rounded-[2rem] overflow-hidden"
              >
                <div className="absolute inset-0 bg-neon-gradient opacity-0 group-hover:opacity-5 transition-opacity"></div>
                <div>
                  <div className="aspect-video bg-sec-navy mb-8 overflow-hidden relative rounded-2xl border border-white/5">
                     <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-100 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950 text-white p-3 text-xs font-bold leading-none shadow-xl border border-white/10">
                      {project.idx}
                    </div>

                    {/* Visual Status Badge on Image */}
                    <div className={`absolute bottom-4 left-4 gap-2 px-3 py-1.5 rounded-lg border backdrop-blur-md flex items-center z-10 transition-all ${getPhaseBadge(project.phase).bg}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${getPhaseBadge(project.phase).dot}`}></div>
                      <span className="text-[8px] font-black uppercase tracking-[0.2em]">{getPhaseBadge(project.phase).label}</span>
                    </div>

                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShare(project.idx);
                      }}
                      className="absolute top-4 right-4 bg-white/10 hover:bg-neon-cyan text-white hover:text-sec-navy p-3 rounded-xl backdrop-blur-md border border-white/10 transition-all z-20 shadow-2xl opacity-0 group-hover:opacity-100"
                      title="Copy Project Link"
                    >
                      {copiedId === project.idx ? <Check size={14} /> : <Share2 size={14} />}
                    </button>
                  </div>
                  <div>
                     <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tighter group-hover:text-neon-cyan transition-colors line-clamp-1">{project.title}</h3>
                     <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2 group-hover:text-neon-purple transition-colors italic">
                       <MapPin size={10} className="group-hover:text-neon-purple" /> {project.location}
                     </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center">
                   <div>
                      <p className="text-[8px] uppercase tracking-[0.4em] font-bold text-slate-600 mb-2">Sector</p>
                      <p className="text-[10px] uppercase tracking-[0.1em] font-mono font-bold text-neon-cyan">{project.category}</p>
                   </div>
                   <div className="text-right">
                      <p className="text-[8px] uppercase tracking-[0.4em] font-bold text-slate-600 mb-2">Stage</p>
                      <p className={`text-[10px] uppercase tracking-[0.1em] font-mono font-bold italic ${getPhaseColor(project.phase)}`}>{project.status}</p>
                   </div>
                </div>

                {/* Hover Trigger */}
                <button className="absolute -bottom-2 -right-2 bg-white text-sec-navy p-5 rounded-tl-[1.5rem] shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-neon-cyan">
                  <ExternalLink size={18} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </section>

        {/* Global Stats Footer */}
        <div className="mt-32 pt-20 border-t border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-12 bg-sec-charcoal/20 p-12 rounded-[3rem]">
            {[
              { label: "Regional Assets", val: "$2.5B+", color: "text-neon-cyan" },
              { label: "AI Prediction Success", val: "99.2%", color: "text-neon-green" },
              { label: "East African Nodes", val: "15 Cities", color: "text-neon-purple" },
              { label: "Network Resilience", val: "High_Alpha", color: "text-neon-red" }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-slate-500 mb-3">{stat.label}</p>
                <p className={`text-4xl font-black ${stat.color} tracking-tighter`}>{stat.val}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
