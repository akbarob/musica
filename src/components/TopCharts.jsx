import React from "react";
import Songbar from "./Songbar";

export default function TopCharts({ topcharts }) {
  return (
    <div className="mx-20">
      <div className="">
        <h1 className="text-[#EFEEE0] font-bold text-2xl">Top Charts</h1>
        <div className="">
          {topcharts.map((song, i) => (
            <Songbar key={song.key} song={song} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
