import Image from 'next/image';

const About = () => (
  <section id="about" className="flex flex-col items-center justify-center py-20 bg-gray-800 text-white">
    <h2 className="text-3xl font-bold mb-8 text-teal-500">About Me</h2>
    {/*<Image src="/path/to/photo.jpg" alt="Isaiah McNealy" className="w-40 h-40 rounded-full mb-8 border-4 border-teal-500" />*/}
    <div className="max-w-3xl text-center mb-8">
      <p className="mb-4">
        Hello! I&apos;m Isaiah McNealy, a software engineer with a passion for machine learning and big data. I have experience in mobile development and am currently expanding my skills in full-stack web development.
      </p>
      <p>
        I enjoy tackling complex problems and continuously learning new technologies. When I&apos;m not coding, you can find me coaching wrestling, cooking, or exploring the outdoors.
      </p>
    </div>
    <ul className="flex flex-wrap justify-center space-x-4">
      {['Python', 'Kotlin', 'SQL', 'JavaScript', 'Swift', 'PyTorch', 'Pandas'].map(skill => (
        <li key={skill} className="text-teal-500">{skill}</li>
      ))}
    </ul>
  </section>
);

export default About;