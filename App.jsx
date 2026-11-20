import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'

// Lazy load other pages
const Services = lazy(() => import('./pages/Services'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const IndustryDetail = lazy(() => import('./pages/IndustryDetail'))
const Insights = lazy(() => import('./pages/Insights'))
const ArticleDetail = lazy(() => import('./pages/ArticleDetail'))
const Careers = lazy(() => import('./pages/Careers'))
const Legal = lazy(() => import('./pages/Legal'))

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-slate-900 flex items-center justify-center">
    <div className="spinner"></div>
  </div>
)

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navigation />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/industries/:slug" element={<IndustryDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<ArticleDetail />} />
            <Route path="/blog" element={<Navigate to="/insights" replace />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy-policy" element={<Legal page="privacy-policy" />} />
            <Route path="/terms-of-service" element={<Legal page="terms-of-service" />} />
            <Route path="/cookie-policy" element={<Legal page="cookie-policy" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  )
}