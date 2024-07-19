import Footer from "@/components/Footer";

const Contact = () => (
  <section id="contact" className="flex flex-col items-center py-10 bg-gray-800 text-white">
    <h2 className="text-3xl font-bold mb-8 text-teal-500">Contact</h2>
    <div className="max-w-3xl text-center mb-8">
      <p className="mb-4">
        Feel free to reach out if you&apos;d like to discuss a project or just want to say hi!
      </p>
      <a href="mailto:isaiah.mcnealy@rice.edu" className="text-lg text-teal-500 border border-teal-500 rounded py-2 px-4 hover:bg-teal-500 hover:text-white transition-colors duration-300">
        Get In Touch
      </a>
    </div>
  </section>
);

export default Contact;