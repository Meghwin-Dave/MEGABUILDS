import HeroSection from "@/components/hero-section";
import TechStack from "@/components/tech-stack";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { type Project, type BlogPost } from "@shared/schema";
import ProjectCard from "@/components/project-card";
import BlogCard from "@/components/blog-card";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Home() {
  const { data: featuredProjects = [] } = useQuery<Project[]>({
    queryKey: ['/api/projects/featured'],
  });

  const { data: blogPosts = [] } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog'],
  });

  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div className="pt-16">
      <HeroSection />
      <TechStack />
      
      {/* About Preview */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              I design, develop, and lead custom software projects that align with business goals. 
              Whether it's building an end-to-end ERP, automating operations, integrating APIs, 
              or leading a cross-functional dev team — I make software <span className="text-electric-blue font-semibold">work for your business</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-dark-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transforming Ideas Into Digital Reality.<br />
              <span className="text-electric-blue">Seamless Integration.</span> <span className="text-neon-purple">Expert Leadership.</span> <span className="text-matrix-green">Scalable Solutions.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="neumorphism p-6 rounded-2xl text-center group hover:scale-105 hover:shadow-2xl transition-all duration-500 border-t-4 border-blue-400">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-300 rounded-xl flex items-center justify-center mx-auto mb-4 text-3xl">🚀</div>
              <h3 className="text-xl font-bold mb-3">Full-Stack Development</h3>
              <p className="text-gray-400 text-sm">Future-proof web apps with Python/Django & React</p>
            </div>
            <div className="neumorphism p-6 rounded-2xl text-center group hover:scale-105 hover:shadow-2xl transition-all duration-500 border-t-4 border-green-400">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-400 rounded-xl flex items-center justify-center mx-auto mb-4 text-3xl">🔗</div>
              <h3 className="text-xl font-bold mb-3">API Integration</h3>
              <p className="text-gray-400 text-sm">Connect payments, CRMs, and more—securely</p>
            </div>
            <div className="neumorphism p-6 rounded-2xl text-center group hover:scale-105 hover:shadow-2xl transition-all duration-500 border-t-4 border-purple-400">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-neon-cyan rounded-xl flex items-center justify-center mx-auto mb-4 text-3xl">⚙️</div>
              <h3 className="text-xl font-bold mb-3">DevOps & Deployment</h3>
              <p className="text-gray-400 text-sm">CI/CD, automated deployments, 24/7 reliability</p>
            </div>
            <div className="neumorphism p-6 rounded-2xl text-center group hover:scale-105 hover:shadow-2xl transition-all duration-500 border-t-4 border-orange-400">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-xl flex items-center justify-center mx-auto mb-4 text-3xl">👥</div>
              <h3 className="text-xl font-bold mb-3">Project Management</h3>
              <p className="text-gray-400 text-sm">Agile delivery, clear specs, hands-on leadership</p>
            </div>
            <div className="neumorphism p-6 rounded-2xl text-center group hover:scale-105 hover:shadow-2xl transition-all duration-500 border-t-4 border-pink-400">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-xl flex items-center justify-center mx-auto mb-4 text-3xl">🤖</div>
              <h3 className="text-xl font-bold mb-3">AI Integration</h3>
              <p className="text-gray-400 text-sm">Smart automation, chatbots, predictive analytics</p>
            </div>
            <div className="neumorphism p-6 rounded-2xl text-center group hover:scale-105 hover:shadow-2xl transition-all duration-500 border-t-4 border-yellow-400">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-300 rounded-xl flex items-center justify-center mx-auto mb-4 text-3xl">📊</div>
              <h3 className="text-xl font-bold mb-3">Data Analytics</h3>
              <p className="text-gray-400 text-sm">Dashboards, visualization, actionable insights</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <button className="glassmorphism px-8 py-4 rounded-lg hover:bg-electric-blue/20 transition-colors" data-testid="view-services">
                <ArrowRight className="inline mr-2 w-5 h-5" />Explore My Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-electric-blue">Projects</span>
            </h2>
            <p className="text-xl text-gray-300">Software solutions that delivered real business value</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects">
              <button className="glassmorphism px-8 py-4 rounded-lg hover:bg-electric-blue/20 transition-colors" data-testid="view-projects">
                <ArrowRight className="inline mr-2 w-5 h-5" />View All Projects
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-dark-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Latest <span className="text-electric-blue">Technical Insights</span>
            </h2>
            <p className="text-xl text-gray-300">Deep dives into software architecture, development practices, and industry trends</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {latestPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/blog">
              <button className="glassmorphism px-8 py-4 rounded-lg hover:bg-electric-blue/20 transition-colors" data-testid="view-blog">
                <ArrowRight className="inline mr-2 w-5 h-5" />View All Articles
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Something <span className="text-electric-blue">Amazing</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your software goals and explore how we can work together to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="tech-gradient px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity" data-testid="book-call">
                <i className="fas fa-calendar-alt mr-2"></i>Book a Free Call
              </button>
            </Link>
            <Link href="/projects">
              <button className="glassmorphism px-8 py-4 rounded-lg hover:bg-electric-blue/20 transition-colors" data-testid="view-work">
                <i className="fas fa-code mr-2"></i>View My Work
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
