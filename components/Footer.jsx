import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4 gradient-text">Protapz</div>
            <p className="text-slate-400 mb-6 max-w-sm">
              Your trusted partner in financial excellence. Delivering expert accounting, 
              tax, and advisory services to Australian businesses since 2010.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/protapz" aria-label="Follow us on LinkedIn">
  <LinkedIn className="w-5 h-5" aria-hidden="true" />
</a>
              <a href="https://twitter.com/protapz" aria-label="Follow us on Twitter">
  <Twitter className="w-5 h-5" aria-hidden="true" />
</a>
              <a href="https://www.facebook.com/protapz" aria-label="Follow us on Facebook">
  <Facebook className="w-5 h-5" aria-hidden="true" />
</a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Tax Planning</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Business Advisory</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Bookkeeping</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Payroll Services</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">SMSF Management</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">Our Team</Link></li>
              <li><Link to="#" className="hover:text-emerald-400 transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-emerald-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact">
  <button className="hover:text-emerald-400 transition-colors">
    Get Free Consultation <ChevronRight className="w-5 h-5" />
  </button>
</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 text-emerald-400" />
                <span>Level 12, 123 Pitt Street<br />Sydney NSW 2000</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-emerald-400" />
                <a href="tel:+918866776724" className="hover:text-emerald-400 transition-colors">
                  (+91) 88667 76724
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-emerald-400" />
                <a href="mailto:zaran@protapz.co.in" className="hover:text-emerald-400 transition-colors">
                  zaran@protapz.co.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>&copy; 2026 Protapz Accounting. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-emerald-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
