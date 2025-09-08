import React from 'react';
import { ExternalLink, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
  {
  title: 'GN Envirotech Solution Website',
  description: 'Corporate website for a trusted India-based provider of wastewater treatment solutions—STP, ETP, RO systems, AMCs, and swimming pool chemicals, showcasing sustainability and technical expertise.',
  image: '/images/water.png',
   technologies: [''],
  liveUrl: 'https://gnenvirotechsolution.com/',

  featured: true
},

  {
  title: 'Jingle Interiors (Jaipur)',
  description: 'Leading interior design and material manufacturing company in Jaipur, offering bespoke full-home interiors, modular interiors, renovation, wardrobe design, and TV frame solutions — blending aesthetics, functionality, and client-centric service.',
    image: '/images/jingle.png',
   technologies: [''],
  liveUrl: 'https://jingleinteriors.in/',
  featured: true
},
   {
  title: 'Raj Glass Aluminium Work (Jaipur)',
  description: 'Established in 2000, Raj Glass specialises in bespoke aluminium and glass solutions—frameless doors, shower cubicles, spider/glass glazing, uPVC and aluminium windows/doors, ACP/HPL louvers, plus repair and maintenance—with a customer-centric, highly customizable service backed by a 10-year warranty.',
    image: '/images/Raj glass.png',
   technologies: [''],
  liveUrl: 'https://rajglassaluminiumwork.com/',
  featured: true
},
  {
  title: 'Glimmora by Grover Lights (Pan-India Lighting)',
  description: 'Curated lighting brand offering stylish chandeliers, wall lights, table lamps, and outdoor fixtures—combining innovation, elegance, and affordability, with Pan-India delivery and frequent promotions.',
  image: '/images/glimmora.png',
  liveUrl: 'https://groverlights.com/',
  featured: true
},
    {
  title: 'Fashion Dwar (Jaipur Women’s Ethnicwear)',
  description: 'Established in 2017 by Deepak Jain, Fashion Dwar is a Jaipur-based brand specializing in women’s ethnic clothing—curating kurtis, bottoms, jumpsuits, jackets, and matching accessories with passion for unique and high-quality designs.',
    image: '/images/fashion.png',
  technologies: [''],
  liveUrl: 'https://www.fashiondwar.com/',
  featured: true
},
    {
  title: 'JaipuriTrend (Jaipur Ethnicwear Retailer)',
  description: 'JaipuriTrend is a Jaipur-based MSE (Micro and Small Enterprise) offering high-quality ethnic women’s fashion—from kurtis and co-ord sets to kurti-pant and kurti-pant-dupatta collections. This online store features frequent discounts (up to ₹400 off) and free shipping, backed by 24/7 customer support and a focus on quality products.',  
  image: '/images/trend.png',
   technologies: [''],
  liveUrl: 'https://jaipuritrend.com/',
  featured: true
}

  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions that drive results
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden transform group-hover:scale-105 transition-all duration-500 group-hover:shadow-blue-500/20">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                  
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium rounded-full">
                      Featured
                    </div>
                  )}
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a 
                        href={project.liveUrl}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                      >
                        <Eye size={20} />
                      </a>
                     
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
  {project.technologies?.filter(tech => tech)?.map((tech, techIndex) => (
    <span 
      key={techIndex} 
      className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 text-xs rounded-full"
    >
      {tech}
    </span>
  ))}
</div>
                  
                  {/* Action buttons */}
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl}
                      className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                    <a 
                      
                      className="flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-300 font-medium"
                    >
                   
                     
                    </a>
                  </div>
                </div>
                
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Projects;