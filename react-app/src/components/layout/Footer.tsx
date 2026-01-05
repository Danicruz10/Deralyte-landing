//import React from 'react'
import Reveal from "../Reveal";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="bg-gray-900 text-white py-14 min-w-50">
      <Reveal>
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
          {/* Texto de Copyright */}
          <p className="text-sm text-gray-400 mb-4 sm:mb-0 text-center">
            &copy; 2025 Deralyte. All Rights Reserved.
          </p>

          {/* Icono de Instagram */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/deralyte.skin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Instagram de Deralyte"
            >
              <svg className="w-8 h-8" aria-hidden="true">
                <use href="../../../public/sprite.svg#icon-instagram" />
              </svg>
            </a>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}

export default Footer;
