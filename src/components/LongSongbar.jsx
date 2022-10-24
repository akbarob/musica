import React, { useState, useRef } from "react";
import { Heart, More } from "../assets";
import Background from "../Lead-image.png";
import { PlayPause } from "./PlayPause";
import { playPause, setActiveSong } from "../redux/feature/playerSlice";
import { useDispatch } from "react-redux";

export const LongSongbar = ({ song, i, isPlaying, activeSong, data }) => {
  const dispatch = useDispatch();
  const audioRef = useRef(null);
  const [duration, setDuration] = useState(0);
  // converts the time to format 0:00
  const getTime = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  const handlePause = () => {
    dispatch(playPause(false));
  };
  const handlePlay = () => {
    dispatch(playPause(true));
    dispatch(setActiveSong({ song, data, i }));
  };

  return (
    <div className="relative flex flex-row bg-[#1A1E1F]/50 backdrop-blur-sm h-[56px] w-full rounded-[20px] items-center p-4 mx-auto mb-[10px]">
      <div className="flex relative group">
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
          src={song ? song?.images?.coverart : Background}
          className="w-[39px] h-[39px] rounded-[10px] max-w-none"
        />
      </div>
      <button className=" ml-[20.13px]">
        <img
          src={Heart}
          alt="heart_icon"
          className="w-[14.25px] h-[13.5px] max-w-none"
        />
      </button>
      <div className="flex items-center justify-between py-6 w-full mx-4 lg:mx-8">
        <div className="flex flex-col lg:flex-row items-start">
          <div className="w-48 lg:w-[350px] mt-2 lg:mt-0">
            <p className="text-xs text-[#ffffff]/50 truncate">
              {song ? song?.title : "Let me love you ~ Krisx"} -{" "}
              {song ? song?.subtitle : "Single"}
            </p>
          </div>
          <div className="mt-2 lg:mt-0 lg:mx-24">
            <p className="text-xs text-[#ffffff]/50 mb-1 text-center justify-center">
              {"Single"}
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:justify-between">
          <p className="text-xs text-[#ffffff]/50 mt-2 lg:mt-0">
            {getTime(duration)}
          </p>
          <audio
            src={song?.hub?.actions ? song?.hub?.actions[1]?.uri : null}
            ref={audioRef}
            onLoadedMetadata={(event) => setDuration(event.target.duration)}
          />
          <button className="order-first lg:order-last lg:ml-44 mt-2 lg:mt-0">
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
