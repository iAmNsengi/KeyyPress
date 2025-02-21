import { Link } from "react-router-dom";
import { BackgroundBeamsWithCollision } from "../ui/beams-with-collision";
import Button from "../Button";

const NotFound = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="min-h-screen w-screen bg-[#0F172A] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-8xl font-bold text-white mb-4">404</h1>
        <div className="relative">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-6">
            Page Not Found
          </h2>
        </div>
        <p className="text-gray-400 max-w-md mb-8">
          Oops! It seems you've ventured into uncharted territory. Let's get you
          back on track.
        </p>
        <Link to="/">
          <Button text="Back to Home" />
        </Link>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default NotFound;
