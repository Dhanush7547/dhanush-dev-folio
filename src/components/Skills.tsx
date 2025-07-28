import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Database, 
  Layers, 
  GitBranch, 
  Cloud, 
  Boxes,
  Monitor,
  Server
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Front-End',
      icon: Monitor,
      color: 'bg-primary/10 text-primary',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Responsive Design']
    },
    {
      title: 'Back-End',
      icon: Server,
      color: 'bg-secondary/10 text-secondary',
      skills: ['Python', 'Express.js', 'REST APIs', 'GraphQL', 'WebSockets']
    },
    {
      title: 'Database',
      icon: Database,
      color: 'bg-primary/10 text-primary',
      skills: ['SQL', 'MongoDB', 'Database Design', 'Query Optimization']
    },
    {
      title: 'DevOps & Tools',
      icon: GitBranch,
      color: 'bg-secondary/10 text-secondary',
      skills: ['Git', 'GitHub', 'Docker', 'Kubernetes', 'Jenkins']
    },
    {
      title: 'Cloud & Deployment',
      icon: Cloud,
      color: 'bg-primary/10 text-primary',
      skills: ['AWS', 'Heroku', 'Nginx', 'CI/CD', 'Netlify']
    },
    {
      title: 'Data Structures',
      icon: Boxes,
      color: 'bg-secondary/10 text-secondary',
      skills: ['Array', 'Linked List', 'Stack', 'Queue', 'Algorithms']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-surface-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            Expertise Service! Let's check it out
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set covering modern web development technologies and best practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-muted hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <Card className="p-8 shadow-medium">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'TypeScript', 'Next.js', 'Tailwind CSS', 'Material-UI', 
                'Redux', 'Firebase', 'Postman', 'VS Code', 'Linux', 
                'Agile', 'Scrum', 'Testing', 'Performance Optimization'
              ].map((tech, index) => (
                <Badge 
                  key={index}
                  className="bg-hero-gradient text-white hover:opacity-80 transition-opacity duration-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;