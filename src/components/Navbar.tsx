import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Menu, X, Phone, MapPin } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-brand-navy text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin size={14} /> Clevedon, North Somerset</span>
            <span className="hidden sm:inline">Serving Clevedon, Portishead, Bristol & Surrounds</span>
          </div>
          <a href="tel:01275000000" className="flex items-center gap-1 hover:text-brand-accent transition-colors font-medium">
            <Phone size={14} /> 01275 XXXXXX
          </a>
        </div>
      </div>
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-brand-blue text-white p-2 rounded-lg">
            <Calculator size={24} />
          </div>
          <div>
            <span className="text-xl font-bold text-brand-navy block leading-none">Ace Bookkeeping</span>
            <span className="text-xs text-brand-slate tracking-wide">Clevedon Ltd</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-medium text-brand-navy">
          <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
          <Link to="/services" className="hover:text-brand-accent transition-colors">Services</Link>
          <Link to="/limited-companies" className="hover:text-brand-accent transition-colors">Limited Companies</Link>
          <Link to="/about" className="hover:text-brand-accent transition-colors">About Me</Link>
          <Link to="/contact" className="bg-brand-blue text-white px-5 py-2.5 rounded-lg hover:bg-brand-accent transition-colors">
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-brand-navy p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b px-4 pt-2 pb-6 space-y-3 font-medium">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 text-brand-navy">Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block py-2 text-brand-navy">Services</Link>
          <Link to="/limited-companies" onClick={() => setIsOpen(false)} className="block py-2 text-brand-navy">Limited Companies</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2 text-brand-navy">About Me</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-center bg-brand-blue text-white py-3 rounded-lg mt-2">Get in Touch</Link>
        </div>
      )}
    </header>
  );
};