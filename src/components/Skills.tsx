import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
        { name: 'Tailwind CSS', level: 95, color: 'from-cyan-500 to-teal-500' },
        { name: 'Next.js', level: 85, color: 'from-gray-600 to-gray-400' },
        { name: 'Vue.js', level: 80, color: 'from-green-500 to-emerald-500' }
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 90, color: 'from-green-600 to-green-400' },
        { name: 'Python', level: 85, color: 'from-yellow-500 to-orange-500' },
        { name: 'PostgreSQL', level: 80, color: 'from-blue-700 to-blue-500' },
        { name: 'MongoDB', level: 85, color: 'from-green-700 to-green-500' },
        { name: 'GraphQL', level: 65, color: 'from-pink-500 to-purple-500' }
      ]
    },
    {
      title: 'Tools & Design',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 95, color: 'from-orange-600 to-red-500' },
        { name: 'Docker', level: 80, color: 'from-blue-600 to-cyan-600' },
        { name: 'AWS', level: 75, color: 'from-orange-500 to-yellow-500' },
        { name: 'Figma', level: 90, color: 'from-purple-500 to-pink-500' },
        { name: 'Webpack', level: 85, color: 'from-blue-500 to-teal-500' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies I master to bring your ideas to life with precision and creativity
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-2xl transform group-hover:scale-105 transition-all duration-500 group-hover:shadow-blue-500/20 overflow-hidden">
                <div className="p-8">
                  <div className="text-center mb-8">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                          <span className="text-blue-400 font-bold">{skill.level}%</span>
                        </div>
                        <div className="relative">
                          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                            <div 
                              className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 relative overflow-hidden`}
                              style={{ width: `${skill.level}%` }}
                            >
                              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'JavaScript', 'HTML5', 'CSS3', 'SASS', 'Redux', 'Express.js', 
              'REST APIs', 'WebSockets', 'Cypress', 'Photoshop', 'Illustrator'
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-full text-gray-300 hover:text-white hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;