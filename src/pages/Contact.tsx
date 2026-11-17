import { motion } from "motion/react";
import { FormEvent, useState } from "react";
import { MapPin, Mail, Phone, Send, Globe, ArrowRight } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-24 bg-transparent min-h-screen">
      <main className="max-w-7xl mx-auto px-10 grid grid-cols-12 gap-10">
        
        {/* Contact Form Column */}
        <section className="col-span-12 lg:col-span-7 flex flex-col space-y-10">
          <div className="border-b border-white/5 pb-8 flex justify-between items-end">
            <h1 className="text-6xl font-black tracking-tighter text-white uppercase italic">Inquiry <span className="text-neon-cyan not-italic">Protocol</span></h1>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.4em] hidden md:block">Strategic Response Node — ACTIVE</p>
          </div>

          <div className="bg-sec-charcoal/50 backdrop-blur-xl border border-white/5 p-12 shadow-2xl relative rounded-[3rem] overflow-hidden group">
            <div className="absolute inset-0 bg-neon-gradient opacity-0 group-hover:opacity-5 transition-opacity"></div>
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-24 text-center space-y-8"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-neon-cyan text-sec-navy rounded-full mb-4 shadow-[0_0_30px_#00ffff99]">
                   <Send size={32} />
                </div>
                <h2 className="text-3xl font-black text-white uppercase tracking-widest italic">Node Acknowledged</h2>
                <p className="text-slate-400 text-lg italic font-medium max-w-sm mx-auto">
                  Strategic data packets received. A regional advisor will initiate contact shortly.
                </p>
                <button onClick={() => setSubmitted(false)} className="text-[10px] uppercase tracking-[0.5em] font-black text-neon-cyan hover:text-white transition-all underline underline-offset-8">
                  INITIATE NEW SEQUENCE
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="group">
                    <label className="block text-[10px] uppercase tracking-[0.4em] text-slate-500 font-black mb-4 group-hover:text-neon-cyan transition-colors">Individual Name</label>
                    <input 
                      required 
                      type="text" 
                      className="w-full border-b border-white/10 bg-transparent py-4 text-white text-lg focus:border-neon-cyan outline-none transition-all font-black uppercase tracking-tighter placeholder:text-white/5" 
                      placeholder="IDENTIFY SENDER" 
                    />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] uppercase tracking-[0.4em] text-slate-500 font-black mb-4 group-hover:text-neon-cyan transition-colors">Entity / Corporation</label>
                    <input 
                      required 
                      type="text" 
                      className="w-full border-b border-white/10 bg-transparent py-4 text-white text-lg focus:border-neon-cyan outline-none transition-all font-black uppercase tracking-tighter placeholder:text-white/5" 
                      placeholder="IDENTIFY ORIGIN" 
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="block text-[10px] uppercase tracking-[0.4em] text-slate-500 font-black mb-4 group-hover:text-neon-cyan transition-colors">Signal Frequency (Email)</label>
                  <input 
                    required 
                    type="email" 
                    className="w-full border-b border-white/10 bg-transparent py-4 text-white text-lg focus:border-neon-cyan outline-none transition-all font-black uppercase tracking-tighter placeholder:text-white/5" 
                    placeholder="SECURE_COMM_CHANNEL" 
                  />
                </div>
                <div className="group">
                  <label className="block text-[10px] uppercase tracking-[0.4em] text-slate-500 font-black mb-4 group-hover:text-neon-cyan transition-colors">Strategic Payload (Details)</label>
                  <textarea 
                    required
                    className="w-full bg-white/5 border border-white/5 rounded-2xl p-8 text-white text-lg focus:border-neon-cyan/50 outline-none h-48 resize-none transition-all font-medium placeholder:text-white/5" 
                    placeholder="Details regarding regional expansion, logistics nodes, or industrial advisory..."
                  ></textarea>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-10 border-t border-white/5">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-slate-600 font-black max-w-[250px] leading-relaxed">
                    By initiating this sequence, you confirm compliance with PAT Group's regional data protocols.
                  </p>
                  <button 
                    type="submit" 
                    className="bg-white text-sec-navy text-[11px] uppercase tracking-[0.5em] px-20 py-8 font-black hover:bg-neon-cyan transition-all flex items-center gap-4 group shadow-2xl rounded-2xl"
                  >
                    Submit Payload
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* Sidebar Info Column */}
        <aside className="col-span-12 lg:col-span-5 flex flex-col space-y-10">
          <div className="bg-sec-charcoal/30 border border-white/5 p-12 flex flex-col h-full rounded-[3rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/5 blur-[50px]"></div>
            <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-12 border-b border-white/5 pb-6 italic">Global <span className="text-neon-purple">Hubs</span></h2>
            
            <div className="space-y-16">
              {[
                { region: "Primary Hub // EAC", city: "Kampala, Uganda", details: "Plateau Nodes, Rubaga Division", color: "text-neon-cyan" },
                { region: "Maritime Gateway", city: "Mombasa, Kenya", details: "Port Authority Strategic Zone", color: "text-neon-green" },
                { region: "Logistics Anchor", city: "London, UK", details: "Global Finance Corridor", color: "text-neon-purple" }
              ].map((office, idx) => (
                <div key={idx} className="group cursor-default relative">
                  <div className={`absolute -left-12 top-0 bottom-0 w-1 ${office.color.replace('text', 'bg')} opacity-0 group-hover:opacity-100 transition-all rounded-full shadow-[0_0_10px_current]`}></div>
                  <p className={`text-[10px] uppercase tracking-[0.4em] ${office.color} font-black mb-4`}>{office.region}</p>
                  <h3 className="text-2xl font-black text-white mb-2 leading-none uppercase tracking-tighter">{office.city}</h3>
                  <p className="text-sm text-slate-500 font-medium italic uppercase tracking-widest">{office.details}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-20 space-y-8">
              <div className="p-8 bg-white/5 border border-white/5 rounded-3xl group hover:border-neon-cyan/50 transition-all">
                <p className="text-[9px] uppercase tracking-[0.5em] text-slate-600 font-black mb-4">Secure Frequency</p>
                <p className="text-base font-black text-white underline decoration-white/20 underline-offset-8 group-hover:text-neon-cyan group-hover:decoration-neon-cyan transition-all">central@pat-uganda.com</p>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse shadow-[0_0_10px_#00ff00]"></div>
                 <span className="text-[10px] uppercase tracking-[0.5em] font-black text-slate-500">Global Response System Online</span>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Contact;
