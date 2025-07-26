import { Link } from "wouter";
import { Download, Handshake, Trophy, Users, ShoppingCart, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 pb-16 bg-background min-h-screen text-foreground" data-testid="about-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hi, I'm <span className="text-electric-blue">Meghwin</span> — <br />
            <span className="text-neon-purple">Architecting Tomorrow's Digital Solutions</span>
          </h1>
          <div className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            I'm a full-stack engineer who transforms complex business challenges into intelligent, automated systems using AI, modern web technologies, and seamless integrations.<br /><br />
            From building self-learning automations to crafting lightning-fast web applications, I specialize in creating digital experiences that think, adapt, and scale.<br /><br />
            <span className="text-neon-cyan font-semibold">Mission: Code. Automate. Innovate. Scale.</span>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
          <div>
            <div className="text-4xl font-bold text-electric-blue mb-2">60+</div>
            <div className="text-lg text-muted-foreground">Projects Delivered</div>
            <div className="text-sm text-muted-foreground mt-2">Enterprise Success</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-neon-cyan mb-2">7</div>
            <div className="text-lg text-muted-foreground">Countries Served</div>
            <div className="text-sm text-muted-foreground mt-2">Global Impact</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-neon-purple mb-2">40+</div>
            <div className="text-lg text-muted-foreground">Automations Built</div>
            <div className="text-sm text-muted-foreground mt-2">Process Optimization</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-matrix-green mb-2">100%</div>
            <div className="text-lg text-muted-foreground">Client Satisfaction</div>
            <div className="text-sm text-muted-foreground mt-2">Proven Results</div>
          </div>
        </div>

        {/* Terminal Animation */}
        <div className="bg-muted rounded-xl p-6 font-mono text-matrix-green text-left max-w-2xl mx-auto mb-16 shadow-lg">
          <div>&gt; initializing_system...</div>
          <div>&gt; loading_ai_capabilities... <span className="text-matrix-green">✓</span></div>
          <div>&gt; connecting_global_networks... <span className="text-matrix-green">✓</span></div>
          <div>&gt; deploying_smart_solutions... <span className="text-matrix-green">✓</span></div>
          <div>&gt; system_ready_for_innovation... <span className="text-matrix-green">✓</span></div>
          <br />
          <div><span className="text-neon-cyan">const</span> <span className="text-foreground">developer</span> = &#123;</div>
          <div className="pl-6">name: <span className="text-yellow-400">"Meghwin Dave"</span>,</div>
          <div className="pl-6">expertise: [<span className="text-yellow-400">"AI"</span>, <span className="text-yellow-400">"Automation"</span>, <span className="text-yellow-400">"Full-Stack"</span>],</div>
          <div className="pl-6">mission: <span className="text-yellow-400">"Building the intelligent future"</span></div>
          <div>&#125;;</div>
        </div>

        {/* Professional Journey */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Journey</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="neumorphism p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-electric-blue">Full-Stack AI Engineer</h3>
              <div className="text-muted-foreground mb-2 font-semibold">Intelligent Systems & Modern Web Applications</div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Architected AI-powered platforms serving 10,000+ users daily</li>
                <li>Built scalable React/Next.js applications with 99.9% uptime</li>
                <li>Integrated 50+ APIs and automated complex business workflows</li>
                <li>Delivered enterprise solutions across 7 countries</li>
              </ul>
            </div>
            <div className="neumorphism p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-neon-purple">Automation Architect</h3>
              <div className="text-muted-foreground mb-2 font-semibold">Process Optimization & Workflow Intelligence</div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Designed N8N automations reducing manual work by 80%</li>
                <li>Created intelligent chatbots handling 1000+ queries/day</li>
                <li>Built predictive analytics systems for business forecasting</li>
                <li>Implemented zero-touch workflows saving 40+ hours/week</li>
              </ul>
            </div>
            <div className="neumorphism p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-matrix-green">Technical Leader & Mentor</h3>
              <div className="text-muted-foreground mb-2 font-semibold">Team Development & Strategic Innovation</div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Led international development teams across 3 time zones</li>
                <li>Mentored 15+ junior developers to senior positions</li>
                <li>Established coding standards adopted company-wide</li>
                <li>Drove technical decisions for $2M+ projects</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Industry Expertise */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Industry Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="neumorphism p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-electric-blue">Manufacturing Excellence</h3>
              <div className="text-muted-foreground">Smart Factory Solutions<br />Custom ERP systems with IoT integration, real-time production monitoring, and predictive maintenance algorithms that reduced downtime by 35%.</div>
            </div>
            <div className="neumorphism p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-neon-purple">Healthcare Innovation</h3>
              <div className="text-muted-foreground">Patient-Centric Platforms<br />HIPAA-compliant management systems with AI-powered diagnostics support, automated appointment scheduling, and integrated telemedicine capabilities.</div>
            </div>
            <div className="neumorphism p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-neon-cyan">Retail Revolution</h3>
              <div className="text-muted-foreground">Omnichannel Commerce<br />AI-driven inventory optimization, dynamic pricing algorithms, and seamless POS integrations that boosted revenue by 25%.</div>
            </div>
            <div className="neumorphism p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-matrix-green">HR Technology</h3>
              <div className="text-muted-foreground">Workforce Intelligence<br />Automated talent acquisition pipelines, performance analytics dashboards, and smart scheduling systems managing 500+ employees efficiently.</div>
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Key Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="neumorphism p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-electric-blue">Global Impact & Scale</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Managed $3M+ project portfolios across Saudi Arabia and India</li>
                <li>Built cross-cultural teams delivering solutions in 4 languages</li>
                <li>Established development processes now used by 100+ developers</li>
                <li>Achieved 98% client retention rate through exceptional delivery</li>
              </ul>
            </div>
            <div className="neumorphism p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-neon-purple">Innovation & Efficiency</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Created automation frameworks saving clients 500+ hours monthly</li>
                <li>Developed AI solutions processing 1M+ data points daily</li>
                <li>Built reusable components used in 30+ production applications</li>
                <li>Pioneered integration patterns now industry best practices</li>
              </ul>
            </div>
            <div className="neumorphism p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-neon-cyan">Business Transformation</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Reduced operational costs by $500K+ annually for clients</li>
                <li>Improved process efficiency by 90% through smart automation</li>
                <li>Enabled 3x faster product launches with optimized workflows</li>
                <li>Generated 40% ROI increase through AI-driven insights</li>
              </ul>
            </div>
            <div className="neumorphism p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-matrix-green">Technical Excellence</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Designed systems handling 50,000+ concurrent users</li>
                <li>Maintained 99.95% uptime across all deployed applications</li>
                <li>Implemented security protocols protecting sensitive data</li>
                <li>Created documentation standards adopted across organizations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enhanced Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Enhanced Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="neumorphism p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-electric-blue">AI & Intelligence</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Machine Learning Implementation (TensorFlow, PyTorch)</li>
                <li>Natural Language Processing & ChatGPT Integration</li>
                <li>Predictive Analytics & Data Science</li>
                <li>Computer Vision & Image Processing</li>
                <li>AI-Powered Automation Workflows</li>
              </ul>
            </div>
            <div className="neumorphism p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-neon-purple">Modern Web Development</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>React.js Ecosystem (Redux, Context, Hooks)</li>
                <li>Next.js (SSR, API Routes, Performance Optimization)</li>
                <li>TypeScript & Modern JavaScript (ES6+)</li>
                <li>Tailwind CSS & Component Libraries</li>
                <li>Progressive Web Apps (PWA)</li>
              </ul>
            </div>
            <div className="neumorphism p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-neon-cyan">Backend & Infrastructure</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Python (Django, FastAPI, Flask)</li>
                <li>Database Design (PostgreSQL, MongoDB, Redis)</li>
                <li>RESTful APIs & GraphQL</li>
                <li>Microservices Architecture</li>
                <li>Cloud Platforms (AWS, DigitalOcean, Vercel)</li>
              </ul>
            </div>
            <div className="neumorphism p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-matrix-green">DevOps & Automation</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Docker & Kubernetes</li>
                <li>CI/CD Pipelines (GitHub Actions, Jenkins)</li>
                <li>Infrastructure as Code</li>
                <li>Monitoring & Logging (ELK Stack)</li>
                <li>Security & Performance Optimization</li>
              </ul>
            </div>
            <div className="neumorphism p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-pink-400">Integration & Automation</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>N8N Workflow Automation</li>
                <li>Zapier & Custom Integrations</li>
                <li>API Design & Third-party Connections</li>
                <li>Webhook Systems & Real-time Processing</li>
                <li>SaaS Platform Integrations (50+ platforms)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you need intelligent automation, scalable web applications, or strategic technical leadership, I'm here to turn your vision into reality.<br />
            Let's build something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="tech-gradient px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity" data-testid="start-project">
                Start Your Project
              </button>
            </Link>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="neumorphism p-6 rounded-xl">
              <div className="text-lg text-muted-foreground mb-4">"Meghwin delivered a complex automation system that saved us 40 hours weekly. His technical expertise and global perspective were invaluable."</div>
              <div className="text-sm text-muted-foreground font-semibold">— Sarah Chen, CTO, TechFlow Solutions</div>
            </div>
            <div className="neumorphism p-6 rounded-xl">
              <div className="text-lg text-muted-foreground mb-4">"The AI-powered dashboard Meghwin built transformed how we make business decisions. ROI was visible within the first month."</div>
              <div className="text-sm text-muted-foreground font-semibold">— Ahmed Al-Rashid, Operations Director, Gulf Industries</div>
            </div>
            <div className="neumorphism p-6 rounded-xl">
              <div className="text-lg text-muted-foreground mb-4">"Working with Meghwin was seamless despite the 12-hour time difference. His communication and delivery quality exceeded expectations."</div>
              <div className="text-sm text-muted-foreground font-semibold">— Maria Rodriguez, Product Manager, RetailNext</div>
            </div>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="text-center text-muted-foreground text-lg mt-16 border-t border-gray-700 pt-8">
          <div className="italic mb-4">"The best way to predict the future is to build it with intelligent code."<br />— Meghwin Dave</div>
          <div className="mb-2">Available for: <span className="text-foreground">Full-time opportunities</span> • <span className="text-foreground">Contract projects</span> • <span className="text-foreground">Technical consulting</span></div>
          <div>Response time: <span className="text-foreground">Within 24 hours</span> • Location: <span className="text-foreground">Global (Remote & On-site)</span></div>
        </div>
      </div>
    </div>
  );
}
