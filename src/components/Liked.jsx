import React from "react";
import { motion } from "framer-motion";
import LikesCard from "../components/LikesCard";

const Liked = ({ liked }) => {
  const data = liked;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
      className="overflow-y-auto mt-[32px] hide-scrollbar"
    >
      <div className="overflow-y-auto mt-[32px] hide-scrollbar">
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
          <div className="grid gap-x-[24px] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
            {data?.map((song, i) => (
              <LikesCard
                key={song.key}
                song={song}
                activeSong={activeSong}
                isPlaying={isPlaying}
                data={data}
                className="max-h-none"
                removeFromCollection={removeFromCollection}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Liked;
