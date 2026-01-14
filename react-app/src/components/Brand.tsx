//import React from 'react'
import collagen from "../assets/media/Gemini_Generated_Image_xn8esnxn8esnxn8e.png";
import ingredients from "../assets/media/unnamed.jpg";
import hyaluronic from "../assets/media/unnamed (1).jpg";
import Clear from "../assets/media/Gemini_Generated_Image_rvbjqqrvbjqqrvbj.png";
import Reveal from "./Reveal";

type Props = {};

const brand = [
  {
    id: 0,
    title: "Collagen for Firmness",
    description:
      "Supports smoother, lifted-looking skin for a youthful appearance.",
    image: collagen,
  },
  {
    id: 1,
    title: "13 Essential Ingredients",
    description:
      "Each mask blends 13 carefully selected ingredients for complete skincare in one step.",
    image: ingredients,
  },
  {
    id: 2,
    title: "Hyaluronic Acid Hydration",
    description: "Locks in moisture so skin feels soft, plump, and refreshed.",
    image: hyaluronic,
  },
  {
    id: 3,
    title: "Clear Absorption Effect",
    description:
      "As the mask melts into your skin, it turns transparent—showing the active ingredients at work for a radiant finish.",
    image: Clear,
  },
];

function Brand({}: Props) {
  return (
    <section
      id="brand"
      className="w-full min-h-screen min-w-50 md:py-20 p-6 scroll-mt-18 sm:scroll-mt-0 bg-black/70 flex items-center "
    >
      <div className=" grid grid-cols-1 md:grid-cols-4 grow gap-4">
        {brand.map((item, index) => (
          <section
            key={item.id}
            className=" flex flex-col gap-4 h-full justify-start"
          >
            <Reveal>
              <img
                className={`w-full h-auto aspect-square ${
                  index === 1 ? "object-cover" : "object-contain"
                } rounded-full`}
                src={item.image}
                alt={item.title}
              />
            </Reveal>
            <Reveal>
              <div className="flex flex-col  items-center gap-4 text-white  flex-1">
                <h3 className="text-center font-bold text-xl min-h-12 ">
                  {item.title}
                </h3>
                <p className="text-center wrap-anywhere text-lg">
                  {item.description}
                </p>
              </div>
            </Reveal>
          </section>
        ))}
      </div>
    </section>
  );
}

export default Brand;
