import React from "react";
import { Bounce, Slide, Zoom } from "react-awesome-reveal";
import { Link as LinkBtn } from "react-scroll";
// import Typical from "react-typical";
import Img from "../../images/svg-1.svg";

const InfoBanking = () => {
  return (
    <div className="bg-black py-20 " id="about">
      <div className="container  font-encodeSans mx-auto py-12 sm:py-24 text-white">
        <div className="flex  md:flex-col sm:flex-col">
          <div className="flex-1 md:mb-5 sm:mb-10">
            <Zoom>
              <p className="text-green-600 text-lg font-bold uppercase mb-7">
                Premium Bank
              </p>
            </Zoom>
            <Slide>
              <h1 className="font-semibold mb-6 text-5xl sm:text-3xl">
                {/* <Typical
                steps={
                  ("Unlimited",
                  1000,
                  "Transactions",
                  1000,
                  "with",
                  1000,
                  "zero",
                  1000,
                  "fees",
                  1000)
                }
                loop={Infinity}
                wrapper="p"
              /> */}
                Unlimited Transactions with zero fees
              </h1>
              <p className="mb-9 text-lg md:tracking-normal max-w-md tracking-wide ">
                Get access to our exclusive app that allows you to send
                inlimited transactions without getting charged any fees
              </p>
            </Slide>
            <Bounce>
              <div className="mt-3 ">
                <LinkBtn
                  to="signup"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  className="start-btn"
                >
                  Get Started
                </LinkBtn>
              </div>
            </Bounce>
          </div>
          <div className="flex-1 pt-8 md:py-20">
            <img src={Img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBanking;
