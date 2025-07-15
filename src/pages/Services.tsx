import Layout from '../components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Code, Smartphone, Monitor, Server, MessageSquare, TrendingUp, Palette, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies',
    route: 'web-development',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    route: 'mobile-app-development',
  },
  {
    icon: Monitor,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs',
    route: 'software-development',
  },
  {
    icon: Server,
    title: 'Web Hosting',
    description: 'Reliable and secure web hosting solutions with 99.9% uptime',
    route: 'web-hosting',
  },
  {
    icon: MessageSquare,
    title: 'Bulk SMS',
    description: 'Reach your customers instantly with our bulk SMS service',
    route: 'bulk-sms',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your business',
    route: 'digital-marketing',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Professional graphic design services for all your branding needs',
    route: 'graphic-design',
  },
  {
    icon: Bot,
    title: 'AI Chatbot Assistants',
    description: 'Intelligent chatbots to enhance customer service and engagement',
    route: 'ai-chatbot-assistants',
  },
];

const Services = () => (
  <Layout>
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="border-0 shadow-sm h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h2>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to={`/services/${service.route}`} className="w-full">
                    <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services; 