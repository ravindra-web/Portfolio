import React from 'react';
import { Code, Palette, Zap, Users, Award, Coffee } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that follows best practices'
    },
    {
      icon: <Palette size={32} />,
      title: 'Modern Design',
      description: 'Creating beautiful, intuitive interfaces that users love'
    },
    {
      icon: <Zap size={32} />,
      title: 'Fast Delivery',
      description: 'Delivering projects on time with exceptional quality'
    },
    {
      icon: <Users size={32} />,
      title: 'Collaboration',
      description: 'Working closely with clients to bring their vision to life'
    }
  ];

  const stats = [
    { icon: <Award size={24} />, number: '50+', label: 'Projects Completed' },
    { icon: <Users size={24} />, number: '30+', label: 'Happy Clients' },
    { icon: <Coffee size={24} />, number: '1000+', label: 'Cups of Coffee' },
    { icon: <Code size={24} />, number: '4+', label: 'Years Experience' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Full stack developer with 3+ years of experience turning ideas into fast, modern, and responsive websites.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8">My Journey</h3>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p className="text-lg">
                I started working as a Freelancer and Full Stack Web Developer more than 3 years ago. What began as a small interest in coding has now become my full-time work and passion.
              </p>
              <p className="text-lg">
              Over the years, I’ve built responsive and user-friendly websites for all kinds of businesses—like online stores and service-based companies. I work with WordPress, Shopify, and also do custom website development. I also create mobile and web apps that help businesses run better and connect with their customers. My goal is to build websites and apps that look great and make things simple, fast, and effective.
              </p>
              <p className="text-lg">
               When I’m not working on websites, I enjoy learning about new technology, sharing knowledge with others, and sometimes helping beginners get started with coding.Let’s work together and build a website that truly shows the best of your brand online!
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-xl p-6 border border-blue-500/20">
                <h4 className="text-2xl font-bold text-white mb-6">Experience</h4>
                <div className="space-y-4">
                  {[
                    { skill: 'Frontend Development', years: '4+ years', progress: 90 },
                    { skill: 'Backend Development', years: '3+ years', progress: 80 },
                    { skill: 'UI/UX Design', years: '3+ years', progress: 78 }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{item.skill}</span>
                        <span className="text-blue-400 font-medium">{item.years}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 shadow-xl transform group-hover:scale-105 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                <div className="text-blue-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-xl transform group-hover:scale-105 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/20 h-full">
                <div className="text-blue-400 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4 text-center">{highlight.title}</h4>
                <p className="text-gray-400 text-center leading-relaxed">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;