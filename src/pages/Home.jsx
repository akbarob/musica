import React, { useEffect, useState } from "react";
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
import {
  useGetWorldChartQuery,
  useGetSongsByCountryQuery,
} from "../redux/services/Api";
import { useSelector } from "react-redux";

export const Home = () => {
  const { data, isFetching, error } = useGetWorldChartQuery();

  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const topCharts = data?.slice(0, 3);
  const newRelease = data?.slice(0, 15);

  const [country, setCountry] = useState();
  const [loading, setLoading] = useState();
  useEffect(() => {
    fetch(
      "https://geo.ipify.org/api/v2/country?apiKey=at_5Wv0Pzx0WiS7ALIJ9TNo0wI8XTmLb"
    )
      .then((response) => response.json())
      //   .then((data) => console.log(data))
      .then((data) => setCountry(data.location.country))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [country]);
  const { data: bycountry } = useGetSongsByCountryQuery(country);
  const locationSongs = bycountry?.slice(0, 15);

  //   console.log(topCharts);
  //   if (isFetching) return <Loader title="Loading Songs Around You" />;
  //   if (error) return <Error />;
  return (
    <div className="flex flex-col w-full overflow-y-auto hide-scrollbar md:pl-20 mt-20 ">
      <div className="flex flex-col md:flex-row w-full mx-auto">
        <Hero />
        <TopCharts topcharts={topCharts} />
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
            Popular in your area : ({country})
          </p>
          <div className="flex flex-nowrap space-x-[30px] overflow-x-auto w-full hide-scrollbar">
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
    </div>
  );
};
