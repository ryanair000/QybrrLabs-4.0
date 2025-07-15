import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import Layout from '@/components/layout/Layout';
import { 
  ArrowRight,
  LineChart,
  BarChart,
  PieChart,
  TrendingUp
} from 'lucide-react';

// Sample case studies data - this would typically come from a CMS or API
const caseStudies = [
  {
    id: 'nairobi-retail',
    title: "E-commerce Platform for Nairobi Retail Group",
    summary: "A complete e-commerce solution that helped a major Kenyan retail chain increase online sales by 300%.",
    challenge: "Nairobi Retail Group, one of Kenya's largest retail chains, needed to establish an online presence to compete with emerging e-commerce players. They required a solution that could handle their extensive inventory of over 10,000 products while providing a seamless shopping experience for customers across various devices.",
    solution: "We developed a custom e-commerce platform built on React and Node.js with a headless CMS for content management. The solution included integrated payment gateways supporting M-Pesa and major credit cards, an inventory management system synced with physical stores, and a mobile-first responsive design optimized for the predominantly mobile Kenyan market.",
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
    stats: [
      { label: "Increase in Online Sales", value: "300%", icon: TrendingUp },
      { label: "Reduction in Cart Abandonment", value: "68%", icon: LineChart },
      { label: "Mobile Sales Percentage", value: "45%", icon: PieChart },
      { label: "Monthly Active Users", value: "50K+", icon: BarChart }
    ]
  },
  {
    id: 'lagos-bank',
    title: "Mobile Banking App for Lagos Financial Services",
    summary: "A secure, feature-rich mobile banking application that increased customer engagement by 200%.",
    challenge: "Lagos Financial Services wanted to modernize their banking experience with a mobile app that would allow customers to perform all banking operations without visiting branches. Security was a top concern, as was creating an intuitive interface for users with varying levels of technical literacy.",
    solution: "We built a comprehensive mobile banking solution using React Native for cross-platform compatibility. The app implemented biometric authentication, end-to-end encryption, and secure API connections to the bank's core systems. Features included account management, fund transfers, bill payments, loan applications, and a virtual assistant for customer support.",
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
    stats: [
      { label: "Increase in Digital Engagement", value: "200%", icon: TrendingUp },
      { label: "Reduction in Branch Visits", value: "75%", icon: LineChart },
      { label: "Customer Satisfaction Rating", value: "4.5/5", icon: PieChart },
      { label: "Reduction in Support Calls", value: "50%", icon: BarChart }
    ]
  },
  {
    id: 'addis-restaurant',
    title: "Restaurant Management System for Addis Restaurant Chain",
    summary: "An integrated POS and management system that streamlined operations across 15 locations.",
    challenge: "Addis Restaurant Chain was struggling to manage orders, inventory, and staff across their 15 locations throughout Ethiopia. They needed a centralized system that could handle point-of-sale operations, inventory tracking, staff scheduling, and provide valuable business insights.",
    solution: "We developed a comprehensive restaurant management system with both web and tablet interfaces. The system included a modern POS for front-of-house staff, real-time inventory tracking that automatically updated with sales, staff management tools, and a robust reporting dashboard for owners and managers.",
    results: [
      "30% reduction in food waste through better inventory management",
      "20% increase in overall revenue through data-driven decision making",
      "85% faster order processing time",
      "Centralized management of all 15 locations from headquarters"
    ],
    testimonial: "This system has revolutionized how we manage our restaurants. We now have complete visibility across all locations, can make data-driven decisions, and our staff can focus more on customer service rather than administrative tasks.",
    testimonialAuthor: "Abebe Bekele, Operations Director at Addis Restaurant Chain",
    coverImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    category: "Hospitality",
    technologies: ["React", "Express", "PostgreSQL", "Redis", "Electron"],
    stats: [
      { label: "Reduction in Food Waste", value: "30%", icon: LineChart },
      { label: "Increase in Revenue", value: "20%", icon: TrendingUp },
      { label: "Faster Order Processing", value: "85%", icon: BarChart },
      { label: "Locations Managed", value: "15", icon: PieChart }
    ]
  },
  {
    id: 'kampala-health',
    title: "Telemedicine Platform for Kampala Health Network",
    summary: "A secure telemedicine solution connecting patients with healthcare providers across Uganda.",
    challenge: "Kampala Health Network needed a telemedicine platform to extend healthcare access to rural areas of Uganda. The solution needed to work on low-bandwidth connections, maintain strict patient confidentiality, and integrate with existing electronic health record systems.",
    solution: "We developed a progressive web app that optimized for low-bandwidth environments, with video consultation capabilities that could adjust quality based on connection speed. The system included appointment scheduling, secure messaging, prescription management, and patient record access, all compliant with healthcare privacy standards.",
    results: [
      "Access to healthcare services extended to 150+ rural communities",
      "60% reduction in unnecessary hospital visits",
      "95% patient satisfaction rate with remote consultations",
      "Average travel time for medical consultation reduced from 3 hours to 0"
    ],
    testimonial: "This telemedicine platform has transformed healthcare delivery in Uganda. We're now reaching patients who previously had to travel for hours to see a doctor, and the quality of care remains excellent.",
    testimonialAuthor: "Dr. Florence Namutamba, Director of Kampala Health Network",
    coverImage: "https://images.unsplash.com/photo-1584982751601-97dcc096659c",
    category: "Healthcare",
    technologies: ["React", "WebRTC", "Node.js", "MongoDB", "FHIR Standard"],
    stats: [
      { label: "Rural Communities Reached", value: "150+", icon: PieChart },
      { label: "Reduction in Hospital Visits", value: "60%", icon: LineChart },
      { label: "Patient Satisfaction", value: "95%", icon: BarChart },
      { label: "Travel Time Saved", value: "3 hrs", icon: TrendingUp }
    ]
  }
];

