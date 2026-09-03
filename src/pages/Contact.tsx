import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">Get in Touch</h1>
          <p className="text-brand-slate text-lg">
            Looking for a local accountant in Clevedon, Portishead, or Bristol? Reach out today for a friendly, no-obligation conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-brand-navy mb-6">Send a Message</h2>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl text-center">
                <h3 className="font-bold text-lg mb-2">Message Sent Successfully!</h3>
                <p className="text-sm">Thank you for getting in touch. Andy will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1">Your Name</label>
                  <input type="text" required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-accent text-sm" placeholder="John Smith" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1">Email Address</label>
                  <input type="email" required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-accent text-sm" placeholder="john@example.co.uk" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-accent text-sm" placeholder="07123 456789" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1">How can we help?</label>
                  <textarea rows={4} required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-accent text-sm" placeholder="Tell us a little about your business (Limited Company, Sole Trader, etc.)"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-blue text-white py-3 rounded-lg font-medium hover:bg-brand-accent transition-colors flex items-center justify-center gap-2">
                  <Send size={16} /> Send Enquiry
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-brand-navy mb-6">Contact Details</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-brand-blue/10 text-brand-blue p-3 rounded-lg"><MapPin size={20} /></div>
                  <div>
                    <strong className="block text-brand-navy text-sm">Location</strong>
                    <span className="text-brand-slate text-sm">Clevedon, North Somerset</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-brand-blue/10 text-brand-blue p-3 rounded-lg"><Phone size={20} /></div>
                  <div>
                    <strong className="block text-brand-navy text-sm">Phone</strong>
                    <span className="text-brand-slate text-sm">01275 XXXXXX</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-brand-blue/10 text-brand-blue p-3 rounded-lg"><Mail size={20} /></div>
                  <div>
                    <strong className="block text-brand-navy text-sm">Email</strong>
                    <span className="text-brand-slate text-sm">andy@acebookkeeping.co.uk</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-brand-navy text-white p-8 rounded-2xl">
              <h3 className="font-bold text-lg mb-2">Service Areas</h3>
              <p className="text-sm text-slate-300">
                Regularly supporting clients based in Clevedon, Portishead, Bristol, Nailsea, and surrounding North Somerset towns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};