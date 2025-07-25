import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "About" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glassmorphism backdrop-blur-xl bg-dark/95 border-b border-electric-blue/20' 
          : 'glassmorphism backdrop-blur-sm'
      }`}
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-mono font-bold text-electric-blue hover:cyber-glow transition-all duration-300 transform hover:scale-105" data-testid="logo">
            <span className="text-neon-cyan">&lt;</span>buildwithmegh<span className="text-neon-cyan"> /&gt;</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-4 py-2 font-mono text-sm uppercase tracking-wider transition-all duration-300 hover:cyber-glow ${
                  location === item.path 
                    ? 'text-electric-blue cyber-glow' 
                    : 'text-gray-300 hover:text-electric-blue'
                }`}
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {location === item.path && (
                  <div className="absolute inset-0 terminal-border rounded-lg -z-10"></div>
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full border border-electric-blue/40 bg-dark-secondary hover:bg-dark-tertiary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-electric-blue/60"
              aria-label="Toggle theme"
              data-testid="theme-toggle"
            >
              {theme === 'dark' ? <Sun size={20} className="text-electric-blue" /> : <Moon size={20} className="text-neon-purple" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4" data-testid="mobile-menu">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`hover:text-electric-blue transition-colors duration-300 ${
                    location === item.path ? 'text-electric-blue' : 'text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Link>
              ))}
              {/* Theme Toggle Button for Mobile */}
              <button
                onClick={toggleTheme}
                className="mt-2 p-2 rounded-full border border-electric-blue/40 bg-dark-secondary hover:bg-dark-tertiary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-electric-blue/60 self-start"
                aria-label="Toggle theme"
                data-testid="theme-toggle-mobile"
              >
                {theme === 'dark' ? <Sun size={20} className="text-electric-blue" /> : <Moon size={20} className="text-neon-purple" />}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
