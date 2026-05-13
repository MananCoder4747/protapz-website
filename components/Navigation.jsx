import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'nav-blur py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
  <img 
  src="/logo.svg" 
  alt="Protapz - Australian Accounting Services" 
  className="h-10 w-auto"
  width="180"
  height="50"
  fetchpriority="high"
  decoding="async"
/>
</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-emerald-400 transition-colors ${
                location.pathname === link.path ? 'text-emerald-400' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-2.5 rounded-lg font-medium hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 flex items-center gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
  className="md:hidden text-white p-3 hover:bg-slate-800 rounded-lg transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
  aria-expanded={mobileMenuOpen}
  type="button"
>
  {mobileMenuOpen ? 
    <X className="w-6 h-6" aria-hidden="true" /> : 
    <Menu className="w-6 h-6" aria-hidden="true" />
  }
</button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden nav-blur border-t border-slate-800 mt-4">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-emerald-400 transition-colors ${
                  location.pathname === link.path ? 'text-emerald-400' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-2.5 rounded-lg font-medium">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
