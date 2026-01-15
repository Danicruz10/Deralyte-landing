//import React from "react";

import Reveal from "./Reveal";

type Props = {};

function IntroductionSection({}: Props) {
  return (
    <section className=" min-w-50 w-full min-h-96 md:h-125 py-8 bg-white flex flex-col justify-center items-center  text-black/60">
      <article className=" w-2/3 wrap-break-word ">
        <Reveal>
          <h1 className=" font-poppins font-semibold text-center text-3xl">
            Introducing the Deralyte Mask
          </h1>
          <p className=" text-justify md:text-center mt-6 md:mt-15 md:text-lg">
            Revitalize your skincare routine with the Deralyte Bio-Collagen Deep
            Hydrating Face Mask, specially formulated to deliver intense
            overnight hydration and support a healthier, more radiant
            complexion. Infused with powerful bio-collagen and hydrogel
            technology, this mask helps soothe tired skin, refine the appearance
            of pores, and boost moisture while you sleep for smoother, plumper,
            more glowing skin come morning.
          </p>
        </Reveal>
      </article>
    </section>
  );
}

export default IntroductionSection;