// Extract all unique categories for filtering
const allCategories = [...new Set(caseStudies.map(study => study.category))];

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter case studies based on selected category
  const filteredCaseStudies = selectedCategory
    ? caseStudies.filter(study => study.category === selectedCategory)
    : caseStudies;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Case Studies
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Explore our portfolio of successful projects across Africa, showcasing how we've helped businesses transform digitally and achieve measurable results.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant={selectedCategory === null ? "default" : "outline"}
              className={selectedCategory === null ? "bg-purple-600" : ""}
              onClick={() => setSelectedCategory(null)}
            >
              All Categories
            </Button>
            
            {allCategories.map((category, index) => (
              <Button 
                key={index}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "bg-purple-600" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies List */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {filteredCaseStudies.map((study, index) => (
              <AnimatedSection 
                key={study.id} 
                animation="fade-up"
                delay={index * 100}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Badge className="mb-4 bg-purple-100 text-purple-700 border-none">
                      {study.category}
                    </Badge>
                    <h2 className="text-3xl font-bold mb-4">{study.title}</h2>
                    <p className="text-xl text-gray-600 mb-6">{study.summary}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {study.stats.slice(0, 4).map((stat, idx) => {
                        const StatIcon = stat.icon;
                        return (
                          <Card key={idx} className="p-4 border border-gray-200 bg-white">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-full bg-purple-100">
                                <StatIcon className="w-5 h-5 text-purple-600" />
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">{stat.label}</p>
                                <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                              </div>
                            </div>
                          </Card>
                        );
                      })}
                    </div>
                    <Link to={`/case-studies/${study.id}`}>
                      <Button className="gap-2 bg-purple-600 hover:bg-purple-700">
                        View Case Study
                        <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img 
                        src={study.coverImage} 
                        alt={study.title} 
                        className="w-full h-auto object-cover transition-transform hover:scale-105 duration-300" 
                        style={{ aspectRatio: '16/9' }}
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to become our next success story?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help your business achieve measurable results through innovative digital solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                View Our Services
              </Button>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Contact Us Today
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Footer placeholder - you would include your actual footer component here */}
    </Layout>
  );
};

export default CaseStudies; 