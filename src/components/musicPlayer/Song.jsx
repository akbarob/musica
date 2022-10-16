import React from "react";

export const Song = ({ isPlaying, isActive, activeSong }) => {
  return (
    <div>
      {activeSong?.title && (
        <div className="flex items-center justify-start">
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
