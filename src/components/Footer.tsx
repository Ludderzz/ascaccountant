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
          <a 
            href="https://www.facebook.com/profile.php?id=61555026753812" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-brand-accent text-slate-300 hover:text-white px-3.5 py-2 rounded-xl text-xs font-medium border border-white/10 transition-colors duration-300 group"
          >
            <svg className="w-4 h-4 fill-current text-brand-accent group-hover:text-white transition-colors" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Follow on Facebook</span>
          </a>
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
            <li className="flex items-center gap-2"><Phone size={16} className="text-brand-accent flex-shrink-0" /> 01275 772255</li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-brand-accent flex-shrink-0" /> andy@acebookkeeping.uk</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Ace Bookkeeping Ltd | Registered in England & Wales Company No. 14847206 Registered Office: 20 Brookfield Walk, Clevedon, BS21 6YA
      </div>
    </footer>
  );
};