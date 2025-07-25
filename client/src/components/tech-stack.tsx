export default function TechStack() {
  const techStack = [
    { name: "Python", icon: "fab fa-python", color: "text-blue-400", level: "EXPERT" },
    { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-400", level: "ADVANCED" },
    { name: "PostgreSQL", icon: "fas fa-database", color: "text-green-400", level: "EXPERT" },
    { name: "Git", icon: "fab fa-git-alt", color: "text-orange-400", level: "EXPERT" },
    { name: "Docker", icon: "fab fa-docker", color: "text-blue-500", level: "ADVANCED" },
    { name: "Django", icon: "fas fa-cogs", color: "text-purple-400", level: "EXPERT" },
    { name: "DevOps", icon: "fas fa-cloud", color: "text-cyan-400", level: "ADVANCED" },
    { name: "ERPNext", icon: "fas fa-project-diagram", color: "text-pink-400", level: "EXPERT" },
  ];

  return (
    <section className="py-20 bg-dark-secondary relative overflow-hidden" data-testid="tech-stack">
      {/* Background circuit pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Cpath d='M30 10v20M10 30h20M50 30h-20M30 50V30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 terminal-border rounded-lg bg-dark-tertiary font-mono text-sm text-matrix-green">
            <span className="text-neon-cyan">system.load</span>(<span className="text-yellow-400">"elite_arsenal"</span>);
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Elite Tech <span className="text-transparent bg-clip-text tech-gradient">Arsenal</span>
          </h2>
          <p className="text-gray-400 font-mono">Advanced tools for enterprise-grade solutions</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {techStack.map((tech, index) => (
            <div 
              key={tech.name}
              className="neumorphism p-6 rounded-xl text-center group hover:cyber-glow transition-all duration-500 transform hover:scale-110 hover:-translate-y-2"
              style={{animationDelay: `${index * 0.1}s`}}
              data-testid={`tech-${tech.name.toLowerCase()}`}
            >
              <div className="relative">
                <i className={`${tech.icon} text-4xl ${tech.color} mb-3 group-hover:animate-pulse-glow transition-all duration-300`}></i>
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-matrix-green rounded-full animate-pulse group-hover:bg-electric-blue"></div>
              </div>
              <div className="text-sm font-mono text-white mb-2 group-hover:text-electric-blue transition-colors">{tech.name}</div>
              <div className={`text-xs font-mono uppercase tracking-wider ${tech.level === 'EXPERT' ? 'text-matrix-green' : 'text-warning-orange'}`}>
                {tech.level}
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
        
        {/* Command line style footer */}
        <div className="mt-16 text-center">
          <div className="inline-block glassmorphism p-4 rounded-lg font-mono text-sm">
            <span className="text-matrix-green">$</span> <span className="text-white">deployment.status</span> 
            <span className="text-neon-cyan"> --production</span>
            <span className="text-gray-400 ml-4">█</span>
          </div>
        </div>
      </div>
    </section>
  );
}
