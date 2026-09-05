import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Users, FileSpreadsheet, Sparkles, MapPin, Award, FileText, Clock, UserCheck, ShieldCheck, ChevronDown } from 'lucide-react';
// @ts-ignore
import selfie from '../assets/selfie.png';

export const Home: React.FC = () => {
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenCardIndex(openCardIndex === index ? null : index);
  };

  const whyChooseCards = [
    {
      icon: <Clock size={24} />,
      title: "20+ Years’ Experience",
      text: "Over 20 years’ experience in accountancy, helping individuals and businesses with their accounts and tax affairs."
    },
    {
      icon: <UserCheck size={24} />,
      title: "Deal Directly With Me",
      text: "No call centres or being passed between departments. You’ll deal directly with Andy from start to finish."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Plain English Advice",
      text: "Straightforward explanations and practical advice, without unnecessary accountancy jargon."
    },
    {
      icon: <MapPin size={24} />,
      title: "Local & Accessible",
      text: "Based in Clevedon and supporting individuals and small businesses across Clevedon and the surrounding area."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-brand-navy text-white pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-accent/15 blur-[140px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium mb-6 border border-white/10 text-brand-light shadow-inner">
            <Sparkles size={14} className="text-brand-accent animate-pulse" /> 
            <span>No Call Centres. Just Direct, One-to-One Support.</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-[1.15]">
            Hi, I'm Andy. <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-teal-300 to-brand-accent">Your local accountant in Clevedon.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto font-normal">
            Straightforward, personal accountancy and tax support for individuals, sole traders and small businesses. With over 20 years’ experience, you’ll deal directly with me from start to finish.
          </p>
          
          <div className="flex justify-center mb-10">
            <Link to="/contact" className="group bg-brand-accent text-white font-medium px-8 py-4 rounded-xl hover:bg-teal-700 transition-all duration-300 text-center flex items-center justify-center gap-3 shadow-lg shadow-teal-900/20 hover:-translate-y-0.5">
              <span>Get in touch</span> 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-6 text-slate-400 text-sm max-w-2xl mx-auto">
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
      </section>

      {/* Core Services Section - Moved Up */}
      <section className="py-20 bg-brand-light relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-accent font-semibold tracking-wider uppercase text-xs">How I Can Help</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-2 mb-4">Accountancy & Tax Services • Clevedon</h2>
            <p className="text-brand-slate text-lg">Whether you need help filing a straightforward tax return, sole trader accounts, or regular bookkeeping support, I'll keep things clear and organized.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="bg-brand-navy/5 text-brand-navy p-3 w-fit rounded-xl mb-4 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                  <FileText size={24} />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">Self Assessment</h3>
                <p className="text-brand-slate mb-6 text-sm leading-relaxed">Stress-free tax returns for individuals, property landlords, and freelancers handled accurately and on time.</p>
              </div>
              <Link to="/services" className="text-brand-accent font-semibold text-sm flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="bg-brand-navy/5 text-brand-navy p-3 w-fit rounded-xl mb-4 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                  <Users size={24} />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">Sole Trader Accounts</h3>
                <p className="text-brand-slate mb-6 text-sm leading-relaxed">Reliable account preparation and expense management tailored specifically for sole trades and small businesses.</p>
              </div>
              <Link to="/services" className="text-brand-accent font-semibold text-sm flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="bg-brand-navy/5 text-brand-navy p-3 w-fit rounded-xl mb-4 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                  <Building2 size={24} />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">Limited Companies</h3>
                <p className="text-brand-slate mb-6 text-sm leading-relaxed">Statutory accounts, Corporation Tax returns (CT600), and complete Companies House compliance.</p>
              </div>
              <Link to="/limited-companies" className="text-brand-accent font-semibold text-sm flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="bg-brand-navy/5 text-brand-navy p-3 w-fit rounded-xl mb-4 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                  <FileSpreadsheet size={24} />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">Bookkeeping & Payroll</h3>
                <p className="text-brand-slate mb-6 text-sm leading-relaxed">Day-to-day accounts running seamlessly using modern cloud software, plus dependable payroll and RTI submissions.</p>
              </div>
              <Link to="/services" className="text-brand-accent font-semibold text-sm flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* A Little About Me Section with Photo & Labrador */}
      <section className="py-20 bg-white border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-2 bg-brand-accent/15 rounded-2xl blur-lg"></div>
                <div className="relative bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <img 
                    src={selfie} 
                    alt="Andy - Ace Bookkeeping" 
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-brand-accent font-semibold text-xs uppercase tracking-wider">
                <Award size={16} /> A Little About Me
              </div>
              <h2 className="text-3xl font-extrabold text-brand-navy">Friendly, Local Support You Can Count On</h2>
              <p className="text-brand-slate text-lg leading-relaxed">
                When I'm not busy crunching numbers or helping local businesses file their returns, you’ll usually find me out walking my Labrador around Clevedon. I believe in keeping things down-to-earth, transparent, and approachable.
              </p>
              <p className="text-brand-slate leading-relaxed">
                Working with a local accountant shouldn't feel formal or intimidating. Take a look at my full background or get in touch for a friendly chat.
              </p>
              <div className="pt-2">
                <Link to="/about" className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:text-teal-700 transition-colors">
                  <span>Read more about my background</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Ace Bookkeeping Section with Mobile Dropdown / Desktop Grid */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-accent font-semibold tracking-wider uppercase text-xs">The Ace Bookkeeping Difference</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-2 mb-4">Why Choose Ace Bookkeeping?</h2>
            <p className="text-brand-slate text-lg leading-relaxed">
              Straightforward, friendly accountancy and tax support without the jargon. Whether you need help with a Self Assessment tax return, you’re a sole trader, or you run a limited company, you’ll deal directly with me and get practical advice tailored to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseCards.map((card, index) => {
              const isOpen = openCardIndex === index;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col overflow-hidden transition-all duration-300 md:justify-between"
                >
                  {/* Mobile Clickable Header / Desktop Static Header */}
                  <div 
                    onClick={() => toggleCard(index)}
                    className="p-6 cursor-pointer md:cursor-default flex items-center justify-between md:block"
                  >
                    <div>
                      <div className="bg-brand-navy/5 text-brand-navy p-3 w-fit rounded-xl mb-4">
                        {card.icon}
                      </div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-brand-navy">{card.title}</h3>
                        {/* Mobile Dropdown Arrow */}
                        <ChevronDown 
                          size={20} 
                          className={`text-brand-accent transform transition-transform duration-300 md:hidden ${isOpen ? 'rotate-180' : ''}`} 
                        />
                      </div>
                    </div>
                    {/* Desktop Content (Always Visible) */}
                    <p className="hidden md:block text-brand-slate text-sm leading-relaxed mt-2">
                      {card.text}
                    </p>
                  </div>

                  {/* Mobile Expandable Content */}
                  <div className={`md:hidden px-6 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}>
                    <p className="text-brand-slate text-sm leading-relaxed border-t border-slate-100 pt-4">
                      {card.text}
                    </p>
                  </div>
                </div>
              );
            })}
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
            <span>Get in touch</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};