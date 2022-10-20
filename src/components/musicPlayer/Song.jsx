import React from "react";

export const Song = ({ isPlaying, isActive, activeSong }) => {
  return (
    <div>
      {activeSong?.title && (
        <div className="flex-1 flex items-center justify-start">
          <div
            className={`${
              isPlaying && isActive ? "animate-[spin_3s_linear_infinite]" : ""
            } hidden sm:block h-16 w-16 mr-4`}
          >
            <img
              src={activeSong?.images?.coverart}
              alt="cover art"
              className="rounded-full"
            />
          </div>
          <div className="w-[50%] ml-4">
            <p className="truncate text-white font-bold text-sm">
              {activeSong?.title ? activeSong?.title : "No active Song"}
            </p>
            <p className="truncate text-gray-300 text-xs">
              {activeSong?.subtitle ? activeSong?.subtitle : "No active Song"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
