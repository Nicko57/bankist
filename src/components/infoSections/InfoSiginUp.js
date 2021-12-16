import React from "react";
import { Bounce, Slide, Zoom } from "react-awesome-reveal";
import { Link as LinkBtn } from "react-scroll";
import Img from "../../images/svg-3.svg";

const InfoSiginUp = () => {
  return (
    <div className="bg-gray-50 py-20" id="signup">
      <div className="container  font-encodeSans mx-auto sm:py-24 text-black ">
        <div className="flex  md:flex-col sm:flex-col">
          <div className="flex-1 md:mb-5 sm:mb-20">
            <Zoom>
              <p className="text-green-600 text-lg font-bold uppercase mb-4">
                join our team
              </p>
            </Zoom>
            <Slide>
              <h1 className="font-semibold mb-6 text-5xl sm:text-3xl">
                Creating an account is extremely easy
              </h1>
              <p className="mb-9 text-lg md:tracking-normal max-w-md tracking-wide ">
                Get everything set up and ready in under 10 minutes. All you
                need to do is add your information and you're ready to go.
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
                  Start Now
                </LinkBtn>
              </div>
            </Bounce>
          </div>
          <div className="flex-1 md:py-20">
            <img src={Img} alt="" className="h-4/5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSiginUp;
