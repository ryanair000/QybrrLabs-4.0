import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  MessageCircle
} from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img 
                  src="/lovable-uploads/fc11d20a-c281-434f-abf1-77a2b6451837.png" 
                  alt="QybrrLabs" 
                  className="h-10 w-auto"
                />
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1">
                <a href="#home" className="px-5 py-2 rounded-lg text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 font-medium">Home</a>
                <a href="#services" className="px-5 py-2 rounded-lg text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-200">Services</a>
                <a href="#portfolio" className="px-5 py-2 rounded-lg text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-200">Portfolio</a>
                <a href="#testimonials" className="px-5 py-2 rounded-lg text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-200">Testimonials</a>
                <a href="#about" className="px-5 py-2 rounded-lg text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-200">About</a>
                <a href="#contact" className="px-5 py-2 rounded-lg text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-200">Contact</a>
              </div>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600 hover:text-primary hover:bg-primary/5 px-6">
                Login
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-2 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-primary"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-lg border-t border-gray-100 shadow-lg">
            <div className="px-6 py-4 space-y-2">
              <a href="#home" className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium">Home</a>
              <a href="#services" className="block px-4 py-3 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200">Services</a>
              <a href="#portfolio" className="block px-4 py-3 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200">Portfolio</a>
              <a href="#testimonials" className="block px-4 py-3 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200">Testimonials</a>
              <a href="#about" className="block px-4 py-3 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200">About</a>
              <a href="#contact" className="block px-4 py-3 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200">Contact</a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                <Button variant="ghost" className="text-gray-600 hover:text-primary hover:bg-primary/5 justify-start">
                  Login
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-white justify-start shadow-lg">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
              Leading Digital Solutions in Africa
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with
              <span className="text-primary block">Digital Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              QybrrLabs Africa empowers businesses and entrepreneurs with cutting-edge digital solutions. 
              From web development to AI chatbots, we're your technology partner for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-primary hover:text-primary transition-all duration-200">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology services designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing successful projects that drive business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="aspect-video bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <Badge className="w-fit bg-primary/10 text-primary">{item.category}</Badge>
                  <CardTitle className="text-xl text-gray-900">{item.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What our clients say about working with QybrrLabs Africa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-sm bg-white">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
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
            <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                alt="Team collaboration"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends in technology and digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                  alt="Blog post"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit bg-primary/10 text-primary">Technology</Badge>
                <CardTitle className="text-xl text-gray-900">
                  The Future of Web Development in Africa
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Exploring emerging technologies and their impact on African businesses...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c" 
                  alt="Blog post"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit bg-primary/10 text-primary">Mobile</Badge>
                <CardTitle className="text-xl text-gray-900">
                  Mobile-First Design: A Must for African Markets
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Why mobile-first design is crucial for success in African markets...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                  alt="Blog post"
                  className="w-full h-full object-cover rounded-t-lg"
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
                <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start your digital transformation journey? Contact us today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+254 700 000 000</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@qybrrlabs.africa</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea 
                  placeholder="Your message"
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Send Message
                </Button>
              </CardContent>
            </Card>
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
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-600 mb-6 max-w-md">
                Empowering African businesses with innovative digital solutions and cutting-edge technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Web Development</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Digital Marketing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">AI Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
              <div className="space-y-2">
                <p className="text-gray-600">info@qybrrlabs.africa</p>
                <p className="text-gray-600">+254 700 000 000</p>
                <p className="text-gray-600">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
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
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg"
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
              <Button variant="outline" className="w-full justify-start text-left">
                I need a website
              </Button>
              <Button variant="outline" className="w-full justify-start text-left">
                Mobile app development
              </Button>
              <Button variant="outline" className="w-full justify-start text-left">
                General inquiry
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
