import React from "react";
import { Zoom } from "react-awesome-reveal";
import Img4 from "../../images/svg-4.svg";
import Img5 from "../../images/svg-5.svg";
import Img6 from "../../images/svg-6.svg";

const Services = () => {
  return (
    <div className="py-20 md:h-auto sm:h-auto bg-gray-900" id="services">
      <div className="container mx-auto  text-center  font-encodeSans ">
        <Zoom>
          <h1 className="text-4xl font-semibold text-white mb-16">
            Our Services
          </h1>
        </Zoom>
        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 space-x-2">
          <div className="card">
            <div className="flex-1 ">
              <img src={Img4} alt="" className="servies-img" />
            </div>
            <div className="flex-1">
              <h2 className="subtitle">Reduce expenses</h2>
              <p className="description">
                We help reduce your fees and increase your overall revenue.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="flex-1 ">
              <img src={Img5} alt="" className="servies-img" />
            </div>
            <div className="flex-1">
              <h2 className="subtitle">Virtuall Offices</h2>
              <p className="description">
                You can access our platform online anywhere in the world.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="flex-1 ">
              <img src={Img6} alt="" className="servies-img" />
            </div>
            <div className="flex-1">
              <h2 className="subtitle">Premium Benefits</h2>
              <p className="description">
                Unlock our special membership card that returns 5% cash back.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
