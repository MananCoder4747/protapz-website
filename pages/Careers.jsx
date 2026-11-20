import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Briefcase, ArrowRight, MapPin, Clock } from 'lucide-react';

const openings = [
  {
    title: 'Australian Tax Accountant',
    location: 'India / Remote',
    type: 'Full-time',
    summary: 'Prepare Australian individual and company tax returns, review tax positions and support ATO compliance.',
  },
  {
    title: 'BAS & Bookkeeping Specialist',
    location: 'India / Remote',
    type: 'Full-time',
    summary: 'Manage BAS preparation, Xero and MYOB bookkeeping, reconciliations and monthly client reporting.',
  },
  {
    title: 'SMSF Accountant',
    location: 'India / Remote',
    type: 'Full-time',
    summary: 'Prepare SMSF accounts and annual reporting, reconcile investments and coordinate audit requirements.',
  },
];

export default function Careers() {
  return (
    <main id="main-content" role="main">
      <Helmet>
        <title>Careers - Protapz Australian Accounting</title>
        <meta name="description" content="Explore careers with Protapz in Australian tax, BAS, bookkeeping and SMSF accounting." />
        <link rel="canonical" href="https://www.protapz.co.in/careers" />
      </Helmet>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-emerald-400 font-semibold mb-4">Work at Protapz</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Build a career in <span className="gradient-text">Australian accounting</span></h1>
          <p className="text-xl text-slate-400">Join a growing team supporting Australian businesses with tax, bookkeeping, superannuation and advisory services.</p>
        </div>
      </section>
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Current opportunities</h2>
          <div className="space-y-6">
            {openings.map((job) => (
              <article key={job.title} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{job.title}</h3>
                    <div className="flex flex-wrap gap-5 text-sm text-slate-400 mb-4">
                      <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-400" />{job.location}</span>
                      <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" />{job.type}</span>
                    </div>
                    <p className="text-slate-300 max-w-2xl">{job.summary}</p>
                  </div>
                  <a href={`mailto:zaran@protapz.co.in?subject=${encodeURIComponent(`Application: ${job.title}`)}`} className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 rounded-lg font-semibold text-white no-underline shrink-0">
                    Apply now <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 flex items-center gap-3 text-slate-400"><Briefcase className="w-5 h-5 text-emerald-400" />No suitable role listed? Email zaran@protapz.co.in with your CV.</div>
        </div>
      </section>
    </main>
  );
}
