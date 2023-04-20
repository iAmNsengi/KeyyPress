import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`bg-[#0F172A] p-4 py-8 ${isOpen ? "pt-60" : "pt-20"}`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link
            to={"/"}
            className="text-white text-lg font-bold border border-r-8 rounded-lg px-3 py-1"
          >
            Keyy<span className="text-orange-600 font-bold">Press</span>
          </Link>

          {/* Hamburger menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-300 hover:text-orange-600"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex space-x-4">
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

        {/* Mobile menu */}
        <div
          className={`lg:hidden ${
            isOpen ? "block" : "hidden"
          } mt-4 flex flex-col space-y-4`}
        >
          <NavLink
            to={"/"}
            className="text-gray-300 hover:text-orange-600 text-center"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className="text-gray-300 hover:text-orange-600 text-center"
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to={"/services"}
            className="text-gray-300 hover:text-orange-600 text-center"
            onClick={toggleMenu}
          >
            Services
          </NavLink>
          <NavLink
            to={"/contact"}
            className="text-gray-300 hover:text-orange-600 text-center"
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
