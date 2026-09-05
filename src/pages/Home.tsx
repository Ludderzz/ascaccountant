import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Building2, Users, FileSpreadsheet, Sparkles, MapPin, Coffee, HeartHandshake, Award } from 'lucide-react';
// @ts-ignore
import logo from '../assets/logo.jpg';

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-brand-navy text-white pt-24 pb-32 lg:pt-32 lg:pb-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-accent/15 blur-[140px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium mb-6 border border-white/10 text-brand-light shadow-inner">
              <Sparkles size={14} className="text-brand-accent animate-pulse" /> 
              <span>No Call Centres. Just Direct, One-to-One Support.</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-[1.15]">
              Hi, I'm Andy. Straightforward accounting <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-teal-300 to-brand-accent">without the corporate jargon.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl font-normal">
              Providing friendly, practical accountancy and tax support to individuals, sole traders, and small businesses in Clevedon and the surrounding areas with over 20 years of experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Link to="/contact" className="group bg-brand-accent text-white font-medium px-8 py-4 rounded-xl hover:bg-teal-700 transition-all duration-300 text-center flex items-center justify-center gap-3 shadow-lg shadow-teal-900/20 hover:-translate-y-0.5">
                <span>Book Your Free Chat with Andy</span> 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="bg-white/5 backdrop-blur-md text-white font-medium px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-center border border-white/10 hover:border-white/20">
                Explore How I Can Help
              </Link>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-6 text-slate-400 text-sm">
              <div>
                <span className="block text-2xl font-bold text-white mb-0.5">20+ Years</span>
                <span>Accountancy Experience</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white mb-0.5">Direct</span>
                <span>Talk Only To Me</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white mb-0.5">Local</span>
                <span>Based in Clevedon</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <img 
                src={logo} 
                alt="Ace Bookkeeping Clevedon Ltd Logo" 
                className="absolute -top-20 -right-20 w-80 h-80 object-contain opacity-5 pointer-events-none" 
                aria-hidden="true"
              />
              
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-teal-800 rounded-2xl blur-lg opacity-20"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-xl p-8 rounded-2xl border border-slate-800 shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-teal-500 animate-ping"></div>
                    <span className="text-sm font-semibold text-white tracking-wide">Working With Me</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                    <Coffee className="text-brand-accent mt-0.5 flex-shrink-0" size={20} />
                    <div>
                      <strong className="block text-white text-sm mb-0.5">A Relaxed, Human Approach</strong>
                      <span className="text-xs text-slate-400">No stuffy offices or intimidating terminology—just an open conversation about your accounts.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                    <HeartHandshake className="text-brand-accent mt-0.5 flex-shrink-0" size={20} />
                    <div>
                      <strong className="block text-white text-sm mb-0.5">Consistency You Can Trust</strong>
                      <span className="text-xs text-slate-400">Ace Bookkeeping is a small, personal practice. You deal directly with me from day one.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                    <CheckCircle2 className="text-brand-accent mt-0.5 flex-shrink-0" size={20} />
                    <div>
                      <strong className="block text-white text-sm mb-0.5">More Than Just Figures</strong>
                      <span className="text-xs text-slate-400">I take time to understand your individual circumstances, whether it's a tax return or growing company.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Statement / Intro Section */}
      <section className="py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-brand-accent font-semibold text-xs uppercase tracking-wider mb-3">
            <Award size={16} /> Personal & Approachable Practice
          </div>
          <h2 className="text-3xl font-extrabold text-brand-navy mb-6">Why Clients Choose Ace Bookkeeping</h2>
          <p className="text-brand-slate text-lg leading-relaxed mb-8">
            Having worked in accountancy for more than two decades, I understand that dealing with tax and accounts can sometimes feel complicated or daunting. My aim is to make things as simple as possible, explaining everything clearly in plain English and providing reliable support without unnecessary jargon.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-brand-navy">
            <span className="bg-brand-light px-4 py-2 rounded-lg border border-slate-200">Self Assessment Tax Returns</span>
            <span className="bg-brand-light px-4 py-2 rounded-lg border border-slate-200">Sole Trader Accounts</span>
            <span className="bg-brand-light px-4 py-2 rounded-lg border border-slate-200">Limited Companies</span>
            <span className="bg-brand-light px-4 py-2 rounded-lg border border-slate-200">Bookkeeping & Payroll</span>
          </div>
        </div>
      </section>

      {/* Core Services Bento Grid */}
      <section className="py-24 bg-brand-light relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-accent font-semibold tracking-wider uppercase text-xs">How I Can Help</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-2 mb-4">Tailored Support for Your Business</h2>
            <p className="text-brand-slate text-lg">Whether you need help filing a straightforward tax return or regular bookkeeping support, I'll keep things clear and organized.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="bg-brand-navy/5 text-brand-navy p-3.5 w-fit rounded-xl mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                  <Building2 size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Limited Companies</h3>
                <p className="text-brand-slate mb-6 text-sm leading-relaxed">I’ll take care of your statutory accounts, Corporation Tax returns (CT600), and Companies House filings so you can focus on running your business.</p>
              </div>
              <Link to="/limited-companies" className="text-brand-accent font-semibold text-sm flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Learn more about limited companies <ArrowRight size={16} />
              </Link>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="bg-brand-navy/5 text-brand-navy p-3.5 w-fit rounded-xl mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Sole Traders & Individuals</h3>
                <p className="text-brand-slate mb-6 text-sm leading-relaxed">Say goodbye to tax stress. Whether you have property income or a sole trade, I'll organize records and get your return submitted smoothly.</p>
              </div>
              <Link to="/services" className="text-brand-accent font-semibold text-sm flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Learn more about sole traders <ArrowRight size={16} />
              </Link>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="bg-brand-navy/5 text-brand-navy p-3.5 w-fit rounded-xl mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                  <FileSpreadsheet size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Bookkeeping & Payroll</h3>
                <p className="text-brand-slate mb-6 text-sm leading-relaxed">Keep your day-to-day accounts running seamlessly using modern cloud software, plus dependable payroll and RTI submissions.</p>
              </div>
              <Link to="/services" className="text-brand-accent font-semibold text-sm flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Explore bookkeeping options <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Community Impact Banner */}
      <section className="py-20 bg-white border-t border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 text-brand-accent font-semibold text-sm mb-3">
            <MapPin size={16} /> Proudly Serving North Somerset
          </div>
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Based Right Here in Clevedon</h2>
          <p className="text-brand-slate max-w-2xl mx-auto mb-8 text-lg">
            Working locally means I’m always nearby when you need a chat. I proudly support individuals and businesses across Clevedon, Portishead, Nailsea, and the surrounding regions.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-navy text-white px-8 py-4 rounded-xl font-medium hover:bg-slate-800 transition-all shadow-md hover:-translate-y-0.5">
            <span>Let's Have a Chat</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};