//import React from 'react'
import inst1 from "../assets/media/instruccion 1.jpg";
import inst2 from "../assets/media/instruccion 2.jpg";
import inst3 from "../assets/media/instruccion 3.jpg";
import inst4 from "../assets/media/instuccion 4.jpg";
import Reveal from "./Reveal";

type Props = {};

const instruction = [
  {
    id: 0,
    image: inst1,
    tittle: "1. Cleanse & Prep",
    description: "Wash your face and apply toner or serum.",
  },
  {
    id: 1,
    image: inst2,
    tittle: "2. Apply Bottom Piece",
    description: "Remove film and place along chin and jawline.",
  },
  {
    id: 2,
    image: inst3,
    tittle: "3. Apply Top Piece",
    description:
      "Remove film and place across forehead and cheeks. Adjust to fit.",
  },
  {
    id: 3,
    image: inst4,
    tittle: "4. Relax & Absorb",
    description:
      "Leave on 2–3 hours, or until clear. Remove gently and massage remaining essence into skin. \n\n Or use before bed for overnight radiance or as a quick glow-boost before going out.",
  },
];

function Instruction({}: Props) {
  return (
    <section className="w-full min-w-50 flex flex-col p-6 gap-4 md:gap-0 bg-[#c28eaf] ">
      {instruction.map((item) => (
        <Reveal key={item.id}>
          <article className="grid grid-cols-1 min-h-[calc(100vh-3rem)] md:grid-cols-2 justify-items-center items-center grow gap-4">
            <img
              className={`w-full md:w-[80%] h-auto aspect-square object-cover rounded-full order-last ${
                item.id % 2 === 0 ? "md:order-first" : "md:order-last"
              }`}
              src={item.image}
              alt={item.tittle}
            />
            <div className="flex flex-col justify-center gap-4 text-xl">
              <h2 className="text-xl md:text-5xl text-center md:text-end font-bold text-white">
                {item.tittle}
              </h2>
              <p className="text-white whitespace-pre-line text-center md:text-end">
                {item.description}
              </p>
            </div>
          </article>
        </Reveal>
      ))}
    </section>
  );
}

export default Instruction;
