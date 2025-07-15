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

const Index = () => {
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
      features: ["Responsive Design", "Modern Frameworks", "SEO Optimized"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["Cross-Platform", "Native Performance", "App Store Ready"]
    },
    {
      icon: Monitor,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs",
      features: ["Custom Solutions", "Scalable Architecture", "Ongoing Support"]
    },
    {
      icon: Server,
      title: "Web Hosting",
      description: "Reliable and secure web hosting solutions with 99.9% uptime",
      features: ["SSL Certificates", "24/7 Support", "Fast Loading"]
    },
    {
      icon: MessageSquare,
      title: "Bulk SMS",
      description: "Reach your customers instantly with our bulk SMS service",
      features: ["High Delivery Rate", "Instant Delivery", "Cost Effective"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your business",
      features: ["SEO/SEM", "Social Media", "Content Marketing"]
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Professional graphic design services for all your branding needs",
      features: ["Brand Identity", "Print Design", "Digital Assets"]
    },
    {
      icon: Bot,
      title: "AI Chatbot Assistants",
      description: "Intelligent chatbots to enhance customer service and engagement",
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
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <MemoizedAnimatedSection animation="fade" duration="fast" threshold={0.2}>
              <Badge className="mb-4 bg-purple-100 text-purple-600 hover:bg-purple-200 border-purple-200">
                Leading Digital Solutions in Africa
              </Badge>
            
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Transform Your Business with
                <span className="text-purple-600 block">Digital Innovation</span>
              </h1>
            
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                QybrrLabs Africa empowers businesses and entrepreneurs with cutting-edge digital solutions. 
                From web development to AI chatbots, we're your technology partner for growth.
              </p>
            
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-purple-600 hover:text-purple-600 transition-all duration-200">
                  View Portfolio
                </Button>
              </div>
            </MemoizedAnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of digital solutions to help your business succeed in the digital age.
            </p>
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
                  <Card className="border-0 shadow-sm h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 flex-grow">
                      <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                        <ServiceIcon className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <div className="px-6 pb-6">
                      <a href={`/services/${serviceRoute}`}>
                        <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
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
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore how we've helped businesses across Africa transform and grow digitally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <AnimatedSection animation="fade-up" delay={index * 100} className="group" key={index}>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <a href="#">
                    <div className="relative">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <Badge className="bg-purple-600 mb-2">{item.category}</Badge>
                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-200">{item.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="/portfolio">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white gap-2">
                View Portfolio
                <ArrowRight size={16} />
              </Button>
            </a>
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
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <MemoizedAnimatedSection animation="fade" duration="fast">
              <Badge className="mb-4 bg-purple-100 text-purple-600 hover:bg-purple-200 border-purple-200">
                Let's Connect
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ready to start your digital transformation journey? Contact us today.
              </p>
            </MemoizedAnimatedSection>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <MemoizedAnimatedSection animation="fade-right" className="bg-white p-8 rounded-lg shadow-md lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <MapPin className="text-purple-600" />
                  </div>
                  <span className="text-gray-700">Nairobi, Kenya</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Mail className="text-purple-600" />
                  </div>
                  <a href="mailto:info@qybrrlabs.com" className="text-gray-700 hover:text-purple-600">
                    info@qybrrlabs.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Phone className="text-purple-600" />
                  </div>
                  <a href="tel:+254750763280" className="text-gray-700 hover:text-purple-600">
                    +254 750763280
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-500 hover:text-purple-600">
                    <Twitter />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-purple-600">
                    <Linkedin />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-purple-600">
                    <Facebook />
                  </a>
                </div>
              </div>
            </MemoizedAnimatedSection>
            
            <MemoizedAnimatedSection animation="fade-left" className="bg-white p-8 rounded-lg shadow-md lg:col-span-3">
              <form>
                <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <span className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center mr-3">
                        <Mail className="h-4 w-4 text-purple-600" />
                      </span>
                      Send us a message
                    </h3>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                          <input 
                            id="firstName"
                            type="text" 
                            placeholder="Enter your first name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                          <input 
                            id="lastName"
                            type="text" 
                            placeholder="Enter your last name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input 
                          id="email"
                          type="email" 
                          placeholder="Enter your email address"
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input 
                          id="subject"
                          type="text" 
                          placeholder="What is this regarding?"
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea 
                          id="message"
                          placeholder="How can we help you?"
                          rows={5}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        ></textarea>
                      </div>
                      
                      <div className="pt-2">
                        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg shadow-md hover:shadow-lg transition-all">
                          Send Message
                        </Button>
                      </div>
                    </div>
                </div>
              </form>
            </MemoizedAnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <img 
                src="/lovable-uploads/fc11d20a-c281-434f-abf1-77a2b6451837.png" 
                alt="QybrrLabs" 
                className="h-56 w-auto mb-4"
              />
              <p className="text-gray-600 mb-6 max-w-md">
                Empowering African businesses with innovative digital solutions and cutting-edge technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/blog" className="text-gray-600 hover:text-primary transition-colors">Blog</a></li>
                <li><a href="/portfolio" className="text-gray-600 hover:text-primary transition-colors">Portfolio</a></li>
                <li><a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a></li>
                <li><a href="#team" className="text-gray-600 hover:text-primary transition-colors">Our Team</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="/services/web-development" className="text-gray-600 hover:text-primary transition-colors">Web Development</a></li>
                <li><a href="/services/mobile-app-development" className="text-gray-600 hover:text-primary transition-colors">Mobile Apps</a></li>
                <li><a href="/services/software-development" className="text-gray-600 hover:text-primary transition-colors">Software Development</a></li>
                <li><a href="#services" className="text-gray-600 hover:text-primary transition-colors">All Services</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
              <div className="space-y-2">
                <p className="text-gray-600">info@qybrrlabs.africa</p>
                <p className="text-gray-600">+254 750763280</p>
                <p className="text-gray-600">Nairobi, Kenya</p>
                <p className="text-gray-600">Mombasa, Kenya</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; 2024 QybrrLabs Africa. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

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
};

export default Index;

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
