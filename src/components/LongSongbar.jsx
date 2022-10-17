import React from "react";
import { Heart, More } from "../assets";
import Background from "../Lead-image.png";

export const LongSongbar = ({ song }) => {
  return (
    <div className="relative flex flex-row bg-[#1A1E1F] h-[56px] w-[354px] sm:w-[1125px] rounded-[20px]  items-center p-4 mx-auto mb-[10px]">
      <div className="flex ">
        <img
          src={song ? song?.images.background : Background}
          className="w-[39px] h-[39px] rounded-[10px]"
        />
        <button className=" ml-[20.13px]">
          <img
            src={Heart}
            alt="heart_icon"
            className="w-[14.25px] h-[13.5px]"
          />
        </button>
      </div>
      <div className="flex items-center justify-between sm:px-8 py-6 w-full">
        <div className="sm:flex ">
          <div>
            <p className="text-xs text-[#ffffff]/50 ">
              {song ? song?.title : "Let me love you ~ Krisx"}
            </p>
          </div>
          <div>
            <p className="text-xs text-[#ffffff]/50 mb-1">
              {" "}
              {song ? song?.title : "Single"}
            </p>
          </div>
        </div>
        <div className="sm:flex">
          <p className="text-xs text-[#ffffff]/50 sm:order-first">
            {song ? song?.title : "6:13"}
          </p>
          <button className="">
            <img
              src={More}
              alt="heart_icon"
              className="w-[15.83px] h-[13.5px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
