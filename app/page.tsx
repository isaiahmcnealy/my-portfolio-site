// app/page.tsx

import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Header from "@/components/Header";
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}