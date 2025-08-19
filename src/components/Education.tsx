import { GraduationCap, Calendar, MapPin } from 'lucide-react';
const Education = () => {
  const education = [{
    degree: "Bachelor of Computer Applications",
    institution: "Tilak Maharashtra Vidyapeeth",
    location: "Pune",
    year: "2025",
    status: "Pursuing"
  }, {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Guru Nanak Khalsa College",
    location: "Matunga",
    year: "2022",
    status: "Completed"
  }];
  const certifications = [{
    title: "Masters Program - Data Scientist",
    provider: "Simplilearn & IBM",
    year: "2025",
    category: "Data Science"
  }, {
    title: "Data Science with Python",
    provider: "Certified Training",
    year: "2024",
    category: "Programming"
  }, {
    title: "SQL Training",
    provider: "Professional Certification",
    year: "2024",
    category: "Database"
  }, {
    title: "Deloitte Australia – Data Analytics Core",
    provider: "Deloitte",
    year: "2024",
    category: "Analytics"
  }, {
    title: "Essentials of Generative AI",
    provider: "AI Certification",
    year: "2024",
    category: "Artificial Intelligence"
  }, {
    title: "Generative AI & ChatGPT",
    provider: "Advanced AI Course",
    year: "2024",
    category: "AI/ML"
  }, {
    title: "Programming Essentials",
    provider: "Technical Certification",
    year: "2024",
    category: "Programming"
  }];
  return <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => <div key={index} className="bg-card p-6 rounded-xl shadow-card hover-lift">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-xl font-semibold text-foreground">
                        {edu.degree}
                      </h4>
                      
                    </div>
                    
                    <p className="text-lg text-primary font-medium mb-2">
                      {edu.institution}
                    </p>
                    
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {edu.year}
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>

            {/* Certifications */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => <div key={index} className="bg-card p-5 rounded-lg shadow-card hover-lift">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground leading-snug">
                        {cert.title}
                      </h4>
                      <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full whitespace-nowrap ml-2">
                        {cert.category}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-1">
                      {cert.provider}
                    </p>
                    
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {cert.year}
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Education;