import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { articles } from '../src/data/articles';

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);
  if (!article) return <Navigate to="/insights" replace />;

  return (
    <main id="main-content" role="main">
      <Helmet>
        <title>{article.title} - Protapz Insights</title>
        <meta name="description" content={article.excerpt} />
        <link rel="canonical" href={`https://www.protapz.co.in/insights/${slug}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": article.title,
          "description": article.excerpt,
          "datePublished": "2026-11-20",
          "dateModified": "2026-11-20",
          "author": {"@type":"Organization","name":"Protapz"},
          "publisher": {"@id":"https://www.protapz.co.in/#organization"},
          "image": article.image,
          "mainEntityOfPage": `https://www.protapz.co.in/insights/${slug}`
        })}</script>
      </Helmet>
      <article className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/insights" className="inline-flex items-center gap-2 text-emerald-400 no-underline mb-8"><ArrowLeft className="w-4 h-4" />All insights</Link>
          <div className="text-emerald-400 font-semibold mb-4">{article.category}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{article.title}</h1>
          <div className="text-slate-400 mb-8">{article.date} • {article.readTime}</div>
          <img src={article.image} alt={article.title} className="w-full h-[420px] object-cover rounded-2xl border border-slate-800 mb-10" />
          <p className="text-xl text-slate-300 leading-relaxed mb-10">{article.intro}</p>
          {article.sections.map(([heading, text]) => (
            <section key={heading} className="mb-10">
              <h2 className="text-3xl font-bold mb-4">{heading}</h2>
              <p className="text-lg text-slate-300 leading-relaxed">{text}</p>
            </section>
          ))}
          {article.sources?.length > 0 && (
            <aside className="mt-12 bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">Official sources</h2>
              {article.sources.map((source) => (
                <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-emerald-400 no-underline">
                  {source.label} <ExternalLink className="w-4 h-4" />
                </a>
              ))}
            </aside>
          )}
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4 rounded-lg font-semibold text-white no-underline text-center">Get advice for your business</Link>
            <Link to="/insights" className="border border-slate-700 px-8 py-4 rounded-lg font-semibold text-white no-underline text-center hover:bg-slate-800">View all articles</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
