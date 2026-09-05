import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, FileText, Calculator, Building2, Receipt, Users, UserPlus, BarChart3, HelpCircle } from 'lucide-react';

export const Services: React.FC = () => {
  const servicesList = [
    {
      number: "01",
      title: "Bookkeeping",
      icon: <FileText size={28} />,
      description: "I maintain accurate, up-to-date financial records for your business throughout the year. This includes recording income and expenditure, reconciling bank accounts, and keeping everything organized so that year-end is never a headache.",
      highlight: "Monthly or quarterly bookkeeping available. Compatible with Xero, QuickBooks, and FreeAgent."
    },
    {
      number: "02",
      title: "Self-Assessment Tax Returns",
      icon: <Calculator size={28} />,
      description: "I prepare and file self-assessment returns for sole traders, landlords, directors, and individuals who need to report property, additional income, or other circumstances to HMRC. I make sure you claim everything you're entitled to and never miss a deadline.",
      highlight: "Deadline reminders included. Prior year returns available if you've fallen behind."
    },
    {
      number: "03",
      title: "Limited Company Accounts",
      icon: <Building2 size={28} />,
      description: "I handle the preparation and filing of your statutory annual accounts with Companies House, along with your Corporation Tax return to HMRC. All filings are completed on time and in plain English — you'll know exactly what the numbers mean.",
      highlight: "Includes dividend planning and director salary advice. See our Limited Companies page for more.",
      linkText: "View dedicated limited company page",
      linkTo: "/limited-companies"
    },
    {
      number: "04",
      title: "VAT Returns",
      icon: <Receipt size={28} />,
      description: "I prepare and file your quarterly VAT returns under Making Tax Digital (MTD) rules, handle VAT registration when your turnover reaches the threshold, and advise on the most appropriate VAT scheme for your business.",
      highlight: "MTD-compliant as standard. Flat Rate Scheme analysis available."
    },
    {
      number: "05",
      title: "Payroll",
      icon: <Users size={28} />,
      description: "I run your monthly payroll, produce payslips, and handle Real Time Information (RTI) submissions to HMRC. I also deal with auto-enrolment pension duties and notify you of PAYE payments due.",
      highlight: "Available from one employee upwards. Includes P60s and P11Ds where required."
    },
    {
      number: "06",
      title: "Company Formation",
      icon: <UserPlus size={28} />,
      description: "Thinking of going limited? I can incorporate your company, set up the most tax-efficient structure from the start, and talk you through what being a limited company director actually involves day-to-day.",
      highlight: "Includes registered office address, bank account guidance, and HMRC registration."
    },
    {
      number: "07",
      title: "Management Accounts",
      icon: <BarChart3 size={28} />,
      description: "Regular reports showing you how your business is performing — profit and loss, cashflow, and key metrics — so you can make informed decisions throughout the year rather than finding out at year-end.",
      highlight: "Monthly or quarterly. Presented in plain English, not accountancy-speak."
    },
    {
      number: "08",
      title: "Ad Hoc Support",
      icon: <HelpCircle size={28} />,
      description: "Sometimes you just have a question. As a client of Ace Bookkeeping, you can pick up the phone or drop me an email whenever something comes up — no hourly rate ticking away while we speak.",
      highlight: "Included as standard with all ongoing packages."
    }
  ];

  return (
    <div className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-accent font-semibold tracking-wider uppercase text-xs">Comprehensive Capabilities</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-navy mt-2 mb-4">Bookkeeping & Accountancy Services</h1>
          <p className="text-brand-slate text-lg">
            Practical, personal financial services designed to save you time and remove the complexity from tax and compliance across Clevedon, Portishead, Nailsea, and North Somerset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:border-brand-accent/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-brand-blue/10 text-brand-blue p-3.5 rounded-xl">
                    {service.icon}
                  </div>
                  <span className="font-mono text-2xl font-bold text-slate-300">{service.number}</span>
                </div>
                
                <h2 className="text-xl font-bold text-brand-navy mb-3">{service.title}</h2>
                <p className="text-brand-slate text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div>
                <div className="bg-brand-light p-3.5 rounded-xl border border-slate-100 text-xs text-brand-navy font-medium mb-4 flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-accent mt-0.5 flex-shrink-0" />
                  <span>{service.highlight}</span>
                </div>

                {service.linkTo && (
                  <Link to={service.linkTo} className="text-brand-accent font-semibold text-xs flex items-center gap-1 hover:underline">
                    {service.linkText} <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-brand-navy text-white p-10 rounded-2xl max-w-5xl mx-auto shadow-xl">
          <h3 className="text-2xl font-bold mb-3">Not sure which services you need?</h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto text-sm">
            Get in touch with Andy for a quick, friendly chat about your setup and we can figure out the right support for you.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-3.5 rounded-xl font-medium hover:bg-blue-600 transition-all shadow-md">
            <span>Book a Free Chat with Andy</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};