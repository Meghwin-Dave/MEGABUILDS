import { type Project } from "@shared/schema";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'erp':
        return 'bg-electric-blue/20 text-electric-blue';
      case 'automation':
        return 'bg-neon-purple/20 text-neon-purple';
      case 'saas':
        return 'bg-neon-cyan/20 text-neon-cyan';
      case 'analytics':
        return 'bg-orange-500/20 text-orange-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getTechColor = (tech: string) => {
    switch (tech.toLowerCase()) {
      case 'python':
        return 'bg-green-500/20 text-green-400';
      case 'javascript':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'django':
        return 'bg-green-500/20 text-green-400';
      case 'frappe':
        return 'bg-electric-blue/20 text-electric-blue';
      case 'erpnext':
        return 'bg-electric-blue/20 text-electric-blue';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="neumorphism p-8 rounded-2xl group hover:bg-gray-800/50 transition-all duration-500 transform hover:scale-105" data-testid={`project-${project.slug}`}>
      {project.imageUrl && (
        <img 
          src={`${project.imageUrl}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400`}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg mb-6"
        />
      )}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <div className="flex gap-2">
          <span className={`px-3 py-1 text-xs rounded-full ${getCategoryColor(project.category)}`}>
            {project.category}
          </span>
          {project.technologies.slice(0, 1).map((tech) => (
            <span key={tech} className={`px-3 py-1 text-xs rounded-full ${getTechColor(tech)}`}>
              {tech}
            </span>
          ))}
        </div>
      </div>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-400">
          <span className="font-semibold text-green-400">Result:</span> {project.result}
        </div>
        <div className="flex gap-2">
          {project.codeUrl && (
            <a 
              href={project.codeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="glassmorphism px-4 py-2 rounded-lg text-sm hover:bg-electric-blue/20 transition-colors"
              data-testid={`project-code-${project.slug}`}
            >
              <Github className="inline mr-2 w-4 h-4" />View Code
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="glassmorphism px-4 py-2 rounded-lg text-sm hover:bg-electric-blue/20 transition-colors"
              data-testid={`project-demo-${project.slug}`}
            >
              <ExternalLink className="inline mr-2 w-4 h-4" />Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
