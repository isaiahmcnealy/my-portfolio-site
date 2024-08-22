import Image from 'next/image';

const About = () => (
  <section id="about" className="flex flex-col items-center justify-center py-20 bg-gray-800 text-white">
    <h2 className="text-3xl font-bold mb-8 text-teal-500">About Me</h2>
    <div className="max-w-3xl text-center mb-8">
      <p className="mb-4">
        My journey began in the world of patient care as a nursing student, but my passion for building tools that help
        people achieve their goals led me to become a full-fledged software engineer. The transition has been nothing
        short of exhilarating. Now, at Eli Lilly, I thrive on the software product engineering team, where I get to
        experience the dynamic energy of a startup, backed by the resources of a large company.
      </p>
      <p>
        What excites me the most is the diversity of challenges I tackle daily. From developing full-stack test tools
        and leading backend development teams to creating mobile apps for Android and iOS, I’ve had the privilege of
        working across a broad spectrum of projects. Whether collaborating with cybersecurity and legal teams or
        partnering with recruiting and marketing to bring in diverse talent, every day brings new and rewarding
        experiences.
      </p>
      <p>
        When I’m not immersed in tech, you can find me coaching wrestling, exploring new travel destinations, or
        hiking with my pup, Luna. I’m also passionate about cooking, trying new foods, and cheering on the Jacksonville
        Jaguars. My life is a blend of technology, teamwork, and tackling new challenges, both in my professional and
        personal life.
      </p>
      <p>
        If you’re interested in collaborating to build something amazing, exchanging ideas, or even swapping recipes,
        I’d love to connect! Feel free to reach out!
      </p>
    </div>
    <ul className="flex flex-wrap justify-center space-x-4">
      {['Software Engineering', 'Technical Leadership', 'Machine Learning', 'Project Management'].map(skill => (
        <li key={skill} className="text-teal-500">{skill}</li>
      ))}
    </ul>
  </section>
);

export default About;





