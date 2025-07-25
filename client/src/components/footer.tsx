import { Link } from "wouter";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-tertiary py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="text-2xl font-mono font-bold text-electric-blue mb-4">
              &lt;buildwithmegh /&gt;
            </div>
            <p className="text-gray-400 mb-4">
              Building scalable software solutions that solve real problems. From ERP systems to SaaS platforms, 
              I help businesses automate and optimize their operations.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/meghwin-dave-25ba43221" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-electric-blue rounded-lg flex items-center justify-center hover:bg-electric-blue-dark transition-colors"
                data-testid="social-linkedin"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-tech-gray rounded-lg flex items-center justify-center hover:bg-tech-gray-light transition-colors"
                data-testid="social-github"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-neon-purple rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                data-testid="social-twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services" className="hover:text-electric-blue transition-colors" data-testid="footer-services">Full-Stack Development</Link></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">ERP Customization</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">API Integration</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Project Management</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/blog" className="hover:text-electric-blue transition-colors" data-testid="footer-blog">Technical Blog</Link></li>
              <li><Link href="/projects" className="hover:text-electric-blue transition-colors" data-testid="footer-projects">Case Studies</Link></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Code Samples</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Documentation</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Meghwin Dave. All rights reserved. Built with passion for clean code and elegant solutions.</p>
        </div>
      </div>
    </footer>
  );
}
