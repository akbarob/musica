import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "../assets";
import { PlayPause } from "./PlayPause";
import { playPause, setActiveSong } from "../redux/feature/playerSlice";
import { useDispatch } from "react-redux";

export default function Songbar({
  song,
  i,
  isPlaying,
  activeSong,
  data,
  AddToLiked,
  removeFromLiked,
  liked,
}) {
  const dispatch = useDispatch();
  console.log(song);
  const songId = song.key;
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
            activeSong?.title === song?.title
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
          src={song?.images?.background}
          className="w-[108px]  rounded-[10px] max-w-none"
        />
      </div>
      <div className=" py-6">
        <p
          className="text-lg text-[#ffffff] cursor-pointer"
          onClick={() => navigate(`/song/${song?.key}`)}
        >
          {song?.title}
        </p>
        <p className="text-xs text-[#ffffff]/50 mb-1 cursor-pointer">
          {song?.subtitle}
        </p>
        <p className="text-xs text-[#ffffff]">{song?.subtitle}</p>
      </div>
      <div
        className="absolute right-5 top-5 border-1 border-[
#FFFFFF]/11 cursor-pointer"
      >
        <div className="outline outline-offset-8 outline-1 rounded-full outline-[#FFFFFF]/10 ">
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
          )}
        </div>
      </div>
    </div>
  );
}
