import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#0F172A] p-4 py-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to={"/"}
          className="text-white text-lg font-bold border  border-r-8 rounded-lg px-3 py-1"
        >
          Keyy<span className="text-orange-600 font-bold">Press</span>
        </Link>
        <div className="space-x-4">
          <NavLink to={"/"} className="text-gray-300 hover:text-orange-600">
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className="text-gray-300 hover:text-orange-600"
          >
            About
          </NavLink>
          <NavLink
            to={"/services"}
            className="text-gray-300 hover:text-orange-600"
          >
            Services
          </NavLink>
          <NavLink
            to={"/contact"}
            className="text-gray-300 hover:text-orange-600"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
