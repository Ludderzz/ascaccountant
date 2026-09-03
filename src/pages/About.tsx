import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Award, HeartHandshake } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">About Ace Bookkeeping</h1>
          <p className="text-brand-slate text-lg">
            A dedicated, approachable local practice built to support small businesses across North Somerset and Bristol.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto items-center mb-16">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 text-brand-accent font-semibold text-sm mb-2">
              <MapPin size={16} /> Based in Clevedon
            </div>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">Personal, Jargon-Free Service</h2>
            <p className="text-brand-slate mb-4 leading-relaxed">
              Hi, I’m Andy. I run Ace Bookkeeping Ltd to provide local small limited companies and sole traders with a dependable accounting partner they can actually talk to.
            </p>
            <p className="text-brand-slate leading-relaxed">
              Too many small businesses feel intimidated by corporate accountancy firms or lost in customer service queues. My aim is to keep things simple, transparent, and grounded right here in the local community.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 flex items-start gap-4">
              <div className="bg-brand-blue/10 text-brand-blue p-3 rounded-lg flex-shrink-0">
                <Award size={24} />
              </div>
              <div>
                <h3 className="font-bold text-brand-navy mb-1">Professional Standards</h3>
                <p className="text-sm text-brand-slate">Strict attention to detail and rigorous compliance for absolute peace of mind.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 flex items-start gap-4">
              <div className="bg-brand-blue/10 text-brand-blue p-3 rounded-lg flex-shrink-0">
                <HeartHandshake size={24} />
              </div>
              <div>
                <h3 className="font-bold text-brand-navy mb-1">Local & Accessible</h3>
                <p className="text-sm text-brand-slate">Proudly supporting business owners in Clevedon, Portishead, Bristol, and surrounds.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-brand-navy text-white p-10 rounded-2xl max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Ready to discuss your bookkeeping?</h2>
          <p className="text-slate-300 mb-6">Get in touch today for an initial chat about your practice needs.</p>
          <Link to="/contact" className="inline-block bg-brand-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};