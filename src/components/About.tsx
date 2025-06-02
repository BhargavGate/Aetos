import React from 'react';
import { Users, Award, Globe, TrendingUp, Mail, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleLaunchAI = () => {
    navigate('/contact');
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Aetos AI
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering Intelligent Solutions for a Digital Future
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">Our Journey</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Founded in 2023 by Divy Rathi and Honey Faraz, Aetos AI emerged from a shared vision to revolutionize the way businesses operate in the digital age. Recognizing the challenges companies face in adapting to rapidly evolving technologies, we set out to create solutions that are not only innovative but also practical and scalable.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our expertise lies in developing customized AI-powered software that automates repetitive tasks, provides actionable insights, and enhances overall efficiency. We understand that each business is unique, and our solutions are tailored to meet specific operational needs, ensuring optimal performance and adaptability.
            </p>
            <div className="relative bg-gradient-to-r from-cyan-900/30 to-purple-900/30 p-8 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl"></div>
              <p className="text-cyan-300 italic text-lg relative">
                "At Aetos AI, we specialize in delivering cutting-edge AI and automation solutions designed to transform businesses. Our mission is to empower organizations by streamlining operations, enhancing decision-making, and driving sustainable growth through intelligent technology."
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Users, value: "2025", label: "Founded", color: "cyan" },
              { icon: Award, value: "100%", label: "Client Focused", color: "purple" },
              { icon: Globe, value: "Global", label: "Solutions", color: "blue" },
              { icon: TrendingUp, value: "Smart", label: "Operations", color: "green" }
            ].map((stat, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-800/50 to-black/50 p-8 rounded-2xl text-center border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-sm hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`relative bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 p-4 rounded-xl w-fit mx-auto mb-4 shadow-lg shadow-${stat.color}-500/25`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{stat.value}</h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Our Mission</h3>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              To enable businesses to harness the power of artificial intelligence and automation, facilitating smarter operations and strategic growth.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Innovative", desc: "Leveraging the latest advancements in AI to stay ahead of the curve." },
              { title: "Reliable", desc: "Ensuring consistent performance and scalability across all our solutions." },
              { title: "Client-Centric", desc: "Focusing on the unique needs and goals of each client to deliver personalized solutions." }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-black/50 p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <h4 className="text-xl font-bold text-cyan-400 mb-3">{item.title}</h4>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Integrity", desc: "We uphold the highest standards of honesty and transparency in all our interactions." },
              { title: "Excellence", desc: "We strive for perfection in every project, ensuring quality and efficiency." },
              { title: "Collaboration", desc: "We believe in the power of teamwork, both within our organization and with our clients." },
              { title: "Innovation", desc: "We are constantly exploring new ideas and technologies to provide cutting-edge solutions." }
            ].map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-black/50 p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                <h4 className="text-lg font-bold text-purple-400 mb-3">{value.title}</h4>
                <p className="text-gray-300 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Founders Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Meet the Founders</h3>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="text-center bg-gradient-to-br from-gray-800/50 to-black/50 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">DR</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Divy Rathi</h4>
              <p className="text-cyan-400 font-semibold mb-4">Co-Founder</p>
              <p className="text-gray-300">
                Divy brings a wealth of experience in software development and strategic planning. His vision and leadership drive Aetos AI's mission to deliver transformative AI solutions that meet the evolving needs of businesses.
              </p>
            </div>
            <div className="text-center bg-gradient-to-br from-gray-800/50 to-black/50 p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">FA</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Faraz Ahmad</h4>
              <p className="text-purple-400 font-semibold mb-4">Co-Founder</p>
              <p className="text-gray-300">
                Honey is the technical mastermind behind Aetos AI's innovative solutions. With a deep understanding of AI technologies and a passion for problem-solving, he ensures that our products are both cutting-edge and practical.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="relative bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 p-12 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          
          <div className="relative text-center text-white">
            <h3 className="text-3xl font-bold mb-6">Join Us on Our Journey</h3>
            <p className="text-xl mb-8 text-cyan-100">
              At Aetos AI, we are more than just a technology company; we are your partners in innovation. Together, let's build a smarter, more efficient future.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
              onClick={handleLaunchAI}
              className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-xl font-semibold text-lg flex items-center justify-center space-x-3 hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Get Started</span>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            </button>
            </div>
            <p className="text-lg mt-8 text-cyan-100 italic">
              Experience the future of intelligent business solutions with Aetos AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
