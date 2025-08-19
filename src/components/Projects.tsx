import { ExternalLink, Github, Brain, BarChart3, MessageSquare, Database, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Employee Turnover Analytics",
      description: "ML model predicting employee attrition using advanced algorithms and feature engineering. Achieved 85% accuracy in predicting turnover patterns.",
      icon: Brain,
      technologies: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
      category: "Machine Learning",
      highlights: ["Predictive Modeling", "Feature Engineering", "Data Analysis"]
    },
    {
      title: "Sales Analysis Dashboard",
      description: "Comprehensive sales trend analysis using Python visualization libraries. Interactive dashboard for business insights and KPI tracking.",
      icon: BarChart3,
      technologies: ["Python", "Matplotlib", "Seaborn", "Plotly"],
      category: "Data Visualization",
      highlights: ["Interactive Dashboard", "Trend Analysis", "Business Intelligence"]
    },
    {
      title: "ChatGPT-Based Interactive Storytelling",
      description: "AI-powered storytelling application leveraging generative AI capabilities. Creates dynamic, personalized narrative experiences.",
      icon: MessageSquare,
      technologies: ["Python", "OpenAI API", "Generative AI", "NLP"],
      category: "Artificial Intelligence",
      highlights: ["Generative AI", "NLP", "Interactive Design"]
    },
    {
      title: "Zomato Data Analysis",
      description: "Comprehensive dataset analysis for restaurant insights including ratings, cuisine preferences, and geographical patterns.",
      icon: TrendingUp,
      technologies: ["Python", "Pandas", "NumPy", "Data Mining"],
      category: "Data Analysis",
      highlights: ["Statistical Analysis", "Data Mining", "Insights Generation"]
    },
    {
      title: "ScienceQtech Employee Database Management",
      description: "SQL optimization project for performance reviews and employee management. Improved query performance by 40%.",
      icon: Database,
      technologies: ["SQL", "Database Optimization", "Performance Tuning"],
      category: "Database Management",
      highlights: ["Query Optimization", "Performance Tuning", "Database Design"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my portfolio of data science and machine learning projects that showcase 
              practical applications of AI and analytics.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl shadow-card hover-lift overflow-hidden group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="px-6 pb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="px-6 pb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="px-6 pb-6 flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 animate-fade-in">
            <p className="text-lg text-muted-foreground mb-6">
              Interested in collaborating on data science projects?
            </p>
            <Button size="lg" asChild className="hover-lift">
              <a href="mailto:drishtikori@email.com" className="flex items-center gap-2">
                Let's Work Together
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;