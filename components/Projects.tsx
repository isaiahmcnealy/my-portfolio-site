import projects from '../data/projects';

const Projects = () => (
  <section id="projects" className="flex flex-col items-center py-20 bg-gray-800 text-white">
    <h2 className="text-3xl font-bold mb-8 text-teal-500">Projects</h2>
    <div className="max-w-3xl w-full">
      {projects.map((project, index) => (
        <div key={index} className="mb-8 border-l-4 border-teal-500 pl-4">
          <h3 className="text-2xl font-semibold text-teal-500">{project.title}</h3>
          <p className="mb-2">{project.description}</p>
          <p className="mb-2 italic">Technologies: {project.technologies.join(', ')}</p>
          <div>
            {project.demoLink && <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline mr-4">Live Demo</a>}
            {project.codeLink && <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline">Source Code</a>}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;