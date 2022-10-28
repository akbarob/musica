import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import TopCharts from "../components/TopCharts";
import SongCard from "../components/SongCard";
import Error from "../components/Error";
import Loader from "../components/Loader";

// fetch data using redux
import {
  useGetWorldChartQuery,
  useGetSongsByCountryQuery,
} from "../redux/services/Api";
import { useSelector } from "react-redux";
//framermotion
import { motion } from "framer-motion";
// import { data } from "../songs";
import { countries } from "../assets/data";

export const Home = ({ AddToLiked, liked, removeFromLiked }) => {
  const { data, isFetching, error } = useGetWorldChartQuery();

  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const topCharts = data?.slice(0, 3);
  const newRelease = data?.slice(0, 15);

  const [country, setCountry] = useState("NG");
  const [loading, setLoading] = useState();
  const { data: bycountry } = useGetSongsByCountryQuery(country);
  // const locationSongs = data?.slice(0, 15)
  const locationSongs = bycountry?.slice(0, 15);

  const herodata = data?.slice(0, 5);

  //   console.log(topCharts);
  if (isFetching) return <Loader title="Loading Songs Around You" />;
  if (error) return <Error />;

  return (
    <motion.div
      className="flex flex-col w-full overflow-y-auto hide-scrollbar md:pl-20 mt-20 pr-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col lg:flex-row w-full mx-auto sm:mx-0">
        <Hero herodata={herodata} />
        <TopCharts
          topcharts={topCharts}
          AddToLiked={AddToLiked}
          liked={liked}
          removeFromLiked={removeFromLiked}
        />
      </div>
      <div className="pl-6">
        <div className=" mt-[43px] flex flex-col ">
          <p className="text-2xl font-bold text-[#EFEEE0] mb-[13px]">
            New releases
          </p>
          <div className="flex flex-nowrap space-x-[30px] overflow-x-auto w-full hide-scrollbar">
            {newRelease?.map((song, i) => (
              <SongCard
                key={song.key}
                song={song}
                data={newRelease}
                activeSong={activeSong}
                isPlaying={isPlaying}
                i={i}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-2xl font-bold text-[#EFEEE0] mb-[13px]">
            Popular in your area :{" "}
            <select
              onChange={(e) => setCountry(e.target.value)}
              className=" bg-[#1E1E1E] outline-none  text-sm border-2 border-[#ffffff]/50 p-2 rounded-md cursor-pointer "
            >
              {countries.map((loc) => {
                return (
                  <option
                    className="text-sm border-0 outline-none capitalize bg-[#1E1E1E] text-white "
                    value={loc.value}
                  >
                    {loc.name}
                  </option>
                );
              })}{" "}
            </select>
          </p>
          <div className="flex flex-nowrap space-x-[30px] overflow-x-auto w-full h-full hide-scrollbar">
            {locationSongs?.map((song, i) => (
              <SongCard
                key={song?.key}
                song={song}
                i={i}
                data={locationSongs}
                activeSong={activeSong}
                isPlaying={isPlaying}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
