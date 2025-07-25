import { Link } from "wouter";
import { Calendar, Code, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative particle-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-secondary to-dark-tertiary opacity-95"></div>
      
      {/* Cyber grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Floating tech elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-electric-blue rounded-full animate-pulse-glow"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-neon-purple rounded-full animate-pulse-glow" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-matrix-green rounded-full animate-pulse-glow" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-neon-cyan rounded-full animate-pulse-glow" style={{animationDelay: '0.5s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Code snippet decoration */}
          <div className="inline-block mb-4 px-4 py-2 terminal-border rounded-lg bg-dark-tertiary font-mono text-sm text-matrix-green">
            <span className="text-neon-cyan">const</span> <span className="text-white">developer</span> = <span className="text-yellow-400">"Meghwin Dave"</span>;
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" data-testid="hero-title">
            <span className="block">From Concept to Launch</span>
            <span className="block text-transparent bg-clip-text tech-gradient animate-pulse-glow mb-4">Bringing Your Digital Vision to Life</span>
            <span className="block mt-4 text-3xl text-neon-purple">through</span>
            <span className="block text-4xl text-neon-cyan font-bold">AI-Enhanced Development & Automation</span>
          </h1>
          {/* Add extra margin below headline to prevent overlap */}
          <div className="mb-10"></div>
          <div className="glassmorphism p-6 rounded-2xl mb-8 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed text-center mb-4" data-testid="hero-subtitle">
              Every project powered by:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
              <div className="flex items-center gap-2"><span role="img" aria-label="AI">🧠</span> <span>Smart AI Logic</span></div>
              <div className="flex items-center gap-2"><span role="img" aria-label="Automation">🔄</span> <span>Automated Workflows</span></div>
              <div className="flex items-center gap-2"><span role="img" aria-label="Web Tech">💻</span> <span>Modern Web Tech</span></div>
              <div className="flex items-center gap-2"><span role="img" aria-label="Architecture">🏗️</span> <span>Solid Architecture</span></div>
              <div className="flex items-center gap-2"><span role="img" aria-label="Business">📈</span> <span>Business Systems</span></div>
              <div className="flex items-center gap-2"><span role="img" aria-label="Databases">🗄️</span> <span>Robust Databases</span></div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link href="/contact">
              <button className="tech-gradient px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 transform cyber-glow" data-testid="book-call-hero">
                <Calendar className="inline mr-3 w-6 h-6" />Let's Build Together
              </button>
            </Link>
            <Link href="/projects">
              <button className="terminal-border px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 transform glassmorphism hover:cyber-glow" data-testid="view-work-hero">
                <Code className="inline mr-3 w-6 h-6" />See What's Possible
              </button>
            </Link>
          </div>
          
          {/* Elite Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            <div className="neumorphism p-6 rounded-xl text-center animate-float group hover:cyber-glow transition-all duration-500" data-testid="stat-experience">
              <div className="text-4xl font-bold text-electric-blue mb-2 group-hover:animate-pulse-glow">5+</div>
              <div className="text-sm text-gray-300 font-mono">Years Building Partnerships</div>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent mt-2 opacity-50"></div>
            </div>
            <div className="neumorphism p-6 rounded-xl text-center animate-float group hover:cyber-glow transition-all duration-500" style={{animationDelay: '0.2s'}} data-testid="stat-projects">
              <div className="text-4xl font-bold text-neon-cyan mb-2 group-hover:animate-pulse-glow">40+</div>
              <div className="text-sm text-gray-300 font-mono">Enterprise Wins</div>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mt-2 opacity-50"></div>
            </div>
            <div className="neumorphism p-6 rounded-xl text-center animate-float group hover:cyber-glow transition-all duration-500" style={{animationDelay: '0.4s'}} data-testid="stat-global">
              <div className="text-4xl font-bold text-neon-purple mb-2 group-hover:animate-pulse-glow">7</div>
              <div className="text-sm text-gray-300 font-mono">Countries Conquered</div>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent mt-2 opacity-50"></div>
            </div>
            <div className="neumorphism p-6 rounded-xl text-center animate-float group hover:cyber-glow transition-all duration-500" style={{animationDelay: '0.6s'}} data-testid="stat-agile">
              <div className="text-4xl font-bold text-matrix-green mb-2 group-hover:animate-pulse-glow">60+</div>
              <div className="text-sm text-gray-300 font-mono">Projects Delivered</div>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-matrix-green to-transparent mt-2 opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
