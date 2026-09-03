import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-brand-accent text-white p-2 rounded-lg">
              <Calculator size={20} />
            </div>
            <span className="text-lg font-bold">Ace Bookkeeping Ltd</span>
          </div>
          <p className="text-sm text-slate-400 mb-4">
            Professional, reliable accountancy and bookkeeping services tailored for small businesses and sole traders across North Somerset and Bristol.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/limited-companies" className="hover:text-white transition-colors">Limited Companies</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Me</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-4">Areas Covered</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Clevedon</li>
            <li>Portishead</li>
            <li>Bristol</li>
            <li>Nailsea & Surrounding Villages</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-2"><MapPin size={16} className="text-brand-accent flex-shrink-0" /> Clevedon, North Somerset</li>
            <li className="flex items-center gap-2"><Phone size={16} className="text-brand-accent flex-shrink-0" /> 01275 XXXXXX</li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-brand-accent flex-shrink-0" /> andy@acebookkeeping.co.uk</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Ace Bookkeeping Ltd. All rights reserved. Registered in England and Wales.
      </div>
    </footer>
  );
};