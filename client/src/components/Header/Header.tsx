"use client";

import Navbar from "./Navbar";
import { Boxes } from "../ui/background-boxes";
import { ColourfulText } from "../ui/colorful-text";
import Globe from "./Globe";
import { BackgroundBeamsWithCollision } from "../ui/beams-with-collision";
import Button from "../Button";
import MovingCards from "./MovingCards";

const Header = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col h-full">
        <Navbar />
        <div className="flex-1 w-full">
          <div className="relative w-full h-full bg-slate-900 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pb-20 ">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes />

            {/* Main content container - adjusted padding top */}
            <div className="relative z-20 text-center max-w-4xl mx-auto pt-72">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-light tracking-wide mb-3">
                We are
              </h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mt-2 font-bold tracking-tight">
                Keyy
                <span className="text-orange-600">
                  <ColourfulText text="Press" />
                </span>
              </h1>
              <p className="text-base md:text-lg mt-8 text-neutral-300 max-w-2xl mx-auto px-4 leading-relaxed">
                We specialize in crafting bespoke software solutions that drive
                business growth and innovation. From enterprise applications to
                cutting-edge web platforms, our expert team transforms complex
                challenges into elegant, efficient digital solutions tailored to
                your unique needs.
              </p>
              <div className="mt-10">
                <Button text="Start Your Journey" />
              </div>
            </div>

            {/* Globe positioned at the bottom */}
            <div className="w-full relative mt-20">
              <Globe />
            </div>
          </div>
        </div>
        <div className="-mt-20">
          <MovingCards />
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Header;
