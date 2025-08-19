import { Mail, Phone, Linkedin, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:drishtikori@email.com" className="hover:text-primary transition-colors">drishtikori4@email.com</a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+91XXXXXXXXXX" className="hover:text-primary transition-colors">
                    +91 XXXX-XXX-XXX
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Mumbai, India</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a href="https://linkedin.com/in/drishtikori" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Quick Links
              </h3>
              <div className="space-y-3">
                <button onClick={() => document.getElementById('about')?.scrollIntoView({
                behavior: 'smooth'
              })} className="block hover:text-primary transition-colors text-left">
                  About Me
                </button>
                <button onClick={() => document.getElementById('education')?.scrollIntoView({
                behavior: 'smooth'
              })} className="block hover:text-primary transition-colors text-left">
                  Education
                </button>
                <button onClick={() => document.getElementById('projects')?.scrollIntoView({
                behavior: 'smooth'
              })} className="block hover:text-primary transition-colors text-left">
                  Projects
                </button>
                <button onClick={() => document.getElementById('skills')?.scrollIntoView({
                behavior: 'smooth'
              })} className="block hover:text-primary transition-colors text-left">
                  Skills
                </button>
              </div>
            </div>

            {/* Call to Action */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Interested in data science collaboration or have exciting opportunities? 
                I'd love to hear from you!
              </p>
              
              <div className="space-y-3">
                <Button asChild className="w-full hover-lift">
                  <a href="mailto:drishtikori@email.com" className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    Send Email
                  </a>
                </Button>
                
                <Button variant="outline" asChild className="w-full hover-lift bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <a href="https://linkedin.com/in/drishtikori" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mb-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-300">
              <span>© {currentYear} Drishti Kori</span>
              <span className="flex items-center gap-1">
                • Made with <Heart className="h-4 w-4 text-red-500" fill="currentColor" /> 
                for Data Science
              </span>
            </div>
            
            <button onClick={scrollToTop} className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2">
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;