import { motion } from "motion/react";
import { Clock, Utensils, Award, Globe, Heart, Wheat } from "lucide-react";

const Hirabah = () => {
  const timeline = [
    {
      year: "1998",
      title: "The Hearth of Hirabah",
      desc: "Founded as a family-run artisanal kitchen in Rubaga Division, Kampala, focusing on traditional recipes and zero-waste practices.",
      icon: <Heart size={20} />,
      alignment: "left"
    },
    {
      year: "2005",
      title: "First Commercial Bakery",
      desc: "Expanded into our first professional facility, introducing automated precision while maintaining the hand-crafted quality our customers loved.",
      icon: <Wheat size={20} />,
      alignment: "right"
    },
    {
      year: "2012",
      title: "Regional Distribution Hub",
      desc: "Partnered with PAT International to establish a high-efficiency logistics network, bringing Hirabah artisanal goods to premium retailers across the region.",
      icon: <Utensils size={20} />,
      alignment: "left"
    },
    {
      year: "2018",
      title: "International Export Debut",
      desc: "Successfully launched our shelf-stable organic range in global markets, reaching over 10 countries and setting new standards for exported delicacies.",
      icon: <Globe size={20} />,
      alignment: "right"
    },
    {
      year: "2024",
      title: "The Sustainable Revolution",
      desc: "Achieved Net-Zero production status across all facilities. Hirabah Foods and Bakery becomes a benchmark for ESG compliance in the food sector.",
      icon: <Award size={20} />,
      alignment: "left"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-10">
        <header className="mb-24 border-b border-white/5 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-white uppercase italic leading-[0.9] mb-4">
                HIRABAH <br />
                <span className="text-neon-cyan not-italic underline underline-offset-[12px] decoration-neon-cyan/20">Foods & Bakery</span>
              </h1>
              <p className="text-sm text-slate-400 font-medium italic mt-6">
                A PAT INTERNATIONAL GROUP OF COMPANIES UGANDA LTD Strategic Venture.
              </p>
            </motion.div>
            <div className="text-right">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500">Venture ID — HRB_KAMPALA_98</span>
            </div>
          </div>
        </header>

        {/* Story Section */}
        <section className="mb-32 relative overflow-hidden p-12 bg-sec-charcoal/30 border border-white/5 rounded-[3rem]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/5 blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-12">
              <p className="text-2xl md:text-3xl text-white font-black leading-tight italic mb-12 border-l-8 border-neon-cyan pl-8 max-w-4xl uppercase tracking-tighter">
                "Hirabah embodies the fusion of deep-rooted heritage and modern neural-assisted supply chains. We are redefining artisanal food production for the East African market."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-400 text-lg font-medium leading-relaxed">
                <p>
                  Started as a local bakery in the heart of Rubaga Division, Hirabah has emerged as a cornerstone of PAT Group's industrial food division. Our story is one of resilience, leveraging traditional Ugandan flavors while implementing rigorous international safety and quality standards that allow our products to compete on the global stage.
                </p>
                <p>
                  Today, we process thousands of units daily, powered by sustainable energy and monitored by AI-driven logistics nodes. Every loaf and delicacy represents a data-point in our mission to ensure food security and premium quality across the Eastern Corridor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Component */}
        <section className="relative px-4 mb-40">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block"></div>
          
          <div className="flex justify-center mb-20 text-center">
            <div className="bg-sec-charcoal border border-white/10 px-8 py-3 rounded-full">
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-neon-purple">Chronicle of Growth</span>
            </div>
          </div>

          <div className="space-y-32">
            {timeline.map((event, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center transition-all ${event.alignment === 'right' ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Connector Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-sec-navy border-4 border-neon-cyan rounded-full z-10 hidden md:block shadow-[0_0_15px_#00ffff99]"></div>

                {/* Content Card */}
                <div className="w-full md:w-[45%]">
                  <div className={`p-12 bg-sec-charcoal/50 backdrop-blur-xl border border-white/5 shadow-2xl transition-all duration-500 group rounded-[2.5rem] relative overflow-hidden ${event.alignment === 'right' ? 'md:border-r-neon-cyan' : 'md:border-l-neon-cyan'}`}>
                    <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex justify-between items-center mb-8 relative z-10">
                      <span className="text-5xl font-black text-white tracking-tighter italic opacity-50 group-hover:opacity-100 transition-opacity">{event.year}</span>
                      <div className="text-neon-cyan group-hover:animate-pulse">
                        {event.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter relative z-10">{event.title}</h3>
                    <p className="text-slate-400 font-medium leading-relaxed italic text-base relative z-10">
                      "{event.desc}"
                    </p>
                  </div>
                </div>

                <div className="hidden md:block w-auto px-10">
                   <div className="w-10"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Brand Values */}
        <section className="mt-40 pt-24 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { t: "Heritage", d: "Deeply connected to the flavors and culinary soul of Rubaga and Kampala.", color: "text-neon-cyan" },
              { t: "Precision", d: "Zero-waste industrial lines optimized for massive throughput and safety.", color: "text-neon-purple" },
              { t: "Scaling", d: "Expanding from local hubs to the entire East African Northern Corridor.", color: "text-neon-green" }
            ].map((v, i) => (
              <div key={i} className="group p-10 bg-sec-charcoal/20 border border-white/5 rounded-[2rem] hover:border-white/10 transition-all">
                <p className={`text-[10px] uppercase tracking-[0.5em] font-black ${v.color} mb-6`}>Protocol 0{i+1}</p>
                <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{v.t}</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed italic uppercase tracking-wider">{v.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="mt-40 bg-white p-24 text-center rounded-[3.5rem] relative overflow-hidden">
           <div className="absolute inset-0 bg-neon-gradient-alt opacity-5"></div>
           <h2 className="text-6xl font-black tracking-tighter text-sec-navy mb-8 leading-tight uppercase relative z-10">
             The <span className="text-neon-cyan italic underline underline-offset-[12px] decoration-sec-navy/10">Hirabah</span> Standard
           </h2>
           <p className="text-slate-600 mb-12 text-xl italic font-medium max-w-2xl mx-auto uppercase tracking-widest relative z-10">
             Partnering with global distributors to scale artisanal East African excellence.
           </p>
           <button className="relative z-10 bg-sec-navy text-white text-[11px] uppercase tracking-[0.5em] font-black px-20 py-8 hover:bg-neon-purple transition-all shadow-2xl">
             Explore Partnership
           </button>
        </div>
      </div>
    </div>
  );
};

export default Hirabah;
