import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  
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

  // Check if a path is active
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md' 
        : 'bg-white/90 backdrop-blur-lg border-b border-gray-100'
    }`}>
      {/* Scroll Progress Line */}
      <div 
        className="h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 origin-left transform-gpu transition-transform ease-out duration-300" 
        style={{ transform: `scaleX(${scrollProgress / 100})`, opacity: scrollProgress > 5 ? 0.8 : 0 }}
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/lovable-uploads/fc11d20a-c281-434f-abf1-77a2b6451837.png" 
                alt="QybrrLabs" 
                className="h-40 w-auto"
                fetchpriority="high"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              <Link 
                to="/" 
                className={`px-5 py-2 rounded-lg ${isActive('/') 
                  ? 'text-purple-600 font-medium' 
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'} transition-all duration-200`}
              >
                Home
              </Link>
              <Link 
                to="/#services" 
                className={`px-5 py-2 rounded-lg ${isActive('/#services') 
                  ? 'text-purple-600 font-medium' 
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'} transition-all duration-200`}
              >
                Services
              </Link>
              <Link 
                to="/blog" 
                className={`px-5 py-2 rounded-lg ${isActive('/blog') 
                  ? 'text-purple-600 font-medium' 
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'} transition-all duration-200`}
              >
                Blog
              </Link>
              <Link 
                to="/portfolio" 
                className={`px-5 py-2 rounded-lg ${isActive('/portfolio') 
                  ? 'text-purple-600 font-medium' 
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'} transition-all duration-200`}
              >
                Portfolio
              </Link>
              <Link 
                to="/#contact" 
                className={`px-5 py-2 rounded-lg ${isActive('/#contact') 
                  ? 'text-purple-600 font-medium' 
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'} transition-all duration-200`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-600 hover:text-purple-600 hover:bg-purple-50 px-6">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-purple-600"
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
            <Link 
              to="/" 
              className={`block px-4 py-3 rounded-lg ${isActive('/') 
                ? 'text-purple-600 bg-purple-50 font-medium' 
                : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'} transition-all duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/#services" 
              className={`block px-4 py-3 rounded-lg ${isActive('/#services') 
                ? 'text-purple-600 bg-purple-50 font-medium' 
                : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'} transition-all duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/blog" 
              className={`block px-4 py-3 rounded-lg ${isActive('/blog') 
                ? 'text-purple-600 bg-purple-50 font-medium' 
                : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'} transition-all duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/portfolio" 
              className={`block px-4 py-3 rounded-lg ${isActive('/portfolio') 
                ? 'text-purple-600 bg-purple-50 font-medium' 
                : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'} transition-all duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              to="/#contact" 
              className={`block px-4 py-3 rounded-lg ${isActive('/#contact') 
                ? 'text-purple-600 bg-purple-50 font-medium' 
                : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'} transition-all duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
              <Link to="/login">
                <Button variant="ghost" className="text-gray-600 hover:text-purple-600 hover:bg-purple-50 justify-start w-full">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white justify-start shadow-lg w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header; 