import { motion } from "motion/react";
import { ArrowRight, Calendar, Tag } from "lucide-react";

const News = () => {
  const articles = [
    {
      idx: "I",
      title: "Optimizing the Northern Corridor: A Strategic Logistics Audit",
      date: "Oct 2025",
      author: "P. Mukasa",
      category: "Regional Trade",
      excerpt: "An in-depth analysis of cross-border trade efficiency between Mombasa and Kampala, focusing on neural-assisted customs and the impact of the Standard Gauge Railway extension on terrestrial logistics speed.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"
    },
    {
      idx: "II",
      title: "The Albertine Transition: Energy Infrastructure in Hoima",
      date: "Aug 2025",
      author: "J. Okello",
      category: "Energy",
      excerpt: "Exploring the strategic development of oil and gas infrastructure in Western Uganda. This audit examines the balance between industrial throughput and ecological preservation in the Albertine Graben.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800"
    },
    {
      idx: "III",
      title: "Neural Border Management: Scaling EAC Trade Protocols",
      date: "Jun 2025",
      author: "Venture Dept",
      category: "Technology",
      excerpt: "Implementing advanced AI-driven clearing systems at major border posts like Malaba and Busia. How neural networks are reducing 'Stop-Time' for heavy industrial cargo by 45%.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-10">
        <header className="mb-20 border-b border-white/5 pb-12">
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-white uppercase italic mb-4">Strategic <span className="text-neon-cyan not-italic underline underline-offset-[12px] decoration-neon-cyan/20">Insights</span></h1>
            <p className="text-sm text-slate-400 font-medium italic mt-6">Advanced East African thought leadership and logistics analytics from PAT Group Uganda.</p>
        </header>

        <section className="space-y-32">
          {articles.map((article, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-12 gap-16 group cursor-pointer border-b border-white/5 pb-32 last:border-b-0"
            >
              <div className="col-span-12 lg:col-span-6 aspect-[16/9] lg:aspect-[4/3] bg-sec-charcoal overflow-hidden relative rounded-[2rem] border border-white/5 p-4 group-hover:border-white/20 transition-all">
                 <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 rounded-[1.5rem]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-10 left-10 bg-white text-sec-navy p-4 text-lg font-black shadow-2xl rounded-xl">
                     {article.idx}
                  </div>
              </div>
              
              <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
                 <div className="flex items-center gap-8 mb-10">
                    <span className="text-[10px] uppercase tracking-[0.5em] font-black text-slate-500 flex items-center gap-2">
                      <Calendar size={14} className="text-neon-cyan" /> {article.date}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.5em] font-black text-neon-purple bg-neon-purple/5 px-4 py-1.5 rounded-full border border-neon-purple/20">
                      {article.category}
                    </span>
                 </div>
                 
                 <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase leading-[1.1] transition-colors group-hover:text-neon-cyan">
                   {article.title}
                 </h2>
                 
                 <p className="text-xl text-slate-400 font-medium leading-relaxed italic mb-12 border-l-4 border-neon-cyan pl-8">
                   "{article.excerpt}"
                 </p>

                 <div className="flex justify-between items-center mt-auto">
                    <div className="flex items-center gap-6">
                       <div className="w-14 h-14 rounded-2xl bg-sec-charcoal border border-white/10 text-white flex items-center justify-center font-black text-xl shadow-xl group-hover:bg-neon-cyan group-hover:text-sec-navy transition-all">
                          {article.author.split(' ')[0][0]}
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[9px] uppercase tracking-[0.4em] font-black text-slate-600 mb-1">Author Index</span>
                          <span className="text-sm font-black text-white uppercase tracking-widest">{article.author}</span>
                       </div>
                    </div>
                    <Link to="#" className="bg-white text-sec-navy text-[10px] uppercase tracking-[0.4em] font-black px-10 py-5 hover:bg-neon-cyan transition-all shadow-xl rounded-xl flex items-center gap-3">
                       Read Inquiry <ArrowRight size={16} />
                    </Link>
                 </div>
              </div>
            </motion.article>
          ))}
        </section>

        <div className="mt-24 text-center">
           <button className="bg-slate-950 text-white text-[10px] uppercase tracking-[0.4em] font-bold px-16 py-6 hover:bg-slate-800 transition-all shadow-xl">
              Archive Index →
           </button>
        </div>
      </div>
    </div>
  );
};

export default News;

import { Link } from "react-router-dom";
