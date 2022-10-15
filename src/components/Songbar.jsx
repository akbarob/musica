import React from "react";
import { Heart } from "../assets";

export default function Songbar({ song }) {
  return (
    <div className="relative flex flex-row bg-[#1A1E1F] h-[96px] w-[417px] rounded-[20px] mb-[12px] items-center p-4">
      <div className="">
        <img
          src={song.images.background}
          className="w-[63px] h-[63px] rounded-[10px]"
        />
      </div>
      <div className="ml-4 py-6">
        <p className="text-lg text-[#ffffff] ">{song.title}</p>
        <p className="text-xs text-[#ffffff]/50 mb-1">{song.subtitle}</p>
        <p className="text-xs text-[#ffffff]">{song.subtitle}</p>
      </div>
      <div
        className="absolute right-10 top-10 border-1 border-[
#FFFFFF]/11"
      >
        {" "}
        <button className="outline outline-offset-8 outline-1 rounded-full outline-[#FFFFFF]/10 it">
          <img
            src={Heart}
            alt="heart_icon"
            className="w-[14.25px] h-[13.5px]"
          />
        </button>
      </div>
    </div>
  );
}
