import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Building2, Users, FileSpreadsheet, Sparkles, MapPin } from 'lucide-react';
// @ts-ignore
import logo from '../assets/logo.jpg'; // Temporary fix to ignore TS error

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-brand-navy text-white pt-24 pb-32 lg:pt-32 lg:pb-40">
        {/* Modern ambient glow effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-accent/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium mb-6 border border-white/10 text-brand-light shadow-inner">
              <Sparkles size={14} className="text-brand-accent animate-pulse" /> 
              <span>Modern Cloud Accounting & Local Expertise</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-[1.15]">
              Frictionless Bookkeeping for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-brand-accent">Modern Local Businesses</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl font-normal">
              Empowering small limited companies and sole traders across Clevedon, Portishead, and Bristol with streamlined compliance, real-time insights, and zero-jargon advice.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Link to="/contact" className="group bg-brand-accent text-white font-medium px-8 py-4 rounded-xl hover:bg-blue-600 transition-all duration-300 text-center flex items-center justify-center gap-3 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5">
                <span>Book Free Consultation</span> 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="bg-white/5 backdrop-blur-md text-white font-medium px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-center border border-white/10 hover:border-white/20">
                Explore Services
              </Link>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-6 text-slate-400 text-sm">
              <div>
                <span className="block text-2xl font-bold text-white mb-0.5">100%</span>
                <span>Digital & Paperless</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white mb-0.5">Local</span>
                <span>Clevedon & Bristol</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white mb-0.5">Fixed</span>
                <span>Transparent Fees</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              {/* Large Logo Background */}
              <img 
                src={logo} 
                alt="Ace Bookkeeping Clevedon Ltd Logo" 
                className="absolute -top-20 -right-20 w-80 h-80 object-contain opacity-5 pointer-events-none" 
                aria-hidden="true"
              />
              
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-blue-600 rounded-2xl blur-lg opacity-30"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-xl p-8 rounded-2xl border border-slate-800 shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                    <span className="text-sm font-semibold text-white tracking-wide">Practice Dashboard Ready</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-brand-accent/20 text-blue-300 border border-brand-accent/30 font-mono">2026 Ready</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                    <CheckCircle2 className="text-brand-accent mt-0.5 flex-shrink-0" size={20} />
                    <div>
                      <strong className="block text-white text-sm mb-0.5">Limited Company Specialists</strong>
                      <span className="text-xs text-slate-400">Streamlined corporation tax filing, dividends, and director payroll setups.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                    <CheckCircle2 className="text-brand-accent mt-0.5 flex-shrink-0" size={20} />
                    <div>
                      <strong className="block text-white text-sm mb-0.5">Real-Time Cloud Automation</strong>
                      <span className="text-xs text-slate-400">Instant bank feeds and automated receipt tracking to banish shoe-box receipts.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                    <CheckCircle2 className="text-brand-accent mt-0.5 flex-shrink-0" size={20} />
                    <div>
                      <strong className="block text-white text-sm mb-0.5">Direct Local Communication</strong>
                      <span className="text-xs text-slate-400">No call centers or ticket queues—just direct access to Andy.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Bento Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-accent font-semibold tracking-wider uppercase text-xs">Tailored Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-2 mb-4">Designed for Modern Workflows</h2>
            <p className="text-brand-slate text-lg">Comprehensive financial oversight configured precisely for your business scale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-brand-light p-8 rounded-2xl border border-slate-200 hover:border-brand-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="bg-brand-blue/10 text-brand-blue p-3.5 w-fit rounded-xl mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                  <Building2 size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Limited Companies</h3>
                <p className="text-brand-slate mb-6 text-sm leading-relaxed">Year-end accounts, corporation tax submissions, CT600 forms, and tax-efficient director salary/dividend structuring.</p>
              </div>
              <Link to="/limited-companies" className="text-brand-accent font-semibold text-sm flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            <div className="group bg-brand-light p-8 rounded-2xl border border-slate-200 hover:border-brand-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="bg-brand-blue/10 text-brand-blue p-3.5 w-fit rounded-xl mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Sole Traders</h3>
                <p className="text-brand-slate mb-6 text-sm leading-relaxed">Seamless self-assessment tax returns, precise expense categorization, and proactive tax planning for local contractors and freelancers.</p>
              </div>
              <Link to="/services" className="text-brand-accent font-semibold text-sm flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            <div className="group bg-brand-light p-8 rounded-2xl border border-slate-200 hover:border-brand-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="bg-brand-blue/10 text-brand-blue p-3.5 w-fit rounded-xl mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                  <FileSpreadsheet size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Cloud Bookkeeping & VAT</h3>
                <p className="text-brand-slate mb-6 text-sm leading-relaxed">Automated bank reconciliations, quarterly digital VAT returns, and complete financial visibility ready for any audit.</p>
              </div>
              <Link to="/services" className="text-brand-accent font-semibold text-sm flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Community Impact Banner */}
      <section className="py-20 bg-brand-light border-y border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 text-brand-accent font-semibold text-sm mb-3">
            <MapPin size={16} /> North Somerset & Bristol Specialists
          </div>
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Rooted in Clevedon, Serving the Region</h2>
          <p className="text-brand-slate max-w-2xl mx-auto mb-8 text-lg">
            Whether you are operating right on Hill Road, around Portishead marina, or across Bristol, get a dedicated bookkeeping partner who understands your local business ecosystem.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-navy text-white px-8 py-4 rounded-xl font-medium hover:bg-slate-800 transition-all shadow-md hover:-translate-y-0.5">
            <span>Get Started Today</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};