import React from 'react';
import { Github, Instagram, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
   <footer
  id="footer"
  className="bg-black border-t border-gray-800 relative overflow-hidden"
>

      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
             Ravindra Kumar
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Freelance developer passionate about creating beautiful, functional web experiences 
              that help businesses grow and succeed in the digital world.
            </p>
            <div className="flex space-x-4">
              {[
               { icon: Linkedin, href: 'https://www.linkedin.com/in/web-developer-ravindra-kumar' },
              
              { icon: Instagram, href: 'https://www.instagram.com/web.ravindra?igsh=MWp2cDJjMm1ra3pocw==' },
              { icon: Mail, href: 'mailto:ravindrawebwork@gmail.com' }
                
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="group p-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Mobile Apps</li>
              <li>E-commerce</li>
              <li>Consulting</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              
            </div>
            
            <div className="flex items-center space-x-6">
              <p className="text-gray-400">
                © {currentYear} Ravindra Kumar. All rights reserved.
              </p>
              <button
                onClick={scrollToTop}
                className="group p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;