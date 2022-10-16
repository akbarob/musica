import React from "react";
import Hero from "../components/Hero";
import TopCharts from "../components/TopCharts";
import SongCard from "../components/SongCard";
import Error from "../components/Error";
import Loader from "../components/Loader";

// //import swiper
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode } from "swiper";
// import "swiper/css";
// import "swiper/css/free-mode";
//fetch data using redux
import { useGetWorldChartQuery } from "../redux/services/Api";
import { useSelector } from "react-redux";

export const Home = () => {
  const { data, isFetching, error } = useGetWorldChartQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  console.log("fdddssssssssssf");
  console.log(data);
  const topCharts = data?.slice(0, 3);
  const newRelease = data?.slice(0, 15);

  //   console.log(topCharts);
  if (isFetching) return <Loader title="Loading Songs Around You" />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col w-full overflow-y-auto hide-scrollbar">
      <div className="flex flex-row songs-center w-full">
        <Hero />
        <TopCharts topcharts={topCharts} />
      </div>
      <div className=" mt-[43px] flex flex-col">
        <p className="text-2xl font-bold text-[#EFEEE0] mb-[13px]">
          New releases
        </p>
        <div className="flex flex-nowrap space-x-[30px] overflow-x-auto w-full hide-scrollbar">
          {newRelease?.map((song, i) => (
            <SongCard
              key={song.key}
              song={song}
              data={topCharts}
              activeSong={activeSong}
              isPlaying={isPlaying}
              i={i}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-2xl font-bold text-[#EFEEE0] mb-[13px]">
          Popular in your area
        </p>
        <div className="flex flex-nowrap space-x-[30px] overflow-x-auto w-full hide-scrollbar">
          {newRelease.map((song) => (
            <SongCard key={song.key} song={song} />
          ))}
        </div>
      </div>
    </div>
  );
};
