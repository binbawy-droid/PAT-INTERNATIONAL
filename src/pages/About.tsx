import { motion } from "motion/react";
import { Users, Target, History, Award } from "lucide-react";

const About = () => {
  return (
    <div className="pt-32 pb-24 bg-transparent min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-10">
        {/* Editorial Header */}
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-white/5 pb-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-white uppercase italic leading-[0.9] mb-8">
              Legacy of <span className="text-neon-cyan not-italic underline underline-offset-[12px] decoration-neon-cyan/20">Integrity</span>
            </h1>
            <p className="text-lg text-slate-400 font-medium italic">
              PAT INTERNATIONAL GROUP OF COMPANIES UGANDA LTD has defined regional project excellence for over two decades.
            </p>
          </motion.div>
          <div className="flex flex-col items-end">
             <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white mb-2 underline decoration-neon-purple">Established 2004</span>
             <span className="text-xs text-slate-500 font-medium tracking-widest italic uppercase">Operational Index v.26</span>
          </div>
        </header>

        {/* Philosophy Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-7 space-y-12">
            <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic leading-tight">
              Bridging the gap between monumental vision and tactical field success.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <p className="text-base text-slate-400 leading-relaxed font-medium italic">
                Our approach is rooted in architectural honesty. We don't just provide "advice"; we build the frameworks for multi-billion dollar developments. From the dynamic markets of Kampala to the emerging hubs of the East African Community, we are the invisible engine behind successful regional growth.
              </p>
              <p className="text-base text-slate-400 leading-relaxed font-medium italic">
                By integrating market-linkage analysis with boots-on-the-ground project management, we ensure that every venture is resilient against geopolitical volatility and operational fatigue. Our data-driven methodology ensures that every asset is optimized for the unique East African regulatory climate.
              </p>
            </div>
            
            {/* Visual Block */}
            <div className="bg-sec-charcoal/50 border border-white/5 p-4 shadow-2xl relative rounded-[2rem] overflow-hidden group">
               <div className="absolute inset-0 bg-neon-gradient opacity-0 group-hover:opacity-10 transition-opacity"></div>
               <div className="aspect-video overflow-hidden rounded-[1.5rem]">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                    alt="Innovation" 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
               </div>
               <div className="absolute top-10 -right-4 w-48 bg-white text-sec-navy p-8 shadow-2xl rounded-l-3xl">
                  <p className="text-[10px] font-black uppercase tracking-widest leading-relaxed mb-4">Operational <br />Verification</p>
                  <p className="text-4xl font-black italic tracking-tighter">99.8%</p>
                  <div className="h-1 bg-neon-cyan/20 w-full mt-4 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-neon-cyan animate-pulse"></div>
                  </div>
               </div>
            </div>
          </div>

          <aside className="lg:col-span-5 flex flex-col space-y-12 lg:pt-20">
             {[
               { icon: <Target size={24}/>, title: "Mission Critical", text: "We focus on the intersections of logistics, infrastructure, and international trade in the EAC corridor.", color: "text-neon-cyan" },
               { icon: <History size={24}/>, title: "Operational Continuity", text: "Ensuring long-term sustainability through meticulous risk hedging and local stake-holder engagement.", color: "text-neon-purple" }
             ].map((v, i) => (
                <div key={i} className="group border-l-2 border-white/5 pl-10 hover:border-neon-cyan transition-colors bg-white/5 p-8 rounded-r-3xl">
                  <div className={`${v.color} mb-6 group-hover:animate-bounce transition-all`}>{v.icon}</div>
                  <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">{v.title}</h4>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest leading-loose italic">{v.text}</p>
                </div>
             ))}
             
             <div className="p-10 border border-neon-cyan/20 bg-neon-cyan/5 rounded-[2rem]">
                <h4 className="text-white text-[10px] uppercase tracking-[0.5em] font-black mb-6">Regional Footprint</h4>
                <div className="space-y-4">
                   {['Central Hub / Kampala', 'Logistics Node / Mombasa', 'Industrial Zone / Dar es Salaam', 'Export Portal / Kigali'].map((hub, i) => (
                     <div key={i} className="flex items-center gap-4 text-xs text-slate-400 font-black uppercase tracking-widest border-b border-white/5 pb-3">
                        <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full shadow-[0_0_8px_#00ffff]"></div>
                        {hub}
                     </div>
                   ))}
                </div>
             </div>
          </aside>
        </section>

        {/* Values - Visible Grid */}
        <section className="border-t border-white/5 pt-24">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <h3 className="text-[10px] uppercase tracking-[0.8em] font-black text-slate-500">The PAT Ethics Code // v3.1</h3>
            <div className="flex-1 h-px bg-white/5"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 bg-sec-charcoal/20 border border-white/5 rounded-[3rem] overflow-hidden">
            {[
              { val: "Precision", sub: "Meticulous detail in every logistics node.", color: "text-neon-cyan" },
              { val: "Integrity", sub: "Absolute transparency across the EAC network.", color: "text-neon-purple" },
              { val: "Adaptivity", sub: "Regional nuance encoded into strategic frameworks.", color: "text-neon-green" },
              { val: "Longevity", sub: "Sustainable impact for East African generations.", color: "text-neon-red" }
            ].map((value, i) => (
              <div key={i} className="p-12 border-r border-white/5 last:border-r-0 hover:bg-white/5 transition-colors group relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 bg-transparent group-hover:${value.color.replace('text', 'bg')} transition-all`}></div>
                <span className="text-[9px] font-black text-slate-600 tracking-[0.4em] block mb-6 uppercase">ID_NODE_IV_0{i+1}</span>
                <h4 className={`text-2xl font-black text-white mb-4 uppercase italic tracking-tighter transition-all group-hover:${value.color}`}>{value.val}</h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed italic">{value.sub}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
