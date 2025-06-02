
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Bot, Workflow, BarChart3, Shield, Cog, Zap, ArrowLeft, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
  const { slug } = useParams();

  const serviceData: { [key: string]: any } = {
    'neural-process-automation': {
      icon: Bot,
      title: "Intelligent Software Integration",
      description: "Elevate your existing software systems by integrating advanced AI capabilities, transforming them into intelligent, adaptive, and efficient tools that drive business growth. ",
      color: "cyan",
      fullDescription: "At Aetos AI, we specialize in seamlessly embedding artificial intelligence into your current software infrastructure. Our approach ensures that your applications become more responsive, predictive, and capable of making data-driven decisions. By integrating AI, we help you unlock new levels of efficiency, automation, and customer satisfaction, all while maintaining the integrity and functionality of your existing systems. ",
      benefits: [
        "Enhanced Decision-Making: Leverage AI to analyze data and provide actionable insights.",
        "Operational Efficiency: Automate routine tasks, reducing manual effort and errors.",
        "Scalability: AI-integrated systems adapt seamlessly as your business grows.",
        "Personalized User Experience: Deliver tailored experiences to users based on intelligent data analysis.",
        "Competitive Advantage: Stay ahead in your industry by adopting cutting-edge AI technologies. "
      ],
      features: [
        {
          title: "Seamless AI Integration",
          description: "We ensure that AI functionalities are smoothly incorporated into your existing software, preserving system integrity and performance. "
        },
        {
          title: "Custom AI Solutions",
          description: "Our team develops AI models tailored to your specific business needs, ensuring relevance and effectiveness. "
        },
        {
          title: "Continuous Support and Optimization",
          description: "Post-integration, we provide ongoing support and optimization to ensure your AI-enhanced systems continue to perform at their best."
        }
      ]
    },
    'quantum-workflow-design': {
      icon: Workflow,
      title: "Intelligent Workflow Automation",
      description: "Streamline your operations by automating repetitive tasks, allowing your team to focus on strategic initiatives and drive business growth.",
      color: "purple",
      fullDescription: "At Aetos AI, we specialize in transforming manual, time-consuming processes into efficient, automated workflows. By integrating advanced AI technologies, we identify areas within your operations that can benefit from automation, design tailored solutions, and seamlessly implement them into your existing systems. This not only enhances productivity but also reduces errors and operational costs. ",
      benefits: [
        "Increased Efficiency: Accelerate processes by eliminating manual interventions.",
        "Cost Reduction: Lower operational expenses through optimized resource utilization.",
        "Enhanced Accuracy: Minimize errors by standardizing processes.",
        "Scalability: Easily adapt workflows to accommodate business growth.",
        "Improved Compliance: Maintain consistent adherence to regulatory standards."
      ],
      features: [
        {
          title: "Process Mapping and Analysis",
          description: "We thoroughly analyze your current workflows to identify inefficiencies and areas ripe for automation. "
        },
        {
          title: "Custom Automation Development",
          description: "Our team designs and develops tailored automation solutions that align with your specific business needs."
        },
        {
          title: "Seamless Integration",
          description: "Seamless integration with existing systems using quantum-inspired algorithms for minimal disruption and maximum compatibility."
        }
      ]
    },
    'predictive-intelligence': {
      icon: Zap,
      title: "AI Chatbots & Virtual Assistants",
      description: "Deliver instant, intelligent, and personalized interactions across all customer touchpoints with our AI-powered chatbots and virtual assistants. ",
      color: "blue",
      fullDescription: "Deliver instant, intelligent, and personalized interactions across all customer touchpoints with our AI-powered chatbots and virtual assistants.  By integrating our AI assistants into your existing platforms—be it your website, CRM, or internal communication tools—you can automate routine inquiries, provide 24/7 support, and free up your team to focus on more complex tasks.",
      benefits: [
        "Enhanced Customer Experience: Deliver quick and accurate responses, improving satisfaction",
        "Operational Efficiency: Automate repetitive tasks, allowing your team to focus on strategic initiatives.",
        "Scalability: Easily handle increasing customer interactions without compromising quality.",
        "Consistent Communication: Maintain uniform messaging across all platforms.",
        "24/7 Availability: Provide round-the-clock support without additional staffing."
      ],
      features: [
        {
          title: "Natural Language Processing (NLP)",
          description: "Our chatbots understand and interpret human language, providing relevant and context-aware responses."
        },
        {
          title: "Seamless Integration",
          description: "Easily integrate our AI assistants with your existing systems, including websites, CRMs, and communication tools. "
        },
        {
          title: "Customizable Workflows",
          description: "Tailor chatbot functionalities to align with your specific business processes and customer journeys."
        }
      ]
    },
    'cybernetic-compliance': {
      icon: BarChart3,
      title: "AI-Powered Data Analytics",
      description: "Transform your raw data into actionable insights with our AI-driven analytics solutions, enabling smarter decisions and accelerated business growth.",
      color: "green",
      fullDescription: "At Aetos AI, we specialize in converting complex data sets into clear, actionable intelligence. Our AI-powered analytics platforms leverage machine learning and advanced algorithms to uncover patterns, predict trends, and provide real-time insights. This empowers your organization to make informed decisions swiftly, optimize operations, and stay ahead in a competitive landscape. Whether you're aiming to enhance customer experiences, streamline supply chains, or forecast market trends, our tailored analytics solutions are designed to meet your unique business needs.",
      benefits: [
        "Real-Time Insights: Access up-to-the-minute data analysis for timely decision-making",
        "Predictive Forecasting: Anticipate market trends and customer behaviors to strategize effectively.",
        "Enhanced Accuracy: Reduce errors and improve data reliability through automated analysis.",
        "Operational Efficiency: Streamline processes by identifying and addressing inefficiencies.",
        "Customized Dashboards: Visualize key metrics and KPIs tailored to your business objectives. "
      ],
      features: [
        {
          title: "Predictive Analytics",
          description: "Utilize AI to forecast future trends, customer behaviors, and market dynamics, enabling proactive strategies."
        },
        {
          title: "Real-Time Data Processing",
          description: "Process and analyze data as it streams in, ensuring immediate access to critical information. "
        },
        {
          title: "Seamless Integration",
          description: "Integrate with existing systems and data sources, including SQL, BigQuery, Excel, and APIs, for a unified analytics experience. "
        }
      ]
    },
    'system-symbiosis': {
      icon: Cog,
      title: "AI-Powered Reputation Management",
      description: "Safeguard and enhance your brand's image with intelligent, automated reputation management solutions that monitor, analyze, and respond to public sentiment in real-time.",
      color: "orange",
      fullDescription: "In today's digital landscape, a brand's reputation can shift rapidly. At Aetos AI, we offer advanced AI-driven reputation management services that proactively monitor online mentions, reviews, and social media interactions. Our system employs sophisticated algorithms to assess sentiment, detect emerging issues, and generate timely, brand-consistent responses. By integrating our solutions, businesses can not only mitigate potential crises but also leverage positive feedback to strengthen their market position. Our tools provide actionable insights, enabling you to understand public perception and make informed decisions to foster trust and loyalty among your audience. ",
      benefits: [
        "Real-Time Monitoring: Continuously track brand mentions across various platforms to stay ahead of public sentiment.",
        "Automated Responses: Deploy AI-generated replies that align with your brand's voice, ensuring consistent communication.",
        "Sentiment Analysis: Gain insights into customer feelings and opinions to inform strategic decisions.",
        "Crisis Prevention: Identify and address potential issues before they escalate, protecting your brand's integrity.",
        "Enhanced Customer Trust: Demonstrate responsiveness and commitment to customer satisfaction, building stronger relationships."
      ],
      features: [
        {
          title: "Comprehensive Review Aggregation",
          description: "Collect and consolidate reviews from platforms like Google, Yelp, and social media into a unified dashboard for streamlined management."
        },
        {
          title: "Predictive Sentiment Analytics",
          description: "Utilize AI to forecast potential reputation risks by analyzing trends and patterns in customer feedback."
        },
        {
          title: "Customizable Alert Systems",
          description: "Set up tailored alerts to notify your team of significant changes in public sentiment or sudden spikes in negative feedback."
        }
      ]
    },
    'quantum-deployment': {
      icon: Zap,
      title: "Predictive Analytics Engine",
      description: "Anticipate future trends and make informed decisions with our AI-driven predictive analytics solutions, transforming data into actionable strategies.",
      color: "pink",
      fullDescription: "At Aetos AI, we specialize in harnessing the power of artificial intelligence to analyze historical and real-time data, enabling businesses to forecast outcomes with remarkable accuracy. Our predictive analytics engine leverages advanced machine learning algorithms to identify patterns, assess risks, and uncover opportunities that might otherwise remain hidden. By integrating our solutions into your operations, you can proactively address challenges, optimize resources, and drive growth. Whether it's anticipating customer behavior, managing inventory, or forecasting market trends, our predictive analytics tools provide the insights needed to stay ahead in a competitive landscape. ",
      benefits: [
        "Enhanced Decision-Making: Make data-driven choices with greater confidence and precision.",
        "Risk Mitigation: Identify potential issues before they escalate, reducing uncertainty.",
        "Operational Efficiency: Streamline processes by anticipating demand and allocating resources effectively.",
        "Personalized Customer Experiences: Tailor offerings based on predictive insights into customer preferences.",
        "Competitive Advantage: Stay ahead by leveraging foresight into market dynamics and consumer behavior."
      ],
      features: [
        {
          title: "Advanced Machine Learning Models",
          description: "Utilize sophisticated algorithms to analyze complex datasets, delivering accurate forecasts and trend analyses."
        },
        {
          title: "Real-Time Data Processing",
          description: "Continuously process incoming data to provide up-to-the-minute insights, enabling agile responses to changing conditions. "
        },
        {
          title: "Seamless Integration",
          description: "Easily incorporate our predictive analytics engine into your existing systems and workflows, ensuring minimal disruption and maximum impact."
        }
      ]
    }
  };

  const service = serviceData[slug || ''];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header />
      
      <div className="pt-24 pb-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link 
            to="/services" 
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Services
          </Link>

          {/* Hero section */}
          <div className="text-center mb-20">
            <div className={`inline-flex bg-gradient-to-r from-${service.color}-400 to-${service.color}-600 p-6 rounded-2xl mb-8 shadow-lg shadow-${service.color}-500/25`}>
              <IconComponent className="h-16 w-16 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              {service.description}
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Benefits section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit: string, index: number) => (
                <div key={index} className="flex items-start space-x-3 bg-gray-900/50 p-6 rounded-xl border border-gray-700/50">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Core Features</h2>
            <div className="space-y-8">
              {service.features.map((feature: any, index: number) => (
                <div key={index} className="bg-gradient-to-r from-gray-900/70 to-black/70 p-8 rounded-2xl border border-gray-700/50">
                  <h3 className="text-xl font-bold text-cyan-300 mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA section */}
          <div className="text-center">
            <Link 
              to="/contact"
              className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-12 py-5 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-2 transition-all duration-300"
            >
              Let's Collaborate
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
