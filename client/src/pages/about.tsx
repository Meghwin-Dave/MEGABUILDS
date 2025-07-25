import { Link } from "wouter";
import { Download, Handshake, Trophy, Users, ShoppingCart, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 pb-16 bg-dark min-h-screen" data-testid="about-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hi, I'm <span className="text-electric-blue">Meghwin</span> — <br />
              A Developer Who Thinks Like a <span className="text-neon-purple">Product Owner</span>
            </h1>
            <div className="text-xl text-gray-300 mb-8 leading-relaxed bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg border-l-4 border-electric-blue">
              I'm a full-stack software engineer and agile project manager with a passion for building systems that 
              <span className="text-electric-blue font-semibold"> actually solve problems</span> — not just tick boxes.
            </div>
            <p className="text-gray-300 mb-8">
              Over the last 5 years, I've worked as a Python/Django Developer, ERPNext/Frappe Consultant, 
              Project Manager for 10+ member teams, and API Integrator & Automation Architect.
            </p>

            {/* Experience Highlights */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="glassmorphism p-4 rounded-lg" data-testid="stat-projects-about">
                <div className="text-2xl font-bold text-electric-blue mb-2">20+</div>
                <div className="text-sm text-gray-400">Successful Projects</div>
              </div>
              <div className="glassmorphism p-4 rounded-lg" data-testid="stat-global-about">
                <div className="text-2xl font-bold text-neon-cyan mb-2">Global</div>
                <div className="text-sm text-gray-400">Client Base</div>
              </div>
              <div className="glassmorphism p-4 rounded-lg" data-testid="stat-industries">
                <div className="text-2xl font-bold text-neon-purple mb-2">5+</div>
                <div className="text-sm text-gray-400">Industries Served</div>
              </div>
              <div className="glassmorphism p-4 rounded-lg" data-testid="stat-leadership">
                <div className="text-2xl font-bold text-green-400 mb-2">Expert</div>
                <div className="text-sm text-gray-400">Technical Leadership</div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="glassmorphism px-6 py-3 rounded-lg hover:bg-electric-blue/20 transition-colors" data-testid="download-resume">
                <Download className="inline mr-2 w-5 h-5" />Download Resume
              </button>
              <Link href="/contact">
                <button className="neumorphism px-6 py-3 rounded-lg hover:bg-gray-700/50 transition-colors" data-testid="work-together">
                  <Handshake className="inline mr-2 w-5 h-5" />Let's Work Together
                </button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=800" 
              alt="Advanced software architecture diagrams" 
              className="rounded-2xl shadow-2xl animate-float"
            />
            <div className="absolute -top-4 -right-4 glassmorphism p-4 rounded-xl">
              <div className="text-sm font-mono text-electric-blue">console.log("Hello World!");</div>
            </div>
            <div className="absolute -bottom-4 -left-4 glassmorphism p-4 rounded-xl">
              <div className="text-sm font-mono text-neon-purple">Building the future...</div>
            </div>
          </div>
        </div>

        {/* Professional Journey */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Journey</h2>
          <div className="space-y-8">
            <div className="neumorphism p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-electric-blue rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-code text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Python/Django Developer</h3>
                  <p className="text-gray-400">Building scalable web applications and REST APIs</p>
                </div>
              </div>
              <p className="text-gray-300">
                Specialized in backend-heavy applications with complex business logic, admin dashboards, 
                and analytics systems. Focus on clean, maintainable code and robust architecture.
              </p>
            </div>

            <div className="neumorphism p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-neon-purple rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-cogs text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold">ERPNext/Frappe Consultant</h3>
                  <p className="text-gray-400">Custom ERP solutions and business process automation</p>
                </div>
              </div>
              <p className="text-gray-300">
                Deep expertise in ERPNext customizations, workflow automation, and integration with 
                third-party systems. Helped businesses streamline operations and reduce manual work.
              </p>
            </div>

            <div className="neumorphism p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-neon-cyan rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-users text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Project Manager (10+ member teams)</h3>
                  <p className="text-gray-400">Leading cross-functional development teams</p>
                </div>
              </div>
              <p className="text-gray-300">
                Agile project management with sprint planning, stakeholder communication, and technical 
                specification development. Successfully delivered complex projects on time and within budget.
              </p>
            </div>

            <div className="neumorphism p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-plug text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold">API Integrator & Automation Architect</h3>
                  <p className="text-gray-400">Connecting systems and automating workflows</p>
                </div>
              </div>
              <p className="text-gray-300">
                Design and implement API integrations, webhook systems, and automated workflows. 
                Expertise in payment gateways, CRM integrations, and real-time data pipelines.
              </p>
            </div>
          </div>
        </div>

        {/* Credentials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Credentials & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="neumorphism p-6 rounded-xl text-center">
              <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Manufacturing</h3>
              <p className="text-sm text-gray-400">Custom ERP solutions for production optimization</p>
            </div>
            <div className="neumorphism p-6 rounded-xl text-center">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">HR Systems</h3>
              <p className="text-sm text-gray-400">Automated workforce management platforms</p>
            </div>
            <div className="neumorphism p-6 rounded-xl text-center">
              <ShoppingCart className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Retail</h3>
              <p className="text-sm text-gray-400">Point-of-sale and inventory management</p>
            </div>
            <div className="neumorphism p-6 rounded-xl text-center">
              <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Healthcare</h3>
              <p className="text-sm text-gray-400">Patient management and compliance systems</p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Key Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="neumorphism p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-electric-blue">International Experience</h3>
              <p className="text-gray-300">
                Worked onsite in Saudi Arabia with international clients, managing complex ERP implementations 
                and leading multicultural development teams across different time zones.
              </p>
            </div>
            <div className="neumorphism p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-neon-purple">Mentorship & Leadership</h3>
              <p className="text-gray-300">
                Mentored junior developers, conducted technical training sessions, and established 
                best practices for code quality, testing, and deployment processes.
              </p>
            </div>
            <div className="neumorphism p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-neon-cyan">Business Impact</h3>
              <p className="text-gray-300">
                Delivered solutions that reduced operational costs by 15-30%, improved process efficiency 
                by 90%, and enabled businesses to scale their operations effectively.
              </p>
            </div>
            <div className="neumorphism p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-green-400">Technical Innovation</h3>
              <p className="text-gray-300">
                Pioneered automation solutions, custom integrations, and scalable architectures that 
                became templates for future projects and industry best practices.
              </p>
            </div>
          </div>
        </div>

        {/* Skills & Technologies */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Core Skills & Technologies</h2>
          <div className="neumorphism p-8 rounded-xl">
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-xl font-bold mb-4 text-electric-blue">Development</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Python & Django</li>
                  <li>• JavaScript & React</li>
                  <li>• REST API Architecture</li>
                  <li>• Database Design (PostgreSQL)</li>
                  <li>• Version Control (Git)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-neon-purple">ERP & Integration</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• ERPNext/Frappe Framework</li>
                  <li>• Custom Module Development</li>
                  <li>• Workflow Automation</li>
                  <li>• Third-party Integrations</li>
                  <li>• Business Process Mapping</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-neon-cyan">DevOps & Management</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Docker & Containerization</li>
                  <li>• CI/CD Pipelines</li>
                  <li>• Agile Project Management</li>
                  <li>• Team Leadership</li>
                  <li>• Client Communication</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
