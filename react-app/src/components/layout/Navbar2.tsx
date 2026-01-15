//import React from "react";
//import { Link } from "react-router-dom";
import { useState } from "react";
//import Hero from "../../assets/media/5035176395637721968.jpg";
import trace2 from "../../assets/media/trace2.png";
import trace1 from "../../assets/media/trace1.png";
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
    <header className="bg-[#c28eaf] h-[80vh] min-w-50 relative ">
      <nav
        className="hidden lg:flex justify-between items-center px-13 h-36 relative z-10"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-8 h-8 text-white"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8" />
              <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M16.5 7.5v.01" />
            </svg>
          </a>

          <a
            className="w-9 h-9 flex justify-center items-center rounded-full bg-blue-700 hover:scale-105 transition-transform duration-300"
            href="#"
            target="_blank"
            title="Ir a Facebook de Deralyte"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className=" w-6 h-6 text-white"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" />
            </svg>
          </a>
        </div>
      </nav>

      <nav className="lg:hidden fixed top-0 w-full z-50 flex flex-col bg-black">
        <div className="flex justify-between items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="  text-white relative p-6 z-6    "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-6 h-6"
              aria-hidden="true"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </button>

          <img
            className="relative mr-6 w-10 h-10 z-6 text-white"
            src={trace2}
            alt="Logo"
          />
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

      <div className="absolute inset-0 m-auto flex flex-col gap-2 items-center justify-center pt-18">
        <div className="relative flex items-center justify-center w-full">
          <img
            className=" max-lg:hidden aspect-square w-37.5 h-37.5 mr-2 shrink-0"
            src={trace2}
            alt="trace 2"
          />
          <img
            className="aspect-auto w-full max-w-xl h-auto px-4 lg:px-0"
            src={trace1}
            alt="trace 1"
          />
        </div>
        <div className="  text-center">
          <h3>Collagen</h3>
          <h3>Real Deep Mask</h3>
        </div>
        <div className="w-full flex justify-center pt-2">
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
      </div>
    </header>
  );
}

export default Navbar2;
