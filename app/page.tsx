// Import global styles
import '../styles/globals.css';

// Import components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Import the splash screen component
import SplashPage from '../components/SplashPage';

export default function Home() {
  return (
    <>
      {/* Splash screen will appear on page load */}
      <SplashPage />

      {/* Main content */}
      <div>
        <Navbar />
        <div>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Blog />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}