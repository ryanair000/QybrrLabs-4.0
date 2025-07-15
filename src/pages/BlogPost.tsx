import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Card } from "@/components/ui/card";
import Layout from '@/components/layout/Layout';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Copy 
} from 'lucide-react';

// Sample blog data - this would typically come from a CMS or API
// Using the same data structure from Blog.tsx for consistency
const blogPosts = [
  {
    id: 1,
    title: "The Future of Mobile App Development in Africa",
    excerpt: "Discover how mobile app development is evolving across African markets and what trends to watch for in the coming years.",
    content: `
      <p>Mobile app development in Africa is experiencing unprecedented growth as smartphone adoption continues to rise across the continent. This surge is creating unique opportunities for developers and businesses alike.</p>
      
      <h2>The Rise of Mobile First</h2>
      <p>Unlike Western markets where internet adoption began with desktop computers, many African users are experiencing the internet primarily through mobile devices. This "mobile-first" reality has led to innovative approaches in app development that prioritize:</p>
      <ul>
        <li>Low data consumption</li>
        <li>Offline functionality</li>
        <li>Simple, intuitive interfaces</li>
        <li>Support for lower-end devices</li>
      </ul>
      
      <h2>Local Solutions to Local Challenges</h2>
      <p>What makes the African mobile app ecosystem particularly exciting is how developers are creating solutions tailored to local needs. From agricultural apps that help farmers access market prices to fintech solutions addressing the needs of the unbanked population, African developers are solving uniquely African challenges.</p>
      
      <p>Mobile money services like M-Pesa in Kenya have demonstrated how mobile technology can leapfrog traditional banking infrastructure, providing financial services to millions who previously had no banking access.</p>
      
      <h2>Key Trends Shaping the Future</h2>
      <p>Several trends are likely to define mobile app development in Africa over the coming years:</p>
      
      <h3>1. Progressive Web Apps (PWAs)</h3>
      <p>Given bandwidth constraints in many areas, Progressive Web Apps offer an attractive alternative to traditional native apps. They require less data to download, work offline, and can be updated without requiring users to download new versions.</p>
      
      <h3>2. Localized Content and Experiences</h3>
      <p>Apps that incorporate local languages, cultural contexts, and address specific regional needs are seeing higher adoption rates. This trend toward localization will only accelerate as the market matures.</p>
      
      <h3>3. AI and Machine Learning</h3>
      <p>As AI technologies become more accessible, African developers are incorporating them to create smarter apps that can work with limited connectivity and data. From language translation to agricultural assistance, AI is enhancing app capabilities in meaningful ways.</p>
      
      <h2>Challenges and Opportunities</h2>
      <p>Despite the promising outlook, challenges remain. Fragmented payment systems, varying regulatory environments, and infrastructure limitations create obstacles for developers looking to scale across multiple African markets.</p>
      
      <p>However, these challenges also present opportunities. Companies that can successfully navigate these complexities stand to reach an enormous market that remains relatively untapped compared to more mature regions.</p>
      
      <h2>The Road Ahead</h2>
      <p>As smartphone prices continue to fall and internet connectivity improves, the African mobile app market will only grow more significant. Developers who understand the unique characteristics of African markets and user needs will be well-positioned to create impactful, successful applications.</p>
      
      <p>The future of mobile app development in Africa isn't just about adapting global trends—it's about creating new paradigms that could eventually influence app development worldwide.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095",
    author: "Michael Ochieng",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    authorBio: "Michael Ochieng is a senior mobile developer with over 8 years of experience building apps for African markets. He has worked with startups and established companies across East Africa.",
    date: "2023-10-15",
    readTime: "6 min",
    categories: ["Technology", "Mobile Development"],
    tags: ["Apps", "Africa", "Tech Trends", "Development"]
  },
  {
    id: 2,
    title: "How AI is Transforming Business Operations in Kenya",
    excerpt: "Explore the impact of artificial intelligence on businesses across Kenya and how companies are leveraging AI for growth.",
    content: `
      <p>Artificial Intelligence (AI) is revolutionizing how businesses operate in Kenya, from small startups to large enterprises. This transformation is happening across various sectors, creating new efficiencies and opportunities.</p>
      
      <h2>AI Adoption in Kenyan Businesses</h2>
      <p>Kenya has emerged as one of Africa's leading technology hubs, with Nairobi often referred to as the "Silicon Savannah." This ecosystem has created fertile ground for AI adoption, with businesses increasingly integrating AI-powered solutions into their operations.</p>
      
      <h2>Key Sectors Embracing AI</h2>
      
      <h3>Agriculture</h3>
      <p>In a country where agriculture remains a crucial economic pillar, AI applications are helping farmers optimize crop yields, detect plant diseases early, and better manage resources. Companies like Twiga Foods are using AI to improve supply chain efficiency, connecting farmers directly with retailers.</p>
      
      <h3>Financial Services</h3>
      <p>Kenya's innovative financial technology sector is leveraging AI for credit scoring, fraud detection, and customer service. Mobile lending platforms analyze thousands of data points to assess creditworthiness for individuals without traditional banking history.</p>
      
      <h3>Healthcare</h3>
      <p>AI-powered diagnostic tools are helping address physician shortages in rural areas. Solutions like Mama OPE use AI to diagnose pneumonia in children with limited access to healthcare facilities.</p>
      
      <h2>Challenges and Opportunities</h2>
      <p>While AI adoption is growing, challenges remain. Data quality issues, limited technical expertise, and infrastructure constraints can hamper implementation. However, these challenges are being addressed through innovative approaches and partnerships.</p>
      
      <p>The future of AI in Kenyan business looks promising, with continued growth expected as more organizations recognize the competitive advantages AI can provide.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1607018151999-51971f9d4f17",
    author: "Grace Wanjiku",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    authorBio: "Grace Wanjiku is an AI consultant and researcher focused on practical applications of artificial intelligence in African business contexts. She holds a Ph.D. in Computer Science from the University of Nairobi.",
    date: "2023-09-28",
    readTime: "8 min",
    categories: ["Technology", "AI"],
    tags: ["Artificial Intelligence", "Kenya", "Business", "Innovation"]
  },
];

