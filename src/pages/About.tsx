import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Award, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
// @ts-ignore
import selfie from '../assets/selfie.png';
// @ts-ignore
import dog from '../assets/dog.jpg';

export const About: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-brand-accent font-semibold tracking-wider uppercase text-xs">About Ace Bookkeeping</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-2 mb-4">Straightforward Accounting with a Personal Touch</h1>
          <p className="text-brand-slate text-lg">
            Hi, I’m Andy. I provide friendly, practical accountancy and tax support to individuals and small businesses in Clevedon and the surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-center mb-20">
          {/* Logo / Selfie Card in Top Left */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-2 bg-brand-accent/15 rounded-2xl blur-lg"></div>
              <div className="relative bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-center">
                <img 
                  src={selfie} 
                  alt="Andy - Ace Bookkeeping" 
                  className="w-full h-80 object-cover rounded-xl mb-4"
                />
                <h3 className="font-bold text-brand-navy text-lg">Andy</h3>
                <p className="text-xs text-brand-slate">Founder & Director, Ace Bookkeeping Ltd</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 text-brand-accent font-semibold text-sm">
              <MapPin size={16} /> Based in Clevedon
            </div>
            
            <h2 className="text-2xl font-bold text-brand-navy">Over 20 Years’ Experience</h2>
            
            <p className="text-brand-slate leading-relaxed">
              Having worked in accountancy for more than two decades, I understand that dealing with accounts and tax can sometimes feel complicated or daunting. My aim is to make things as simple as possible, explaining everything clearly and providing reliable support without unnecessary jargon.
            </p>
            
            <p className="text-brand-slate leading-relaxed">
              Ace Bookkeeping is a small, personal practice, which means when you contact me, you deal directly with me. I take the time to get to know my clients and understand their individual circumstances—whether you're looking for help with a single annual tax return or ongoing support for a growing business.
            </p>

            <div className="pt-4 border-t border-slate-100">
              <h3 className="font-bold text-brand-navy mb-3">Who I Help:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-brand-slate">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-accent flex-shrink-0" />
                  <span>Sole Traders & Freelancers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-accent flex-shrink-0" />
                  <span>Limited Companies</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-accent flex-shrink-0" />
                  <span>Property & Private Individuals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-accent flex-shrink-0" />
                  <span>Bookkeeping & Payroll Clients</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Meet Bruce Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-center mb-20 bg-brand-light p-8 sm:p-12 rounded-2xl border border-slate-200">
          <div className="lg:col-span-7 space-y-4 order-2 lg:order-1">
            <span className="text-brand-accent font-semibold tracking-wider uppercase text-xs">Meet the Team</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">Bruce</h2>
            <p className="text-brand-accent font-medium text-sm">Head of Public Relations</p>
            <p className="text-brand-slate leading-relaxed">
              Specialising in client welcomes, tail wags and keeping the office relaxed.
            </p>
            <p className="text-brand-slate text-sm leading-relaxed">
              While Andy handles the complex tax returns and accounts, Bruce makes sure everyone visiting or taking a call feels right at home with a friendly greeting and an exceptionally relaxed atmosphere.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-2 bg-brand-accent/15 rounded-2xl blur-lg"></div>
              <div className="relative bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-center">
                <img 
                  src={dog} 
                  alt="Bruce - Head of Public Relations" 
                  className="w-full h-[380px] object-cover rounded-xl mb-3"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="bg-brand-navy/5 text-brand-navy p-3 rounded-xl flex-shrink-0">
              <Award size={24} />
            </div>
            <div>
              <h3 className="font-bold text-brand-navy mb-1">More Than Just Numbers</h3>
              <p className="text-sm text-brand-slate leading-relaxed">
                I believe good accountancy is about being approachable, available when you have a question, and giving you total peace of mind.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="bg-brand-navy/5 text-brand-navy p-3 rounded-xl flex-shrink-0">
              <HeartHandshake size={24} />
            </div>
            <div>
              <h3 className="font-bold text-brand-navy mb-1">Building Long-Term Ties</h3>
              <p className="text-sm text-brand-slate leading-relaxed">
                Proudly supporting clients across Clevedon, Portishead, Nailsea, and throughout North Somerset with trusted, local advice.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-brand-navy text-white p-10 sm:p-12 rounded-2xl max-w-5xl mx-auto shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-accent/10 rounded-full blur-2xl pointer-events-none"></div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Looking for some help with your accounts or tax return?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">Get in touch for a friendly, no-obligation chat about how I can help your business or personal finances.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-4 rounded-xl font-medium hover:bg-teal-700 transition-all shadow-lg shadow-teal-900/20 hover:-translate-y-0.5">
            <span>Get in Touch with Andy</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};