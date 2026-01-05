//import React from "react";
//import { Link } from "react-router-dom";
import { useState } from "react";
import Hero from "../../assets/media/5035176395637721968.jpg";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

const navigation = [
  { name: "Home", href: "#top" },
  { name: "Shop", href: "#shop" },
  { name: "Brand", href: "#brand" },
  { name: "Announcement", href: "#reviews" },
];

function Navbar2({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      style={{
        backgroundImage: `url(${Hero})`,
      }}
      className="bg-center bg-cover h-[80vh] min-w-50 relative "
    >
      <nav
        className="hidden sm:flex justify-between items-center px-13 h-36 relative"
        aria-label="Global"
      >
        <div>
          <a className="text-3xl text-white" href="#">
            Deralyte
          </a>
        </div>
        <div className="flex gap-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-semibold text-white hover:text-black/80 hover:scale-105 transition-transform duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex gap-6">
          <a
            className="w-9 h-9 flex justify-center items-center rounded-full hover:scale-105 transition-transform duration-300 bg-linear-to-tr from-yellow-500 via-pink-600  to-purple-500 "
            href="#"
            target="_blank"
            title="Ir a Instagram de Deralyte"
          >
            <svg className="w-8 h-8 text-white">
              <use href="../../../public/sprite.svg#icon-instagram" />
            </svg>
          </a>

          <a
            className="w-9 h-9 flex justify-center items-center rounded-full bg-blue-700 hover:scale-105 transition-transform duration-300"
            href="#"
            target="_blank"
            title="Ir a Facebook de Deralyte"
          >
            <svg className=" bottom-0 w-6 h-6 text-white ">
              <use href="../../../public/sprite.svg#icon-facebook" />
            </svg>
          </a>
        </div>
      </nav>

      <nav className="sm:hidden fixed top-0 w-full z-50 flex flex-col bg-black">
        <div className="flex justify-start">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="  text-white relative p-6 z-6    "
          >
            <svg className="w-6 h-6" aria-hidden="true">
              <use href="../../../public/sprite.svg#icon-menu-2" />
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }} // Cómo empieza (invisible y arriba)
              animate={{ opacity: 1, y: 0 }} // Cómo se ve activo
              exit={{ opacity: 0, y: -20 }} // Cómo se va (hacia arriba)
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col w-full bg-black border-t border-gray-800"
              onClick={() => setIsOpen(false)}
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className=" block text-center py-6 text-white font-semibold border-b border-gray-700"
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="w-full absolute flex justify-center bottom-9">
        <a
          href="https://www.amazon.com/dp/B0FQCS5226"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Product in Amazon"
          className="  bg-black text-white relative px-6 py-4 rounded-lg text-lg font-semibold   hover:bg-black/80 transition-colors shadow-[0px_2px_2px_rgba(0,0,0,0.5)] "
        >
          Shop Now
        </a>
      </div>
    </header>
  );
}

export default Navbar2;
