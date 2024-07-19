// components/Footer.tsx
import React from 'react';

const Footer = () => (
  <footer className="flex flex-col items-center py-6 bg-gray-900 text-white">
    <ul className="flex items-center" aria-label="Social media">
      <li className="mr-5 text-xs shrink-0">
        <a
          className="block hover:text-slate-200"
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn (opens in a new tab)"
          title="LinkedIn"
        >
          <span className="sr-only">LinkedIn</span>
          <i className="fab fa-linkedin h-6 w-6" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
    <p className="text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Isaiah McNealy. All rights reserved.
    </p>
  </footer>
);

export default Footer;