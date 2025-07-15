import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import Layout from '@/components/layout/Layout';
import { 
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Quote,
  LineChart,
  BarChart,
  PieChart,
  TrendingUp,
  ChevronRight
} from 'lucide-react';

// Sample case studies data - this would typically come from a CMS or API
// Using the same data structure from CaseStudies.tsx for consistency
const caseStudies = [
  {
    id: 'nairobi-retail',
    title: "E-commerce Platform for Nairobi Retail Group",
    summary: "A complete e-commerce solution that helped a major Kenyan retail chain increase online sales by 300%.",
    challenge: "Nairobi Retail Group, one of Kenya's largest retail chains, needed to establish an online presence to compete with emerging e-commerce players. They required a solution that could handle their extensive inventory of over 10,000 products while providing a seamless shopping experience for customers across various devices.",
    solution: "We developed a custom e-commerce platform built on React and Node.js with a headless CMS for content management. The solution included integrated payment gateways supporting M-Pesa and major credit cards, an inventory management system synced with physical stores, and a mobile-first responsive design optimized for the predominantly mobile Kenyan market.",
    approach: [
      "Conducted extensive user research to understand the shopping habits of Kenyan consumers",
      "Created a custom product categorization system that aligned with in-store layouts",
      "Implemented M-Pesa integration using the Safaricom API for seamless mobile payments",
      "Built a responsive design that prioritized mobile users but worked well across all devices",
      "Integrated with existing inventory systems to maintain consistent stock levels",
      "Implemented advanced analytics to track customer behavior and optimize the shopping experience"
    ],
    results: [
      "300% increase in online sales within the first six months",
      "68% reduction in cart abandonment rate",
      "45% of sales now come from mobile devices",
      "Integration with existing inventory systems reduced management overhead"
    ],
    testimonial: "The e-commerce website QybrrLabs built for us has transformed our business. We're now reaching customers we never could before, and the integration with our existing systems has made management seamless.",
    testimonialAuthor: "Michael Ochieng, Digital Director at Nairobi Retail Group",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    category: "E-commerce",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "M-Pesa API"],
    duration: "4 months",
    team: "4 developers, 1 designer, 1 project manager",
    stats: [
      { label: "Increase in Online Sales", value: "300%", icon: TrendingUp },
      { label: "Reduction in Cart Abandonment", value: "68%", icon: LineChart },
      { label: "Mobile Sales Percentage", value: "45%", icon: PieChart },
      { label: "Monthly Active Users", value: "50K+", icon: BarChart }
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
        caption: "Homepage design showing product categories and featured items"
      },
      {
        src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
        caption: "Mobile view of the checkout process with M-Pesa integration"
      },
      {
        src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
        caption: "Admin dashboard showing sales analytics and inventory management"
      }
    ]
  },
  {
    id: 'lagos-bank',
    title: "Mobile Banking App for Lagos Financial Services",
    summary: "A secure, feature-rich mobile banking application that increased customer engagement by 200%.",
    challenge: "Lagos Financial Services wanted to modernize their banking experience with a mobile app that would allow customers to perform all banking operations without visiting branches. Security was a top concern, as was creating an intuitive interface for users with varying levels of technical literacy.",
    solution: "We built a comprehensive mobile banking solution using React Native for cross-platform compatibility. The app implemented biometric authentication, end-to-end encryption, and secure API connections to the bank's core systems. Features included account management, fund transfers, bill payments, loan applications, and a virtual assistant for customer support.",
    approach: [
      "Conducted security assessment to ensure compliance with financial regulations",
      "Designed intuitive user flows that considered varying levels of technical literacy",
      "Implemented biometric authentication for enhanced security",
      "Built secure connections to the bank's core banking systems",
      "Created a virtual assistant to guide users through complex processes",
      "Conducted extensive user testing with diverse user groups"
    ],
    results: [
      "200% increase in digital banking engagement",
      "75% reduction in branch visits for routine transactions",
      "90% of customers rated the app 4+ stars",
      "50% reduction in customer service calls through self-service features"
    ],
    testimonial: "Our customers love the convenience and security of the mobile app. The biometric authentication and intuitive design have made banking accessible to all our customers, regardless of their technical ability.",
    testimonialAuthor: "Sarah Adeyemi, CTO of Lagos Financial Services",
    coverImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    category: "Finance",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Biometric Authentication"],
    duration: "6 months",
    team: "3 mobile developers, 2 backend developers, 1 designer, 1 project manager, 1 security specialist",
    stats: [
      { label: "Increase in Digital Engagement", value: "200%", icon: TrendingUp },
      { label: "Reduction in Branch Visits", value: "75%", icon: LineChart },
      { label: "Customer Satisfaction Rating", value: "4.5/5", icon: PieChart },
      { label: "Reduction in Support Calls", value: "50%", icon: BarChart }
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
        caption: "Login screen with biometric authentication options"
      },
      {
        src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
        caption: "Dashboard showing account summaries and quick actions"
      },
      {
        src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
        caption: "Fund transfer process with contact selection and confirmation"
      }
    ]
  }
];

