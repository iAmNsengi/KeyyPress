const Globe = () => {
  return (
    <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] flex items-center justify-center overflow-hidden">
      {/* Grid lines for globe effect */}
      <div className="absolute w-full h-full rounded-full border-2 border-blue-500/20 animate-[spin_20s_linear_infinite]">
        <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full rotate-[20deg]" />
        <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full rotate-[40deg]" />
        <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full rotate-[60deg]" />
        <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full rotate-[80deg]" />
      </div>

      {/* Main globe sphere */}
      <div className="relative w-full h-full">
        <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-pulse" />

        {/* Dots representing locations */}
        <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-1/4 left-1/4 animate-ping" />
        <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-1/3 right-1/3 animate-ping [animation-delay:1s]" />
        <div className="absolute w-2 h-2 bg-blue-400 rounded-full bottom-1/4 right-1/4 animate-ping [animation-delay:2s]" />

        {/* Glowing effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-transparent animate-[spin_20s_linear_infinite]" />
      </div>

      {/* Orbiting particles */}
      <div className="absolute w-full h-full animate-[spin_15s_linear_infinite]">
        <div className="absolute w-1 h-1 bg-blue-400 rounded-full top-0 left-1/2 animate-pulse" />
        <div className="absolute w-1 h-1 bg-blue-400 rounded-full bottom-0 left-1/2 animate-pulse" />
        <div className="absolute w-1 h-1 bg-blue-400 rounded-full left-0 top-1/2 animate-pulse" />
        <div className="absolute w-1 h-1 bg-blue-400 rounded-full right-0 top-1/2 animate-pulse" />
      </div>
    </div>
  );
};

export default Globe;
