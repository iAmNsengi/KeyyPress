"use client";

import Navbar from "./Navbar";
import { Boxes } from "../ui/background-boxes";
import { ColourfulText } from "../ui/colorful-text";
import Globe from "./Globe";
import { cn } from "../../lib/utils";
import { BackgroundBeamsWithCollision } from "../ui/beams-with-collision";

const Header = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col pt-4 md:pt-14">
        <Navbar />
        <div className="h-screen w-screen">
          <div className="h-2/3 relative w-full overflow-hidden bg-slate-900 flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-36 rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />
            <div className="text-left lg:text-left mb-8 lg:mb-0 pt-40 md:pt-20 2staxl:px-32">
              <h2
                className={cn(
                  "text-2xl md:text-2xl lg:text-4xl text-white relative z-20"
                )}
              >
                We are
              </h2>
              <h1
                className={cn(
                  "text-6xl md:text-5xl lg:text-7xl xl:text-8xl text-white relative z-20 mt-2"
                )}
              >
                Keyy
                <span className="text-orange-600 font-bold">
                  <ColourfulText text="Press..." />
                </span>
              </h1>
              <p className="text-base md:text-lg mt-2 text-neutral-300 relative z-20 py-4 md:py-6 max-w-md mx-auto lg:mx-0">
                A software development company dedicated to serving you with
                great software solutions,...
              </p>
              <button className="bg-orange-600 text-white border border-orange-600 hover:bg-transparent hover:text-orange-600 px-7 py-2 z-40 relative mt-4">
                Get Started
              </button>
            </div>
            <div className="hidden lg:block xl:px-32">
              <Globe />
            </div>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Header;
