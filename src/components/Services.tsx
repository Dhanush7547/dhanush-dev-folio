import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Palette, 
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Full Stack Web Development',
      description: 'End-to-end web application development using modern technologies like Python, React.js, and Node.js',
      features: [
        'Custom web application development',
        'Database design and optimization',
        'API development and integration',
        'Performance optimization'
      ],
      gradient: 'bg-hero-gradient'
    },
    {
      icon: Smartphone,
      title: 'Responsive UI/UX Design',
      description: 'Creating beautiful, responsive and interactive user interfaces that work seamlessly across all devices',
      features: [
        'Mobile-first responsive design',
        'Interactive user interfaces',
        'Cross-browser compatibility',
        'User experience optimization'
      ],
      gradient: 'bg-orange-gradient'
    },
    {
      icon: Cloud,
      title: 'Cloud Deployment & DevOps',
      description: 'Scalable backend logic and cloud deployment solutions with modern DevOps practices',
      features: [
        'AWS and Netlify deployment',
        'CI/CD pipeline setup',
        'Docker containerization',
        'Server configuration and monitoring'
      ],
      gradient: 'bg-hero-gradient'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            What I Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services to bring your ideas to life with modern technologies and best practices
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="relative overflow-hidden group shadow-soft hover:shadow-strong transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
                
                <div className="relative p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${service.gradient} mb-6 shadow-medium group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-hero-gradient text-white shadow-strong">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with cutting-edge technology and innovative solutions.
            </p>
            <Button 
              className="bg-white text-primary hover:bg-white/90 shadow-medium"
              size="lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;