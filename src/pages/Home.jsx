import React from "react";
import Hero from "../components/Hero";
import TopCharts from "../components/TopCharts";
import Searchbar from "../components/Searchbar";
import SongCard from "../components/SongCard";

//import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
//fetch data using redux
import { useGetWorldChartQuery } from "../redux/services/Api";

export const Home = () => {
  const { data, isFetching, error } = useGetWorldChartQuery();
  console.log("fdddssssssssssf");
  console.log(data);
  const topCharts = data.slice(0, 3);
  console.log(topCharts);
  if (isFetching) return <p>is Fetching</p>;
  if (error) return <p>error</p>;
  return (
    <div>
      <Searchbar />
      <div className="flex flex-row justify-between">
        <Hero />
        <TopCharts topcharts={topCharts} />
      </div>
      <div className="w-2/3 overflow-x-auto gap-x-12 flex ">
        {/* <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
            (item, i) => (
              <SwiperSlide
                key={item.key}
                style={{ width: "25%", height: "auto" }}
              >
                <SongCard item={item} />
              </SwiperSlide>
            )
          )}
        </Swiper> */}
        {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
          (item) => (
            <SongCard key={item.key} item={item} />
          )
        )} */}
      </div>
    </div>
  );
};
