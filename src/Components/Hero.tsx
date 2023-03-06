import React from "react";

export const Hero = () => {
  return (
    <div className="hero min-h-screen bg-neutral">
      <div className="hero-content text-center">
        <div className="grid">
          <p className="italic text-xl sm:text-3xl">Hi! I'm</p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-primary uppercase select-none hover:text-neutral-200 duration-500">
            Ygor Goulart
          </h1>
          <p className="py-8 text-3xl">Developer & Designer</p>
          <a
            href="#"
            className="uppercase font-thin outline outline-primary outline-1 text-primary hover:bg-primary hover:text-neutral duration-300 text-xl sm:text-5xl h-fit p-8 px-12"
          >
            See my Projects
          </a>
        </div>
      </div>
    </div>
  );
};
