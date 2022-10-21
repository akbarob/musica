import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "../assets";
import { PlayPause } from "./PlayPause";
import { playPause, setActiveSong } from "../redux/feature/playerSlice";
import { useDispatch } from "react-redux";

export default function Songbar({ song, i, isPlaying, activeSong, data }) {
  const dispatch = useDispatch();
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
    <div className="relative flex flex-col flex-none bg-[#1A1E1F]  w-[323px] rounded-[20px] items-start p-4 max-w-none">
      <div className="relative group">
        <div
          className={`absolute inset-0 items-center justify-center bg-gray-700 bg-opacity-50 rounded-[25px] cursor-pointer  group-hover:flex ${
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
          className="w-[108px]  rounded-[10px] max-w-none"
        />
      </div>
      <div className=" py-6">
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
        className="absolute right-5 top-5 border-1 border-[
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
