import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  DollarSign, TrendingUp, Shield, Users, ChevronRight, Star, ArrowRight, 
  CheckCircle, Calendar, Award, Target, Zap, BarChart, Lock, Globe,
  FileText, Calculator, PieChart, Building2, Briefcase, BookOpen,
  MessageSquare, Phone, Mail, Clock, Play, Download, ExternalLink
} from 'lucide-react';

export default function Home() {
  const [statsVisible, setStatsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById('stats');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setStatsVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Australian Tax Returns",
      description: "Individual and business tax returns for Australian residents and companies. Expert preparation, lodgement, and ATO liaison services.",
      color: "from-emerald-500 to-teal-600",
      features: ["Individual Returns", "Company Tax", "Trust Returns", "Partnership"],
      link: "/services#tax"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "BAS & GST Services",
      description: "Business Activity Statement preparation and GST compliance. Quarterly and monthly BAS lodgement with ATO.",
      color: "from-blue-500 to-indigo-600",
      features: ["BAS Preparation", "GST Returns", "IAS Lodgement", "Compliance"],
      link: "/services#bas"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Bookkeeping Services",
      description: "Daily bookkeeping, Xero/MYOB setup, bank reconciliation, and financial reporting for Australian businesses.",
      color: "from-purple-500 to-pink-600",
      features: ["Xero/MYOB", "Bank Reco", "Payables/Receivables", "Reports"],
      link: "/services#bookkeeping"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Payroll & Super",
      description: "Australian payroll processing, superannuation compliance, Single Touch Payroll (STP), and employee taxation.",
      color: "from-orange-500 to-red-600",
      features: ["Payroll Processing", "Super Compliance", "STP", "PAYG"],
      link: "/services#payroll"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "CFO Services",
      description: "Virtual CFO services for Australian SMEs. Strategic planning, cash flow forecasting, and business growth advisory.",
      color: "from-cyan-500 to-blue-600",
      features: ["Cash Flow", "Forecasting", "KPIs", "Strategy"],
      link: "/services#cfo"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "SMSF Accounting",
      description: "Self-Managed Super Fund administration, compliance, and reporting. Annual statements and audit coordination.",
      color: "from-pink-500 to-rose-600",
      features: ["SMSF Admin", "Compliance", "Annual Returns", "Audit Support"],
      link: "/services#smsf"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Company Setup",
      description: "Australian company registration, ABN/ACN application, business structure advice, and ASIC compliance.",
      color: "from-violet-500 to-purple-600",
      features: ["Company Reg", "ABN/ACN", "Structure", "ASIC Filing"],
      link: "/services#setup"
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Management Accounting",
      description: "Financial analysis, budgeting, variance reporting, and KPI dashboards for better business decisions.",
      color: "from-teal-500 to-emerald-600",
      features: ["Budgeting", "Variance", "KPI Tracking", "Analytics"],
      link: "/services#management"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Business Advisory",
      description: "Strategic business advice, profitability improvement, cost reduction, and growth planning for AU businesses.",
      color: "from-amber-500 to-orange-600",
      features: ["Strategy", "Cost Reduction", "Growth Plans", "Advisory"],
      link: "/services#advisory"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Financial Reporting",
      description: "Monthly financial statements, management reports, P&L analysis, and balance sheet preparation.",
      color: "from-rose-500 to-pink-600",
      features: ["Monthly Reports", "P&L Analysis", "Balance Sheet", "Cash Flow"],
      link: "/services#reporting"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Expat Tax Services",
      description: "Tax services for Australian expats and foreign residents. Cross-border taxation and compliance support.",
      color: "from-indigo-500 to-blue-600",
      features: ["Expat Returns", "Foreign Income", "Residency", "Compliance"],
      link: "/services#expat"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Tax Planning",
      description: "Proactive tax planning strategies, deduction optimization, and year-end tax minimization for Australian entities.",
      color: "from-emerald-500 to-green-600",
      features: ["Tax Strategy", "Deductions", "Year-End", "Optimization"],
      link: "/services#planning"
    }
  ];

  const industries = [
    { name: "Technology & SaaS", icon: "💻", count: "150+ AU clients", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=50&fm=webp" },
    { name: "E-commerce & Online Retail", icon: "🛍️", count: "120+ AU clients", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=50&fm=webp" },
    { name: "Construction & Trades", icon: "🏗️", count: "100+ AU clients", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=50&fm=webp" },
    { name: "Healthcare & Medical", icon: "🏥", count: "80+ AU clients", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=50&fm=webp" },
    { name: "Property & Real Estate", icon: "🏢", count: "90+ AU clients", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=50&fm=webp" },
    { name: "Professional Services", icon: "⚖️", count: "110+ AU clients", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=50&fm=webp" },
    { name: "Hospitality & Tourism", icon: "🍽️", count: "65+ AU clients", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=50&fm=webp" },
    { name: "Mining & Resources", icon: "⛏️", count: "45+ AU clients", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=50&fm=webp" },
    { name: "Agriculture & Farming", icon: "🌾", count: "55+ AU clients", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=50&fm=webp" }
  ];

  const testimonials = [
    {
      text: "Protapz has been managing our Australian tax returns and BAS for 3 years. Their knowledge of ATO requirements is exceptional, and they've saved us significant time and money.",
      author: "Zaran Khunt",
      role: "Director",
      company: "Sydney Tech Solutions Pty Ltd",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=50&fm=webp"
    },
    {
      text: "As an Australian business owner, finding reliable offshore accounting was crucial. Protapz team understands AU compliance inside-out. They handle our MYOB, payroll, and quarterly BAS flawlessly.",
      author: "Sarah Williams",
      role: "Owner",
      company: "Melbourne Property Group",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=50&fm=webp"
    },
    {
      text: "Excellent service for our construction company. They manage our Xero bookkeeping, employee super, and company tax returns. Very responsive and great value compared to local firms.",
      author: "James Thompson",
      role: "Managing Director",
      company: "Brisbane Builders Pty Ltd",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=50&fm=webp"
    },
    {
      text: "We've been using Protapz for our SMSF administration and individual tax returns. Their understanding of Australian superannuation regulations is impressive. Highly recommend!",
      author: "Emma Roberts",
      role: "Principal",
      company: "Perth Financial Advisors",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=50&fm=webp"
    },
    {
      text: "Professional, knowledgeable, and cost-effective. Protapz handles our monthly bookkeeping, quarterly BAS, and annual company returns. Perfect solution for our Australian e-commerce business.",
      author: "David Lee",
      role: "Founder",
      company: "Adelaide Online Store",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=50&fm=webp"
    },
    {
      text: "Moving our Australian accounting to Protapz was the best decision. They're available during our business hours, understand Xero perfectly, and keep us ATO compliant. Great team!",
      author: "Lisa Martinez",
      role: "CFO",
      company: "Gold Coast Hospitality Group",
      rating: 5,
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&q=50&fm=webp"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Australian Tax Specialists",
      description: "Deep expertise in Australian taxation, ATO compliance, BAS, GST, and superannuation regulations. We speak your language.",
      stats: "10+ years AU experience"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Xero & MYOB Certified",
      description: "Certified in Australia's leading accounting software. Seamless integration with your existing systems and workflows.",
      stats: "Xero Gold Partner"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Aligned Business Hours",
      description: "Our team works during Australian business hours. Real-time communication and rapid response to your queries.",
      stats: "Same-day responses"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Secure & Confidential",
      description: "Bank-grade encryption, secure cloud storage, and strict confidentiality. Your financial data is completely protected.",
      stats: "256-bit encryption"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Cost-Effective Excellence",
      description: "Save 40-60% on accounting costs without compromising quality. Australia-trained accountants at competitive rates.",
      stats: "Save 40-60% on costs"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "100% ATO Compliant",
      description: "Stay fully compliant with Australian tax laws. We monitor ATO updates and ensure your business meets all requirements.",
      stats: "Zero compliance issues"
    }
  ];

  const caseStudies = [
    {
      company: "Sydney E-commerce Co",
      industry: "Online Retail",
      challenge: "Complex GST and multi-state BAS compliance",
      result: "Streamlined quarterly BAS, saved $45K AUD annually",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=50&fm=webp",
      metrics: ["$45K saved", "100% ATO compliant", "Zero penalties"]
    },
    {
      company: "Melbourne Construction",
      industry: "Building & Trades",
      challenge: "Payroll, super, and Xero bookkeeping backlog",
      result: "Caught up 18 months, improved cash flow visibility",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=50&fm=webp",
      metrics: ["18mo backlog cleared", "STP compliant", "$30K cost savings"]
    },
    {
      company: "Brisbane Tech Startup",
      industry: "SaaS",
      challenge: "R&D tax incentive application and compliance",
      result: "Successfully claimed $180K R&D refund",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=50&fm=webp",
      metrics: ["$180K R&D refund", "Tax optimized", "Investor-ready books"]
    }
  ];

  const clientLogos = [
    { name: "TechVenture", logo: "TV" },
    { name: "HealthPlus", logo: "H+" },
    { name: "RetailHub", logo: "RH" },
    { name: "EduTech", logo: "ET" },
    { name: "FinServe", logo: "FS" },
    { name: "LogiCo", logo: "LC" },
    { name: "FoodChain", logo: "FC" },
    { name: "PropTech", logo: "PT" },
    { name: "ManufacPro", logo: "MP" },
    { name: "StartupX", logo: "SX" }
  ];

  const blogPosts = [
    {
      title: "Complete Guide to BAS Lodgement in Australia 2026",
      excerpt: "Everything you need to know about Business Activity Statements, GST reporting, and quarterly compliance with the ATO.",
      category: "Tax & Compliance",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&q=50&fm=webp",
      date: "Jan 15, 2026"
    },
    {
      title: "Xero vs MYOB: Which is Right for Your Australian Business?",
      excerpt: "Comprehensive comparison of Australia's two leading cloud accounting platforms with pricing, features, and recommendations.",
      category: "Accounting Software",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=50&fm=webp",
      date: "Jan 10, 2026"
    },
    {
      title: "Superannuation Compliance: STP & Employer Obligations",
      excerpt: "Stay compliant with Single Touch Payroll and super guarantee obligations. Avoid ATO penalties with our expert guide.",
      category: "Payroll & Super",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&q=50&fm=webp",
      date: "Jan 5, 2026"
    }
  ];

  const Counter = ({ end, suffix = "", duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!statsVisible) return;
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }, [statsVisible, end, duration]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <main id = "main-content" role="main">
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        
        {/* Floating Decorations */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl float-animation" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="animate-slide-up inline-block mb-4">
                <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium">
                  🇦🇺 Australian Accounting Experts
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up delay-100">
                Australian Accounting,
                <br />
                <span className="gradient-text">Global Expertise</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-slide-up delay-200">
                Specialized Australian accounting, tax compliance, and business advisory services. 
                Supporting Australian businesses from our India-based team with deep AU expertise.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-300">
                <Link 
  to="/contact" 
  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 px-16 py-8 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 min-h-[64px] min-w-[260px] text-white no-underline"
>
  Get Free Consultation
  <ChevronRight className="w-5 h-5" />
</Link>
                <Link 
  to="/services"
  className="inline-flex items-center justify-center gap-3 border-2 border-emerald-500/30 px-16 py-8 min-h-[64px] min-w-[220px] rounded-lg font-semibold text-lg hover:bg-emerald-500/10 transition-all duration-300 text-white no-underline"
>
  Explore Services
  <ArrowRight className="w-5 h-5" />
</Link>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-6 animate-slide-up delay-400">
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span>AU Tax Specialists</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span>ATO Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span>BAS & GST Experts</span>
                </div>
              </div>
            </div>

            {/* Hero Image/Illustration */}
            <div className="relative animate-slide-up delay-200">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800">
                <img
  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&fm=webp&q=70"
  srcSet="
    https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=480&fm=webp&q=70 480w,
    https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&fm=webp&q=70 640w,
    https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=960&fm=webp&q=70 960w
  "
  sizes="(max-width: 768px) 90vw, 634px"
  width="634"
  height="451"
  className="w-full h-auto"
  loading="eager"
  decoding="async"
  alt="Financial Dashboard"
/>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              </div>
              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur border border-emerald-500/50 rounded-xl p-4 shadow-lg shadow-emerald-500/20">
                <div className="text-3xl font-bold gradient-text">₹50Cr+</div>
                <div className="text-slate-400 text-sm">Tax Savings</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-slate-900/90 backdrop-blur border border-blue-500/50 rounded-xl p-4 shadow-lg shadow-blue-500/20">
                <div className="text-3xl font-bold gradient-text">98%</div>
                <div className="text-slate-400 text-sm">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 px-6 bg-slate-900/20 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 500, suffix: "+", label: "AU Clients Served", icon: <Users className="w-6 h-6" /> },
              { value: 25, suffix: "M+", label: "AUD Tax Savings", icon: <DollarSign className="w-6 h-6" /> },
              { value: 10, suffix: "+", label: "Years AU Experience", icon: <Award className="w-6 h-6" /> },
              { value: 100, suffix: "%", label: "ATO Compliance", icon: <Shield className="w-6 h-6" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8 hover:border-emerald-500/50 transition-all">
                <div className="flex justify-center mb-4 text-emerald-400">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-3">
                  {stat.suffix === "M+" ? (
                    <>${statsVisible && <Counter end={stat.value} suffix="" />}M+</>
                  ) : stat.suffix === "%" ? (
                    <>{statsVisible && <Counter end={stat.value} suffix="" />}%</>
                  ) : (
                    <>{statsVisible && <Counter end={stat.value} suffix={stat.suffix} />}</>
                  )}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Quick Links Section - Helps Google Find Pages */}
<section className="py-16 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold mb-8">Explore Our Services</h2>
    <div className="grid md:grid-cols-3 gap-6">
      <Link to="/services" className="p-6 bg-slate-800 rounded-lg hover:bg-slate-700">
        <h3 className="text-xl font-bold mb-2">Our Services</h3>
        <p className="text-slate-400">View our complete range of Australian accounting services including tax returns, BAS, bookkeeping, and more.</p>
      </Link>
      <Link to="/about" className="p-6 bg-slate-800 rounded-lg hover:bg-slate-700">
        <h3 className="text-xl font-bold mb-2">About Us</h3>
        <p className="text-slate-400">Learn about our team of Australian-trained accountants based in India.</p>
      </Link>
      <Link to="/contact" className="p-6 bg-slate-800 rounded-lg hover:bg-slate-700">
        <h3 className="text-xl font-bold mb-2">Contact Us</h3>
        <p className="text-slate-400">Get in touch for a free consultation about your accounting needs.</p>
      </Link>
    </div>
  </div>
</section>

      {/* Services Section - Comprehensive */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Complete <span className="gradient-text">Australian Accounting Services</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From BAS lodgement to CFO advisory - comprehensive financial solutions 
              for Australian businesses delivered by our expert team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className={`service-card bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/50 cursor-pointer animate-scale-in delay-${(index % 3 + 1) * 100} group`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, i) => (
                    <span key={i} className="bg-slate-800/50 px-3 py-1 rounded-full text-sm text-slate-300">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="text-emerald-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <button className="bg-slate-900/50 border border-emerald-500/30 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-500/10 hover:border-emerald-500 transition-all duration-300">
                View All Services →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Why Choose <span className="gradient-text">Protapz</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We're not just accountants—we're your strategic growth partners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg flex items-center justify-center text-emerald-400 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 mb-4">{item.description}</p>
                <div className="text-emerald-400 font-semibold text-sm">{item.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Client <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Real results for real businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.company}
                    width="600"
                    height="400"
  loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="text-emerald-400 text-sm mb-2">{study.industry}</div>
                  <h3 className="text-2xl font-bold mb-3">{study.company}</h3>
                  <p className="text-slate-400 mb-2"><strong>Challenge:</strong> {study.challenge}</p>
                  <p className="text-emerald-400 mb-4"><strong>Result:</strong> {study.result}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.metrics.map((metric, i) => (
                      <span key={i} className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-xs">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-slate-900/50 border border-emerald-500/30 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-500/10 hover:border-emerald-500 transition-all duration-300">
              View All Case Studies →
            </button>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-6 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Industry <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Deep domain knowledge across 20+ industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
              >
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.name}
                    width="300"
                    height="200"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                  <div className="absolute top-4 left-4 text-4xl">{industry.icon}</div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{industry.name}</h3>
                  <p className="text-sm text-slate-400">{industry.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-emerald-400 text-emerald-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    width="40"
                    height="40"
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-slate-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 px-6 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Latest <span className="gradient-text">Insights</span>
              </h2>
              <p className="text-xl text-slate-400">
                Expert knowledge and industry updates
              </p>
            </div>
            <button className="hidden md:block bg-slate-900/50 border border-emerald-500/30 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-500/10 hover:border-emerald-500 transition-all duration-300">
              View All Articles →
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    width="600"
                    height="400"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-500/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">{post.title}</h3>
                  <p className="text-slate-400 mb-4">{post.excerpt}</p>
                  <div className="text-emerald-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 md:hidden">
            <button className="bg-slate-900/50 border border-emerald-500/30 px-10 py-4 rounded-lg font-semibold hover:bg-emerald-500/10 hover:border-emerald-500 transition-all duration-300">
              View All Articles →
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready for Expert Australian
            <br />
            <span className="gradient-text">Accounting Support?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss how Protapz can handle your Australian accounting, tax, and compliance needs. 
            Book a free 30-minute consultation with our AU specialists today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
  to="/contact" 
  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 px-16 py-8 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 min-h-[64px] min-w-[260px] text-white no-underline"
>
  Get Free Consultation
  <ChevronRight className="w-5 h-5" />
</Link>
            <a 
  href="tel:+918866776724"
  className="inline-flex items-center justify-center gap-3 border-2 border-slate-700 px-16 py-8 rounded-lg font-semibold text-lg hover:bg-slate-800 transition-all duration-300 min-h-[64px] min-w-[260px] text-white no-underline"
>
  <Phone className="w-5 h-5" />
  Call +91 88667 76724
</a>
          </div>

          {/* Quick Links */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-slate-400">
            <a href="mailto:admin@protapz.co.in" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <Mail className="w-5 h-5" />
              <span>admin@protapz.co.in</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <Download className="w-5 h-5" />
              <span>Download Brochure</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <Calendar className="w-5 h-5" />
              <span>Schedule Meeting</span>
            </a>
          </div>
        </div>
      </section>
    </div>
    </main>
  );
}
