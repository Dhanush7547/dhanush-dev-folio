import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin, 
  Send,
  MessageSquare 
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dhanush.ksriet.2005@gmail.com',
      href: 'mailto:dhanush.ksriet.2005@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9942344957',
      href: 'tel:+919942344957'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      href: '#'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'GitHub Profile',
      href: '#'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's collaborate and bring your ideas to life with innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <Card className="p-8 shadow-medium h-full">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Let's Start a Conversation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in hearing about new opportunities and exciting projects. 
                  Whether you need a full-stack developer or have questions about web development, 
                  feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300 group"
                    >
                      <div className="bg-hero-gradient rounded-full p-3 shadow-medium group-hover:shadow-strong transition-shadow duration-300">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{contact.label}</div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                          {contact.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-surface-gradient rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">Location</span>
                </div>
                <p className="text-muted-foreground">
                  Coimbatore, Tamil Nadu, India
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="p-8 shadow-medium h-full">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <MessageSquare className="h-6 w-6 mr-3 text-primary" />
                  Send a Message
                </h3>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      className="border-border focus:border-primary focus:ring-primary/20"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="border-border focus:border-primary focus:ring-primary/20"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground font-medium">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Project discussion, collaboration, etc."
                    className="border-border focus:border-primary focus:ring-primary/20"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project, requirements, or any questions you have..."
                    rows={6}
                    className="border-border focus:border-primary focus:ring-primary/20 resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-hero-gradient hover:opacity-90 text-white shadow-medium hover:shadow-strong transition-all duration-300"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;