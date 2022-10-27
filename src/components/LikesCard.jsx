import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "../assets";
import { PlayPause } from "./PlayPause";
import { playPause, setActiveSong } from "../redux/feature/playerSlice";
import { useDispatch } from "react-redux";

export default function LikesCard({ song, i, isPlaying, activeSong, data }) {
  const dispatch = useDispatch();
  const audioRef = useRef(null);
  const [duration, setDuration] = useState(0);
  console.log(song);
  const navigate = useNavigate();

  const handlePause = () => {
    dispatch(playPause(false));
  };
  const handlePlay = () => {
    dispatch(playPause(true));
    dispatch(setActiveSong({ song, data, i }));
  };

  const getTime = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  return (
    <div className="relative flex flex-row bg-[#1A1E1F] h-[96px] lg:w-[417px] rounded-[20px] mb-[12px] items-center p-4 ">
      <div className="relative group">
        <div
          className={`absolute inset-0 items-center justify-center bg-gray-700 bg-opacity-50 rounded-[25px] cursor-pointer  group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-gray-500 bg-opacity-30"
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
          src={song?.images?.background}
          className="w-[63px] h-[63px] rounded-[10px]"
        />
      </div>
      <div className="ml-4 py-6">
        <p
          className="text-lg text-[#ffffff] cursor-pointer"
          onClick={() => navigate(`/song/${song?.key}`)}
        >
          {song?.title}
        </p>
        <p className="text-xs text-[#ffffff]/50 mb-1 cursor-pointer">
          {song?.subtitle}
        </p>
        <audio
          src={song?.hub?.actions ? song?.hub?.actions[1]?.uri : null}
          ref={audioRef}
          onLoadedMetadata={(event) => setDuration(event.target.duration)}
        />{" "}
        <p className="text-xs text-[#ffffff]/50 mb-1 ">{getTime(duration)}</p>
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
