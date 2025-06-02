
import React from 'react';
import { ArrowRight, Rocket, Target, } from 'lucide-react';
import { Bot, Workflow, BarChart3, Shield, Cog, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Bot,
      title: "Software + AI Integration",
      description: "Seamlessly fuse intelligence into your existing systems. We integrate battle-tested AI engines with your CRM, booking platforms, and operational tools—automating complex workflows, predicting customer behavior, and unlocking hidden efficiencies. No rip-and-replace required, just future-proofed performance.",
      features: ["Seamless AI Integration", "Custom AI Solutions", "Continuous Support and Optimization"],
      color: "cyan",
      slug: "neural-process-automation"
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Automate your 5-star reputation. Our system monitors every review (Google, TripAdvisor, social media), responds instantly with brand-aligned messages, and escalates critical issues—turning feedback into growth fuel while protecting your image 24/7.",
      features: ["Process Mapping and Analysis", "Custom Automation Development", "Seamless Integration"],
      color: "cyan",
      slug: "quantum-workflow-design"
    },
    {
      icon: Zap,
      title: "AI Chatbots & Virtual Assistants",
      description: "Deliver instant, intelligent, and personalized interactions across all customer touchpoints with our AI-powered chatbots and virtual assistants.",
      features: ["Natural Language Processing (NLP)", "Seamless Integration", "Customizable Workflows"],
      color: "cyan",
      slug: "predictive-intelligence"
    },
    {
      icon: Shield,
      title: "AI-Powered Reputation Management",
      description: "Transform your raw data into actionable insights with our AI-driven analytics solutions, enabling smarter decisions and accelerated business growth.",
      features: ["Predictive Analytics", "Real-Time Data Processing", "Seamless Integration"],
      color: "cyan",
      slug: "cybernetic-compliance"
    },
    {
      icon: Cog,
      title: "Reputation Management",
      description: "Automate your 5-star reputation. Our system monitors every review (Google, TripAdvisor, social media), responds instantly with brand-aligned messages, and escalates critical issues—turning feedback into growth fuel while protecting your image 24/7.",
      features: ["Comprehensive Review Aggregation", "Predictive Sentiment Analytics", "Customizable Alert Systems"],
      color: "cyan",
      slug: "system-symbiosis"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics Engine",
      description: "See tomorrow's opportunities today. Our AI analyzes your data to forecast trends, predict churn, and uncover hidden revenue pockets, turning raw numbers into actionable growth strategies.",
      features: ["Advanced Machine Learning Models", "Real-Time Data Processing", "Seamless Integration"],
      color: "cyan",
      slug: "quantum-deployment"
    }
  ];

  const handleServiceClick = (slug: string) => {
    navigate(`/services/${slug}`);
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Next-generation AI solutions engineered to transcend traditional automation boundaries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => handleServiceClick(service.slug)}
              className="group relative bg-gradient-to-br from-gray-900/70 to-black/70 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-sm hover:-translate-y-4 hover:scale-105 text-left w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Glowing effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>
              
              <div className={`relative bg-gradient-to-r from-${service.color}-400 to-${service.color}-600 p-4 rounded-xl w-fit mb-6 shadow-lg shadow-${service.color}-500/25 group-hover:shadow-${service.color}-500/50 transition-all duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="relative text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="relative text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
              
              <ul className="relative space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3 animate-pulse"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </button>
          ))}

          <div className="relative text-center text-white">
            <h3 className="text-3xl font-bold mb-8">  </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[

              ].map((item, index) => (
                <div key={index} className="relative">
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-cyan-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
          <div className="relative text-center text-white">
            <h3 className="text-3xl font-bold mb-8">Why Enterprises Choose Us</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[

              ].map((item, index) => (
                <div key={index} className="relative">
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-cyan-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        
        <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Proactive Monitoring and Maintenance", desc: "We continuously monitor your systems to identify and resolve issues before they impact your business operations.", color: "cyan" },
              { icon: Target, title: "Scalable Solutions for Growing Businesses", desc: "Scalable Solutions for Growing Businesses", color: "cyan" },
              { icon: Zap, title: "Comprehensive IT Support", desc: "From hardware and software management to network security, we provide end-to-end IT support to meet all your technological needs.", color: "cyan" }
            ].map((item, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-sm hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`relative bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 p-4 rounded-xl w-fit mx-auto mb-6 shadow-lg shadow-${item.color}-500/25 group-hover:shadow-${item.color}-500/50 transition-all duration-300`}>
                  <item.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{item.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
