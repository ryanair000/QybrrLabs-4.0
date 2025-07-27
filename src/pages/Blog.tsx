import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, Tag } from 'lucide-react';
import Layout from '@/components/layout/Layout';

import { useQuery } from "@tanstack/react-query";
import Spinner from '@/components/ui/spinner';
import { supabase } from "@/lib/supabase";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  authorAvatar: string | null;
  date: string;
  readTime: string | null;
  categories: string[];
  tags: string[];
}

const fetchPosts = async (): Promise<Post[]> => {
  const { data, error } = await supabase.from("posts").select("*").eq("published", true).order("published_at", { ascending: false });
  if (error) throw error;
  return (data as any).map((d: any) => ({
    id: d.id,
    title: d.title,
    excerpt: d.excerpt,
    content: d.content,
    coverImage: d.cover_image,
    author: d.author_name,
    authorAvatar: d.author_avatar,
    date: d.published_at,
    readTime: d.read_time,
    categories: d.categories ?? [],
    tags: d.tags ?? [],
  }));
};

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

    if (isLoading) {
    return (
      <Layout>
        <div className="py-24 flex justify-center"><Spinner size={32} /></div>
      </Layout>
    );
  }

  const allCategories = [...new Set(posts.flatMap(p => p.categories))];
  const allTags = [...new Set(posts.flatMap(p => p.tags))];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? post.categories.includes(selectedCategory) : true;
    const matchesTags = selectedTags.length > 0 ? selectedTags.every(tag => post.tags.includes(tag)) : true;
    
    return matchesSearch && matchesCategory && matchesTags;
  });

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <Layout>
      {/* Blog Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Insights, updates, and expert opinions on technology, business, and digital innovation across Africa.
            </p>
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Search articles..."
                className="pl-10 py-6"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar with filters */}
            <div className="lg:col-span-1">
              <AnimatedSection animation="fade-up" className="sticky top-24">
                <div className="space-y-8">
                  {/* Categories */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Categories</h3>
                    <div className="space-y-2">
                      <div 
                        className={`cursor-pointer py-2 px-3 rounded-md ${
                          selectedCategory === null ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100'
                        }`}
                        onClick={() => setSelectedCategory(null)}
                      >
                        All Categories
                      </div>
                      {allCategories.map((category, index) => (
                        <div 
                          key={index}
                          className={`cursor-pointer py-2 px-3 rounded-md ${
                            selectedCategory === category ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100'
                          }`}
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Popular Tags */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {allTags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant={selectedTags.includes(tag) ? "default" : "secondary"}
                          className={`cursor-pointer ${
                            selectedTags.includes(tag) 
                              ? 'bg-purple-600' 
                              : 'bg-gray-100 hover:bg-gray-200'
                          }`}
                          onClick={() => toggleTag(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              {filteredPosts.length > 0 ? (
                <div className="space-y-8">
                  {filteredPosts.map((post, index) => (
                    <AnimatedSection key={post.id} animation="fade-up" delay={index * 100}>
                      <Card className="overflow-hidden h-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="md:col-span-1">
                            <Link to={`/blog/${post.id}`}>
                              <img 
                                src={post.coverImage} 
                                alt={post.title} 
                                className="w-full h-full object-cover object-center min-h-[200px]"
                              />
                            </Link>
                          </div>
                          <div className="md:col-span-2 p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.categories.map((category, idx) => (
                                <Badge key={idx} variant="secondary" className="bg-purple-100 text-purple-700">
                                  {category}
                                </Badge>
                              ))}
                            </div>
                            <Link to={`/blog/${post.id}`}>
                              <h2 className="text-2xl font-bold mb-3 hover:text-purple-600 transition-colors">
                                {post.title}
                              </h2>
                            </Link>
                            <p className="text-gray-600 mb-4">
                              {post.excerpt}
                            </p>
                            <CardFooter className="flex justify-between items-center p-0 pt-4 border-t">
                              <div className="flex items-center space-x-4">
                                <img 
                                  src={post.authorAvatar} 
                                  alt={post.author} 
                                  className="w-8 h-8 rounded-full"
                                />
                                <div className="text-sm">
                                  <p className="font-medium">{post.author}</p>
                                </div>
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                                  month: 'short', 
                                  day: 'numeric', 
                                  year: 'numeric' 
                                })}</span>
                                <span className="mx-2">•</span>
                                <span>{post.readTime} read</span>
                              </div>
                            </CardFooter>
                          </div>
                        </div>
                      </Card>
                    </AnimatedSection>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No articles found</h3>
                  <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the latest insights and updates delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input 
                placeholder="Your email address" 
                className="flex-1"
              />
              <Button className="bg-purple-600 hover:bg-purple-700">
                Subscribe
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Footer placeholder - you would include your actual footer component here */}
    </Layout>
  );
};

export default Blog; 