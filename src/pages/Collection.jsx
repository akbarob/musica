import React from "react";
import CollectionSongCard from "../components/CollectionSongCard";

export const Collection = () => {
  return (
    <div className="flex flex-col w-full overflow-y-auto hide-scrollbar md:pl-20 mt-[50px] ">
      <div className="flex justify-between items-center mt-4 md:w-[220px] mx-auto md:mx-0 ">
        <div className="p-[10px] h-[36px] w-[178px] md:w-[120px] flex backdrop-blur-lg bg-white/10 rounded-[20px] items-center justify-evenly cursor-pointer mr-4">
          <p className="text-[12px]">My collection</p>
        </div>
        <div className="h-[36px] w-[178px] md:w-[85px] flex backdrop-blur-lg bg-white/10 rounded-[20px] items-center justify-evenly cursor-pointer">
          <p className="text-[12px]">Likes</p>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row gap-x-10  md:overflow-none mt-[32px]">
        {[1, 2, 3, 4, 5, 7, 8, 9].map((song, i) => (
          <CollectionSongCard key={song.key} />
        ))}
      </div>
    </div>
  );
};
