import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/img/logo2.jpg";
import Hamburger from "./icons/Hamburger";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <nav className="container mx-auto relative">
        {/* flex container */}
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="pt-2 cursor-pointer">
            <img src={Logo} alt="company logo" className="w-48 bg-white" />
          </div>
          {/* links */}
          <div className="md:flex space-x-8 hidden">
            <Link to="/" className="nav-links">
              Home
            </Link>
            <Link to="/about" className="nav-links">
              About
            </Link>
            <Link to="/services" className="nav-links">
              Services
            </Link>
            <Link to="/career" className="nav-links">
              Career
            </Link>
            <Link to="/blog" className="nav-links">
              Blog
            </Link>
            <Link to="/contact" className="nav-links">
              Contact Us
            </Link>
          </div>
          {/* mobile navbad */}
          <button id="menu-btn" onClick={handleOpen} className="block md:hidden">
            <Hamburger />
          </button>
        </div>
        {open && (
          <div>
            <div className="absolute bg-red-100 flex flex-col w-full font-bold py-8 space-y-3 self-end drop-shadow-2xl pl-3">
              <Link to="/" className="nav-links" onClick={handleClose}>
                Home
              </Link>
              <Link to="/about" className="nav-links" onClick={handleClose}>
                About
              </Link>
              <Link to="/services" className="nav-links">
                Services
              </Link>
              <Link to="/career" className="nav-links">
                Career
              </Link>
              <Link to="/blog" className="nav-links">
                Blog
              </Link>
              <Link to="/contact" className="nav-links">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
