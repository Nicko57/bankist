import React, { useState, useEffect } from "react";

import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <nav
      className={scrollNav ? "navBg" : "navBg-trasparent"}
      scrollNav={scrollNav}
    >
      <div className="container mx-auto md:ml-6 sm:ml-6 h-full  flex  items-center flex-shrink-0 text-white py-0 ">
        <div className="flex-1 text-center md:text-left sm:text-left">
          <LinkRouter
            to="/"
            className="font-bold text-white text-2xl cursor-pointer"
            onClick={toggleHome}
          >
            Bankist
          </LinkRouter>
        </div>
        <div className="navBar-Icon">
          <FaBars onClick={toggle} />
        </div>
        <div className=" flex-grow md:hidden sm:hidden">
          <ul className="navBar-Menu ">
            <li className="h-full">
              <LinkScroll
                to="about"
                className="navLink-items"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                About
              </LinkScroll>
            </li>
            <li className="h-full">
              <LinkScroll
                to="discover"
                className="navLink-items"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                Discover
              </LinkScroll>
            </li>
            <li className="h-full">
              <LinkScroll
                to="services"
                className="navLink-items"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                Services
              </LinkScroll>
            </li>
            <li className="h-full">
              <LinkScroll
                to="signup"
                className="navLink-items"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                Sign Up
              </LinkScroll>
            </li>
          </ul>
        </div>
        <div className="flex-1 md:hidden sm:hidden text-center">
          <LinkRouter to="/signin" className="navBtn">
            Sign In
          </LinkRouter>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
