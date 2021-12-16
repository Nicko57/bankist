import React, { useState } from "react";
import { Link } from "react-scroll";
import Video from "../../src/videos/video-2.mp4";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { Zoom, Slide } from "react-awesome-reveal";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <div className=" flex justify-center -mt-20" id="home">
      <div className="w-full ">
        <video
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
          className="w-full h-screen object-cover"
        />
      </div>
      <div className=" absolute z-10 top-0 mt-56 sm:mt-52 font-encodeSans py-2 w-6/12 sm:w-8/12 flex flex-col items-center">
        <Zoom>
          <h1 className="text-white font-bold text-5xl md:text-4xl sm:text-2xl text-center tracking-wide ">
            Virtual Banking Made Easy
          </h1>
        </Zoom>
        <Slide>
          <p className="mt-6 text-white text-center text-xl md:text-lg sm:text-sm tracking-wide ">
            Sign up for a new account today and receive $250 in credit towards
            your next payment.
          </p>
        </Slide>

        <Link
          to="signup"
          className="heroSignUp-btn"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Get started
          {hover ? (
            <MdArrowForward className="inline -mt-1 ml-1" />
          ) : (
            <MdKeyboardArrowRight className="inline -mt-1 ml-1" />
          )}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
