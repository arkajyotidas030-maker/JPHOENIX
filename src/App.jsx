import React, { useState } from 'react';

export default function JphoenixPlatform() {
  const [activeTab, setActiveTab] = useState('home');
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setContactForm({ name: '', email: '', message: '' });
      }, 4000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-x-hidden font-sans">
      
      {/* Background Neon Glowing Orbs for Glassmorphism Contrast */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Standard Header & Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/75 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-black text-xl shadow-lg shadow-cyan-500/25">
              JP
            </div>
            <span className="text-xl font-black tracking-widest bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              JPHOENIX
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80">
            {['home', 'services', 'careers', 'about', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all ${
                  activeTab === tab
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab === 'about' ? 'Who We Are' : tab}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => setIsPortalOpen(true)}
              className="px-5 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20 text-slate-950">
              Client Portal
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 border-b border-slate-800 p-4 space-y-2">
            {['home', 'services', 'careers', 'about', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setIsMobileMenuOpen(false); }}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold capitalize ${activeTab === tab ? 'bg-cyan-500 text-slate-950' : 'text-slate-300'}`}>
                {tab === 'about' ? 'Who We Are' : tab}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Dynamic View Area */}
      <main className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        
        {/* HOME VIEW */}
        {activeTab === 'home' && (
          <div className="space-y-24">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-widest uppercase">
                <span>Enterprise Cloud & AI Architecture</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
                Engineering the <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Digital Future</span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl font-normal leading-relaxed">
                Jphoenix delivers secure enterprise solutions, intelligent automation matrices, and high-performance cloud ecosystems worldwide.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <button 
                  onClick={() => setActiveTab('services')} 
                  className="px-8 py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all shadow-xl shadow-cyan-500/20">
                  Explore Services
                </button>
                <button 
                  onClick={() => setActiveTab('contact')} 
                  className="px-8 py-4 rounded-xl backdrop-blur-md bg-slate-900/60 border border-slate-800 text-white font-bold hover:bg-slate-800 transition-all">
                  Get in Touch
                </button>
              </div>
            </div>

            {/* Glassmorphic Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="backdrop-blur-2xl bg-slate-900/40 border border-slate-800/80 p-8 rounded-3xl shadow-2xl hover:border-cyan-500/50 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform text-xl">
                  ⚡
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Enterprise Automation</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Autonomous workflow optimization systems built to scale enterprise infrastructure securely.
                </p>
              </div>

              <div className="backdrop-blur-2xl bg-slate-900/40 border border-slate-800/80 p-8 rounded-3xl shadow-2xl hover:border-indigo-500/50 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform text-xl">
                  🛡️
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Advanced Cloud Security</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Real-time threat analytics, network telemetry tracking, and advanced encryption frameworks.
                </p>
              </div>

              <div className="backdrop-blur-2xl bg-slate-900/40 border border-slate-800/80 p-8 rounded-3xl shadow-2xl hover:border-cyan-500/50 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform text-xl">
                  🧠
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Custom AI Integration</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Proprietary intelligence structures engineered to accelerate business data insights.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SERVICES VIEW */}
        {activeTab === 'services' && (
          <div className="space-y-8 max-w-5xl mx-auto">
            <div>
              <h2 className="text-4xl font-black tracking-tight mb-3">Enterprise Services</h2>
              <p className="text-slate-400">Comprehensive technological architecture designed for scale and resilience.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="backdrop-blur-2xl bg-slate-900/40 border border-slate-800/80 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Cloud Transformation</h3>
                <p className="text-slate-400 text-sm mb-4">Migrating legacy business networks into high-availability cloud environments with zero downtime.</p>
                <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Core Offering</span>
              </div>
              <div className="backdrop-blur-2xl bg-slate-900/40 border border-slate-800/80 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-indigo-400 mb-2">SaaS Engineering</h3>
                <p className="text-slate-400 text-sm mb-4">End-to-end development of multi-tenant subscription software engines and scalable platforms.</p>
                <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">High Demand</span>
              </div>
              <div className="backdrop-blur-2xl bg-slate-900/40 border border-slate-800/80 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Cybersecurity Auditing</h3>
                <p className="text-slate-400 text-sm mb-4">Unidirectional threat detection, penetration testing, and hardened security protocols.</p>
                <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Enterprise Grade</span>
              </div>
              <div className="backdrop-blur-2xl bg-slate-900/40 border border-slate-800/80 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-indigo-400 mb-2">AI & Big Data Analytics</h3>
                <p className="text-slate-400 text-sm mb-4">Custom machine learning models built to process enterprise telemetry and forecast trends.</p>
                <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Next-Gen</span>
              </div>
            </div>
          </div>
        )}

        {/* CAREERS VIEW */}
        {activeTab === 'careers' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div>
              <h2 className="text-4xl font-black tracking-tight mb-3">Jphoenix Careers</h2>
              <p className="text-slate-400">Join a global collective of engineers and architects building the future.</p>
            </div>
            <div className="space-y-4">
              <div className="backdrop-blur-2xl bg-slate-900/40 border border-slate-800/80 p-8 rounded-3xl flex justify-between items-center flex-wrap gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Senior Cloud Solutions Architect</h3>
                  <p className="text-slate-400 text-sm mt-1">Global Remote • Full-Time</p>
                </div>
                <button onClick={() => setActiveTab('contact')} className="px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all text-sm">
                  Apply Now
                </button>
              </div>
              <div className="backdrop-blur-2xl bg-slate-900/40 border border-slate-800/80 p-8 rounded-3xl flex justify-between items-center flex-wrap gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Full-Stack React Engineer</h3>
                  <p className="text-slate-400 text-sm mt-1">Remote / Hybrid • Full-Time</p>
                </div>
                <button onClick={() => setActiveTab('contact')} className="px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all text-sm">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ABOUT VIEW */}
        {activeTab === 'about' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-black tracking-tight">Who We Are</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Founded on principles of relentless advancement and technical excellence, <strong className="text-cyan-400">Jphoenix</strong> operates at the peak of enterprise software engineering and artificial intelligence systems. We architect robust digital infrastructures designed to scale globally, matching the reliability and scope of industry leaders.
            </p>
          </div>
        )}

        {/* CONTACT VIEW */}
        {activeTab === 'contact' && (
          <div className="max-w-2xl mx-auto space-y-8">
            <div>
              <h2 className="text-4xl font-black tracking-tight mb-3">Initiate Contact</h2>
              <p className="text-slate-400">Connect with our engineering leadership to discuss your enterprise requirements.</p>
            </div>
            
            <form onSubmit={handleContactSubmit} className="backdrop-blur-2xl bg-slate-900/40 border border-slate-800/80 p-8 rounded-3xl space-y-6 shadow-2xl">
              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-center font-bold">
                  Inquiry transmitted successfully. Our team will review and respond shortly.
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Full Name / Organization</label>
                    <input 
                      type="text" 
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="e.g. Arkajyoti Das" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Corporate Email</label>
                    <input 
                      type="email" 
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="name@jphoenix.web" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Project Scope / Message</label>
                    <textarea 
                      rows="4" 
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Describe your technical requirements..." 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20">
                    Transmit Inquiry
                  </button>
                </>
              )}
            </form>
          </div>
        )}
      </main>

      {/* Client Portal Authentication Modal */}
      {isPortalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-slate-950/80">
          <div className="backdrop-blur-3xl bg-slate-900 border border-slate-800 p-8 rounded-3xl max-w-md w-full relative shadow-2xl space-y-6">
            <button 
              onClick={() => setIsPortalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white font-bold text-lg">
              ✕
            </button>
            <div>
              <h3 className="text-2xl font-black text-white">Client Portal Sign-In</h3>
              <p className="text-slate-400 text-sm mt-1">Access your enterprise cloud matrices and analytics.</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Client ID / Email</label>
                <input type="text" placeholder="enterprise@client.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Secure Password</label>
                <input type="password" placeholder="••••••••" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 text-sm" />
              </div>
              <button onClick={() => alert('Secure enterprise authentication tunnel established.')} className="w-full py-3.5 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all text-sm">
                Authenticate Session
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Standard Footer */}
      <footer className="border-t border-slate-800/80 mt-32 py-12 text-center text-slate-500 text-sm space-y-3">
        <div className="flex justify-center space-x-6 text-slate-400 text-sm font-semibold">
          <button onClick={() => setActiveTab('services')} className="hover:text-cyan-400">Services</button>
          <button onClick={() => setActiveTab('careers')} className="hover:text-cyan-400">Careers</button>
          <button onClick={() => setActiveTab('about')} className="hover:text-cyan-400">Who We Are</button>
          <button onClick={() => setActiveTab('contact')} className="hover:text-cyan-400">Contact</button>
        </div>
        <p>© {new Date().getFullYear()} Jphoenix Technologies Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}