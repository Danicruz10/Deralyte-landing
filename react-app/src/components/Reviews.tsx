//import React from "react";

import { useState, useEffect } from "react";
import reviewsData from "../assets/data/dataset_amazon-reviews-extractor_2025-12-29_21-04-26-663.json";
import Reveal from "./Reveal";

type Props = {};

function Reviews({}: Props) {
  // Estado para saber qué reseña mostrar

  const [currentIndex, setCurrentIndex] = useState(0);

  // Usamos todas las reseñas del JSON (o las que quieras, ej: 10)

  const reviews = reviewsData.slice(0, 5);

  const [visibleCount, setVisibleCount] = useState(3); // Cuántas queremos ver

  const nextSlide = () => {
    // Solo avanzamos si no hemos llegado al final de la ventana

    if (currentIndex < reviews.length - visibleCount) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0); // Reinicia al principio
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(reviews.length - visibleCount); // Salta al final
    }
  };

  // Efecto para detectar el ancho de la pantalla

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1); // Celular: 1 reseña
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2); // Tablet: 2 reseñas
      } else {
        setVisibleCount(3); // Monitor: 3 reseñas
      }
    };

    handleResize(); // Ejecutar al cargar

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="reviews"
      className="relative w-full min-w-50 py-10 px-4 scroll-mt-18 sm:scroll-mt-0 bg-white"
    >
      {/* 1. Contenedor "Marco": overflow-hidden corta lo que se sale */}

      <Reveal className="relative max-w-6xl mx-auto">
        <div className="relative h-96 overflow-hidden  ">
          {/* 2. El Riel: Este es el que se mueve físicamente */}

          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{
              // Cada vez que currentIndex sube 1, movemos el riel un 33.33% a la izquierda

              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {reviews.map((review: any, index: number) => (
              <div
                key={review.reviewId || index}
                // flex-none evita que las cajas se encojan

                // style={{ width: `${100 / visibleCount}%` }} asegura que quepan N cajas en el riel

                style={{ width: `${100 / visibleCount}%` }} // Ancho dinámico
                className="flex-none h-full p-2"
              >
                <a
                  href="https://www.amazon.com/product-reviews/B0FQCS5226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex flex-col gap-4 items-center justify-center p-8 rounded-xl text-center bg-black/20 hover:bg-black/40  hover:scale-105 transition-all duration-400"
                >
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  <h3 className="font-poppins text-xl text-black/60 font-semibold italic truncate w-full">
                    "{review.reviewTitle}"
                  </h3>

                  <p className="text-gray-700">
                    "{review.reviewText.substring(0, 120)}..."
                  </p>

                  <span className="font-semibold text-pink-400">
                    - {review.profileName || "Cliente Satisfecha"}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-3xs mx-auto flex justify-center md:hidden overflow-hidden">
          {[...Array(reviews.length)].map((_, index: number) => (
            <div
              key={index}
              className={`h-1.5 w-1.5 rounded-full mx-1 ${
                index === currentIndex ? "bg-blue-700" : " bg-black/40"
              }`}
            ></div>
          ))}
        </div>

        {/* Botones de control */}

        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-4 z-30 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-4 z-30 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </Reveal>
    </div>
  );
}

export default Reviews;
