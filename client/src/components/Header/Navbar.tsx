import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/80 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link
            to={"/"}
            className="text-white text-lg font-bold border border-r-8 rounded-lg px-3 py-1"
          >
            Keyy<span className="text-orange-600 font-bold">Press</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex space-x-8">
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

          {/* Hamburger menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-300 hover:text-orange-600"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden absolute left-0 right-0 bg-[#0F172A] border-b border-slate-800 px-4 py-4 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col space-y-4">
            <NavLink
              to={"/"}
              className="text-gray-300 hover:text-orange-600 text-center py-2"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className="text-gray-300 hover:text-orange-600 text-center py-2"
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to={"/services"}
              className="text-gray-300 hover:text-orange-600 text-center py-2"
              onClick={toggleMenu}
            >
              Services
            </NavLink>
            <NavLink
              to={"/contact"}
              className="text-gray-300 hover:text-orange-600 text-center py-2"
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
