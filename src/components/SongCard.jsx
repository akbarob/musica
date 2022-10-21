import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { playPause, setActiveSong } from "../redux/feature/playerSlice";
import { PlayPause } from "./PlayPause";

export default function SongCard({ song, i, isPlaying, activeSong, data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePause = () => {
    dispatch(playPause(false));
  };
  const handlePlay = () => {
    dispatch(playPause(true));
    dispatch(setActiveSong({ song, data, i }));
  };
  return (
    <div className="justify-center w-[153px]  mx-auto">
      <div className="relative group cursor-pointer">
        <div
          className={`absolute inset-0 items-center justify-center bg-gray-700 bg-opacity-50 rounded-[25px] group-hover:flex ${
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
          src={song?.images?.coverart}
          className="rounded-[25px] w-[153px] h-[153px] max-w-none"
        />
      </div>

      <div className="mt-2">
        <p
          className="text-xs text-[#ffffff] cursor-pointer"
          onClick={() => navigate(`/song/${song?.key}`)}
        >
          {song?.title}
        </p>
        <p className="text-xs text-[#ffffff]/50 mb-1">{song?.subtitle}</p>
      </div>
    </div>
  );
}
