"use client";

import { cn } from "../lib/utils";
import { Boxes } from "./ui/background-boxes";

const Landing = () => {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-6xl text-xl text-white relative z-20")}>
        Key<span className="text-orange-600 font-bold">Press</span>
      </h1>
      <p className="text-center text-lg mt-2 text-neutral-300 relative z-20">
        We can do it better
      </p>
    </div>
  );
};

export default Landing;
