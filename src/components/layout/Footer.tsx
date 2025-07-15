import { Link } from 'react-router-dom';
import { 
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <Link to="/">
              <img 
                src="/lovable-uploads/fc11d20a-c281-434f-abf1-77a2b6451837.png" 
                alt="QybrrLabs" 
                className="h-56 w-auto mb-4"
              />
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Empowering African businesses with innovative digital solutions and cutting-edge technology.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-600 hover:text-purple-600 transition-colors">Blog</Link></li>
              <li><Link to="/portfolio" className="text-gray-600 hover:text-purple-600 transition-colors">Portfolio</Link></li>
              <li><Link to="/#services" className="text-gray-600 hover:text-purple-600 transition-colors">Services</Link></li>
              <li><Link to="/#team" className="text-gray-600 hover:text-purple-600 transition-colors">Our Team</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/web-development" className="text-gray-600 hover:text-purple-600 transition-colors">Web Development</Link></li>
              <li><Link to="/services/mobile-app-development" className="text-gray-600 hover:text-purple-600 transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services/software-development" className="text-gray-600 hover:text-purple-600 transition-colors">Software Development</Link></li>
              <li><Link to="/#services" className="text-gray-600 hover:text-purple-600 transition-colors">All Services</Link></li>
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
            <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
              <Youtube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} QybrrLabs Africa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 