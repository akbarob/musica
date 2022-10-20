import React from "react";
import { useSelector } from "react-redux";
import Songbar from "./Songbar";

export default function TopCharts({ topcharts }) {
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  return (
    <div className="md:ml-auto md:mr-8 ">
      <div className="pl-6 mt-6">
        <h1 className="text-[#EFEEE0] font-bold text-2xl ">Top Charts</h1>
        <div className="">
          {topcharts?.map((song, i) => (
            <Songbar
              key={song.key}
              song={song}
              i={i}
              data={topcharts}
              activeSong={activeSong}
              isPlaying={isPlaying}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
