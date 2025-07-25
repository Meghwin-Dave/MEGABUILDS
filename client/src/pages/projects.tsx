import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type Project } from "@shared/schema";
import ProjectCard from "@/components/project-card";
import { Filter } from "lucide-react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  // Static project data for each tech stack combination
  const projects = [
    // AI + N8N
    {
      id: "ai-n8n-1",
      title: "Smart Invoice Automator",
      slug: "smart-invoice-automator",
      description: "An N8N-powered workflow that uses OpenAI to read, classify, and route invoices, then triggers automated reminders and payment updates across Slack, Email, and WhatsApp.",
      tagline: "Let AI chase your payments, not you!",
      technologies: ["AI", "N8N", "OpenAI", "Automation"],
      category: "automation",
      result: "Reduced manual invoice processing by 90%.",
      imageUrl: null,
      codeUrl: null,
      liveUrl: null,
      featured: false,
      createdAt: new Date(),
    },
    {
      id: "ai-n8n-2",
      title: "Predictive Lead Scoring Bot",
      slug: "predictive-lead-scoring-bot",
      description: "A no-code N8N pipeline that leverages AI models to score and segment leads in real-time, syncing results to your CRM and alerting sales teams instantly.",
      tagline: "Turn leads into gold with AI-driven insights.",
      technologies: ["AI", "N8N", "CRM"],
      category: "automation",
      result: "Doubled sales conversion rates.",
      imageUrl: null,
      codeUrl: null,
      liveUrl: null,
      featured: false,
      createdAt: new Date(),
    },
    // React.js + Next.js + Tailwind CSS
    {
      id: "react-next-tailwind-1",
      title: "Portfolio Galaxy",
      slug: "portfolio-galaxy",
      description: "A blazing-fast, SEO-optimized portfolio built with Next.js, React.js, and Tailwind CSS. Features dynamic theming, blog, and project showcase.",
      tagline: "Your story, beautifully told — at lightspeed.",
      technologies: ["React.js", "Next.js", "Tailwind CSS"],
      category: "saas",
      result: "Increased personal brand reach by 300%.",
      imageUrl: null,
      codeUrl: null,
      liveUrl: null,
      featured: false,
      createdAt: new Date(),
    },
    {
      id: "react-next-tailwind-2",
      title: "Startup Launchpad",
      slug: "startup-launchpad",
      description: "A SaaS starter kit with authentication, billing, and dashboard UI, crafted using Next.js, React.js, and Tailwind CSS for rapid MVPs.",
      tagline: "From idea to launch, pixel-perfect and scalable.",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "SaaS"],
      category: "saas",
      result: "Enabled 5 startups to launch MVPs in under 2 weeks.",
      imageUrl: null,
      codeUrl: null,
      liveUrl: null,
      featured: false,
      createdAt: new Date(),
    },
    // AI + React.js
    {
      id: "ai-react-1",
      title: "AI Content Wizard",
      slug: "ai-content-wizard",
      description: "A React.js app that uses OpenAI to generate, summarize, and rewrite content for blogs, emails, and social media, all in a beautiful UI.",
      tagline: "Create. Curate. Captivate — with a click.",
      technologies: ["AI", "React.js", "OpenAI"],
      category: "analytics",
      result: "Cut content creation time by 80%.",
      imageUrl: null,
      codeUrl: null,
      liveUrl: null,
      featured: false,
      createdAt: new Date(),
    },
    {
      id: "ai-react-2",
      title: "Smart Support Desk",
      slug: "smart-support-desk",
      description: "A customer support dashboard with AI-driven chat, ticket triage, and analytics, built using React.js and OpenAI APIs.",
      tagline: "24/7 answers, powered by intelligence.",
      technologies: ["AI", "React.js", "OpenAI"],
      category: "analytics",
      result: "Resolved 70% of tickets automatically.",
      imageUrl: null,
      codeUrl: null,
      liveUrl: null,
      featured: false,
      createdAt: new Date(),
    },
    // N8N + Next.js
    {
      id: "n8n-next-1",
      title: "Automated Newsletter Engine",
      slug: "automated-newsletter-engine",
      description: "A Next.js frontend for managing and previewing newsletters, with N8N automating content curation, scheduling, and delivery.",
      tagline: "Your content, delivered — hands-free.",
      technologies: ["N8N", "Next.js", "Automation"],
      category: "automation",
      result: "Saved 10+ hours per week on newsletter ops.",
      imageUrl: null,
      codeUrl: null,
      liveUrl: null,
      featured: false,
      createdAt: new Date(),
    },
    {
      id: "n8n-next-2",
      title: "E-commerce Order Sync",
      slug: "ecommerce-order-sync",
      description: "Integrates Shopify, WooCommerce, and ERP using N8N and Next.js, syncing orders, inventory, and notifications in real-time.",
      tagline: "No more manual order chaos!",
      technologies: ["N8N", "Next.js", "E-commerce"],
      category: "erp",
      result: "Reduced order sync errors to zero.",
      imageUrl: null,
      codeUrl: null,
      liveUrl: null,
      featured: false,
      createdAt: new Date(),
    },
    // Tailwind CSS + AI
    {
      id: "tailwind-ai-1",
      title: "AI Resume Builder",
      slug: "ai-resume-builder",
      description: "A Tailwind CSS-powered app that uses AI to generate, format, and optimize resumes for any industry.",
      tagline: "Stand out with style and smarts.",
      technologies: ["Tailwind CSS", "AI", "OpenAI"],
      category: "saas",
      result: "Helped 100+ users land interviews.",
      imageUrl: null,
      codeUrl: null,
      liveUrl: null,
      featured: false,
      createdAt: new Date(),
    },
    {
      id: "tailwind-ai-2",
      title: "Visual Data Explorer",
      slug: "visual-data-explorer",
      description: "Interactive dashboards built with Tailwind CSS and React.js, featuring AI-powered insights and visualizations.",
      tagline: "See your data, know your future.",
      technologies: ["Tailwind CSS", "AI", "React.js"],
      category: "analytics",
      result: "Enabled data-driven decisions for 3 companies.",
      imageUrl: null,
      codeUrl: null,
      liveUrl: null,
      featured: false,
      createdAt: new Date(),
    },
    // ERPNext Projects
    {
      id: "erpnext-equitrax",
      title: "EquiTraX",
      slug: "erpnext-equitrax",
      description: "A custom ERPNext app for managing equity, investments, and shareholder records. Automated dividend calculations, cap table management, and compliance reporting.",
      tagline: "Equity & investments, simplified.",
      technologies: ["ERPNext", "Frappe", "Finance", "Automation"],
      category: "erp",
      result: "Streamlined equity management for 5+ companies.",
      imageUrl: null,
      codeUrl: null,
      liveUrl: null,
      featured: false,
      createdAt: new Date(),
    },
    {
      id: "erpnext-manufacturing-simplification",
      title: "Manufacturing Simplification",
      slug: "erpnext-manufacturing-simplification",
      description: "ERPNext customization for manufacturing: automated BOMs, production planning, and real-time inventory tracking. Reduced manual steps and errors in shop floor operations.",
      tagline: "From raw material to finished goods—effortlessly.",
      technologies: ["ERPNext", "Frappe", "Manufacturing", "Automation"],
      category: "erp",
      result: "Cut production cycle time by 30%.",
      imageUrl: null,
      codeUrl: null,
      liveUrl: null,
      featured: false,
      createdAt: new Date(),
    },
    {
      id: "erpnext-chemical-sampling",
      title: "Chemical Industries Sampling",
      slug: "erpnext-chemical-sampling",
      description: "Custom ERPNext module for chemical industry: sample tracking, lab test integration, and compliance documentation. Ensures traceability and regulatory adherence.",
      tagline: "Lab samples tracked. Compliance assured.",
      technologies: ["ERPNext", "Frappe", "Chemical", "Compliance"],
      category: "erp",
      result: "Improved sample traceability and audit readiness.",
      imageUrl: null,
      codeUrl: null,
      liveUrl: null,
      featured: false,
      createdAt: new Date(),
    },
    {
      id: "erpnext-freight-calculation",
      title: "Freight Calculation for Export",
      slug: "erpnext-freight-calculation",
      description: "ERPNext extension for export businesses: automated freight cost calculation, multi-currency support, and export documentation generation.",
      tagline: "Export freight, calculated instantly.",
      technologies: ["ERPNext", "Frappe", "Logistics", "Export"],
      category: "erp",
      result: "Reduced export cost errors and sped up documentation.",
      imageUrl: null,
      codeUrl: null,
      liveUrl: null,
      featured: false,
      createdAt: new Date(),
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "erp", label: "ERP Systems" },
    { id: "saas", label: "SaaS Apps" },
    { id: "automation", label: "Automation" },
    { id: "analytics", label: "Analytics" },
  ];

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="pt-24 pb-16 bg-dark min-h-screen" data-testid="projects-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Software Projects That <span className="text-electric-blue">Think, Automate & Inspire</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of next-gen solutions — from AI automations to beautiful web apps — each with a unique story and impact.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`glassmorphism px-6 py-3 rounded-lg transition-colors ${
                selectedCategory === category.id
                  ? 'bg-electric-blue/20 text-electric-blue'
                  : 'hover:bg-electric-blue/10'
              }`}
              data-testid={`filter-${category.id}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No projects found</h3>
            <p className="text-gray-500">Try selecting a different category filter.</p>
          </div>
        )}

        {/* Code Snippet Showcase */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Code Excellence in Action</h2>
          <div className="neumorphism p-6 rounded-xl max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-400 font-mono">inventory_optimizer.py</span>
            </div>
            <div className="code-highlight p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <div className="text-purple-400 inline">class</div> <div className="text-blue-400 inline">InventoryOptimizer</div><div className="text-white inline">:</div><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<div className="text-purple-400 inline">def</div> <div className="text-blue-400 inline">calculate_reorder_point</div><div className="text-white inline">(self, item_code, lead_time):</div><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div className="text-gray-400"># Advanced forecasting algorithm</div><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div className="text-white inline">demand_forecast = self.</div><div className="text-blue-400 inline">predict_demand</div><div className="text-white inline">(item_code)</div><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div className="text-white inline">safety_stock = self.</div><div className="text-blue-400 inline">calculate_safety_stock</div><div className="text-white inline">(demand_forecast)</div><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div className="text-purple-400 inline">return</div> <div className="text-white inline">demand_forecast * lead_time + safety_stock</div>
            </div>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-8">Technologies I Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* Expanded tech list with icons before name */}
            <div className="glassmorphism p-3 rounded-lg text-center flex items-center justify-center gap-2"><i className="fab fa-python text-2xl text-blue-400"></i><span className="text-sm font-mono">Python</span></div>
            <div className="glassmorphism p-3 rounded-lg text-center flex items-center justify-center gap-2"><i className="fab fa-js-square text-2xl text-yellow-400"></i><span className="text-sm font-mono">JavaScript</span></div>
            <div className="glassmorphism p-3 rounded-lg text-center flex items-center justify-center gap-2"><i className="fab fa-react text-2xl text-blue-500"></i><span className="text-sm font-mono">React.js</span></div>
            <div className="glassmorphism p-3 rounded-lg text-center flex items-center justify-center gap-2"><i className="fab fa-react text-2xl text-gray-200"></i><span className="text-sm font-mono">Next.js</span></div>
            <div className="glassmorphism p-3 rounded-lg text-center flex items-center justify-center gap-2"><i className="fas fa-paint-brush text-2xl text-teal-400"></i><span className="text-sm font-mono">Tailwind CSS</span></div>
            <div className="glassmorphism p-3 rounded-lg text-center flex items-center justify-center gap-2"><i className="fas fa-database text-2xl text-green-400"></i><span className="text-sm font-mono">PostgreSQL</span></div>
            <div className="glassmorphism p-3 rounded-lg text-center flex items-center justify-center gap-2"><i className="fab fa-docker text-2xl text-blue-500"></i><span className="text-sm font-mono">Docker</span></div>
            <div className="glassmorphism p-3 rounded-lg text-center flex items-center justify-center gap-2"><i className="fab fa-git-alt text-2xl text-orange-400"></i><span className="text-sm font-mono">Git</span></div>
            <div className="glassmorphism p-3 rounded-lg text-center flex items-center justify-center gap-2"><i className="fab fa-figma text-2xl text-pink-400"></i><span className="text-sm font-mono">Figma</span></div>
            <div className="glassmorphism p-3 rounded-lg text-center flex items-center justify-center gap-2"><i className="fas fa-robot text-2xl text-purple-400"></i><span className="text-sm font-mono">OpenAI</span></div>
            <div className="glassmorphism p-3 rounded-lg text-center flex items-center justify-center gap-2"><i className="fas fa-network-wired text-2xl text-orange-400"></i><span className="text-sm font-mono">N8N</span></div>
            <div className="glassmorphism p-3 rounded-lg text-center flex items-center justify-center gap-2"><i className="fas fa-link text-2xl text-green-400"></i><span className="text-sm font-mono">LangChain</span></div>
            <div className="glassmorphism p-3 rounded-lg text-center flex items-center justify-center gap-2"><i className="fas fa-project-diagram text-2xl text-pink-400"></i><span className="text-sm font-mono">ERPNext</span></div>
            <div className="glassmorphism p-3 rounded-lg text-center flex items-center justify-center gap-2"><i className="fas fa-project-diagram text-2xl text-electric-blue"></i><span className="text-sm font-mono">Frappe</span></div>
            <div className="glassmorphism p-3 rounded-lg text-center flex items-center justify-center gap-2"><i className="fas fa-cloud text-2xl text-cyan-400"></i><span className="text-sm font-mono">AWS</span></div>
            <div className="glassmorphism p-3 rounded-lg text-center flex items-center justify-center gap-2"><i className="fas fa-chart-bar text-2xl text-yellow-400"></i><span className="text-sm font-mono">Power BI</span></div>
            <div className="glassmorphism p-3 rounded-lg text-center flex items-center justify-center gap-2"><i className="fas fa-database text-2xl text-blue-400"></i><span className="text-sm font-mono">MySQL</span></div>
            <div className="glassmorphism p-3 rounded-lg text-center flex items-center justify-center gap-2"><i className="fab fa-linux text-2xl text-gray-400"></i><span className="text-sm font-mono">Linux</span></div>
            <div className="glassmorphism p-3 rounded-lg text-center flex items-center justify-center gap-2"><i className="fas fa-server text-2xl text-green-400"></i><span className="text-sm font-mono">Nginx</span></div>
            <div className="glassmorphism p-3 rounded-lg text-center flex items-center justify-center gap-2"><i className="fas fa-cloud-upload-alt text-2xl text-neon-cyan"></i><span className="text-sm font-mono">Vercel</span></div>
            <div className="glassmorphism p-3 rounded-lg text-center flex items-center justify-center gap-2"><i className="fas fa-cloud-upload-alt text-2xl text-electric-blue"></i><span className="text-sm font-mono">DigitalOcean</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
