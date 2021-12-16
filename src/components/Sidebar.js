import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div
      className={isOpen ? "sideBar-container" : "hidden"}
      //   isOpen={isOpen}
      onClick={toggle}
    >
      <div
        className="absolute top-5 right-6 text-4xl  cursor-pointer"
        onClick={toggle}
      >
        <FaTimes className="text-white" />
      </div>
      <div className="grid grid-cols-1 grid-rows-6 pt-36 sm:grid-rows-6">
        <ul className="text-white text-center">
          <li className=" mb-10">
            <LinkScroll to="about" className="SideBar-Links" onClick={toggle}>
              About
            </LinkScroll>
          </li>
          <li className=" mb-10">
            <LinkScroll
              to="discover"
              className="SideBar-Links"
              onClick={toggle}
            >
              Discover
            </LinkScroll>
          </li>
          <li className=" mb-10">
            <LinkScroll
              to="services"
              className="SideBar-Links"
              onClick={toggle}
            >
              Services
            </LinkScroll>
          </li>
          <li className=" mb-10">
            <LinkScroll to="signup" className="SideBar-Links" onClick={toggle}>
              Sign Up
            </LinkScroll>
          </li>
        </ul>
        <button className="">
          <LinkRouter to="signin" className="sideBar-btn">
            Sign In
          </LinkRouter>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
