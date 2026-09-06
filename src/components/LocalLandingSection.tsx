import React from 'react';
import { LocationSEO } from '../data/seoLocations';
import { CheckCircle2, MapPin, Award, ShieldCheck } from 'lucide-react';

interface Props {
  location: LocationSEO;
}

export const LocalLandingSection: React.FC<Props> = ({ location }) => {
  return (
    <div className="py-12 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin size={14} /> Serving {location.city} & {location.county}
            </div>
            <h2 className="text-3xl font-extrabold text-brand-navy mb-6 tracking-tight">
              {location.h1}
            </h2>
            <p className="text-brand-slate text-base leading-relaxed mb-6">
              Running a business in {location.city} comes with unique local challenges. Whether you are operating near {location.localLandmarks.slice(0, 2).join(' or ')}, keeping your financial records accurate shouldn't pull you away from what you do best. Ace Bookkeeping provides hassle-free financial administration tailored for local sole traders, partnerships, and limited companies.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                `Dedicated local bookkeeper familiar with ${location.city} businesses`,
                'Cloud-based software setup (Xero, QuickBooks & FreeAgent)',
                'Full compliance with HMRC, VAT returns, and Making Tax Digital (MTD)',
                'Transparent fixed-fee pricing with zero hidden surprises'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-brand-slate">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-brand-navy border-b border-slate-100 pb-4">
              Why Businesses in {location.city} Choose Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-brand-blue/10 text-brand-blue p-3 rounded-lg"><Award size={20} /></div>
                <div>
                  <h4 className="font-bold text-brand-navy text-sm">Hyper-Local Expertise</h4>
                  <p className="text-xs text-slate-500 mt-1">Deeply rooted in {location.county}, providing personal on-site or remote assistance whenever you need it.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand-blue/10 text-brand-blue p-3 rounded-lg"><ShieldCheck size={20} /></div>
                <div>
                  <h4 className="font-bold text-brand-navy text-sm">Strict Regulatory Compliance</h4>
                  <p className="text-xs text-slate-500 mt-1">Stay completely clear of penalties with proactive filing schedules managed entirely on your behalf.</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-600">
              <strong>Areas covered nearby:</strong> {location.nearbyAreas.join(', ')} and all surrounding {location.county} districts.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};