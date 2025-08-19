import { ArrowDown, Mail, Linkedin, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Drishti Kori
          </h1>
          
          <div className="text-xl md:text-2xl mb-4 font-medium opacity-90">
            Data Science | Machine Learning | AI Enthusiast
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-8 text-lg opacity-80">
            <MapPin className="h-5 w-5" />
            Mumbai, India
          </div>

          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Bachelor of Computer Applications student with hands-on experience in Python, SQL, 
            Machine Learning, and data visualization tools. Passionate about turning data into actionable insights.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button size="lg" variant="secondary" asChild className="hover-lift">
              <a href="mailto:drishtikori@email.com" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Get in Touch
              </a>
            </Button>
            
            <Button size="lg" variant="outline" asChild className="hover-lift bg-white/10 border-white/20 text-white hover:bg-white/20">
              <a href="https://linkedin.com/in/drishtikori" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            
            <Button size="lg" variant="outline" asChild className="hover-lift bg-white/10 border-white/20 text-white hover:bg-white/20">
              <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Contact
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;