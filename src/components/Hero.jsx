import React from "react";
import { Eric, Herovec } from "../assets";

export default function Hero() {
  return (
    <div className="relative bg-[#609EAF] w-[367px] h-[503px] md:w-[686px] md:h-[373px] rounded-[40px] overflow-hidden mx-auto">
      <div className="absolute top-10 left-10 ">
        <p className="text-white text-xs mb-[85px]">Currated playlist </p>
        <h1 className="text-white text-[35px] mb-4">R & B Hits</h1>
        <p className="text-white text-sm w-[276px]">
          All mine, Lie again, Petty call me everyday, Out of time, No love, Bad
          habit, and so much more{" "}
        </p>
      </div>

      <img
        src={Eric}
        alt="eric"
        className="absolute right-0 z-50 hidden md:block"
      />
      <img src={Herovec} alt="/" className="absolute right-0" />
    </div>
  );
}
