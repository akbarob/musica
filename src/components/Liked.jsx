import React from "react";
import { motion } from "framer-motion";
import LikesCard from "../components/LikesCard";
import { useSelector } from "react-redux";

const Liked = ({ liked, removeFromLiked }) => {
  const data = liked;
  console.log("liked length:", data?.length);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
      className="overflow-y-auto mt-[32px] hide-scrollbar"
    >
      <div className="overflow-y-auto mt-[32px] hide-scrollbar px-3 md:px-0">
        {data?.length === 0 ? (
          <div className="items-center justify-center text-white mx-auto w-[300px]">
            {" "}
            <p className="mb-12">
              You Currently have no
              <span className="text-[#FACD66]"> Likes</span>
            </p>
            <p>
              Add Songs to Your <span className="text-[#FACD66] ">Likes</span>
            </p>
          </div>
        ) : (
          <div className=" grid  lg:grid-cols-2 2xl:grid-cols-3 ">
            {data?.map((song, i) => (
              <LikesCard
                key={song.key}
                song={song}
                activeSong={activeSong}
                isPlaying={isPlaying}
                data={data}
                className="max-h-none"
                removeFromLiked={removeFromLiked}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Liked;
