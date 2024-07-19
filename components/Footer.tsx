// components/Footer.tsx
import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer:React.FC = () => (
  <footer className="flex flex-col items-center py-6 bg-gray-800 text-white">
    <ul className="flex items-center" aria-label="Social media">
      <li className="mr-5 text-xs shrink-0">
        <a
          className="block hover:text-slate-200"
          href="https://linkedin.com/in/isaiahmcnealy"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn (opens in a new tab)"
          title="LinkedIn"
        >
          <span className="sr-only">LinkedIn</span>
          <FaLinkedin className="text-2xl hover:text-teal-500 transition-colors duration-300"/>
        </a>
      </li>
      <li className="mr-5 text-xs shrink-0">
        <a
          className="block hover:text-slate-200"
          href="https://twitter.com/mcnealy_isaiah"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Twitter (opens in a new tab)"
          title="Twitter"
        >
          <span className="sr-only">LinkedIn</span>
          <FaTwitter className="text-2xl hover:text-teal-500 transition-colors duration-300" />
        </a>
      </li>
      <li className="mr-5 text-xs shrink-0">
        <a
          className="block hover:text-slate-200"
          href="https://instagram.com/isaiah_mcnealy"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Instagram (opens in a new tab)"
          title="Instagram"
        >
          <span className="sr-only">LinkedIn</span>
          <FaInstagram className="text-2xl hover:text-teal-500 transition-colors duration-300" />
        </a>
      </li>
      <li className="mr-5 text-xs shrink-0">
        <a
          className="block hover:text-slate-200"
          href="https://github.com/isaiahmcnealy"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub (opens in a new tab)"
          title="GitHub"
        >
          <span className="sr-only">LinkedIn</span>
          <FaGithub className="text-2xl hover:text-teal-500 transition-colors duration-300" />
        </a>
      </li>
    </ul>
    <p className="text-center text-sm text-gray-500 mt-2">
      © {new Date().getFullYear()} Isaiah McNealy. All rights reserved.
    </p>
  </footer>
);

export default Footer;