import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Clock, Send, CheckCircle, 
  Calendar, MessageSquare, ArrowRight, ChevronDown, 
  ChevronUp, Linkedin, Twitter, Facebook 
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const offices = [
    {
      city: "Sydney",
      address: "Level 12, 123 Pitt Street",
      suburb: "Sydney NSW 2000",
      phone: "(+91) 88667 76724",
      email: "zaran@protapz.co.in",
      hours: "Mon-Fri: 8:30 AM - 5:30 PM",
      isPrimary: true
    },
    {
      city: "Melbourne",
      address: "Suite 45, 678 Collins Street",
      suburb: "Melbourne VIC 3000",
      phone: "(+91) 88667 76724",
      email: "zaran@protapz.co.in",
      hours: "Mon-Fri: 8:30 AM - 5:30 PM",
      isPrimary: false
    },
    {
      city: "Brisbane",
      address: "Level 8, 234 Queen Street",
      suburb: "Brisbane QLD 4000",
      phone: "(+91) 88667 76724",
      email: "zaran@protapz.co.in",
      hours: "Mon-Fri: 8:30 AM - 5:30 PM",
      isPrimary: false
    }
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      description: "Mon-Fri, 8:30 AM - 5:30 PM AEST",
      action: "(+91) 88667 76724",
      link: "tel:+918866776724",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      description: "We'll respond within 4 hours",
      action: "zaran@protapz.co.in",
      link: "mailto:zaran@protapz.co.in",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Book a Meeting",
      description: "Schedule a free consultation",
      action: "View Calendar",
      link: "#",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Live Chat",
      description: "Chat with our team now",
      action: "Start Chat",
      link: "#",
      color: "from-orange-500 to-red-600"
    }
  ];

  const faqs = [
    {
      question: "How quickly will you respond to my inquiry?",
      answer: "We aim to respond to all inquiries within 4 business hours. For urgent matters, please call our office directly and we'll prioritize your request."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes! We offer a complimentary 30-minute initial consultation to discuss your needs and how we can help. This is a no-obligation opportunity to learn about our services."
    },
    {
      question: "What should I bring to my first meeting?",
      answer: "For the initial consultation, just bring yourself and any questions you have. If you'd like us to review specific financials, you can bring recent financial statements, tax returns, or any relevant documents."
    },
    {
      question: "Do you work with businesses outside of Sydney?",
      answer: "Absolutely! We serve clients across Australia. With offices in Sydney, Melbourne, and Brisbane, plus cloud-based systems, we provide seamless service regardless of your location."
    },
    {
      question: "What are your fees?",
      answer: "Our fees vary based on the services you need and the complexity of your situation. We provide transparent, fixed-fee pricing after understanding your requirements. Contact us for a custom quote."
    },
    {
      question: "Can I switch accountants mid-year?",
      answer: "Yes, you can switch at any time. We make the transition smooth and handle all communication with your previous accountant to ensure nothing falls through the cracks."
    }
  ];

  const services = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'tax', label: 'Tax Planning & Compliance' },
    { value: 'advisory', label: 'Business Advisory' },
    { value: 'bookkeeping', label: 'Bookkeeping & Payroll' },
    { value: 'smsf', label: 'SMSF Management' },
    { value: 'startup', label: 'Startup Services' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@300;400;600;700&display=swap');
        
        .contact-page h1, .contact-page h2, .contact-page h3 {
          font-family: 'Montserrat', sans-serif;
        }
        
        .contact-page {
          font-family: 'Open Sans', sans-serif;
        }

        .input-field {
          transition: all 0.3s ease;
        }

        .input-field:focus {
          transform: translateY(-2px);
        }
      `}</style>

      <div className="contact-page">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/10 to-slate-900"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)'
          }}></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block mb-6 animate-slide-up">
                <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-5 py-2 rounded-full text-sm font-medium">
                  We're Here to Help
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up delay-100">
                Let's Start a
                <br />
                <span className="gradient-text">Conversation</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-slide-up delay-200">
                Get in touch with our team today. We're ready to help transform your business finances.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 px-6 bg-slate-900/30 border-y border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{method.title}</h3>
                  <p className="text-slate-400 text-sm mb-3">{method.description}</p>
                  <div className="text-emerald-400 font-semibold flex items-center gap-2">
                    {method.action} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content - Form + Offices */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Send Us a <span className="gradient-text">Message</span>
                </h2>
                <p className="text-slate-400 mb-8">
                  Fill out the form below and we'll get back to you within 4 business hours.
                </p>

                {submitted ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-8 text-center animate-scale-in">
                    <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-slate-300">
                      We've received your message and will respond shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="input-field w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="input-field w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="input-field w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                          placeholder="0412 345 678"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="input-field w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                          placeholder="Your Company Pty Ltd"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Service Interested In</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="input-field w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      >
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Message *</label>
                      <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="input-field w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 resize-none"
                        placeholder="Tell us about your business and how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Send Message <Send className="w-5 h-5" />
                    </button>

                    <p className="text-slate-400 text-sm text-center">
                      By submitting this form, you agree to our privacy policy.
                    </p>
                  </form>
                )}
              </div>

              {/* Office Locations */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our <span className="gradient-text">Offices</span>
                </h2>
                <p className="text-slate-400 mb-8">
                  Visit us at one of our locations across Australia.
                </p>

                <div className="space-y-6 mb-8">
                  {offices.map((office, index) => (
                    <div
                      key={index}
                      className={`bg-slate-900/50 backdrop-blur border rounded-xl p-6 ${
                        office.isPrimary 
                          ? 'border-emerald-500/50 shadow-lg shadow-emerald-500/10' 
                          : 'border-slate-800 hover:border-emerald-500/30'
                      } transition-all duration-300`}
                    >
                      {office.isPrimary && (
                        <div className="inline-block bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                          Head Office
                        </div>
                      )}
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <MapPin className="w-6 h-6 text-emerald-400" />
                        {office.city}
                      </h3>
                      <div className="space-y-3 text-slate-300">
                        <p className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                          <span>{office.address}<br />{office.suburb}</span>
                        </p>
                        <p className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-slate-500 flex-shrink-0" />
                          <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover:text-emerald-400 transition-colors">
                            {office.phone}
                          </a>
                        </p>
                        <p className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-slate-500 flex-shrink-0" />
                          <a href={`mailto:${office.email}`} className="hover:text-emerald-400 transition-colors">
                            {office.email}
                          </a>
                        </p>
                        <p className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-slate-500 flex-shrink-0" />
                          <span className="text-sm">{office.hours}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Media */}
                <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors">
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors">
                      <Facebook className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 bg-slate-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-xl text-slate-400">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-lg pr-8">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6 text-slate-300 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-slate-400">
                Have more questions? {' '}
                <a href="mailto:zaran@protapz.co.in" className="text-emerald-400 hover:underline">
                  Send us an email
                </a>
                {' '}or call{' '}
                <a href="tel:+918866776724" className="text-emerald-400 hover:underline">
                  (+91) 88667 76724
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Map Section (Placeholder) */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl overflow-hidden h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Find Us on the Map</h3>
                <p className="text-slate-400">Interactive map integration would go here</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
