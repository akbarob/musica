import React from "react";
import { useSelector } from "react-redux";
import CollectionSongCard from "../components/CollectionSongCard";
import { useGetWorldChartQuery } from "../redux/services/Api";
import { motion } from "framer-motion";
import Loader from "../components/Loader";
import Error from "../components/Error";

export const Collection = () => {
  const { data, isFetching, error } = useGetWorldChartQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  if (isFetching) return <Loader title="Loading Your Collections" />;
  if (error) return <Error />;

  return (
    <motion.div
      className="flex flex-col w-full overflow-y-auto hide-scrollbar md:pl-20 mt-[60px] md:mt-[50px] "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-between items-center mt-4 md:w-[220px] mx-auto md:ml-2 ">
        <div className="p-[10px] h-[36px] w-[178px] md:w-[120px] flex backdrop-blur-lg bg-[#FACD66] rounded-[20px] items-center justify-evenly cursor-pointer mr-4">
          <p className="text-[12px]">My collection</p>
        </div>
        <div className="h-[36px] w-[178px] md:w-[85px] flex backdrop-blur-lg bg-transparent rounded-[20px] items-center justify-evenly cursor-pointer border-white/50 border text-white/50 hover:bg-[#FACD66] hover:text-black">
          <p className="text-[12px]">Likes</p>
        </div>
      </div>
      <div className="overflow-y-auto mt-[32px] hide-scrollbar">
        <div className="grid gap-x-[24px] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
          {data?.map((song, i) => (
            <CollectionSongCard
              key={song.key}
              song={song}
              activeSong={activeSong}
              isPlaying={isPlaying}
              data={data}
              className="max-h-none"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
