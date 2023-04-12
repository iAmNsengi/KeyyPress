"use client";

import { cn } from "../lib/utils";
import Navbar from "./Navbar";
import { Boxes } from "./ui/background-boxes";
import { BackgroundBeamsWithCollision } from "./ui/beams-with-collision";
import { ColourfulText } from "./ui/flush-text";

const Header = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col pt-14">
        <Navbar />
        <div className="h-screen w-screen">
          <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />
            <h1 className={cn("md:text-6xl text-xl text-white relative z-20")}>
              Keyy
              <span className="text-orange-600 font-bold">
                <ColourfulText text="Press" />{" "}
              </span>
            </h1>
            <p className="text-center text-lg mt-2 text-neutral-300 relative z-20 italic">
              We can do it better
            </p>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Header;
