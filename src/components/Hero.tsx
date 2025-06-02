
import React from 'react';
import { ArrowRight, Rocket, Target, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleLaunchAI = () => {
    navigate('/contact');
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="relative bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-6 rounded-full shadow-2xl shadow-cyan-500/25">
              <img 
                src="/logo.932208c3.png" 
                alt="Adaptive AI Logo" 
                className="h-16 w-16 object-contain animate-pulse"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-xl opacity-50 -z-10 animate-ping"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              AETOS AI
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              ⚡ Future Automation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Next-generation AI solutions that evolve with your business. 
            <span className="text-cyan-400"> Transform operations</span>, 
            <span className="text-purple-400"> automate workflows</span>, and 
            <span className="text-blue-400"> accelerate growth</span> with intelligent systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <button 
              onClick={handleLaunchAI}
              className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-xl font-semibold text-lg flex items-center justify-center space-x-3 hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Get Started</span>
              <ArrowRight className="h-6 w-6 relative group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              
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
      </div>
    </section>
  );
};

export default Hero;
