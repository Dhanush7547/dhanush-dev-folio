import { Card } from '@/components/ui/card';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-surface-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Designing Solutions, Not Just Visuals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Bio */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Designing Solutions, Not Just Visuals
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a dynamic and detail-oriented Full Stack Developer with expertise in both 
              front-end and back-end technologies. My passion lies in building responsive, 
              efficient, and scalable web applications that solve real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With a strong foundation in Python and modern web technologies, I strive to 
              create clean, maintainable code while staying updated with the latest industry 
              trends and best practices.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-primary/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Complete Projects</div>
              </div>
              <div className="bg-secondary/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-secondary">6+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right side - Education */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="p-6 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-2">
                    B.Tech in Information Technology
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    K.S.R Institute for Engineering and Technology
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    2023 – Present
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary/10 rounded-full p-3">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-2">
                    12th Grade
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    Sri Lakshmi Vidhayalaya Matric Hr. Sec. School
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      2022 – 2023
                    </div>
                    <div className="text-sm font-semibold text-primary">82.5%</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-2">
                    10th Grade
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    Sri Lakshmi Vidhayalaya Matric Hr. Sec. School
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      2020 – 2021
                    </div>
                    <div className="text-sm font-semibold text-primary">All Pass</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;