const CaseStudyDetail = () => {
  const { caseStudyId } = useParams();
  const navigate = useNavigate();
  const caseStudy = caseStudyId ? caseStudies.find(s => s.id === caseStudyId) : null;
  
  useEffect(() => {
    // If case study doesn't exist, redirect to 404
    if (!caseStudy && caseStudyId) {
      navigate('/404');
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [caseStudyId, caseStudy, navigate]);
  
  if (!caseStudy) {
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
              onClick={() => navigate('/case-studies')}
            >
              <ArrowLeft size={16} />
              <span>Back to Case Studies</span>
            </Button>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-purple-100 text-purple-700 border-none">
                {caseStudy.category}
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {caseStudy.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              {caseStudy.summary}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {caseStudy.stats.map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <AnimatedSection 
                    key={index} 
                    animation="fade-up" 
                    delay={index * 100}
                  >
                    <Card className="border-none shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-full bg-purple-100">
                            <StatIcon className="w-6 h-6 text-purple-600" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">{stat.label}</p>
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Featured Image */}
      <div className="w-full max-w-6xl mx-auto -mt-12 px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <img 
            src={caseStudy.coverImage} 
            alt={caseStudy.title} 
            className="w-full h-auto object-cover rounded-xl shadow-lg" 
            style={{ maxHeight: '500px' }}
          />
        </AnimatedSection>
      </div>
      
      {/* Project Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Challenge Section */}
              <AnimatedSection animation="fade-up" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <div className="p-2 rounded-full bg-purple-100 mr-4">
                    <LineChart className="w-6 h-6 text-purple-600" />
                  </div>
                  The Challenge
                </h2>
                <p className="text-lg text-gray-700">{caseStudy.challenge}</p>
              </AnimatedSection>
              
              {/* Solution Section */}
              <AnimatedSection animation="fade-up" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <div className="p-2 rounded-full bg-purple-100 mr-4">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  Our Solution
                </h2>
                <p className="text-lg text-gray-700">{caseStudy.solution}</p>
              </AnimatedSection>
              
              {/* Approach Section */}
              <AnimatedSection animation="fade-up" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <div className="p-2 rounded-full bg-purple-100 mr-4">
                    <ArrowRight className="w-6 h-6 text-purple-600" />
                  </div>
                  Our Approach
                </h2>
                <div className="space-y-4">
                  {caseStudy.approach.map((step, index) => (
                    <AnimatedSection 
                      key={index} 
                      animation="fade-up" 
                      delay={index * 100} 
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <ChevronRight className="h-5 w-5 text-purple-600" />
                      </div>
                      <p className="text-lg text-gray-700">{step}</p>
                    </AnimatedSection>
                  ))}
                </div>
              </AnimatedSection>
              
              {/* Results Section */}
              <AnimatedSection animation="fade-up" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <div className="p-2 rounded-full bg-purple-100 mr-4">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  The Results
                </h2>
                <div className="space-y-4">
                  {caseStudy.results.map((result, index) => (
                    <AnimatedSection 
                      key={index} 
                      animation="fade-up" 
                      delay={index * 100} 
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <p className="text-lg text-gray-700">{result}</p>
                    </AnimatedSection>
                  ))}
                </div>
              </AnimatedSection>
              
              {/* Testimonial */}
              <AnimatedSection animation="fade-up" className="mb-16">
                <Card className="bg-purple-50 border-none p-8">
                  <div className="flex flex-col items-center text-center">
                    <Quote className="w-10 h-10 text-purple-300 mb-4" />
                    <p className="text-xl text-gray-800 italic mb-6">{caseStudy.testimonial}</p>
                    <p className="font-semibold text-gray-900">{caseStudy.testimonialAuthor}</p>
                  </div>
                </Card>
              </AnimatedSection>
              
              {/* Project Gallery */}
              <AnimatedSection animation="fade-up">
                <h2 className="text-3xl font-bold mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {caseStudy.images?.map((image, index) => (
                    <AnimatedSection 
                      key={index} 
                      animation="fade-up" 
                      delay={index * 100}
                    >
                      <Card className="overflow-hidden">
                        <img 
                          src={image.src} 
                          alt={image.caption} 
                          className="w-full h-64 object-cover"
                        />
                        <CardContent className="p-4">
                          <p className="text-gray-600 text-sm">{image.caption}</p>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  ))}
                </div>
              </AnimatedSection>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <AnimatedSection animation="fade-up">
                  <Card className="mb-8">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Project Details</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Category</p>
                          <Badge className="bg-purple-100 text-purple-700 border-none">
                            {caseStudy.category}
                          </Badge>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Duration</p>
                          <p className="font-medium">{caseStudy.duration}</p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Team</p>
                          <p className="font-medium">{caseStudy.team}</p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Technologies</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {caseStudy.technologies.map((tech, index) => (
                              <Badge key={index} variant="outline">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Interested in a Similar Project?</h3>
                      <p className="text-gray-600 mb-6">We'd love to discuss how we can help your business achieve similar results with a tailored digital solution.</p>
                      <div className="space-y-3">
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">
                          Contact Us
                        </Button>
                        <Button variant="outline" className="w-full">
                          View Our Services
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* More Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold text-center mb-12">More Case Studies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies
                .filter(study => study.id !== caseStudy.id)
                .slice(0, 3)
                .map((study, index) => (
                  <AnimatedSection 
                    key={study.id} 
                    animation="fade-up" 
                    delay={index * 100}
                    className="group"
                  >
                    <Link to={`/case-studies/${study.id}`} className="block h-full">
                      <Card className="overflow-hidden h-full border-none shadow-md hover:shadow-lg transition-shadow">
                        <div className="relative h-48">
                          <img 
                            src={study.coverImage} 
                            alt={study.title} 
                            className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-purple-100 text-purple-700 border-none">
                              {study.category}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="font-bold text-xl mb-2 group-hover:text-purple-600 transition-colors">
                            {study.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {study.summary}
                          </p>
                          <div className="flex items-center text-purple-600 font-medium">
                            <span>View Case Study</span>
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </AnimatedSection>
                ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/case-studies">
                <Button variant="outline" className="gap-2">
                  View All Case Studies
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Footer placeholder - you would include your actual footer component here */}
    </Layout>
  );
};

export default CaseStudyDetail; 