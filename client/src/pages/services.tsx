import { CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  return (
    <div className="pt-24 pb-16 bg-dark min-h-screen" data-testid="services-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Ideas Into Digital Reality.<br />
            <span className="text-electric-blue">Seamless Integration.</span> <span className="text-neon-purple">Expert Leadership.</span> <span className="text-matrix-green">Scalable Solutions.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From MVP to enterprise scale, I deliver robust, future-proof software and automation for ambitious businesses.
          </p>
        </div>

        {/* Process Flow */}
        <div className="flex justify-center items-center mb-12 text-lg font-mono text-gray-400 gap-4">
          <span className="font-bold text-electric-blue">01</span>→<span>Plan</span>
          <span className="font-bold text-neon-purple">02</span>→<span>Build</span>
          <span className="font-bold text-neon-cyan">03</span>→<span>Deploy</span>
          <span className="font-bold text-matrix-green">04</span>→<span>Scale</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Full-Stack Development */}
          <div className="neumorphism p-8 rounded-2xl group hover:scale-105 hover:shadow-2xl transition-all duration-500 border-t-4 border-blue-400 relative">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-300 rounded-xl flex items-center justify-center mr-4 text-3xl">🚀</div>
              <h2 className="text-2xl font-bold">Full-Stack Development</h2>
            </div>
            <div className="absolute top-4 right-4 text-xs text-matrix-green font-bold bg-dark px-3 py-1 rounded-full shadow">Trusted by 25+ clients</div>
            <ul className="space-y-4 text-gray-300">
              <li><span className="font-semibold text-white">Scalable Digital Platforms</span><br /><span className="text-sm">Future-proof web applications that grow with your business, built with enterprise-grade Python/Django and responsive modern frontends.</span></li>
              <li><span className="text-sm">⭐⭐⭐⭐⭐ 5.0 average rating</span></li>
            </ul>
          </div>

          {/* API Integration */}
          <div className="neumorphism p-8 rounded-2xl group hover:scale-105 hover:shadow-2xl transition-all duration-500 border-t-4 border-green-400">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-400 rounded-xl flex items-center justify-center mr-4 text-3xl">🔗</div>
              <h2 className="text-2xl font-bold">API Integration</h2>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li><span className="font-semibold text-white">Seamless System Integration</span><br /><span className="text-sm">Connect any service to your platform—payment processors, CRMs, third-party APIs, and secure authentication systems that just work.</span></li>
            </ul>
          </div>

          {/* DevOps & Deployment */}
          <div className="neumorphism p-8 rounded-2xl group hover:scale-105 hover:shadow-2xl transition-all duration-500 border-t-4 border-purple-400">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-neon-cyan rounded-xl flex items-center justify-center mr-4 text-3xl">⚙️</div>
              <h2 className="text-2xl font-bold">DevOps & Deployment</h2>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li><span className="font-semibold text-white">Production-Ready Infrastructure</span><br /><span className="text-sm">Rock-solid CI/CD pipelines, automated deployments, and server configurations that keep your applications running 24/7.</span></li>
            </ul>
          </div>

          {/* Project Management */}
          <div className="neumorphism p-8 rounded-2xl group hover:scale-105 hover:shadow-2xl transition-all duration-500 border-t-4 border-orange-400">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-xl flex items-center justify-center mr-4 text-3xl">👥</div>
              <h2 className="text-2xl font-bold">Project Management</h2>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li><span className="font-semibold text-white">Technical Team Leadership</span><br /><span className="text-sm">Drive projects to success with Agile methodologies, clear technical specifications, and hands-on leadership that delivers results on time.</span></li>
            </ul>
        </div>

          {/* AI Integration */}
          <div className="neumorphism p-8 rounded-2xl group hover:scale-105 hover:shadow-2xl transition-all duration-500 border-t-4 border-pink-400">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-xl flex items-center justify-center mr-4 text-3xl">🤖</div>
              <h2 className="text-2xl font-bold">AI Integration</h2>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li><span className="font-semibold text-white">Smart Automation & ML</span><br /><span className="text-sm">Integrate AI and machine learning for smarter workflows, chatbots, and predictive analytics that drive business value.</span></li>
            </ul>
            </div>

          {/* Data Analytics */}
          <div className="neumorphism p-8 rounded-2xl group hover:scale-105 hover:shadow-2xl transition-all duration-500 border-t-4 border-yellow-400">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-300 rounded-xl flex items-center justify-center mr-4 text-3xl">📊</div>
              <h2 className="text-2xl font-bold">Data Analytics</h2>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li><span className="font-semibold text-white">Business Insights</span><br /><span className="text-sm">Unlock actionable insights with custom dashboards, data visualization, and reporting tailored to your business goals.</span></li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="neumorphism p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your requirements and see how I can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="tech-gradient px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity" data-testid="contact-services">
                  <i className="fas fa-calendar-alt mr-2"></i>Start Your Project →
                </button>
              </Link>
              <Link href="/projects">
                <button className="glassmorphism px-8 py-4 rounded-lg hover:bg-electric-blue/20 transition-colors" data-testid="view-portfolio">
                  <i className="fas fa-folder-open mr-2"></i>See What's Possible →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
