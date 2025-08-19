import { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md shadow-card' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">
            Drishti Kori
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>
            
            {/* Contact Buttons */}
            <div className="flex items-center space-x-2">
              <Button size="sm" variant="outline" asChild>
                <a href="mailto:drishtikori@email.com" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <a href="https://linkedin.com/in/drishtikori" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-card rounded-lg shadow-card animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                Skills
              </button>
              
              <div className="px-4 pt-2 border-t border-border">
                <div className="flex flex-col space-y-2">
                  <Button size="sm" variant="outline" asChild className="justify-start">
                    <a href="mailto:drishtikori@email.com" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="justify-start">
                    <a href="https://linkedin.com/in/drishtikori" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="justify-start">
                    <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Contact
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;