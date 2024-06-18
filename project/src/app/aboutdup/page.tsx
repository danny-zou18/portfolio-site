"use client";

import React from "react";

const AboutDupPage = () => {
  return (
    <div className=" w-[80%] mx-auto pt-14">
      <div className="flex justify-center md:mt-8 xsm:mt-36 mb-20 ">
        <h1 className="text-3xl font-[200] text-primary border-b-2 border-primary p-2">
          about me
        </h1>
      </div>
      <div className="w-[80%] mx-auto flex flex-row">
        <div>
          <div>
            <h1 className="text-5xl font-bold text-neutral-400">Danny Zou</h1>
            <h1 className="text-neutral-400 mt-2">
              Software Developer · Junior @{" "}
              <a className="text-red-500 relative group cursor-pointer" href="https://www.rpi.edu/" target="_blank">
                Rensselaer Polytechnic Institute
                <div className="absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-500 group-hover:w-full w-0"></div>
              </a>
            </h1>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutDupPage;
