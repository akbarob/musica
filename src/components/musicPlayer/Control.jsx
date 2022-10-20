import React from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { Play, Next, Previous, Shuffle, RepeatOne } from "./assests";

export const Control = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => {
  return (
    <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
      <img
        src={Shuffle}
        alt="shuffle"
        className="hidden md:block cursor-pointer"
        onClick={() => setShuffle((prev) => !prev)}
      />
      <img
        src={Previous}
        alt="Previous"
        className=" cursor-pointer"
        onClick={handlePrevSong}
      />
      {isPlaying ? (
        <FaPauseCircle
          color="#FACD66"
          alt="Play/Pause"
          className=" cursor-pointer"
          onClick={handlePlayPause}
        />
      ) : (
        <FaPlayCircle
          color="#FACD66"
          alt="Play/Pause"
          className="cursor-pointer"
          onClick={handlePlayPause}
        />
      )}
      <img
        src={Next}
        alt="next"
        className="hiddem sm:block cursor-pointer"
        onClick={handleNextSong}
      />
      <img
        src={RepeatOne}
        alt="Repeat"
        className="hidden md:block cursor-pointer"
        onClick={() => setRepeat((prev) => !prev)}
      />
    </div>
  );
};
