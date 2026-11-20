import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { serviceDetails } from '../src/data/siteContent';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceDetails[slug];

  if (!service) return <Navigate to="/services" replace />;

  return (
    <main id="main-content" role="main">
      <Helmet>
        <title>{service.title} - Protapz Australian Accounting</title>
        <meta name="description" content={service.summary} />
        <link rel="canonical" href={`https://www.protapz.co.in/services/${slug}`} />
      </Helmet>
      <section className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-emerald-400 font-semibold mb-4">{service.eyebrow}</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-slate-300 mb-8">{service.summary}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4 rounded-lg font-semibold text-white no-underline">
              Discuss Your Requirements <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <img src={service.image} alt={service.title} className="w-full h-[420px] object-cover rounded-2xl border border-slate-800" />
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900/20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How we help</h2>
            <p className="text-lg text-slate-300 leading-relaxed">{service.overview}</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6">Our process</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.process.map((step, index) => (
                <div key={step} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                  <div className="text-emerald-400 text-sm font-bold mb-3">0{index + 1}</div>
                  <p className="text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 h-fit">
            <h3 className="text-2xl font-bold mb-6">What is included</h3>
            <div className="space-y-4">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="flex gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <Link to="/contact" className="mt-8 flex items-center justify-center gap-2 bg-slate-800 border border-emerald-500/30 px-6 py-3 rounded-lg text-white no-underline hover:border-emerald-500">
              Request a quote <ArrowRight className="w-4 h-4" />
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
