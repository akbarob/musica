import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "../assets";
import { PlayPause } from "./PlayPause";
import { playPause, setActiveSong } from "../redux/feature/playerSlice";

export default function Songbar({ song, i, isPlaying, activeSong, data }) {
  console.log(song);
  const navigate = useNavigate();

  const handlePause = () => {
    dispatch(playPause(false));
  };
  const handlePlay = () => {
    dispatch(playPause(true));
    dispatch(setActiveSong({ song, data, i }));
  };

  return (
    <div className="relative flex flex-row bg-[#1A1E1F] h-[96px] w-[417px] rounded-[20px] mb-[12px] items-center p-4">
      <div className="relative group">
        <div
          className={`absolute inset-0 items-center justify-center bg-amber-700 bg-opacity-50 rounded-[25px] group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-blue-500 bg-opacity-30"
              : "hidden"
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePlay={handlePlay}
            handlePause={handlePause}
          />
        </div>
        <img
          src={song.images.background}
          className="w-[63px] h-[63px] rounded-[10px]"
        />
      </div>
      <div className="ml-4 py-6">
        <p
          className="text-lg text-[#ffffff] cursor-pointer"
          onClick={() => navigate(`/song/${song?.key}`)}
        >
          {song.title}
        </p>
        <p className="text-xs text-[#ffffff]/50 mb-1 cursor-pointer">
          {song.subtitle}
        </p>
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
