
import React from 'react';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:25px_25px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-3 rounded-xl shadow-lg shadow-cyan-500/25">
                <img 
                  src="/logo.932208c3.png" 
                  alt="Adaptive AI Logo" 
                  className="h-6 w-6 object-contain animate-pulse"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  AETOS AI
                </h3>
              </div>
              <div>
                  
              </div>              
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Smart systems for modern businesses—automate, adapt, and advance.
            </p>
            <div className="space-y-3">
              {[
                { icon: Mail, text: "aetosai10@gmail.com" },
                { icon: Phone, text: "+91 7011245434 " },
                { icon: Phone, text: "+91 7042101569" },
                { icon: MapPin, text: "South Delhi" }
              ].map((contact, index) => (
                <div key={index} className="flex items-center space-x-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  <contact.icon className="h-4 w-4" />
                  <span>{contact.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Pathways</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                'Software + AI Integration',
                'Workflow Automation', 
                'AI-Powered Chatbots & Assistants',
                'AI-Driven Data Analytics'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 relative group"
                  >
                    {service}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 AETOS AI | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
