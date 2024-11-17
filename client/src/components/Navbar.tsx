import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-black text-white py-3 flex items-center justify-between px-10">
      <h2>zerSquare</h2>
      <ul className="flex items-center justify between gap-2 py-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Projects</Link>
        </li>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
