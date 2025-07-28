import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: '#',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:dhanush.ksriet.2005@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2 bg-hero-gradient bg-clip-text text-transparent">
              Dhanush B
            </h3>
            <p className="text-white/70">
              Full Stack Developer passionate about creating innovative web solutions
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {['About', 'Skills', 'Portfolio', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Right - Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-white/10 hover:bg-hero-gradient p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-medium"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {currentYear} Dhanush B. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <p className="text-white/70 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> using React & Tailwind CSS
            </p>
            <button
              onClick={scrollToTop}
              className="bg-hero-gradient hover:opacity-90 p-2 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Scroll to top"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;