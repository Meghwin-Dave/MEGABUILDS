import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type Project } from "@shared/schema";
import ProjectCard from "@/components/project-card";
import { Filter } from "lucide-react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const { data: projects = [], isLoading } = useQuery<Project[]>({
    queryKey: ['/api/projects', selectedCategory],
    enabled: true,
  });

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "erp", label: "ERP Systems" },
    { id: "saas", label: "SaaS Apps" },
    { id: "automation", label: "Automation" },
    { id: "analytics", label: "Analytics" },
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  if (isLoading) {
    return (
      <div className="pt-24 pb-16 bg-dark min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-electric-blue mx-auto"></div>
            <p className="mt-4 text-gray-400">Loading projects...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 bg-dark min-h-screen" data-testid="projects-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Software Projects That Delivered <span className="text-electric-blue">Business Value</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of real-world solutions that solved complex business problems and delivered measurable results.
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
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.map((project) => (
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
            {['Python', 'Django', 'JavaScript', 'PostgreSQL', 'Docker', 'Git', 'ERPNext', 'Frappe', 'REST APIs', 'DevOps', 'Linux', 'Nginx'].map((tech) => (
              <div key={tech} className="glassmorphism p-3 rounded-lg text-center">
                <span className="text-sm font-mono">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
