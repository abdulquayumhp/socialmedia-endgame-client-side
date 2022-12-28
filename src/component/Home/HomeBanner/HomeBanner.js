import React from "react";
import { FaAcquisitionsIncorporated } from "react-icons/fa";
import "../HomeBanner/HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className="homeBanner  w-11/12 lg:w-9/12  mx-auto rounded-lg mb-5  ">
      <div className="flex lg:flex-row flex-col">
        <div className="pt-10 md:pt-36 md:px-0 px-10 pb-10 md:pb-0 Pl-10 md:pl-20 w-full  lg:w-[1100px] ">
          <div className="flex items-center ">
            <div className="ml-5 mb-5 text-7xl text-amber-400">
              <FaAcquisitionsIncorporated />
            </div>
            <div className=" bg-amber-400 w-36 h-px ml-2 mr-5"></div>
          </div>
          <h1 className="text-2xl md:text-7xl font-bold md:pb-16 pb-5">
            Best Place To Get{" "}
          </h1>
          <div className="flex items-center pb-10">
            <div className=" bg-amber-400 w-1 h-20 ml-2 mr-5"></div>
            <div>
              <h1 className="pb-2 md:text-4xl text-lg font-semibold">
                Together And Share Your Best Opinion{" "}
              </h1>
              <h1 className="text-1xl font-semibold">
                And Update Your Daily Life News{" "}
              </h1>
            </div>
          </div>
          <div className="px-5">
            <button className=" py-3 px-5 bg-amber-200 dm:text-xl text-sm font-semibold hover:bg-amber-500">
              Touch With Our Community{" "}
            </button>
          </div>
        </div>
        <div>
          <img
            className="homeImage"
            src="https://mymodernmet.com/wp/wp-content/uploads/2021/12/kristina-makeeva-eoy-photo-1.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
