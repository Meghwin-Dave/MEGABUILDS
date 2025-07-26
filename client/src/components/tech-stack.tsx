export default function TechStack() {
  const techStack = [
    { name: "Python", icon: "fab fa-python", color: "text-blue-400", level: "EXPERT" },
    { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-400", level: "ADVANCED" },
    { name: "React.js", icon: "fab fa-react", color: "text-blue-500", level: "EXPERT" },
    { name: "Next.js", icon: "fab fa-react", color: "text-gray-200", level: "ADVANCED" },
    { name: "Tailwind CSS", icon: "fas fa-paint-brush", color: "text-teal-400", level: "EXPERT" },
    { name: "N8N", icon: "fas fa-network-wired", color: "text-orange-400", level: "EXPERT" },
    { name: "OpenAI", icon: "fas fa-robot", color: "text-purple-400", level: "ADVANCED" },
    { name: "LangChain", icon: "fas fa-link", color: "text-green-400", level: "INTERMEDIATE" },
    { name: "PostgreSQL", icon: "fas fa-database", color: "text-green-400", level: "EXPERT" },
    { name: "Docker", icon: "fab fa-docker", color: "text-blue-500", level: "ADVANCED" },
    { name: "Git", icon: "fab fa-git-alt", color: "text-orange-400", level: "EXPERT" },
    { name: "Figma", icon: "fab fa-figma", color: "text-pink-400", level: "INTERMEDIATE" },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden text-foreground" data-testid="tech-stack">
      {/* Background circuit pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Cpath d='M30 10v20M10 30h20M50 30h-20M30 50V30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text tech-gradient">Tech Arsenal</span>
          </h2>
          <p className="text-muted-foreground font-mono">A blend of code, automation, and design</p>
        </div>
        {/* Grouped Tech Stacks */}
        <div className="space-y-8">
          {/* Frontend Mastery */}
          <div className="glassmorphism p-6 rounded-xl">
            <div className="flex items-center mb-2 text-2xl font-bold"><span role="img" aria-label="frontend" className="mr-2">🚀</span>FRONTEND MASTERY</div>
            <div className="text-lg text-foreground font-mono">React.js - <span className="text-matrix-green">EXPERT</span> | Next.js - <span className="text-warning-orange">ADVANCED</span> | Tailwind CSS - <span className="text-matrix-green">EXPERT</span></div>
          </div>
          {/* Backend Power */}
          <div className="glassmorphism p-6 rounded-xl">
            <div className="flex items-center mb-2 text-2xl font-bold"><span role="img" aria-label="backend" className="mr-2">🔧</span>BACKEND POWER</div>
            <div className="text-lg text-foreground font-mono">Python - <span className="text-matrix-green">EXPERT</span> | PostgreSQL - <span className="text-matrix-green">EXPERT</span> | Docker - <span className="text-warning-orange">ADVANCED</span></div>
          </div>
          {/* AI & Automation */}
          <div className="glassmorphism p-6 rounded-xl">
            <div className="flex items-center mb-2 text-2xl font-bold"><span role="img" aria-label="ai" className="mr-2">🤖</span>AI & AUTOMATION</div>
            <div className="text-lg text-foreground font-mono">OpenAI - <span className="text-warning-orange">ADVANCED</span> | N8N - <span className="text-matrix-green">EXPERT</span> | Langchain - <span className="text-warning-orange">INTERMEDIATE</span></div>
          </div>
          {/* ERP & Frappe */}
          <div className="glassmorphism p-6 rounded-xl">
            <div className="flex items-center mb-2 text-2xl font-bold"><span role="img" aria-label="erp" className="mr-2">🏢</span>ERPNEXT & FRAPPE</div>
            <div className="text-lg text-foreground font-mono">ERPNext - <span className="text-matrix-green">EXPERT</span> | Frappe - <span className="text-matrix-green">EXPERT</span></div>
          </div>
          {/* Design & Tools */}
          <div className="glassmorphism p-6 rounded-xl">
            <div className="flex items-center mb-2 text-2xl font-bold"><span role="img" aria-label="design" className="mr-2">🎨</span>DESIGN & TOOLS</div>
            <div className="text-lg text-foreground font-mono">Figma - <span className="text-warning-orange">INTERMEDIATE</span> | Git - <span className="text-matrix-green">EXPERT</span></div>
          </div>
        </div>
        {/* Achievement Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Achievement Badges</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center glassmorphism px-4 py-2 rounded-lg font-mono text-lg"><span className="mr-2">🏆</span>5+ Years Python</div>
            <div className="inline-flex items-center glassmorphism px-4 py-2 rounded-lg font-mono text-lg"><span className="mr-2">⚡</span>100+ React Components</div>
            <div className="inline-flex items-center glassmorphism px-4 py-2 rounded-lg font-mono text-lg"><span className="mr-2">🚀</span>50+ N8N Workflows</div>
            <div className="inline-flex items-center glassmorphism px-4 py-2 rounded-lg font-mono text-lg"><span className="mr-2">📊</span>20+ Database Designs</div>
            <div className="inline-flex items-center glassmorphism px-4 py-2 rounded-lg font-mono text-lg"><span className="mr-2">🏢</span>ERPNext/Frappe: 6+ Domains, 10+ Custom Apps</div>
          </div>
        </div>
      </div>
    </section>
  );
}
