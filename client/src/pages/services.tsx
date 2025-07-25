import { CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  return (
    <div className="pt-24 pb-16 bg-dark min-h-screen" data-testid="services-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Custom Software Development. <br />
            <span className="text-electric-blue">API Integration.</span> {" "}
            <span className="text-neon-purple">Technical Leadership.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive software solutions tailored to your business needs, from concept to deployment and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Full-Stack Development */}
          <div className="neumorphism p-8 rounded-2xl group hover:bg-gray-800/50 transition-all duration-500">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-neon-cyan rounded-xl flex items-center justify-center mr-4">
                <i className="fas fa-code text-2xl text-white"></i>
              </div>
              <h2 className="text-2xl font-bold">Full-Stack Software Development</h2>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <CheckCircle className="text-electric-blue mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Web App Development (Python/Django)</span><br />
                  <span className="text-sm">Build scalable, backend-heavy applications with REST APIs, admin dashboards, and analytics.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-electric-blue mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Custom ERP & Workflow Systems</span><br />
                  <span className="text-sm">Streamline operations with ERPNext/Frappe customizations or from-scratch systems.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-electric-blue mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Frontend Development (JS/HTML/CSS)</span><br />
                  <span className="text-sm">Rapid UI/UX interfaces for admin panels, portals, and analytics tools.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* API & Integration */}
          <div className="neumorphism p-8 rounded-2xl group hover:bg-gray-800/50 transition-all duration-500">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <i className="fas fa-plug text-2xl text-white"></i>
              </div>
              <h2 className="text-2xl font-bold">API & System Integration</h2>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <CheckCircle className="text-neon-purple mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <span>Payment Gateways, CRMs, SMS/Email APIs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-neon-purple mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <span>Webhooks & Real-time data pipelines</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-neon-purple mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <span>Secure token-based API auth with OAuth/JWT</span>
              </li>
            </ul>
          </div>

          {/* DevOps */}
          <div className="neumorphism p-8 rounded-2xl group hover:bg-gray-800/50 transition-all duration-500">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                <i className="fas fa-server text-2xl text-white"></i>
              </div>
              <h2 className="text-2xl font-bold">DevOps & Deployment</h2>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <CheckCircle className="text-green-400 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <span>Server setup, production deployment</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-400 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <span>CI/CD pipelines with Git, Docker</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-400 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <span>Bench + Nginx + Supervisor (ERP/Frappe)</span>
              </li>
            </ul>
          </div>

          {/* Project Management */}
          <div className="neumorphism p-8 rounded-2xl group hover:bg-gray-800/50 transition-all duration-500">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                <i className="fas fa-users text-2xl text-white"></i>
              </div>
              <h2 className="text-2xl font-bold">Tech Project Management</h2>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <CheckCircle className="text-orange-400 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <span>Agile Scrum delivery with Jira/Trello</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-orange-400 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <span>Sprint planning, retros, and standups</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-orange-400 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <span>Technical specs, roadmap & stakeholder handling</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-orange-400 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <span>Build + manage remote teams</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Process Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            My <span className="text-electric-blue">Development Process</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-gray-400">Understanding your business needs, requirements, and technical constraints</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-purple rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Planning</h3>
              <p className="text-gray-400">Technical architecture, timeline, and resource planning with detailed specifications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-400">Agile development with regular updates, testing, and stakeholder feedback</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-semibold mb-2">Deployment</h3>
              <p className="text-gray-400">Production deployment, testing, documentation, and ongoing support</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="neumorphism p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your requirements and see how I can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="tech-gradient px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity" data-testid="contact-services">
                  <i className="fas fa-calendar-alt mr-2"></i>Schedule Consultation
                </button>
              </Link>
              <Link href="/projects">
                <button className="glassmorphism px-8 py-4 rounded-lg hover:bg-electric-blue/20 transition-colors" data-testid="view-portfolio">
                  <i className="fas fa-folder-open mr-2"></i>View Portfolio
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
