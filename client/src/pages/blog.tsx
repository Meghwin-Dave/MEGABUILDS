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
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Technical Insights & Engineering Perspectives
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Real-world learnings from building scalable systems, leading global teams, and architecting solutions that serve millions of users.<br /><br />
            From code to deployment, automation to AI integration — sharing the knowledge gained from 5+ years in the trenches of enterprise software development.
          </p>
        </div>

        {/* Featured Article (Enhanced) */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2 justify-center">
            <span className="text-2xl">🏗️</span>
            <span className="px-3 py-1 bg-electric-blue/20 text-electric-blue text-sm rounded-full">Architecture</span>
            <span className="text-sm text-gray-400">8 min read</span>
            <span className="text-sm text-yellow-400 font-bold ml-2">Featured</span>
          </div>
          <div className="neumorphism p-8 rounded-2xl max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Building Systems That Scale: Lessons from 50+ Production Deployments</h2>
            <p className="text-gray-300 mb-4">The hidden complexities of scaling beyond 10,000 users — from database bottlenecks to API design patterns that actually work in the real world.</p>
            <div className="text-gray-400 mb-4">Key topics: Microservices vs Monoliths • Database Sharding • Caching Strategies • Load Balancing</div>
            <div className="flex flex-wrap gap-4 mb-4 text-sm">
              <span className="flex items-center gap-1"><span className="text-xl">👁️</span>2,847 views</span>
              <span className="flex items-center gap-1"><span className="text-xl">💬</span>23 comments</span>
              <span className="flex items-center gap-1"><span className="text-xl">⭐</span>4.8/5 rating</span>
            </div>
            <div className="flex gap-4">
              <button className="tech-gradient px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Read Article</button>
              <button className="glassmorphism px-6 py-3 rounded-lg hover:bg-electric-blue/20 transition-colors">Join Discussion</button>
            </div>
          </div>
        </div>

        {/* Article Categories with Counts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 justify-items-center">
            <div className="glassmorphism px-4 py-3 rounded-lg flex items-center gap-2"><span>🏗️</span>System Architecture <span className="text-matrix-green font-bold">(12)</span></div>
            <div className="glassmorphism px-4 py-3 rounded-lg flex items-center gap-2"><span>🐍</span>Python & Django <span className="text-matrix-green font-bold">(18)</span></div>
            <div className="glassmorphism px-4 py-3 rounded-lg flex items-center gap-2"><span>⚛️</span>React & Frontend <span className="text-matrix-green font-bold">(15)</span></div>
            <div className="glassmorphism px-4 py-3 rounded-lg flex items-center gap-2"><span>🤖</span>AI & Automation <span className="text-matrix-green font-bold">(9)</span></div>
            <div className="glassmorphism px-4 py-3 rounded-lg flex items-center gap-2"><span>👥</span>Team Leadership <span className="text-matrix-green font-bold">(7)</span></div>
            <div className="glassmorphism px-4 py-3 rounded-lg flex items-center gap-2"><span>🚀</span>DevOps & Deployment <span className="text-matrix-green font-bold">(11)</span></div>
            <div className="glassmorphism px-4 py-3 rounded-lg flex items-center gap-2"><span>🔗</span>API Design <span className="text-matrix-green font-bold">(14)</span></div>
            <div className="glassmorphism px-4 py-3 rounded-lg flex items-center gap-2"><span>📊</span>ERP & Business Systems <span className="text-matrix-green font-bold">(6)</span></div>
          </div>
        </div>

        {/* Recent Articles (Expanded) */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Recent Articles</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="neumorphism p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-2"><span>🐍</span>Python • 12 min read • <span className="text-yellow-400 font-bold">Popular</span></div>
              <h3 className="text-xl font-bold mb-2">Django Performance: From 2s to 200ms Response Times</h3>
              <p className="text-gray-300 mb-2">How I optimized a Django API serving 1M+ requests daily through strategic caching, query optimization, and smart architecture decisions.</p>
              <div className="text-gray-400 mb-2">📈 Performance gains: 90% faster • Database queries: 85% reduction</div>
              <div className="text-gray-400 mb-2">👁️ 4,231 views • July 20, 2025</div>
            </div>
            <div className="neumorphism p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-2"><span>⚛️</span>React • 6 min read • <span className="text-pink-400 font-bold">Trending</span></div>
              <h3 className="text-xl font-bold mb-2">React State Management: When Context Isn't Enough</h3>
              <p className="text-gray-300 mb-2">Battle-tested patterns for managing complex state in large React applications without Redux bloat or performance penalties.</p>
              <div className="text-gray-400 mb-2">🔧 Code examples • Live demos • Production insights</div>
              <div className="text-gray-400 mb-2">👁️ 3,156 views • July 18, 2025</div>
            </div>
            <div className="neumorphism p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-2"><span>🤖</span>AI Integration • 10 min read • <span className="text-matrix-green font-bold">New</span></div>
              <h3 className="text-xl font-bold mb-2">Building ChatGPT-Powered Dashboards That Actually Add Value</h3>
              <p className="text-gray-300 mb-2">Moving beyond basic chatbots to create AI interfaces that transform business intelligence and user experience.</p>
              <div className="text-gray-400 mb-2">💡 Real use cases • Cost optimization • User adoption strategies</div>
              <div className="text-gray-400 mb-2">👁️ 1,892 views • July 15, 2025</div>
            </div>
            <div className="neumorphism p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-2"><span>🚀</span>DevOps • 8 min read</div>
              <h3 className="text-xl font-bold mb-2">Zero-Downtime Deployments with Docker and Blue-Green Strategy</h3>
              <p className="text-gray-300 mb-2">Production-tested deployment patterns that ensure reliability while enabling continuous delivery for mission-critical applications.</p>
              <div className="text-gray-400 mb-2">🛠️ Docker configs • Automation scripts • Monitoring setup</div>
              <div className="text-gray-400 mb-2">👁️ 2,647 views • July 12, 2025</div>
            </div>
            <div className="neumorphism p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-2"><span>👥</span>Leadership • 7 min read</div>
              <h3 className="text-xl font-bold mb-2">Code Reviews That Actually Improve Code Quality</h3>
              <p className="text-gray-300 mb-2">Transform your code review process from gatekeeping to knowledge sharing with practices that accelerate team growth.</p>
              <div className="text-gray-400 mb-2">📋 Review checklists • Team dynamics • Quality metrics</div>
              <div className="text-gray-400 mb-2">👁️ 1,534 views • July 8, 2025</div>
            </div>
            <div className="neumorphism p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-2"><span>🔗</span>API Design • 9 min read</div>
              <h3 className="text-xl font-bold mb-2">RESTful APIs That Don't Break: Versioning and Evolution Strategies</h3>
              <p className="text-gray-300 mb-2">Design APIs that can evolve without breaking existing clients — lessons from managing 20+ production APIs over 3+ years.</p>
              <div className="text-gray-400 mb-2">📚 Versioning patterns • Backward compatibility • Documentation</div>
              <div className="text-gray-400 mb-2">👁️ 2,108 views • July 5, 2025</div>
            </div>
          </div>
        </div>

        {/* Popular Series */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">🔥 Most Popular Series</h2>
          <div className="neumorphism p-8 rounded-2xl max-w-4xl mx-auto mb-8">
            <h3 className="text-xl font-bold mb-2">Building a SaaS from Scratch (8-part series)</h3>
            <div className="text-gray-300 mb-2">Follow the complete journey of architecting, building, and scaling a multi-tenant SaaS application from MVP to enterprise.</div>
            <div className="text-gray-400 mb-2">Part 1: Architecture Decisions • Part 2: Database Design • Part 3: Authentication • Part 4: Multi-tenancy • Part 5: Payment Integration • Part 6: Performance • Part 7: Monitoring • Part 8: Scaling</div>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-1"><span className="text-xl">📊</span>25,000+ total views</span>
              <span className="flex items-center gap-1"><span className="text-xl">⭐</span>4.9/5 series rating</span>
            </div>
          </div>
          <div className="neumorphism p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-2">Python to Production (6-part series)</h3>
            <div className="text-gray-300 mb-2">Complete guide to taking Python applications from development to production-ready deployments.</div>
            <div className="text-gray-400 mb-2">Part 1: Environment Setup • Part 2: Testing Strategy • Part 3: CI/CD Pipeline • Part 4: Containerization • Part 5: Monitoring • Part 6: Performance Tuning</div>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-1"><span className="text-xl">📊</span>18,500+ total views</span>
              <span className="flex items-center gap-1"><span className="text-xl">⭐</span>4.7/5 series rating</span>
            </div>
          </div>
        </div>

        {/* Expert Insights Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">💡 Weekly Insights</h2>
          <div className="neumorphism p-6 rounded-xl max-w-3xl mx-auto mb-8">
            <h3 className="text-lg font-bold mb-2">This Week in Tech: AI Coding Tools Reality Check</h3>
            <div className="text-gray-300 mb-2">My experience with GitHub Copilot, ChatGPT Code Interpreter, and traditional development — what actually improves productivity vs. hype.</div>
            <div className="text-gray-400 mb-2">🎯 Key insight: AI tools excel at boilerplate but struggle with architecture decisions.</div>
            <div className="text-gray-400">📅 Published: July 25, 2025 • ⏱️ 3 min read</div>
          </div>
          <div className="neumorphism p-6 rounded-xl max-w-3xl mx-auto">
            <h3 className="text-lg font-bold mb-2">Industry Observation: The State of Remote Development Teams</h3>
            <div className="text-gray-300 mb-2">After leading distributed teams across 7 countries, here's what actually works for remote software development collaboration.</div>
            <div className="text-gray-400 mb-2">🌍 Global perspective: Time zone strategies, communication tools, culture building</div>
            <div className="text-gray-400">📅 Published: July 22, 2025 • ⏱️ 5 min read</div>
          </div>
        </div>

        {/* Interactive Elements: Reader Analytics & Content Requests */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">📊 Reader Analytics Dashboard</h2>
          <div className="neumorphism p-6 rounded-xl max-w-4xl mx-auto mb-8">
            <div className="mb-4 text-lg font-bold">Most Popular Topics:</div>
            <ul className="text-gray-300 mb-4">
              <li>1. System Architecture (34% of traffic)</li>
              <li>2. Python/Django (28% of traffic)</li>
              <li>3. API Design (18% of traffic)</li>
              <li>4. DevOps (12% of traffic)</li>
              <li>5. Team Leadership (8% of traffic)</li>
            </ul>
            <div className="mb-4 text-lg font-bold">Reader Engagement:</div>
            <ul className="text-gray-300">
              <li>• Average read time: 6.8 minutes</li>
              <li>• Return reader rate: 47%</li>
              <li>• Comment engagement: 15% of readers</li>
              <li>• Newsletter subscribers: 2,340+</li>
            </ul>
          </div>
          <div className="neumorphism p-6 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-lg font-bold mb-2">🎯 Content Requests</h3>
            <div className="mb-4 text-gray-300">What would you like me to write about next?</div>
            <div className="flex flex-wrap gap-4 mb-4">
              <label className="flex items-center gap-2"><input type="checkbox" /> Microservices vs Monoliths deep dive</label>
              <label className="flex items-center gap-2"><input type="checkbox" /> AI integration best practices</label>
              <label className="flex items-center gap-2"><input type="checkbox" /> Django vs FastAPI comparison</label>
              <label className="flex items-center gap-2"><input type="checkbox" /> React performance optimization</label>
              <label className="flex items-center gap-2"><input type="checkbox" /> Team leadership in tech</label>
            </div>
            <div className="flex gap-4">
              <button className="tech-gradient px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Submit Request</button>
              <button className="glassmorphism px-6 py-3 rounded-lg hover:bg-electric-blue/20 transition-colors">Join Discussion</button>
            </div>
          </div>
        </div>

        {/* Enhanced Newsletter Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">🚀 The Engineering Edge Newsletter</h2>
          <div className="neumorphism p-8 rounded-2xl max-w-3xl mx-auto text-center">
            <div className="mb-4 text-gray-300">Join 2,340+ developers getting weekly insights on:</div>
            <ul className="text-gray-300 mb-4 text-left max-w-xl mx-auto">
              <li>✅ Real-world architecture decisions and their outcomes</li>
              <li>✅ Performance optimization techniques that actually work</li>
              <li>✅ Team leadership lessons from distributed development</li>
              <li>✅ AI integration strategies beyond the hype</li>
              <li>✅ Early access to new articles and exclusive content</li>
            </ul>
            <div className="mb-4 text-gray-400">Recent issue: "Why Your API Design is Probably Wrong (And How to Fix It)"<br />Next issue: "Database Scaling: When to Shard, When to Replicate"</div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="glassmorphism flex-1 px-4 py-3 rounded-lg bg-dark-tertiary text-white placeholder-gray-400 focus:ring-2 focus:ring-electric-blue border-0"
                data-testid="newsletter-email"
              />
              <button className="tech-gradient px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap" data-testid="newsletter-subscribe">
                Subscribe for Free
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-2">No spam, unsubscribe anytime • 1 email/week</div>
          </div>
        </div>

        {/* Community Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">💬 Developer Community</h2>
          <div className="neumorphism p-8 rounded-2xl max-w-4xl mx-auto text-center">
            <div className="mb-4 text-gray-300">Join the Discussion:</div>
            <ul className="text-gray-300 mb-4">
              <li>• Discord Server: 500+ active developers</li>
              <li>• LinkedIn Group: 1,200+ tech professionals</li>
              <li>• Weekly AMAs: Every Friday 3 PM IST</li>
              <li>• Code Reviews: Community feedback on projects</li>
            </ul>
            <div className="mb-4 text-gray-400">Recent Discussions:</div>
            <ul className="text-gray-400 mb-4">
              <li>🔥 "Best practices for handling async operations in Django" (47 replies)</li>
              <li>🔥 "Microservices: When did complexity outweigh benefits?" (31 replies)</li>
              <li>🔥 "AI tools changing the hiring landscape?" (23 replies)</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="tech-gradient px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Join Community</button>
              <button className="glassmorphism px-6 py-3 rounded-lg hover:bg-electric-blue/20 transition-colors">Start Discussion</button>
            </div>
          </div>
        </div>

        {/* Tools & Resources */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">🛠️ Developer Resources</h2>
          <div className="neumorphism p-8 rounded-2xl max-w-4xl mx-auto text-center">
            <div className="mb-4 text-gray-300">Free Tools & Templates:</div>
            <ul className="text-gray-300 mb-4">
              <li>📋 Django API Starter Template (1.2k+ downloads)</li>
              <li>🐳 Docker Development Environment (890+ downloads)</li>
              <li>📊 System Architecture Templates (2.1k+ downloads)</li>
              <li>🔄 CI/CD Pipeline Configs (670+ downloads)</li>
              <li>📈 Performance Monitoring Setup (445+ downloads)</li>
            </ul>
            <div className="mb-4 text-gray-400">Code Examples Repository:<br />GitHub: /meghwin-dev/blog-examples</div>
            <ul className="text-gray-400 mb-4">
              <li>• All article code samples</li>
              <li>• Production-ready templates</li>
              <li>• Step-by-step implementations</li>
              <li>• Community contributions welcome</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="tech-gradient px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Browse Resources</button>
              <button className="glassmorphism px-6 py-3 rounded-lg hover:bg-electric-blue/20 transition-colors">Contribute</button>
            </div>
          </div>
        </div>

        {/* Advanced Search & Filtering */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">🔍 Advanced Search & Filtering</h2>
          <div className="neumorphism p-8 rounded-2xl max-w-4xl mx-auto text-center">
            <div className="mb-4 text-gray-300">Search by:</div>
            <ul className="text-gray-300 mb-4">
              <li>• Keywords, topics, or technologies</li>
              <li>• Article length (&lt; 5 min, 5-10 min, 10+ min)</li>
              <li>• Difficulty level (Beginner, Intermediate, Advanced)</li>
              <li>• Publication date (Last week, month, year)</li>
              <li>• Content type (Tutorial, Opinion, Case Study, Review)</li>
            </ul>
            <div className="mb-4 text-gray-400">Popular Searches:<br />"Django optimization" • "React patterns" • "System design" • "Team leadership"</div>
            <div className="mb-4 text-gray-400">Saved Searches: Create alerts for topics you follow<br />Reading List: Bookmark articles for later<br />Progress Tracking: Mark articles as read/unread</div>
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="text-center text-gray-400 text-lg mt-16 border-t border-gray-700 pt-8">
          <div className="mb-4">📬 <span className="font-bold">Stay Connected</span></div>
          <div className="mb-2">• 📧 Email: <span className="text-white">insights@meghwindev.com</span></div>
          <div className="mb-2">• 💼 LinkedIn: <span className="text-white">Connect for professional updates</span></div>
          <div className="mb-2">• 🐦 Twitter: <span className="text-white">Daily tech thoughts and quick tips</span></div>
          <div className="mb-2">• 📱 Telegram: <span className="text-white">Instant article notifications</span></div>
          <div className="mb-2">Response Time: <span className="text-white">Usually within 24 hours</span></div>
          <div className="mb-2">Content Schedule: <span className="text-white">New articles every Tuesday & Friday</span></div>
          <div className="mb-2">Special Features: <span className="text-white">Monthly deep-dive series, quarterly industry reports</span></div>
          <div className="mt-8 italic">"Sharing knowledge is the best way to multiply it." — Meghwin Dave</div>
          <div className="mt-4 text-xs">© 2025 • Built with Next.js & Tailwind CSS • Open source on GitHub</div>
        </div>
      </div>
    </div>
  );
}
