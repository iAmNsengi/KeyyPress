"use client";

import Navbar from "./Navbar";
import { Boxes } from "../ui/background-boxes";
  import { ColourfulText } from "../ui/colorful-text";
import Globe from "./Globe";
// import GlobeComponent from "./Globe";
import { cn } from "../../lib/utils";
import { BackgroundBeamsWithCollision } from "../ui/beams-with-collision";

const Header = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col pt-14">
        <Navbar />
        <div className="h-screen w-screen">
          <div className="h-1/2 relative w-screen overflow-hidden bg-slate-900 flex  items-center justify-between px-20 rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />
            <div className="">
              <h2
                className={cn("md:text-4xl text-xl text-white relative z-20")}
              >
                We are
              </h2>
              <h1
                className={cn("md:text-8xl text-xl text-white relative z-20")}
              >
                Keyy
                <span className="text-orange-600 font-bold">
                  <ColourfulText text="Press..." />
                </span>
              </h1>
              <p className=" text-lg mt-2 text-neutral-300 relative z-20 py-6">
                A software development company dedicated to serving you with
                great software solutions,...
              </p>
            </div>
            <div className="size-80">
              <Globe />
            </div>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Header;
