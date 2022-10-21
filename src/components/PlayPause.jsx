import React from "react";
import { FaPause, FaPlay } from "react-icons/fa";

export const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPause size={35} className="text-[#FACD66] p-2" onClick={handlePause} />
  ) : (
    <FaPlay size={35} className="text-[#FACD66] p-2" onClick={handlePlay} />
  );
