import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/aetosai' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/aetos_ai/' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/aetos-ai' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/aetosai' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/@aetosai' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-2 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 transition-all duration-300">
              <img 
                src="/logo.932208c3.png" 
                alt="Adaptive AI Logo" 
                className="h-8 w-8 object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur opacity-50 -z-10"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Aetos AI
              </h1>
              <p className="text-xs text-cyan-300">⚡ Future Automation</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.path} 
                  className="relative text-gray-300 hover:text-cyan-400 font-medium transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 border-l border-cyan-500/20 pl-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-cyan-500/20">
            <nav className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.path} 
                  className="text-gray-300 hover:text-cyan-400 font-medium py-2 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            {/* Mobile Social Media Icons */}
            <div className="flex items-center space-x-4 pt-4 border-t border-cyan-500/20 mt-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;