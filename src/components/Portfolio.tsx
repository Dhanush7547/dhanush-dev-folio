import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';
import ecommerceImg from '@/assets/ecommerce-project.jpg';
import sliderImg from '@/assets/slider-project.jpg';
import bookshyImg from '@/assets/bookshy-project.jpg';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React.js frontend, featuring user authentication, product catalog, shopping cart, and secure payment processing.',
      image: ecommerceImg,
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'AWS'],
      category: 'Full Stack',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Interactive Image Slider',
      description: 'A responsive image slider application with smooth transitions, touch gestures, and keyboard navigation. Built with vanilla JavaScript and modern CSS.',
      image: sliderImg,
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      category: 'Frontend',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Bookshy Website',
      description: 'A comprehensive book management platform with dynamic DOM manipulation, search functionality, reading lists, and user reviews. Deployed on AWS & Netlify.',
      image: bookshyImg,
      technologies: ['JavaScript', 'HTML', 'CSS', 'AWS', 'Netlify'],
      category: 'Web Application',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-surface-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            Digital Product Showcases
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that demonstrate my skills in building modern, responsive, and scalable web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      className="bg-white text-primary hover:bg-white/90 shadow-medium"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-primary"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-secondary text-white shadow-medium">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-hero-gradient hover:opacity-90 text-white shadow-medium"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="hover:bg-primary hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-hero-gradient hover:opacity-90 text-white shadow-medium"
          >
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;