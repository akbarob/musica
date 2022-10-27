import React, { useEffect, useState } from "react";
import CollectionSongCard from "../components/CollectionSongCard";
import { motion } from "framer-motion";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Liked from "../components/Liked";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const MyCollection = ({ collectionsongs, removeFromCollection }) => {
  const data = collectionsongs;
  console.log("collection:", data);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
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
              Your <span className="text-[#FACD66]">Collection</span> is
              currently empty
            </p>
            <p>
              Add Songs to Your{" "}
              <span className="text-[#FACD66] ">Collection</span>
            </p>
          </div>
        ) : (
          <div className="grid gap-x-[24px] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
            {data?.map((song, i) => (
              <CollectionSongCard
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

export default MyCollection;
