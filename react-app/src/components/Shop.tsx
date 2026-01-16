//import React from "react";
import shop from "../assets/media/IMG_20251117_223519_564.png";
import Reveal from "./Reveal";

type Props = {};

function Shop({}: Props) {
  return (
    <section
      id="shop"
      className="w-full min-h-screen flex items-center min-w-50  p-6   bg-linear-to-b from-white to-brand-pink scroll-mt-18 sm:scroll-mt-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-4">
        <section className=" flex flex-col max-[10rem]:wrap-anywhere wrap-break-word p-4 min-h-fit ">
          <Reveal>
            <header className=" flex justify-center ">
              <div className=" w-[clamp(17.5rem,70%,20rem)] text-black/60">
                <h2 className=" font-poppins font-semibold max-[20rem]:text-xl text-2xl  leading-tight  max-[20rem]:text-center text-start">
                  Renewed Formula...
                </h2>
                <h2 className="font-poppins font-semibold max-[20rem]:text-xl text-2xl leading-tight max-[20rem]:text-center text-end">
                  Enhanced Results
                </h2>
              </div>
            </header>
          </Reveal>
          <Reveal>
            <article className="flex flex-col items-center">
              <div className="w-full max-w-113 p-4 ">
                <img
                  className="w-full h-auto aspect-square object-contain  "
                  src={shop}
                  alt="Shop"
                />
              </div>

              <footer className=" w-full max-w-[320px] border-t border-black/20 pt-2">
                <p className="text-black/60 text-start text-lg">
                  Deralyte <br />
                  <span className="font-semibold">19 USD</span>
                </p>
              </footer>
            </article>
          </Reveal>
        </section>
        <section className="flex flex-col justify-center p-4 gap-4  text-black/60 ">
          <Reveal>
            <h3 className="font-poppins text-start font-semibold text-2xl">
              Deralyte Skincare
            </h3>
          </Reveal>
          <Reveal>
            <p className="text-start wrap-anywhere">
              A premium hydrogel mask with 13 skin-benefiting ingredients,
              including Collagen, Hyaluronic Acid, and Niacinamide. It deeply
              hydrates, brightens, and helps improve skin firmness, leaving your
              face refreshed and glowing.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex min-h-10 justify-center text-center ">
              <a
                href="https://www.amazon.com/dp/B0FQCS5226"
                target="_blank"
                rel="noopener noreferrer"
                className=" w-full bg-blue-700 rounded-sm p-2 hover:bg-blue-800 transition-colors font-semibold text-white"
              >
                Shop Now
              </a>
            </div>
          </Reveal>
        </section>
      </div>
    </section>
  );
}

export default Shop;
