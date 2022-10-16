import React from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { Play, Next, Previous, Shuffle, RepeatOne } from "./assets";

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
        className="hiddem sm:block cursor-pointer"
      />
      <img
        src={Previous}
        alt="Previous"
        className="hiddem sm:block cursor-pointer"
      />
      {isPlaying ? (
        <FaPauseCircle
          color="#FACD66"
          alt="Play/Pause"
          className="hiddem sm:block cursor-pointer"
          onClick={handlePlayPause}
        />
      ) : (
        <FaPlayCircle
          color="#FACD66"
          alt="Play/Pause"
          className="hiddem sm:block cursor-pointer"
          onClick={handlePlayPause}
        />
      )}
      <img src={Next} alt="next" className="hiddem sm:block cursor-pointer" />
      <img
        src={RepeatOne}
        alt="Repeat"
        className="hiddem sm:block cursor-pointer"
      />
    </div>
  );
};
