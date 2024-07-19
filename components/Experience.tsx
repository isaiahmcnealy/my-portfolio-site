import experiences from '../data/experience';

const Experience = () => (
  <section id="experience" className="flex flex-col items-center py-20 bg-gray-900 text-white">
    <h2 className="text-3xl font-bold mb-8 text-teal-500">Experience</h2>
    <div className="max-w-3xl w-full">
      {experiences.map((exp, index) => (
        <div key={index} className="mb-8 border-l-4 border-teal-500 pl-4">
          <h3 className="text-2xl font-semibold text-teal-500">{exp.role}</h3>
          <h4 className="text-lg mb-2">{exp.company}</h4>
          <p className="mb-2">{exp.duration}</p>
          <ul className="list-disc ml-4">
            {exp.description.map((desc, i) => (
              <li key={i} className="mb-1">{desc}</li>
            ))}
          </ul>
           {exp.skills && (
            <div className="flex flex-wrap space-x-2">
              {exp.skills.map((skill, i) => (
                <span key={i} className="bg-teal-500 text-gray-900 py-1 px-3 rounded-full text-sm font-semibold mb-2">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Experience;