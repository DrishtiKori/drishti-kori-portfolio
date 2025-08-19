import { 
  Code, 
  Database, 
  BarChart3, 
  Brain, 
  Globe, 
  Users,
  Clock,
  Target,
  MessageCircle,
  CheckCircle,
  Crown,
  Lightbulb
} from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 90, icon: Code },
    { name: "Machine Learning", level: 85, icon: Brain },
    { name: "SQL", level: 88, icon: Database },
    { name: "Tableau", level: 82, icon: BarChart3 },
    { name: "Power BI", level: 80, icon: BarChart3 },
    { name: "Django", level: 75, icon: Globe },
    { name: "Pandas", level: 88, icon: Code },
    { name: "NumPy", level: 85, icon: Code },
    { name: "Scikit-learn", level: 83, icon: Brain },
    { name: "Matplotlib", level: 80, icon: BarChart3 },
    { name: "Seaborn", level: 80, icon: BarChart3 },
    { name: "Generative AI", level: 78, icon: Brain },
    { name: "HTML/CSS", level: 85, icon: Globe }
  ];

  const softSkills = [
    { name: "Communication", icon: MessageCircle },
    { name: "Problem-Solving", icon: Lightbulb },
    { name: "Teamwork", icon: Users },
    { name: "Time Management", icon: Clock },
    { name: "Adaptability", icon: Target },
    { name: "Attention to Detail", icon: CheckCircle },
    { name: "Leadership", icon: Crown }
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Native" }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical proficiencies and soft skills 
              developed through education and hands-on project experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Technical Skills */}
            <div className="lg:col-span-2 animate-slide-up">
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <Code className="h-6 w-6 text-primary" />
                Technical Skills
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="bg-card p-5 rounded-lg shadow-card hover-lift">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <skill.icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Proficiency</span>
                        <span className="text-primary font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills & Languages */}
            <div className="space-y-12 animate-slide-up">
              {/* Soft Skills */}
              <div>
                <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  Soft Skills
                </h3>
                
                <div className="space-y-3">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="bg-card p-4 rounded-lg shadow-card hover-lift">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <skill.icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                  <Globe className="h-6 w-6 text-primary" />
                  Languages
                </h3>
                
                <div className="space-y-3">
                  {languages.map((language, index) => (
                    <div key={index} className="bg-card p-4 rounded-lg shadow-card hover-lift">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{language.name}</span>
                        <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          {language.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Summary */}
              <div className="bg-gradient-hero text-white p-6 rounded-xl shadow-soft">
                <h4 className="text-lg font-semibold mb-3">Skills Summary</h4>
                <div className="space-y-2 text-sm opacity-90">
                  <p>• 3+ years experience with Python & Data Science</p>
                  <p>• Certified in Machine Learning & Generative AI</p>
                  <p>• Proficient in data visualization tools</p>
                  <p>• Strong analytical and problem-solving abilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;