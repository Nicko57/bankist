import React from "react";
import { Link as LinkBtn } from "react-scroll";
import Img from "../../images/svg-2.svg";
import { Bounce, Slide, Zoom } from "react-awesome-reveal";

const InfoLogin = () => {
  return (
    <div className="bg-gray-100 py-20" id="discover">
      <div className="container font-encodeSans mx-auto py-12 sm:py-24 text-white">
        <div className="flex flex-row-reverse md:flex-col sm:flex-col">
          <div className="flex-1 md:mb-5 sm:mb-20">
            <Zoom>
              <p className="text-green-600 text-lg font-bold uppercase mb-4">
                unlimited access
              </p>
            </Zoom>
            <Slide direction="right">
              <h1 className="font-semibold text-black mb-6 text-5xl sm:text-3xl ">
                Login to your account at any time
              </h1>
              <p className="mb-9 text-black text-lg md:tracking-normal max-w-md tracking-wide ">
                We have you covered no matter where you are located. All you
                need is an internet connection and a phone or computer.
              </p>
            </Slide>
            <Bounce>
              <div className="mt-3 ">
                <LinkBtn
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  className="sign-btn"
                >
                  Learn More
                </LinkBtn>
              </div>
            </Bounce>
          </div>
          <div className="flex-1 md:py-20">
            <img src={Img} alt="" className=" h-4/5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoLogin;
