import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Building, ArrowRight } from 'lucide-react';

export const LimitedCompanies: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-brand-accent font-semibold tracking-wider uppercase text-xs">Specialist Support</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-2 mb-4">Accountancy for Limited Companies</h1>
          <p className="text-brand-slate text-lg">
            Running a limited company in Clevedon, Portishead, or North Somerset? Let’s keep your compliance simple, straightforward, and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">Clear Compliance & Practical Guidance</h2>
            <p className="text-brand-slate mb-6 leading-relaxed">
              As a company director, your time is best spent growing your business—not wrestling with Companies House deadlines, Corporation Tax computations, or confusing financial jargon. 
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2 text-brand-navy font-medium">
                <CheckCircle2 size={18} className="text-brand-accent mt-0.5 flex-shrink-0" />
                <span>Full preparation and electronic submission of annual accounts.</span>
              </li>
              <li className="flex items-start gap-2 text-brand-navy font-medium">
                <CheckCircle2 size={18} className="text-brand-accent mt-0.5 flex-shrink-0" />
                <span>Corporation Tax computation and CT600 return filing.</span>
              </li>
              <li className="flex items-start gap-2 text-brand-navy font-medium">
                <CheckCircle2 size={18} className="text-brand-accent mt-0.5 flex-shrink-0" />
                <span>Confirmation statement filing and register maintenance.</span>
              </li>
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-accent transition-colors">
              Discuss Your Company Accounts <ArrowRight size={16} />
            </Link>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
              <Building className="text-brand-accent" size={24} /> What’s Included
            </h3>
            <ul className="space-y-4 text-brand-slate text-sm">
              <li className="border-b pb-3 border-slate-100">
                <strong className="block text-brand-navy mb-1">Annual Statutory Accounts</strong>
                Prepared accurately and explained to you in plain English.
              </li>
              <li className="border-b pb-3 border-slate-100">
                <strong className="block text-brand-navy mb-1">Corporation Tax Management</strong>
                Calculating your exact liability and handling submissions smoothly.
              </li>
              <li className="border-b pb-3 border-slate-100">
                <strong className="block text-brand-navy mb-1">Director Salary & Dividends</strong>
                Practical guidance on tax-efficient extraction structures tailored to you.
              </li>
              <li>
                <strong className="block text-brand-navy mb-1">Direct, Personal Support</strong>
                Talk directly to Andy whenever you have a routine query during the year.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};