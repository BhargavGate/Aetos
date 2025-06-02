
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://getform.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Aetos",
          description: "Your message has been transmitted. Our AI will respond within 24 hours.",
        });
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Transmission Error",
        description: "Neural network interruption detected. Please retry or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Atose Interface
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transcend traditional automation? Establish a quantum connection with our AI collective.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8">Atose Contacts</h3>
            
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Atose Mail", info: ["aetosai10@gmail.com"], color: "cyan" },
                { icon: Phone, title: "Phone no.", info: ["+91 7011245434", "+91 7042101569"], color: "purple" },
                { icon: MapPin, title: "Physical add", info: ["South Delhi"], color: "blue" }
              ].map((contact, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className={`bg-gradient-to-r from-${contact.color}-400 to-${contact.color}-600 p-4 rounded-xl shadow-lg shadow-${contact.color}-500/25 group-hover:shadow-${contact.color}-500/50 transition-all duration-300`}>
                    <contact.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-2">{contact.title}</h4>
                    {contact.info.map((item, i) => (
                      <p key={i} className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{item}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl"></div>
            
            <form onSubmit={handleSubmit} className="relative space-y-6">
              {[
                { name: 'name', label: 'Identity *', type: 'text', placeholder: 'Your name' },
                { name: 'email', label: 'Mail *', type: 'email', placeholder: 'your.aetose@interface.com' },
                { name: 'company', label: 'Business name', type: 'text', placeholder: 'Your organization ' }
              ].map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name} className="block text-sm font-medium text-gray-300 mb-3">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    required={field.name === 'name' || field.name === 'email'}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 backdrop-blur-sm"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                  Your requirements *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 backdrop-blur-sm"
                  placeholder="Describe your automation needs and desired requirements enhancements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-5 rounded-xl font-semibold text-lg flex items-center justify-center space-x-3 hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {isSubmitting ? (
                  <span className="relative">Transmitting...</span>
                ) : (
                  <>
                    <span className="relative">Submit</span>
                    <Send className="h-5 w-5 relative group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
