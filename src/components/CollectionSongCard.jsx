import React from "react";
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../redux/feature/playerSlice";
import { PlayPause } from "./PlayPause";
import Background from "../Lead-image.png";

export default function SongCard({ song, i, isPlaying, activeSong, data }) {
  const dispatch = useDispatch();

  const handlePause = () => {
    dispatch(playPause(false));
  };
  const handlePlay = () => {
    dispatch(playPause(true));
    dispatch(setActiveSong({ song, data, i }));
  };
  return (
    <div className="relative rounded-[25px] w-[359px] h-[234px] md:w-[213px] md:h-[234px] justify-center cursor-pointer group overflow-hidden mx-auto mb-[20px] ">
      <img
        src={song ? song?.images?.coverart : Background}
        className=" absolute objext-cover w-full h-full mix-blend-normal hover:scale-125 ease-in-out duration-500 "
      />
      <div
        className={`absolute  bottom-10 right-2 bg-[#FACD66]  bg-opacity-40  rounded-[25px] hidden group-hover:flex `}
      >
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePlay={handlePlay}
          handlePause={handlePause}
        />
      </div>

      <div className="absolute z-0 bottom-10 left-8 ">
        <p className="text-xs text-[#ffffff] ">{song?.title} </p>
        <p className="text-xs text-[#ffffff]/50 mb-1">{song?.subtitle}</p>
        <p className="text-white font-bold hidden group-hover:flex">
          103 plays
        </p>
      </div>
    </div>
  );
}
// activeSong?.title === song?.title
//             ? "flex bg-yellow-500 bg-opacity-30"
//             : "hidden"
