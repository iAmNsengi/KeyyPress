import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

const Landing = () => {
  return (
    <div className="w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.5] relative overflow-hidden">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-32 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          ZerSquare.dev <br />
          <span className="text-2xl italic text-gray-500">
            "We can do it better!"
          </span>
        </motion.h1>
        <button className="inline-flex mt-12 h-12 animate-shimmer items-center justify-center rounded-md border border-orange-600 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-orange-50 hover:scale-105">
          Get Started
        </button>
      </LampContainer>
    </div>
  );
};

export default Landing;
