import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { industryDetails } from '../src/data/siteContent';

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = industryDetails[slug];
  if (!industry) return <Navigate to="/#services" replace />;

  return (
    <main id="main-content" role="main">
      <Helmet>
        <title>{industry.title} Accounting - Protapz Australia</title>
        <meta name="description" content={industry.summary} />
        <link rel="canonical" href={`https://www.protapz.co.in/industries/${slug}`} />
      </Helmet>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-emerald-400 font-semibold mb-4">Industry expertise</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{industry.title}</h1>
            <p className="text-xl text-slate-300 mb-8">{industry.summary}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4 rounded-lg font-semibold text-white no-underline">
              Talk to an Industry Specialist <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <img src={industry.image} alt={industry.title} className="w-full h-[420px] object-cover rounded-2xl border border-slate-800" />
        </div>
      </section>
      <section className="py-20 px-6 bg-slate-900/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6">Common challenges</h2>
            <div className="space-y-4">
              {industry.challenges.map((item) => (
                <div key={item} className="flex gap-3 text-slate-300"><CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />{item}</div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6">How Protapz supports you</h2>
            <div className="space-y-4">
              {industry.services.map((item) => (
                <div key={item} className="flex gap-3 text-slate-300"><CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
