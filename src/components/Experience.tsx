import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            My Working Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experience that shapes my development journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-medium hover:shadow-strong transition-all duration-300 animate-fade-in">
            <div className="flex items-start space-x-6">
              <div className="bg-hero-gradient rounded-full p-4 shadow-medium">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      MERN Stack Development Intern
                    </h3>
                    <p className="text-primary font-semibold text-lg">
                      Xplore IT Corp, Coimbatore
                    </p>
                  </div>
                  <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="font-medium">15 – 25 July 2024</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Gained hands-on experience in MERN stack development using MongoDB, 
                      Express.js, React.js, and Node.js
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Successfully deployed multiple projects on AWS and Netlify platforms
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Implemented CI/CD pipeline integration for automated deployments
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'AWS', 'Netlify', 'CI/CD'].map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                step: '01',
                title: 'Business Planning',
                description: 'Understanding client requirements and project scope for optimal development strategy.',
                icon: '📋'
              },
              {
                step: '02', 
                title: 'Design Strategy',
                description: 'Creating wireframes and implementing responsive design patterns for better UX.',
                icon: '🎨'
              },
              {
                step: '03',
                title: 'Grow Your Business',
                description: 'Deploying scalable solutions with performance optimization and maintenance.',
                icon: '🚀'
              }
            ].map((process, index) => (
              <Card 
                key={index} 
                className="p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{process.icon}</div>
                <h4 className="font-bold text-foreground mb-2">{process.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{process.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;