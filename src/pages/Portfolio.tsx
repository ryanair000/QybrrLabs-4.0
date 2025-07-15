import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, MemoizedAnimatedSection } from "@/components/ui/animated-section";
import Layout from "../components/layout/Layout";
import { ArrowRight, Filter, ChevronDown } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const portfolioItems = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      client: "Nairobi Retail Group",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      description: "Modern e-commerce solution with payment integration and inventory management.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      client: "Lagos Financial Services",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      description: "Secure mobile banking application with biometric authentication and real-time transaction processing.",
      tags: ["React Native", "Firebase", "Biometrics", "API Integration"]
    },
    {
      title: "Restaurant Management System",
      category: "Software Development",
      client: "Addis Restaurant Chain",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      description: "Complete restaurant management and POS system with inventory tracking and staff management.",
      tags: ["Vue.js", "Express", "PostgreSQL", "Socket.io"]
    },
    {
      title: "Healthcare Patient Portal",
      category: "Web Development",
      client: "Nairobi Medical Center",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      description: "Patient management system allowing appointment scheduling, medical records access, and secure doctor-patient communication.",
      tags: ["Angular", "Java Spring", "MySQL", "HIPAA Compliant"]
    },
    {
      title: "Logistics Tracking Platform",
      category: "Software Development",
      client: "Trans-Africa Logistics",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088",
      description: "Real-time shipment tracking system with route optimization and delivery confirmation.",
      tags: ["React", "Node.js", "MongoDB", "Google Maps API"]
    },
    {
      title: "Educational Learning Platform",
      category: "Web Development",
      client: "Kenya Education Network",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
      description: "Online learning platform with course management, video lectures, and student progress tracking.",
      tags: ["Next.js", "Django", "PostgreSQL", "AWS S3"]
    }
  ];

  const categories = ['All', 'Web Development', 'Mobile Development', 'Software Development'];
  
  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <MemoizedAnimatedSection animation="fade" duration="fast" threshold={0.2}>
              <Badge className="mb-4 bg-purple-100 text-purple-600 hover:bg-purple-200 border-purple-200">
                Our Work
              </Badge>
            
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Portfolio
              </h1>
            
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Explore our collection of successful projects delivered for clients across Africa.
                Each project showcases our expertise in creating innovative digital solutions.
              </p>
            </MemoizedAnimatedSection>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
                Our Projects
              </h2>
              
              <div className="relative">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 border-gray-300"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  <Filter className="h-4 w-4" />
                  Filter by: {activeFilter}
                  <ChevronDown className="h-4 w-4" />
                </Button>
                
                {isFilterOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                    <div className="py-1">
                      {categories.map((category) => (
                        <button
                          key={category}
                          className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 ${
                            activeFilter === category ? 'bg-purple-50 text-purple-600' : 'text-gray-700'
                          }`}
                          onClick={() => {
                            setActiveFilter(category);
                            setIsFilterOpen(false);
                          }}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <AnimatedSection 
                key={index} 
                animation="fade-up" 
                delay={index * 100} 
                className="group"
              >
                <div className="overflow-hidden rounded-lg shadow-md bg-white h-full flex flex-col">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-purple-600 text-white">{item.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-purple-600 mb-3">Client: {item.client}</p>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {item.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-purple-600">
                      View Details
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 text-center">
            <MemoizedAnimatedSection animation="fade" duration="fast">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help bring your vision to life with our expertise in digital solutions.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white gap-2 px-8 py-6 text-lg">
                Contact Us
                <ArrowRight size={18} />
              </Button>
            </MemoizedAnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio; 