import React from "react";
import { Eric, Heartw, Herovec, Herovecsm } from "../assets";

export default function Hero({ herodata }) {
  return (
    <div className="relative bg-[#609EAF] w-[367px] h-[503px] md:w-[686px] md:h-[373px] rounded-[40px] overflow-wrap overflow-hidden mx-auto md:mx-4">
      <div className="absolute top-10 left-10 ">
        <p className="text-white text-xs mb-[85px]">Currated playlist </p>
        <h1 className="text-white text-[35px] mb-4 mt-[200px] md:mt-0 ">
          R & B Hits
        </h1>
        <p className="text-white text-sm w-[276px]">
          All mine, Lie again, Petty call me everyday, Out of time, No love, Bad
          habit, and so much more{" "}
        </p>
        <div className=" flex mt-10 items-center ">
          {herodata?.map((img, i) => (
            <img
              alt="/"
              src={img.images?.background}
              key={img.key}
              className="w-[40px] h-[40px] rounded-full mx-[-10px]"
            />
          ))}
          <div className="ml-10 text-white flex justify-between">
            <img src={Heartw} alt="/" className="mr-2" /> <p> 33k Likes</p>
          </div>
        </div>
      </div>

      <img
        src={Eric}
        alt="eric"
        className="absolute right-0 z-40 hidden lg:block"
      />
      <img src={Herovec} alt="/" className="absolute right-0 hidden lg:block" />
      <img src={Herovecsm} alt="/" className="absolute right-0 lg:hidden" />
    </div>
  );
}
