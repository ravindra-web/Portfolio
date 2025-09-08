import React from 'react';
import { ArrowDown, Linkedin, Mail, Sparkles, Instagram } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23374151%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Floating badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-sm mb-8 transform hover:scale-105 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-sm text-gray-300">Available for freelance work</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Ravindra
            </span>
          </h1>

          <div className="relative mb-8">
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">
              Creative Developer & Designer
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Hey! I'm a Freelancer and Full Stack Developer with a passion for crafting stunning,
            responsive websites. Specializing in WordPress and Shopify, I transform ideas into
            user-friendly digital experiences that drive results. Whether you're a service business
            or an e-commerce brand, I’m here to make your online presence shine. Let’s create
            something extraordinary together!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('#projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="group relative px-8 py-4 border-2 border-gray-600 text-gray-300 hover:text-white rounded-xl font-medium transition-all duration-300 hover:border-blue-500 transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-8 mb-20">
            {[
           
              { icon: Linkedin, href: 'https://www.linkedin.com/in/web-developer-ravindra-kumar' },
              
              { icon: Instagram, href: 'https://www.instagram.com/web.ravindra?igsh=MWp2cDJjMm1ra3pocw==' },
              { icon: Mail, href: 'mailto:ravindrawebwork@gmail.com' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl text-gray-400 hover:text-white transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 transform hover:scale-110 hover:-translate-y-2"
              >
                <social.icon size={24} />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>

          {/* Scroll Down Button */}
          <button
            onClick={scrollToNext}
            className="animate-bounce text-gray-400 hover:text-white transition-colors duration-300 p-3 rounded-full hover:bg-gray-800/50"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
