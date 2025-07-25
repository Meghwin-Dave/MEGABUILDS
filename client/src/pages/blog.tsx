import { useQuery } from "@tanstack/react-query";
import { type BlogPost } from "@shared/schema";
import BlogCard from "@/components/blog-card";
import { BookOpen, Search } from "lucide-react";
import { useState } from "react";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const { data: blogPosts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog'],
  });

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="pt-24 pb-16 bg-dark min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-electric-blue mx-auto"></div>
            <p className="mt-4 text-gray-400">Loading articles...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 bg-dark min-h-screen" data-testid="blog-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Latest <span className="text-electric-blue">Technical Insights</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Deep dives into software architecture, development practices, and industry trends from the trenches of real-world projects.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="glassmorphism w-full pl-10 pr-4 py-3 rounded-lg bg-dark-tertiary text-white placeholder-gray-400 focus:ring-2 focus:ring-electric-blue border-0"
              data-testid="blog-search"
            />
          </div>
        </div>

        {/* Featured Article */}
        {filteredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Featured Article</h2>
            <div className="neumorphism p-8 rounded-2xl max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  {filteredPosts[0].imageUrl && (
                    <img 
                      src={`${filteredPosts[0].imageUrl}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400`}
                      alt={filteredPosts[0].title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-electric-blue/20 text-electric-blue text-sm rounded-full">
                      {filteredPosts[0].category}
                    </span>
                    <span className="text-sm text-gray-400">{filteredPosts[0].readTime}</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{filteredPosts[0].title}</h3>
                  <p className="text-gray-300 mb-6">{filteredPosts[0].excerpt}</p>
                  <button className="tech-gradient px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity" data-testid="read-featured">
                    Read Full Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        {filteredPosts.length > 1 ? (
          <>
            <h2 className="text-2xl font-bold mb-8 text-center">All Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredPosts.slice(1).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search terms.</p>
          </div>
        ) : null}

        {/* Newsletter Signup */}
        <div className="neumorphism p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-6">
            Get notified when I publish new technical articles and insights from the world of software development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="glassmorphism flex-1 px-4 py-3 rounded-lg bg-dark-tertiary text-white placeholder-gray-400 focus:ring-2 focus:ring-electric-blue border-0"
              data-testid="newsletter-email"
            />
            <button className="tech-gradient px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap" data-testid="newsletter-subscribe">
              Subscribe
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Architecture', 'Django', 'Project Management', 'DevOps', 'API Design', 'ERP Systems'].map((category) => (
              <div key={category} className="glassmorphism px-4 py-2 rounded-lg text-center">
                <span className="text-sm font-mono">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
