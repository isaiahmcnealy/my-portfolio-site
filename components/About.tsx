const About = () => (
  <section id="about" className="flex flex-col items-center justify-center py-20 bg-gray-800 text-white">
    <h2 className="text-3xl font-bold mb-8 text-teal-500">About Me</h2>
    <img src="/path/to/photo.jpg" alt="Isaiah McNealy" className="w-40 h-40 rounded-full mb-8 border-4 border-teal-500" />
    <div className="max-w-3xl text-center mb-8">
      <p className="mb-4">
        Back in the day, I started as a nursing student, diving into the world of patient care. Fast forward to now, I’m a full-fledged software engineer, and the journey has been nothing short of exhilarating. The idea of building tools that help people accomplish their goals is thrilling to me. At Eli Lilly, I thrive in the fast-paced environment of the software product engineering team, which combines the dynamic energy of a startup with the resources of a large company.
      </p>
      <p>
        What I love most is the diversity of tasks I get to tackle. From developing full-stack test tools and leading backend development teams to creating mobile apps for Android and iOS, I’ve done it all. Collaborating across various domains, whether it’s with cybersecurity, legal teams, or recruiting and marketing to bring in diverse talent, keeps my workday exciting and rewarding.
      </p>
      <p>
        Outside of work, you can find me coaching wrestling, exploring new travel destinations, or hiking with my dog. I’m also passionate about cooking and trying new foods, and I never miss a Jacksonville Jaguars game. My life is a blend of tech, teamwork, and tackling new challenges, both at work and beyond.
      </p>
    </div>
    <ul className="flex flex-wrap justify-center space-x-4">
      {['Machine Learning', 'Software Engineering', 'Technical Project Management'].map(skill => (
        <li key={skill} className="text-teal-500">{skill}</li>
      ))}
    </ul>
  </section>
);

export default About;