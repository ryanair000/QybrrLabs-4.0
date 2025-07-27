import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, MemoizedAnimatedSection } from "@/components/ui/animated-section";
import Layout from "../components/layout/Layout";
import { 
  Code, 
  Smartphone, 
  Monitor, 
  Server, 
  MessageSquare, 
  TrendingUp, 
  Palette, 
  Bot,
  Star,
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  CheckCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function Index() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled for navbar style
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Calculate scroll progress for the progress line
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent * 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add a debounced scroll handler for smoother performance
  useEffect(() => {
    // Preload critical images for better performance
    const imagesToPreload = [
      '/lovable-uploads/fc11d20a-c281-434f-abf1-77a2b6451837.png',
      'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7'
    ];
    
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies",
        priceRange: 'Ksh 50,000 – 300,000',
      features: ["Responsive Design", "Modern Frameworks", "SEO Optimized"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
        priceRange: 'Ksh 150,000 – 1,000,000',
      features: ["Cross-Platform", "Native Performance", "App Store Ready"]
    },
    {
      icon: Monitor,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs",
        priceRange: 'Ksh 200,000 – 1,500,000',
      features: ["Custom Solutions", "Scalable Architecture", "Ongoing Support"]
    },
    {
      icon: Server,
      title: "Web Hosting",
      description: "Reliable and secure web hosting solutions with 99.9% uptime",
        priceRange: 'Ksh 10,000 – 100,000 / yr',
      features: ["SSL Certificates", "24/7 Support", "Fast Loading"]
    },
    {
      icon: MessageSquare,
      title: "Bulk SMS",
      description: "Reach your customers instantly with our bulk SMS service",
        priceRange: 'From Ksh 0.7 per SMS',
      features: ["High Delivery Rate", "Instant Delivery", "Cost Effective"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your business",
        priceRange: 'Ksh 30,000 – 300,000 / mo',
      features: ["SEO/SEM", "Social Media", "Content Marketing"]
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Professional graphic design services for all your branding needs",
        priceRange: 'Ksh 5,000 – 50,000',
      features: ["Brand Identity", "Print Design", "Digital Assets"]
    },
    {
      icon: Bot,
      title: "AI Chatbot Assistants",
      description: "Intelligent chatbots to enhance customer service and engagement",
        priceRange: 'Ksh 80,000 – 500,000',
      features: ["24/7 Availability", "Natural Language", "Custom Training"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Kenya",
      content: "QybrrLabs delivered an exceptional mobile app that exceeded our expectations. Their attention to detail and professionalism is unmatched.",
      rating: 5
    },
    {
      name: "Michael Ochieng",
      company: "Nairobi Retail Group",
      content: "The e-commerce website they built for us increased our online sales by 300%. Highly recommended!",
      rating: 5
    },
    {
      name: "Grace Wanjiku",
      company: "Lagos Marketing Solutions",
      content: "Their digital marketing strategies helped us reach new markets across Africa. Excellent ROI and service.",
      rating: 5
    },
    {
      name: "John Maina",
      company: "Safari Tours Tanzania",
      content: "The booking system QybrrLabs built transformed our business operations. We're now able to manage bookings efficiently and provide better customer service.",
      rating: 5
    },
    {
      name: "Amina Khalid",
      company: "Nairobi Medical Center",
      content: "Their patient management system is intuitive and has streamlined our operations significantly. Their support team is also very responsive.",
      rating: 4
    },
    {
      name: "Daniel Okafor",
      company: "FinTech Solutions Nigeria",
      content: "QybrrLabs helped us launch our mobile banking solution in record time. The quality of their work is outstanding and the team is very professional.",
      rating: 5
    }
  ];

  const portfolioItems = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      description: "Modern e-commerce solution with payment integration"
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      description: "Secure mobile banking application with biometric authentication"
    },
    {
      title: "Restaurant Management System",
      category: "Software Development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      description: "Complete restaurant management and POS system"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-purple-50 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-300/10 to-pink-300/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <MemoizedAnimatedSection animation="fade" duration="fast" threshold={0.2}>
              <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 hover:from-purple-200 hover:to-pink-200 border-purple-200 shadow-sm">
                🚀 Leading Digital Solutions in Africa
              </Badge>
            
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Business with
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block mt-2">
                  Digital Innovation
                </span>
              </h1>
            
              <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
                QybrrLabs Africa empowers businesses and entrepreneurs with cutting-edge digital solutions. 
                From web development to AI chatbots, we're your technology partner for growth.
              </p>
            
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 px-8 py-4 text-lg">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-purple-600 hover:text-purple-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 px-8 py-4 text-lg">
                  View Portfolio
                </Button>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">100+</div>
                  <div className="text-gray-600 text-sm md:text-base">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-gray-600 text-sm md:text-base">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">5+</div>
                  <div className="text-gray-600 text-sm md:text-base">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-gray-600 text-sm md:text-base">Support</div>
                </div>
              </div>
            </MemoizedAnimatedSection>
          </div>
        </div>
      </section>

      {/* Welcome Video Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <AnimatedSection animation="fade-up">
              <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
                Welcome to QybrrLabs Africa
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Experience Our Vision
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Watch how we're transforming African businesses through innovative digital solutions
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="relative max-w-4xl mx-auto">
              {/* Video Container with Modern Styling */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm border border-white/20">
                <video
                  className="w-full h-auto max-h-[500px] object-cover"
                  controls
                  preload="metadata"
                  poster="/lovable-uploads/fc11d20a-c281-434f-abf1-77a2b6451837.png"
                >
                  <source src="/qybrrlabs welcome.mp4" type="video/mp4" />
                  <p className="text-white p-8 text-center">
                    Your browser doesn't support video playback. 
                    <a href="/qybrrlabs welcome.mp4" className="text-purple-300 underline ml-2">
                      Download the video
                    </a>
                  </p>
                </video>
                
                {/* Video Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent pointer-events-none"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </AnimatedSection>

          {/* Call to Action Below Video */}
          <AnimatedSection animation="fade-up" delay={400}>
            <div className="text-center mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-200">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200">
                  Learn More About Us
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <AnimatedSection animation="fade-up">
              <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200">
                🎯 What We Offer
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We offer a wide range of digital solutions to help your business succeed in the digital age.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              // Map service title to its route ID
              const serviceRoute = service.title.toLowerCase().replace(/\s+/g, '-');
              
              return (
                <AnimatedSection 
                  key={index} 
                  animation="fade-up" 
                  delay={index * 100} 
                  className="flex flex-col h-full"
                >
                  <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full group bg-white/80 backdrop-blur-sm transform hover:-translate-y-2">
                    <CardContent className="p-6 flex-grow">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <ServiceIcon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">{service.title}</h3>
                      <p className="text-gray-600 mb-3 leading-relaxed">{service.description}</p>
                         {service.priceRange && (
                           <p className="font-semibold text-purple-600 mb-4 text-lg">{service.priceRange}</p>
                         )}
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <div className="px-6 pb-6">
                      <a href={`/services/${serviceRoute}`}>
                        <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                          Learn More
                        </Button>
                      </a>
                    </div>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-white relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20zm-10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <AnimatedSection animation="fade-up">
              <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200">
                ⭐ Our Work
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Portfolio
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explore how we've helped businesses across Africa transform and grow digitally
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <AnimatedSection animation="fade-up" delay={index * 100} className="group" key={index}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 bg-white border border-gray-100">
                  <a href="#" className="block">
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/20 transition-all duration-300"></div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 mb-3 border-0 shadow-lg">
                          {item.category}
                        </Badge>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-200 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-200 group-hover:text-purple-100 transition-colors">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-16 text-center">
            <AnimatedSection animation="fade-up" delay={400}>
              <a href="/portfolio">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 px-8 py-4 text-lg">
                  View Complete Portfolio
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <MemoizedAnimatedSection animation="fade" duration="fast">
              <Badge className="mb-4 bg-purple-100 text-purple-600 hover:bg-purple-200 border-purple-200">
                Our Experts
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The talented professionals behind QybrrLabs Africa
              </p>
            </MemoizedAnimatedSection>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <MemoizedAnimatedSection animation="fade-up" duration="normal" delay={100}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/fashion-designer.jpg" 
                    alt="Peace Njeri" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 will-change-transform"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-center space-x-4 mb-2">
                        <a href="#" className="text-white hover:text-purple-300 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-white hover:text-purple-300 transition-colors">
                          <Twitter className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-white hover:text-purple-300 transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">Peace Njeri</h3>
                  <p className="text-purple-600 font-medium">Graphic Designer</p>
                  <p className="mt-2 text-gray-600">Creating stunning visual identities and digital assets for our clients.</p>
                </div>
              </div>
            </MemoizedAnimatedSection>

            <MemoizedAnimatedSection animation="fade-up" duration="normal" delay={200}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/african-american-expert-desk-using-pc-programming-data-analysis.jpg" 
                    alt="Ryan Alfred" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 will-change-transform"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-center space-x-4 mb-2">
                        <a href="#" className="text-white hover:text-purple-300 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-white hover:text-purple-300 transition-colors">
                          <Twitter className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-white hover:text-purple-300 transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">Ryan Alfred</h3>
                  <p className="text-purple-600 font-medium">Full Stack Developer</p>
                  <p className="mt-2 text-gray-600">Building robust and scalable web applications with modern technologies.</p>
                </div>
              </div>
            </MemoizedAnimatedSection>

            <MemoizedAnimatedSection animation="fade-up" duration="normal" delay={300}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/portrait-teenager-sitting-desk-table-living-room.jpg" 
                    alt="David Kea" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 will-change-transform"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-center space-x-4 mb-2">
                        <a href="#" className="text-white hover:text-purple-300 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-white hover:text-purple-300 transition-colors">
                          <Twitter className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-white hover:text-purple-300 transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">David Kea</h3>
                  <p className="text-purple-600 font-medium">Social Media Strategist</p>
                  <p className="mt-2 text-gray-600">Crafting engaging digital marketing campaigns that drive results.</p>
                </div>
              </div>
            </MemoizedAnimatedSection>

            <MemoizedAnimatedSection animation="fade-up" duration="normal" delay={400}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/side-view-woman-reading-laptop.jpg" 
                    alt="Mary Wanjiru" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 will-change-transform"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-center space-x-4 mb-2">
                        <a href="#" className="text-white hover:text-purple-300 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-white hover:text-purple-300 transition-colors">
                          <Twitter className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-white hover:text-purple-300 transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">Mary Wanjiru</h3>
                  <p className="text-purple-600 font-medium">Developer</p>
                  <p className="mt-2 text-gray-600">Creating elegant code solutions and optimizing application performance.</p>
                </div>
              </div>
            </MemoizedAnimatedSection>
          </div>
          
          {/* Testimonials Section */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across Africa
              </p>
            </div>
            
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About QybrrLabs Africa
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a leading technology company dedicated to empowering African businesses 
                with innovative digital solutions. Our team of experienced developers, designers, 
                and digital strategists work together to deliver exceptional results.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From startups to enterprise organizations, we've helped hundreds of clients 
                transform their business operations and achieve their digital goals.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">500+</h3>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">150+</h3>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center overflow-hidden">
              <img 
                src="/group-afro-americans-working-together.jpg" 
                alt="Team collaboration"
                className="rounded-lg object-cover w-full h-full hover:scale-105 transition-transform duration-700 will-change-transform"
                loading="lazy"
                width="800"
                height="800"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest insights and news on technology trends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm bg-white hover:shadow-lg transition-shadow duration-300 contain-paint">
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095" 
                  alt="Blog post"
                  className="w-full h-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-500 will-change-transform"
                  loading="lazy"
                  width="600"
                  height="400"
                  decoding="async"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit bg-primary/10 text-primary">Mobile Apps</Badge>
                <CardTitle className="text-xl text-gray-900">
                  The Future of Mobile App Development in Africa
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Discover how mobile app development is evolving across African markets...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="/blog/1">
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                    Read More
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white hover:shadow-lg transition-shadow duration-300 contain-paint">
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1607018151999-51971f9d4f17" 
                  alt="Blog post"
                  className="w-full h-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-500 will-change-transform"
                  loading="lazy"
                  width="600"
                  height="400"
                  decoding="async"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit bg-primary/10 text-primary">Technology</Badge>
                <CardTitle className="text-xl text-gray-900">
                  How AI is Transforming Business Operations in Kenya
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Explore the impact of artificial intelligence on businesses across Kenya...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="/blog/2">
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                    Read More
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white hover:shadow-lg transition-shadow duration-300 contain-paint">
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                  alt="Blog post"
                  className="w-full h-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-500 will-change-transform"
                  loading="lazy"
                  width="600"
                  height="400"
                  decoding="async"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit bg-primary/10 text-primary">AI</Badge>
                <CardTitle className="text-xl text-gray-900">
                  AI Chatbots: Revolutionizing Customer Service
                </CardTitle>
                <CardDescription className="text-gray-600">
                  How AI chatbots are transforming customer engagement in Africa...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="/blog">
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                    Read More
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <a href="/blog">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white gap-2">
                View All Articles
                <ArrowRight size={16} />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-purple-50/40 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Let's talk</h2>
                <p className="text-lg text-gray-600 max-w-md">
                  Have a project in mind or just want to say hello? Reach out and our team will get back to you within 24&nbsp;hours.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Phone</p>
                    <a href="tel:+254750763280" className="text-lg text-purple-600 hover:underline">
                      +254&nbsp;750&nbsp;763&nbsp;280
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <a href="mailto:info@qybrrlabs.com" className="text-lg text-purple-600 hover:underline">
                      info@qybrrlabs.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Address</p>
                    <p className="text-lg text-gray-600">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full rounded-md border-gray-300 px-4 py-2.5 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full rounded-md border-gray-300 px-4 py-2.5 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="w-full rounded-md border-gray-300 px-4 py-2.5 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          className="w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        
        {isChatOpen && (
          <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-900">Live Chat</h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsChatOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-gray-600 mb-4">
              Hi! How can we help you today?
            </p>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start text-left hover:text-purple-600 hover:border-purple-600">
                I need a website
              </Button>
              <Button variant="outline" className="w-full justify-start text-left hover:text-purple-600 hover:border-purple-600">
                Mobile app development
              </Button>
              <Button variant="outline" className="w-full justify-start text-left hover:text-purple-600 hover:border-purple-600">
                General inquiry
              </Button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}


// Testimonial carousel component
const TestimonialCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getVisibleTestimonials = () => {
    const start = currentIndex * itemsPerSlide;
    return testimonials.slice(start, start + itemsPerSlide);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden mx-auto">
        <div 
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => {
            const startIdx = slideIndex * itemsPerSlide;
            const slideTestimonials = testimonials.slice(startIdx, startIdx + itemsPerSlide);
            
            return (
              <div 
                key={slideIndex} 
                className="grid grid-cols-1 md:grid-cols-3 gap-8 min-w-full"
                style={{ opacity: slideIndex === currentIndex ? 1 : 0.3 }}
              >
                {slideTestimonials.map((person, index) => (
                  <MemoizedAnimatedSection 
                    key={startIdx + index} 
                    animation="fade" 
                    duration="normal" 
                    delay={Math.min(index * 50, 150)}
                    threshold={0.1}
                    rootMargin="50px"
                  >
                    <Card className="border-0 shadow-sm bg-white hover:shadow-lg transition-shadow duration-300 h-full">
                      <CardContent className="pt-6">
                        <div className="flex mb-4">
                          {[...Array(person.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                          {[...Array(5 - person.rating)].map((_, i) => (
                            <Star key={i + person.rating} className="h-5 w-5 text-gray-300" />
                          ))}
                        </div>
                        <p className="text-gray-600 mb-6 italic">"{person.content}"</p>
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold mr-3">
                            {person.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{person.name}</p>
                            <p className="text-sm text-gray-500">{person.company}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </MemoizedAnimatedSection>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Navigation buttons */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4">
        <Button 
          size="icon"
          variant="outline" 
          className="rounded-full h-10 w-10 bg-white shadow-md border-gray-200"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4">
        <Button 
          size="icon"
          variant="outline" 
          className="rounded-full h-10 w-10 bg-white shadow-md border-gray-200"
          onClick={nextSlide}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentIndex(idx);
                setTimeout(() => setIsAnimating(false), 500);
              }
            }}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              idx === currentIndex ? "bg-purple-600 w-8" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
