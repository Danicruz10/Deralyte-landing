//import React from 'react'
import Reveal from "../Reveal";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className=" bg-linear-to-b bg-gray-500 text-black py-14 min-w-50">
      <Reveal>
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
          {/* Texto de Copyright */}
          <p className="text-sm mb-4 sm:mb-0 text-center">
            &copy; 2025 Deralyte. All Rights Reserved.
          </p>

          {/* Icono de Instagram */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/deralyte.skin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-black/60 transition-colors duration-300"
              aria-label="Instagram de Deralyte"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-8 h-8 "
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8" />
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M16.5 7.5v.01" />
              </svg>
            </a>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}

export default Footer;
