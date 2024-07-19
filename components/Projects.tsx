// components/Projects.tsx
import projects from '../data/projects';

const Projects = () => (
  <section id="projects" className="flex flex-col items-center py-20 bg-gray-800 text-white">
    <h2 className="text-3xl font-bold mb-8 text-teal-500">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col items-center">
            <div className="relative bg-gray-700 rounded-lg shadow-lg overflow-hidden w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105 hover:blur-2xl"
                />
                <div
                  className="absolute inset-0 bg-gray-800 bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                    <p className="mb-2">{project.description}</p>

                    <div>
                        {project.demoLink && <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
                                                className="text-teal-500 hover:underline mr-4">Live Demo</a>}
                        {project.codeLink && <a href={project.codeLink} target="_blank" rel="noopener noreferrer"
                                                className="text-teal-500 hover:underline">Source Code</a>}
                    </div>
                </div>
            </div>
            <h3 className="text-2xl font-semibold text-teal-500 mt-4">{project.title}</h3>
            <p className="mb-2 italic">Technologies: {project.technologies.join(', ')}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;