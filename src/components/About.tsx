import profileImg from '/lovable-uploads/28e95598-1822-4ef1-9d5c-4b45f08eaaaf.png';
const About = () => {
  return <section id="about" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start animate-slide-up">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-soft hover-lift">
                  <img src={profileImg} alt="Drishti Kori - Data Science Enthusiast" className="w-full h-full object-cover object-center" />
                </div>
                {/* Decorative Element */}
                <div className="absolute -z-10 top-6 left-6 w-80 h-80 rounded-2xl bg-primary/10"></div>
              </div>
            </div>

            {/* Content */}
            <div className="animate-slide-up">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                  Professional Summary
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Bachelor of Computer Applications student with hands-on experience in 
                  <span className="text-primary font-medium"> Python, SQL, Machine Learning, Tableau, and Power BI</span>. 
                  Certified in Data Science and Generative AI, with proven ability to analyze data, 
                  build predictive models, and deliver actionable insights.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Seeking a challenging role in 
                  <span className="text-primary font-medium"> Data Science, Machine Learning, and Data Analytics</span> 
                  where I can leverage my technical skills and passion for data-driven solutions 
                  to contribute to meaningful projects and continue growing in this dynamic field.
                </p>

                {/* Key Highlights */}
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="bg-card p-4 rounded-lg shadow-card hover-lift">
                    <h4 className="font-semibold text-primary mb-2">Education</h4>
                    <p className="text-sm text-muted-foreground">BCA Student at TMV Pune</p>
                  </div>
                  
                  <div className="bg-card p-4 rounded-lg shadow-card hover-lift">
                    <h4 className="font-semibold text-primary mb-2">Certifications</h4>
                    <p className="text-sm text-muted-foreground">Data Science</p>
                  </div>
                  
                  <div className="bg-card p-4 rounded-lg shadow-card hover-lift">
                    <h4 className="font-semibold text-primary mb-2">Languages</h4>
                    <p className="text-sm text-muted-foreground">English & Hindi</p>
                  </div>
                  
                  <div className="bg-card p-4 rounded-lg shadow-card hover-lift">
                    <h4 className="font-semibold text-primary mb-2">Location</h4>
                    <p className="text-sm text-muted-foreground">Mumbai, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;