// This component would typically fetch blog post data from an API
const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = postId ? blogPosts.find(p => p.id === parseInt(postId)) : null;
  
  useEffect(() => {
    // If post doesn't exist, redirect to 404
    if (!post && postId) {
      navigate('/404');
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [postId, post, navigate]);
  
  if (!post) {
    return null;
  }

  // Function to copy current URL to clipboard for sharing
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    // You would typically show a toast notification here
    alert("Link copied to clipboard!");
  };

  // Calculate reading time based on content length (a simple approach)
  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  return (
    <Layout>
      {/* Article Header */}
      <header className="relative py-16 md:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <Button 
              variant="ghost" 
              className="mb-6 flex items-center gap-2"
              onClick={() => navigate('/blog')}
            >
              <ArrowLeft size={16} />
              <span>Back to Blog</span>
            </Button>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category, idx) => (
                <Badge key={idx} variant="secondary" className="bg-purple-100 text-purple-700">
                  {category}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-4">
              <img 
                src={post.authorAvatar} 
                alt={post.author} 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-medium">{post.author}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime} read</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </header>
      
      {/* Featured Image */}
      <div className="w-full max-w-5xl mx-auto -mt-12 px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-auto object-cover rounded-xl shadow-lg" 
            style={{ maxHeight: '500px' }}
          />
        </AnimatedSection>
      </div>
      
      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Share sidebar */}
            <div className="hidden md:block md:col-span-1">
              <div className="sticky top-24">
                <div className="flex flex-col items-center gap-4">
                  <span className="text-sm text-gray-500">Share</span>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <Facebook size={18} className="text-blue-600" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <Twitter size={18} className="text-blue-400" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <Linkedin size={18} className="text-blue-700" />
                  </button>
                  <button 
                    className="p-2 rounded-full hover:bg-gray-100"
                    onClick={copyToClipboard}
                  >
                    <Copy size={18} className="text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="md:col-span-11">
              <AnimatedSection animation="fade-up">
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                <div className="mt-8 flex flex-wrap gap-2">
                  {post.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-gray-500">
                      #{tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Mobile share buttons */}
                <div className="md:hidden flex justify-center gap-4 mt-8 pt-8 border-t">
                  <span className="text-sm text-gray-500 mr-2 self-center">Share:</span>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <Facebook size={18} className="text-blue-600" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <Twitter size={18} className="text-blue-400" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <Linkedin size={18} className="text-blue-700" />
                  </button>
                  <button 
                    className="p-2 rounded-full hover:bg-gray-100"
                    onClick={copyToClipboard}
                  >
                    <Copy size={18} className="text-gray-500" />
                  </button>
                </div>
              </AnimatedSection>
              
              {/* Author Bio */}
              <AnimatedSection animation="fade-up" className="mt-12">
                <Card className="p-6 bg-gray-50 border-none">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={post.authorAvatar} 
                      alt={post.author} 
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">About {post.author}</h3>
                      <p className="text-gray-600">{post.authorBio}</p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Articles - would normally be dynamically generated */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 3)
                .map((relatedPost, index) => (
                <AnimatedSection 
                  key={relatedPost.id} 
                  animation="fade-up" 
                  delay={index * 100}
                  className="group"
                >
                  <Link to={`/blog/${relatedPost.id}`} className="block h-full">
                    <Card className="overflow-hidden h-full border-none shadow-md hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <img 
                          src={relatedPost.coverImage} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex gap-2 mb-3">
                          {relatedPost.categories.slice(0, 1).map((category, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-purple-100 text-purple-700">
                              {category}
                            </Badge>
                          ))}
                        </div>
                        <h3 className="font-bold text-xl mb-2 group-hover:text-purple-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{new Date(relatedPost.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric'
                          })}</span>
                          <span className="mx-2">•</span>
                          <span>{relatedPost.readTime} read</span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/blog">
                <Button variant="outline" className="gap-2">
                  View All Articles
                  <ArrowLeft className="h-4 w-4 rotate-180" />
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

export default BlogPost; 