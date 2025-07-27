import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import Layout from '@/components/layout/Layout';
import { 
  ArrowLeft,
  CheckCircle,
  Phone,
  Mail
} from 'lucide-react';

// This would typically come from a database or API
const servicesData = {
  "web-development": {
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies",
    longDescription: "Our web development services leverage modern frameworks and technologies to create fast, responsive, and user-friendly websites and web applications. We focus on clean code, optimal performance, and search engine optimization to ensure your web presence stands out.",
    features: [
      "Custom responsive designs that work on all devices",
      "Modern frameworks like React, Vue, or Angular",
      "Server-side rendering for optimal performance",
      "SEO-friendly structure and optimization",
      "Integration with content management systems",
      "E-commerce functionality and payment processing",
      "API development and third-party integrations",
      "Thorough testing and quality assurance"
    ],
    process: [
      "Discovery and requirements gathering",
      "Wireframing and design mockups",
      "Frontend and backend development",
      "Quality assurance and testing",
      "Deployment and launch",
      "Maintenance and support"
    ],
    technologies: ["React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS", "MongoDB", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
    priceRange: 'Ksh 50,000 – 300,000',
    cta: "Get a custom web development quote"
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android",
    longDescription: "We develop high-performance mobile applications that deliver exceptional user experiences across iOS and Android platforms. Whether you need a native app for maximum performance or a cross-platform solution for cost efficiency, our team has the expertise to bring your mobile app idea to life.",
    features: [
      "Native iOS and Android development",
      "Cross-platform development using React Native or Flutter",
      "Intuitive user interfaces and smooth user experiences",
      "Offline functionality and data synchronization",
      "Integration with device features (camera, GPS, etc.)",
      "Push notifications and real-time updates",
      "App store submission and optimization",
      "Regular updates and maintenance"
    ],
    process: [
      "App concept and strategy development",
      "UI/UX design and prototyping",
      "Frontend and backend development",
      "Testing on multiple devices",
      "App store submission",
      "Post-launch support and updates"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS Amplify"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    priceRange: 'Ksh 150,000 – 1,000,000',
    cta: "Discuss your mobile app project"
  },
  "software-development": {
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs",
    longDescription: "We create tailored software solutions designed to address your unique business challenges. From desktop applications to complex enterprise systems, our software development services focus on building scalable, maintainable, and secure applications that drive efficiency and growth.",
    features: [
      "Custom business software development",
      "Enterprise resource planning (ERP) systems",
      "Customer relationship management (CRM) tools",
      "Workflow and process automation",
      "Data analytics and reporting dashboards",
      "Legacy system modernization",
      "Cloud-based software solutions",
      "Continuous integration and deployment"
    ],
    process: [
      "Business analysis and requirements gathering",
      "System architecture design",
      "Development and integration",
      "Quality assurance and testing",
      "Deployment and user training",
      "Maintenance and support"
    ],
    technologies: ["Python", "Java", "C#", ".NET", "AWS", "Azure", "Docker", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    priceRange: 'Ksh 200,000 – 1,500,000',
    cta: "Explore custom software solutions"
  },
  "web-hosting": {
    title: "Web Hosting",
    description: "Reliable and secure web hosting solutions with 99.9% uptime",
    longDescription: "Our managed web-hosting plans keep your site secure, fast and always online. From simple shared hosting to auto-scaling containers, we handle infrastructure so you're free to focus on your business.",
    features: [
      "SSD-backed servers and global CDN",
      "Automatic SSL certificates",
      "Daily off-site backups",
      "Staging environments",
      "24/7 monitoring & support"
    ],
    process: [
      "Select an appropriate plan",
      "Provision & migrate website",
      "Performance tuning & security hardening",
      "Go-live & DNS switch",
      "Ongoing monitoring & support"
    ],
    technologies: ["Nginx", "Docker", "Cloudflare", "AWS", "Netlify"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    priceRange: 'Ksh 10,000 – 100,000 / yr',
    cta: "Launch on our hosting platform"
  },
  "bulk-sms": {
    title: "Bulk SMS",
    description: "Reach your customers instantly with our bulk SMS service",
    longDescription: "Send time-critical notifications, promotional messages and OTPs via our high-throughput SMS gateway integrated with major carriers.",
    features: [
      "High deliverability & fast throughput",
      "Sender ID registration assistance",
      "Detailed delivery reports",
      "REST & SMPP APIs",
      "Contact list & campaign management UI"
    ],
    process: [
      "Account setup & sender ID approvals",
      "Integrate API or upload contacts",
      "Compose message & schedule",
      "Real-time delivery analytics"
    ],
    technologies: ["Twilio", "Africa's Talking", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    priceRange: 'From Ksh 0.7 per SMS',
    cta: "Start your SMS campaign"
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to grow your business",
    longDescription: "We craft data-driven marketing campaigns spanning SEO, PPC, social media and email automation to attract and convert your ideal customers.",
    features: [
      "Keyword & competitor research",
      "SEO & content strategy",
      "Google / Meta ads management",
      "Marketing automation & email drip", 
      "Analytics & KPI dashboards"
    ],
    process: [
      "Audit & goal setting",
      "Campaign planning",
      "Creative production",
      "Launch & optimisation",
      "Reporting & insights"
    ],
    technologies: ["Google Analytics", "Meta Ads", "HubSpot", "Semrush"],
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938",
    priceRange: 'Ksh 30,000 – 300,000 / mo',
    cta: "Boost my online presence"
  },
  "graphic-design": {
    title: "Graphic Design",
    description: "Professional graphic design services for all your branding needs",
    longDescription: "From logos and brand guidelines to marketing collateral and UI mockups, our designers translate ideas into stunning visuals that resonate.",
    features: [
      "Brand identity & logo design",
      "Print & digital collateral",
      "UI/UX mock-ups",
      "Illustrations & infographics",
      "Iterative design process"
    ],
    process: [
      "Creative brief & research",
      "Concept sketches",
      "High-fidelity designs",
      "Feedback & revisions",
      "Final assets delivery"
    ],
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Canva"],
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    priceRange: 'Ksh 5,000 – 50,000',
    cta: "Discuss your design project"
  },
  "ai-chatbot-assistants": {
    title: "AI Chatbot Assistants",
    description: "Intelligent chatbots to enhance customer service and engagement",
    longDescription: "Deploy conversational AI agents that provide instant support, qualify leads and integrate with your systems, trained on your knowledge base.",
    features: [
      "Natural-language understanding",
      "Omni-channel deployment (web, WhatsApp, Messenger)",
      "Backend & CRM integrations",
      "Analytics & continuous training",
      "Handover to human agents"
    ],
    process: [
      "Use-case discovery",
      "Conversation design",
      "Bot development & training",
      "Pilot launch",
      "Monitoring & improvement"
    ],
    technologies: ["Dialogflow", "GPT-4", "LangChain", "Supabase"],
    image: "https://images.unsplash.com/photo-1581094653935-41031dad7bdd",
    priceRange: 'Ksh 80,000 – 500,000',
    cta: "Build your AI assistant"
  },
  // Additional services added
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = serviceId ? servicesData[serviceId as keyof typeof servicesData] : null;
  
  useEffect(() => {
    // If service doesn't exist, redirect to 404
    if (!service && serviceId) {
      navigate('/404');
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [serviceId, service, navigate]);
  
  if (!service) {
    return null;
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <Button 
              variant="ghost" 
              className="mb-6 flex items-center gap-2"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </Button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                  {service.longDescription}
                </p>
                {service.priceRange && (
                  <p className="text-lg font-semibold text-purple-600 mb-8">{service.priceRange}</p>
                )}
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  {service.cta}
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-xl shadow-lg w-full h-auto object-cover" 
                  style={{ maxHeight: '400px' }}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature, index) => (
                <AnimatedSection 
                  key={index} 
                  animation="fade-up" 
                  delay={index * 100} 
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <p className="text-lg text-gray-700">{feature}</p>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.process.map((step, index) => (
                <AnimatedSection 
                  key={index} 
                  animation="fade-up" 
                  delay={index * 100}
                >
                  <Card className="h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 font-bold mb-4">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{step}</h3>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech, index) => (
                <AnimatedSection 
                  key={index} 
                  animation="fade-up" 
                  delay={index * 50}
                >
                  <Badge variant="secondary" className="text-md px-4 py-2 bg-gray-100 hover:bg-gray-200">
                    {tech}
                  </Badge>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-xl opacity-90 mb-8">
              Contact our team today for a free consultation on your {service.title.toLowerCase()} project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="outline" className="bg-white text-purple-900 hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </Button>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Footer placeholder - you would include your actual footer component here */}
    </Layout>
  );
};

export default ServiceDetail; 