import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, Users, Target, Heart, TrendingUp, Shield, 
  Globe, Clock, CheckCircle, Star, ArrowRight, Linkedin 
} from 'lucide-react';

export default function About() {
  const team = [
    {
      name: "Zaran Khunt",
      role: "Founder & Managing Director",
      specialty: "Tax Strategy & Business Advisory",
      image: "👨‍💼",
      bio: "With 20+ years in public practice, Zaran founded Protapz to provide personalized, strategic accounting services to Australian businesses.",
      credentials: "CPA, CA, MBA",
      linkedin: "#"
    },
    {
      name: "Sarah Williams",
      role: "Tax Partner",
      specialty: "Corporate Tax & Compliance",
      image: "👩‍💼",
      bio: "Sarah leads our tax division with expertise in complex corporate structures and R&D tax incentives for tech companies.",
      credentials: "CPA, MTax",
      linkedin: "#"
    },
    {
      name: "David Kumar",
      role: "Advisory Partner",
      specialty: "CFO Services & Growth Strategy",
      image: "👨‍💻",
      bio: "Former CFO of three tech unicorns, David brings startup and scale-up expertise to our advisory practice.",
      credentials: "CA, CFA",
      linkedin: "#"
    },
    {
      name: "Emma Thompson",
      role: "SMSF Specialist",
      specialty: "Superannuation & Wealth",
      image: "👩‍⚕️",
      bio: "Emma specializes in self-managed super funds and retirement planning with over 15 years of dedicated SMSF experience.",
      credentials: "CPA, SMSF Specialist",
      linkedin: "#"
    },
    {
      name: "James Rodriguez",
      role: "Technology Director",
      specialty: "Cloud Accounting & Automation",
      image: "👨‍🔬",
      bio: "James drives our tech stack, implementing cutting-edge cloud solutions to streamline client operations.",
      credentials: "BIT, Xero Certified",
      linkedin: "#"
    },
    {
      name: "Lisa Park",
      role: "Senior Bookkeeper",
      specialty: "Day-to-Day Operations",
      image: "👩‍🏫",
      bio: "Lisa manages our bookkeeping division, ensuring accurate and timely financial records for over 200 clients.",
      credentials: "BAS Agent, ICB Certified",
      linkedin: "#"
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Client-First Mentality",
      description: "Your success is our success. We go above and beyond to deliver exceptional value and build lasting partnerships."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity & Trust",
      description: "We operate with complete transparency, honesty, and confidentiality in every interaction."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Proactive Excellence",
      description: "We don't wait for problems to arise. We anticipate needs and provide solutions before you ask."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Partnership",
      description: "We're not just service providers—we're strategic partners invested in your long-term growth."
    }
  ];

  const milestones = [
    { year: "2010", event: "Protapz Founded", description: "Started with a vision to revolutionize accounting services in Australia" },
    { year: "2013", event: "50 Clients Milestone", description: "Expanded team and services to meet growing demand" },
    { year: "2016", event: "Cloud-First Approach", description: "Pioneered cloud accounting adoption for Australian SMEs" },
    { year: "2019", event: "Award Recognition", description: "Named 'Best Accounting Firm' by Australian Business Awards" },
    { year: "2022", event: "500 Clients Strong", description: "Reached major milestone serving businesses across Australia" },
    { year: "2026", event: "Industry Leaders", description: "Recognized as thought leaders in tax strategy and business advisory" }
  ];

  const awards = [
    { name: "Best Accounting Firm 2024", org: "Australian Business Awards" },
    { name: "Top 100 Accounting Firms", org: "CPA Australia" },
    { name: "Excellence in Tax Advisory", org: "Tax Institute" },
    { name: "Client Choice Award", org: "Clutch" }
  ];

  const stats = [
    { value: "500+", label: "Active Clients" },
    { value: "15+", label: "Years Experience" },
    { value: "$25M+", label: "Tax Savings Delivered" },
    { value: "98%", label: "Client Retention" },
    { value: "24hr", label: "Avg Response Time" },
    { value: "6", label: "Industry Awards" }
  ];

  return (
    <main id = "main-content" role="main">
    <div className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Source+Sans+Pro:wght@300;400;600;700&display=swap');
        
        .about-page h1, .about-page h2, .about-page h3 {
          font-family: 'Crimson Text', serif;
        }
        
        .about-page {
          font-family: 'Source Sans Pro', sans-serif;
        }
      `}</style>

      <div className="about-page">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/20"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(16, 185, 129, 0.03) 0px, transparent 1px, transparent 40px, rgba(16, 185, 129, 0.03) 41px), repeating-linear-gradient(0deg, rgba(16, 185, 129, 0.03) 0px, transparent 1px, transparent 40px, rgba(16, 185, 129, 0.03) 41px)'
          }}></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block mb-6 animate-slide-up">
                <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-5 py-2 rounded-full text-sm font-medium">
                  Est. 2010 • Sydney, Australia
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up delay-100 leading-tight">
                Building Financial
                <br />
                <span className="gradient-text">Futures Together</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-slide-up delay-200">
                For over 15 years, we've been empowering Australian businesses with expert accounting, 
                strategic tax planning, and trusted advisory services.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 px-6 border-y border-slate-800 bg-slate-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Our <span className="gradient-text">Story</span>
                </h2>
                <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                  <p>
                    Protapz was founded in 2010 with a simple mission: to provide Australian businesses   
                    with accounting services that go beyond compliance to deliver real strategic value.
                  </p>
                  <p>
                    We saw too many businesses struggling with disconnected advisors, reactive service, 
                    and a lack of strategic financial guidance. We knew there was a better way.
                  </p>
                  <p>
                    Today, we're proud to serve over 500 businesses across Australia, from innovative 
                    startups to established enterprises. Our team of dedicated professionals combines 
                    deep technical expertise with genuine care for our clients' success.
                  </p>
                  <p>
                    We've built our reputation on proactive service, strategic thinking, and delivering 
                    measurable results. Because at Protapz, your success is our success.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl"></div>
                <div className="relative bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Our Journey</h3>
                  <div className="space-y-4">
                    {milestones.map((milestone, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg flex items-center justify-center border border-emerald-500/30">
                            <span className="text-emerald-400 font-bold">{milestone.year}</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{milestone.event}</h4>
                          <p className="text-slate-400 text-sm">{milestone.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-24 px-6 bg-slate-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                The principles that guide every decision we make
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8 hover:border-emerald-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg flex items-center justify-center text-emerald-400 mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-slate-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Meet Our <span className="gradient-text">Team</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Expert professionals dedicated to your financial success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 group"
                >
                  <div className="p-8">
                    <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                      {member.image}
                    </div>
                    
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                      <p className="text-emerald-400 mb-1">{member.role}</p>
                      <p className="text-sm text-slate-400 mb-2">{member.specialty}</p>
                      <p className="text-xs text-slate-500">{member.credentials}</p>
                    </div>

                    <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                      {member.bio}
                    </p>

                    <a 
                      href={member.linkedin}
                      className="flex items-center justify-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="text-sm font-medium">Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-24 px-6 bg-slate-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Awards & <span className="gradient-text">Recognition</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Honored to be recognized by industry leaders
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 text-center hover:border-emerald-500/50 transition-all duration-300"
                >
                  <Award className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">{award.name}</h3>
                  <p className="text-sm text-slate-400">{award.org}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900 to-emerald-950/30 border border-emerald-500/30 rounded-2xl p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Join Our Growing
                <br />
                <span className="gradient-text">Family of Clients</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Experience the Protapz difference. Let's start with a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="bg-gradient-to-r from-emerald-500 to-teal-600 px-10 py-5 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                    Get Started Today <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link to="/services">
                  <button className="border-2 border-emerald-500/30 px-12 py-6 min-h-[56px] min-w-[180px] rounded-lg font-semibold text-lg hover:bg-emerald-500/10 transition-all duration-300 flex items-center justify-center gap-2">
  Explore Services
</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </main>
  );
}
