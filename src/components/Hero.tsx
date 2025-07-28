import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Users } from 'lucide-react';
const profileImage = '/lovable-uploads/39a69a93-cc8a-4e0a-ace7-09302601de21.png';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-hero-gradient"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10 flex items-center min-h-screen">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Left side - Content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hello, I'm<br />
              <span className="bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
                Dhanush B
              </span><br />
              <span className="text-3xl md:text-4xl text-white/90">
                Full Stack Developer
              </span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Building efficient systems with clean code & innovation.
              Passionate about creating responsive, scalable web applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={() => scrollToSection('portfolio')}
                className="bg-secondary hover:bg-secondary/90 text-white shadow-medium transition-all duration-300 hover:shadow-strong group"
                size="lg"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                size="lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>

            {/* Experience badge */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-flex items-center space-x-3">
              <div className="bg-secondary rounded-full p-2">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold">MERN Stack</div>
                <div className="text-white/70 text-sm">Experience</div>
              </div>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Profile image */}
              <div className="relative z-10">
                <img
                  src={profileImage}
                  alt="Dhanush B - Full Stack Developer"
                  className="w-full max-w-md mx-auto rounded-full shadow-strong object-cover aspect-square"
                />
              </div>
              
              {/* Decorative circle */}
              <div className="absolute -top-6 -right-6 w-full h-full bg-secondary/20 rounded-3xl -z-10"></div>
              
              {/* Floating experience badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-strong animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom dots for visual interest */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[1, 2, 3, 4].map((dot) => (
          <div key={dot} className="w-2 h-2 bg-white/50 rounded-full"></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;