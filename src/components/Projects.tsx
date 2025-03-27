import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Personal Website',
    description: 'My personal website built with React, Vite, and Tailwind CSS. Features a blog with markdown support, dark mode, and minimalist design.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/Catspindev01/personal-website',
    demo: 'https://eliasl.org'
  },
  // Add more projects here
];

export function Projects() {
  return (
    <section className="container section py-32 border-t border-border" id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="heading-lg mb-24 text-center">Selected Projects</h2>
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="group grid md:grid-cols-2 gap-16 items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <h3 className="heading-md group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="body-md text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-sm font-medium px-3 py-1 bg-secondary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-8 pt-6">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <GithubIcon className="h-5 w-5" />
                    <span className="text-sm font-medium">Source</span>
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <ExternalLinkIcon className="h-5 w-5" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
              <div className="aspect-video bg-secondary rounded-lg overflow-hidden group-hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                <div className="text-muted-foreground text-center p-8">
                  <p className="text-lg font-medium mb-2">{project.title}</p>
                  <p className="text-sm">View project details and live demo</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}