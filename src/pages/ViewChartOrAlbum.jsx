import React from "react";
import Background from "../Lead-image.png";
import { Heart, Add } from "../assets";
import { FaPlayCircle } from "react-icons/fa";
import { LongSongbar } from "../components/LongSongbar";

export const ViewChartOrAlbum = () => {
  return (
    <div className="relative w-full h-screen overflow-y-auto">
      <div className="w-full h-full absolute">
        <img
          className="absolute w-full h-full object-cover mix-blend-multiply "
          src={Background}
        />
      </div>

      <div className="relative sm:flex mt-20 md:pl-[100px] px-auto">
        <img
          src={Background}
          className="w-[357px] h-[289px] sm:w-[284px] sm:h-[288px] rounded-[35px] mx-auto sm:mx-1 "
        />
        <div className=" mt-6 sm:mt-32 ml-8 text-white flex flex-col mr-8">
          <p className="font-bold text-[35px]">Tomorrows Tunes</p>
          <p className="text-[14px] mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>
          <p className="text-[14px]">64 songs ~ 16 hrs+</p>
          <div className="flex justify-between items-center mt-4 sm:w-[292px] ">
            <div className="h-[36px] w-[87px] flex backdrop-blur-lg bg-white/10 rounded-[20px] items-center justify-evenly cursor-pointer ">
              <FaPlayCircle
                color="#FACD66"
                alt="Play/Pause"
                className="hiddem sm:block "
              />
              <p className="text-[12px]">Play all</p>
            </div>
            <div className="h-[36px] w-[151px] flex backdrop-blur-lg bg-white/10 rounded-[20px] items-center justify-evenly cursor-pointer">
              <img src={Add} alt="heart_icon" className="w-[16px] h-[16px]" />
              <p className="text-[12px]">Add to collection</p>
            </div>
            <div className="hidden h-[36px] w-[36px] sm:flex backdrop-blur-lg bg-white/10 rounded-[20px] items-center justify-evenly cursor-pointer">
              <img src={Heart} alt="heart_icon" className="w-[16px] h-[16px]" />
            </div>
            <div className="sm:hidden h-[36px] w-[90px] flex backdrop-blur-lg bg-white/10 rounded-[20px] items-center justify-evenly cursor-pointer">
              <img src={Add} alt="heart_icon" className="w-[16px] h-[16px]" />
              <p className="text-[12px]">Like</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[25px] sm:mt-[50px]">
        <LongSongbar />
      </div>
    </div>
  );
};
