'use client';

import React, {useState} from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-gray-900 text-white py-4 px-8 flex justify-between items-center shadow-lg">
      <div className="text-2xl font-bold">
        <Link href="/">
          im
        </Link>
      </div>
      <div className="hidden md:flex space-x-8">
        <Link href="#about" className="hover:text-teal-500 transition-colors duration-300">
          About
        </Link>
        <Link href="#experience" className="hover:text-teal-500 transition-colors duration-300">
          Experience
        </Link>
        <Link href="#projects" className="hover:text-teal-500 transition-colors duration-300">
          Projects
        </Link>
        <Link href="#contact" className="hover:text-teal-500 transition-colors duration-300">
          Contact
        </Link>
        <Link href="../../../resume.pdf" className="hover:text-teal-500 transition-colors duration-300" target="_blank"
              rel="noopener noreferrer">
          Resume
        </Link>
      </div>
      <div className="md:hidden">
        <button className="text-3xl focus:outline-none" onClick={toggleMenu}>
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center md:hidden">
          <Link href="#about" className="hover:text-teal-500 transition-colors duration-300">About</Link>
          <Link href="#experience" className="hover:text-teal-500 transition-colors duration-300">Experience</Link>
          <Link href="#projects" className="hover:text-teal-500 transition-colors duration-300">Projects</Link>
          <Link href="#contact" className="hover:text-teal-500 transition-colors duration-300">Contact</Link>
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                className="hover:text-teal-500 transition-colors duration-300">Resume</Link>
        </div>
      )}
    </nav>
  );
};

// <nav className="nav hidden lg:block" aria-label="In-page jump links">
//   <ul className="mt-16 w-max">
//     <li><a className="group flex items-center py-3 active" href="#about"><span
//       className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span
//       className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span></a>
//     </li>
//     <li><a className="group flex items-center py-3" href="#experience"><span
//       className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span
//       className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span></a>
//     </li>
//     <li><a className="group flex items-center py-3" href="#projects"><span
//       className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span
//       className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span></a>
//     </li>
//   </ul>
// </nav>

export default Navbar;