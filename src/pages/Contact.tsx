import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // 1. Grab response as text first to inspect it safely
      const responseText = await response.text();
      
      let result;
      try {
        result = responseText ? JSON.parse(responseText) : {};
      } catch (parseError) {
        // If it's not JSON (e.g., an HTML 404/500 error page from the server), show a helpful message
        console.error('Non-JSON response received:', responseText);
        throw new Error(`Server returned an invalid response (Status ${response.status}). Check your API route.`);
      }

      if (!response.ok) {
        throw new Error(result.error || `Failed to send message (Status ${response.status})`);
      }

      setStatus({
        type: 'success',
        message: 'Thank you for getting in touch. Andy will get back to you shortly.',
      });
      setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
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
            
            {status.type === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl text-center">
                <h3 className="font-bold text-lg mb-2">Message Sent Successfully!</h3>
                <p className="text-sm">{status.message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status.type === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg text-sm mb-4">
                    {status.message}
                  </div>
                )}
                
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-accent text-sm" 
                    placeholder="John Smith" 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-accent text-sm" 
                    placeholder="john@example.co.uk" 
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-accent text-sm" 
                    placeholder="07123 456789" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1">How can we help?</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4} 
                    required 
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-accent text-sm" 
                    placeholder="Tell us a little about your business (Limited Company, Sole Trader, etc.)"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-brand-blue text-white py-3 rounded-lg font-medium hover:bg-brand-accent transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Enquiry
                    </>
                  )}
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
                    <span className="text-brand-slate text-sm">01275 772255</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-brand-blue/10 text-brand-blue p-3 rounded-lg"><Mail size={20} /></div>
                  <div>
                    <strong className="block text-brand-navy text-sm">Email</strong>
                    <span className="text-brand-slate text-sm">andy@acebookkeeping.uk</span>
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