import React, { useState, useRef } from "react";
import { Heart, More } from "../assets";
import { PlayPause } from "./PlayPause";
import { playPause, setActiveSong } from "../redux/feature/playerSlice";
import { useDispatch } from "react-redux";

export const LongSongbar = ({
  song,
  i,
  isPlaying,
  activeSong,
  data,
  AddToLiked,
  removeFromLiked,
  liked,
}) => {
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
  const songId = song.key;

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
          src={song && song?.images?.coverart}
          className="w-[39px] h-[39px] rounded-[10px] max-w-none"
        />
      </div>
      <button className=" ml-[20.13px]">
        {liked?.filter((song) => song.key === songId)[0] ? (
          <Heart
            className="w-[16px] h-[14px] max-w-none fill-[#E5524A] stroke-black"
            onClick={() => removeFromLiked(song)}
          />
        ) : (
          <Heart
            className="w-[16px] h-[14px] max-w-none  stroke-[#EFEEE0]"
            onClick={() => AddToLiked(song)}
          />
        )}{" "}
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
              alt="more_icon"
              className="w-[15.83px] h-[13.5px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
