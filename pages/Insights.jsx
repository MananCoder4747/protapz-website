import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { articles } from '../src/data/articles';

export default function Insights() {
  return (
    <main id="main-content" role="main">
      <Helmet>
        <title>Australian Accounting Insights - Protapz</title>
        <meta name="description" content="Latest Australian tax, BAS, GST, payroll, super and accounting news and guides." />
        <link rel="canonical" href="https://www.protapz.co.in/insights" />
      </Helmet>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-emerald-400 font-semibold mb-4">Protapz Knowledge Centre</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Australian <span className="gradient-text">Tax & Business Insights</span></h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">Practical guidance on Australian tax, BAS, payroll, superannuation and business compliance.</p>
        </div>
      </section>
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.slug} to={`/insights/${article.slug}`} className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all group no-underline text-white">
              <img src={article.image} alt={article.title} loading="lazy" className="w-full h-48 object-cover group-hover:scale-[1.02] transition-transform" />
              <div className="p-6">
                <div className="text-emerald-400 text-sm font-semibold mb-3">{article.category}</div>
                <h2 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">{article.title}</h2>
                <p className="text-slate-400 mb-5">{article.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-slate-400">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{article.date}</span>
                  <span className="flex items-center gap-2 text-emerald-400">Read more <ArrowRight className="w-4 h-4" /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
