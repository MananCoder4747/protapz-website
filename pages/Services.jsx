import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  DollarSign, TrendingUp, Shield, Users,Phone, FileText, Calculator, 
  PieChart, Building, Briefcase, ArrowRight, Check, Clock, 
  Target, Zap, Award, ChevronDown, ChevronUp 
} from 'lucide-react';

export default function Services() {
  const [expandedService, setExpandedService] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState('growth');

  const mainServices = [
    {
      id: 'tax',
      icon: <DollarSign className="w-10 h-10" />,
      title: "Tax Planning & Compliance",
      subtitle: "Strategic tax solutions for maximum efficiency",
      description: "Navigate the complexities of Australian taxation with confidence. Our expert team ensures you're compliant while maximizing your tax efficiency.",
      color: "from-emerald-400 to-teal-500",
      features: [
        "Individual & Business Tax Returns",
        "BAS & IAS Preparation & Lodgement",
        "Tax Planning & Strategy",
        "ATO Dispute Resolution",
        "Capital Gains Tax Optimization",
        "Fringe Benefits Tax (FBT)",
        "GST Registration & Compliance",
        "Tax Audit Support"
      ],
      benefits: [
        "Save thousands in tax legally",
        "Avoid ATO penalties and interest",
        "Peace of mind with compliance",
        "Proactive tax planning all year"
      ]
    },
    {
      id: 'advisory',
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Business Advisory & CFO Services",
      subtitle: "Strategic guidance for growth and profitability",
      description: "Make informed decisions with expert financial insights. From cash flow management to strategic planning, we're your partner in growth.",
      color: "from-blue-400 to-indigo-500",
      features: [
        "Financial Forecasting & Budgeting",
        "Cash Flow Management",
        "KPI Development & Tracking",
        "Business Valuation",
        "Strategic Planning Sessions",
        "Profitability Analysis",
        "Scenario Modeling",
        "Exit Planning & Succession"
      ],
      benefits: [
        "Data-driven decision making",
        "Improved profitability margins",
        "Better cash flow visibility",
        "Scalable growth strategies"
      ]
    },
    {
      id: 'bookkeeping',
      icon: <FileText className="w-10 h-10" />,
      title: "Bookkeeping & Payroll",
      subtitle: "Accurate records, compliant payroll, on time",
      description: "Focus on growing your business while we handle the day-to-day financial operations with precision and compliance.",
      color: "from-purple-400 to-pink-500",
      features: [
        "Daily Transaction Recording",
        "Bank Reconciliations",
        "Accounts Payable/Receivable",
        "Payroll Processing",
        "Superannuation Compliance",
        "Financial Reporting",
        "Cloud Accounting Setup",
        "Receipt & Expense Management"
      ],
      benefits: [
        "Real-time financial visibility",
        "100% payroll compliance",
        "Time saved on admin",
        "Accurate financial reports"
      ]
    },
    {
      id: 'smsf',
      icon: <Shield className="w-10 h-10" />,
      title: "SMSF & Wealth Management",
      subtitle: "Secure your retirement with expert fund management",
      description: "Take control of your superannuation with professional SMSF administration and strategic wealth planning.",
      color: "from-orange-400 to-red-500",
      features: [
        "SMSF Setup & Registration",
        "Annual Financial Statements",
        "Investment Strategy Development",
        "Audit Coordination",
        "Pension Compliance",
        "Member Contribution Tracking",
        "Property Investment Guidance",
        "ATO Compliance Reporting"
      ],
      benefits: [
        "Greater investment control",
        "Tax-effective strategies",
        "Reduced compliance risk",
        "Retirement readiness"
      ]
    },
    {
      id: 'corporate',
      icon: <Building className="w-10 h-10" />,
      title: "Corporate Structuring",
      subtitle: "Optimize your business structure for efficiency",
      description: "Structure your business for maximum tax efficiency, asset protection, and operational flexibility.",
      color: "from-cyan-400 to-blue-500",
      features: [
        "Entity Structure Review",
        "Trust & Company Setup",
        "Family Trust Administration",
        "Asset Protection Strategies",
        "Restructuring & Consolidation",
        "Shareholder Agreements",
        "Dividend Strategy",
        "Director Compliance"
      ],
      benefits: [
        "Optimized tax position",
        "Protected personal assets",
        "Flexible ownership structure",
        "Succession planning clarity"
      ]
    },
    {
      id: 'startup',
      icon: <Zap className="w-10 h-10" />,
      title: "Startup & Scale-up Support",
      subtitle: "Launch and grow with expert financial guidance",
      description: "From incorporation to Series A and beyond, we provide the financial foundation for startup success.",
      color: "from-pink-400 to-rose-500",
      features: [
        "Business Registration & Setup",
        "Accounting System Implementation",
        "R&D Tax Incentive Claims",
        "Investor-Ready Financials",
        "Grant Application Support",
        "Funding Readiness Assessment",
        "Board Reporting Templates",
        "Growth Metrics Tracking"
      ],
      benefits: [
        "Investor confidence boost",
        "R&D tax credit maximization",
        "Funding preparation support",
        "Scalable financial systems"
      ]
    }
  ];

  const packages = [
    {
      id: 'essentials',
      name: 'Essentials',
      price: '499',
      description: 'Perfect for startups and small businesses',
      features: [
        'Monthly bookkeeping',
        'BAS preparation',
        'Annual tax return',
        'Financial statements',
        'Email support'
      ],
      cta: 'Start with Essentials'
    },
    {
      id: 'growth',
      name: 'Growth',
      price: '999',
      description: 'Ideal for growing businesses',
      popular: true,
      features: [
        'Everything in Essentials',
        'Weekly bookkeeping',
        'Cash flow forecasting',
        'Quarterly strategy sessions',
        'Payroll processing',
        'Priority phone support',
        'Cloud accounting setup'
      ],
      cta: 'Choose Growth'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      description: 'Comprehensive solution for established businesses',
      features: [
        'Everything in Growth',
        'Daily bookkeeping',
        'Dedicated CFO support',
        'Board reporting',
        'Multi-entity management',
        'Advanced analytics',
        'White-glove service'
      ],
      cta: 'Contact Sales'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We learn about your business, challenges, and goals in a free 30-minute consultation.',
      icon: <Target className="w-6 h-6" />
    },
    {
      step: '02',
      title: 'Custom Proposal',
      description: 'Receive a tailored service package and transparent pricing within 48 hours.',
      icon: <FileText className="w-6 h-6" />
    },
    {
      step: '03',
      title: 'Onboarding',
      description: 'Quick setup with dedicated support. Most clients are fully operational within 5 business days.',
      icon: <Zap className="w-6 h-6" />
    },
    {
      step: '04',
      title: 'Ongoing Excellence',
      description: 'Proactive service with regular check-ins, real-time support, and strategic guidance.',
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <main id = "main-content" role="main">
    <div className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Lato:wght@300;400;700&display=swap');
        
        .services-page h1, .services-page h2, .services-page h3 {
          font-family: 'Playfair Display', serif;
        }
        
        .services-page {
          font-family: 'Lato', sans-serif;
        }
      `}</style>

      <div className="services-page">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
          }}></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block mb-6 animate-slide-up">
                <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-5 py-2 rounded-full text-sm font-medium">
                  Comprehensive Financial Services
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up delay-100">
                Services Built for
                <br />
                <span className="gradient-text">Your Success</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-slide-up delay-200">
                From tax compliance to strategic advisory, we provide the full spectrum of 
                financial services your business needs to thrive.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="py-24 px-6 bg-slate-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <div
                  key={service.id}
                  className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-emerald-400 text-sm mb-4">{service.subtitle}</p>
                    <p className="text-slate-400 mb-6">{service.description}</p>
                    
                    <button
                      onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                      className="text-emerald-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all mb-4"
                    >
                      {expandedService === service.id ? 'Show Less' : 'Learn More'}
                      {expandedService === service.id ? 
                        <ChevronUp className="w-4 h-4" /> : 
                        <ChevronDown className="w-4 h-4" />
                      }
                    </button>
                  </div>

                  {expandedService === service.id && (
                    <div className="px-8 pb-8 border-t border-slate-800 pt-6 animate-fade-in">
                      <h4 className="font-semibold mb-3 text-lg">What's Included:</h4>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-300">
                            <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <h4 className="font-semibold mb-3 text-lg">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-300">
                            <Target className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Transparent <span className="gradient-text">Pricing</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Choose the package that fits your business needs. All prices in AUD per month.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative bg-slate-900/50 backdrop-blur border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 ${
                    pkg.popular 
                      ? 'border-emerald-500 shadow-lg shadow-emerald-500/20' 
                      : 'border-slate-800 hover:border-emerald-500/50'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-slate-400 text-sm mb-4">{pkg.description}</p>
                    <div className="mb-4">
                      {pkg.price === 'Custom' ? (
                        <div className="text-4xl font-bold gradient-text">Custom</div>
                      ) : (
                        <>
                          <span className="text-5xl font-bold gradient-text">${pkg.price}</span>
                          <span className="text-slate-400">/month</span>
                        </>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:shadow-lg hover:shadow-emerald-500/50'
                        : 'bg-slate-800 hover:bg-slate-700'
                    }`}>
                      {pkg.cta}
                    </button>
                  </Link>
                </div>
              ))}
            </div>

            <p className="text-center text-slate-400 mt-8">
              All packages include secure cloud access and responsive support. 
              <Link to="/contact" className="text-emerald-400 hover:underline ml-1">
                Need a custom solution?
              </Link>
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-6 bg-slate-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Getting started is simple. Here's how we work together.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
                  )}
                  
                  <div className="relative bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg flex items-center justify-center text-emerald-400">
                        {step.icon}
                      </div>
                      <div className="text-4xl font-bold text-slate-800">{step.step}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-slate-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Book a free consultation and discover how our services can transform your business finances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="bg-gradient-to-r from-emerald-500 to-teal-600 px-10 py-5 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                  Book Free Consultation <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <a 
  href="tel:+918866776724"
  className="inline-flex items-center justify-center gap-3 border-2 border-slate-700 px-16 py-8 rounded-lg font-semibold text-lg hover:bg-slate-800 transition-all duration-300 min-h-[64px] min-w-[260px] text-white no-underline"
>
  <Phone className="w-5 h-5" />
  Call +91 88667 76724
</a>
            </div>
          </div>
        </section>
      </div>
    </div>
    </main>
  );
}
