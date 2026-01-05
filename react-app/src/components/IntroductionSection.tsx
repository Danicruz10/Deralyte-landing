//import React from "react";

import Reveal from "./Reveal";

type Props = {};

function IntroductionSection({}: Props) {
  return (
    <section className=" min-w-50 w-screen min-h-96 md:h-125 py-8 bg-black/70 flex flex-col justify-center items-center  text-white">
      <article className=" w-2/3 wrap-break-word ">
        <Reveal>
          <h1 className=" text-center text-4xl">
            Introducing the Deralyte Mask
          </h1>
          <p className="text-center mt-15 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vel tortor odio. Donec eget euismod justo, at interdum elit. Mauris
            eu dui non risus feugiat luctus. Nunc vel enim a elit tincidunt
            semper. Sed quis quam eget ipsum laoreet tempor. Vivamus eu magna a
            nunc pharetra interdum. Quisque quis feugiat neque. Praesent in
            risus vitae nisl auctor feugiat.
          </p>
        </Reveal>
      </article>
    </section>
  );
}

export default IntroductionSection;
