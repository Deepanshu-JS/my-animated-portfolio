import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ExternalLink, Github, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'react' | 'javascript' | 'figma';
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A modern React dashboard with real-time analytics, charts, and inventory management.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    liveUrl: "#",
    githubUrl: "#",
    category: "react"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Drag-and-drop task manager with team collaboration features and real-time updates.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tags: ["React", "Redux", "Node.js", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
    category: "react"
  },
  {
    id: 3,
    title: "Weather Application",
    description: "Beautiful weather app with location-based forecasts and animated weather icons.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
    tags: ["JavaScript", "API Integration", "CSS3"],
    liveUrl: "#",
    githubUrl: "#",
    category: "javascript"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Converted Figma design to pixel-perfect responsive React website.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    tags: ["Figma", "React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    category: "figma"
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with data visualization.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["React", "Chart.js", "REST API"],
    liveUrl: "#",
    githubUrl: "#",
    category: "react"
  },
  {
    id: 6,
    title: "Landing Page Design",
    description: "High-converting landing page converted from Figma with smooth animations.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop",
    tags: ["Figma to Code", "React", "GSAP"],
    liveUrl: "#",
    githubUrl: "#",
    category: "figma"
  }
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'react', label: 'React' },
  { id: 'javascript', label: 'JavaScript' },
  { id: 'figma', label: 'Figma to Code' },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Texture overlay */}
      <div className="absolute inset-0 texture-overlay pointer-events-none" />
      
      {/* Spotlight effect */}
      <div className="absolute inset-0 spotlight pointer-events-none" />
      
      <Navigation />
      
      <main className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-marker text-4xl md:text-6xl text-foreground mb-4">
            My <span className="text-primary">Projects</span>
          </h1>
          <p className="font-handwritten text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work in React, JavaScript, and Figma to Code conversions
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`
                px-6 py-2 rounded-full font-handwritten text-lg
                transition-all duration-300 ease-out
                ${activeCategory === cat.id 
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105' 
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-muted/30 rounded-xl overflow-hidden border border-border/50
                         hover:border-primary/50 transition-all duration-500 ease-out
                         hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className={`
                  absolute inset-0 bg-background/90 backdrop-blur-sm
                  flex items-center justify-center gap-4
                  transition-opacity duration-300
                  ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}
                `}>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-primary flex items-center justify-center
                                 text-primary-foreground hover:scale-110 transition-transform"
                    >
                      <Eye className="w-5 h-5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center
                                 text-background hover:scale-110 transition-transform"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="font-marker text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="font-handwritten text-muted-foreground text-lg mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-handwritten"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="font-handwritten text-2xl text-muted-foreground">
              No projects in this category yet
            </p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
