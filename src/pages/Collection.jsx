import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CollectionSongCard from "../components/CollectionSongCard";
import { motion } from "framer-motion";
import Loader from "../components/Loader";
import Error from "../components/Error";
import MyCollection from "../components/MyCollection";
import Liked from "../components/Liked";
import { Link, NavLink, Route, Routes } from "react-router-dom";

export const Collection = ({
  collectionsongs,
  removeFromCollection,
  liked,
}) => {
  const [col, setCol] = useState(true);
  const [likes, setlikes] = useState(false);

  function handleLike() {
    console.log(likes);
    console.log(col);

    setlikes(true);
    setCol(false);
  }
  function handleCol() {
    console.log(col);
    setCol(true);
    setlikes(false);
  }
  const data = collectionsongs;
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  // if (isFetching) return <Loader title="Loading Your Collections" />;
  // if (error) return <Error />;

  let activeClassName =
    "p-[10px] h-[36px] w-[178px] md:w-[120px] flex backdrop-blur-lg bg-[#FACD66] rounded-[20px] items-center justify-evenly cursor-pointer mr-4 hover:bg-[#FACD66]";
  let NotActive =
    "p-[10px] h-[36px] w-[178px] md:w-[120px] flex itemscenter bg-transparent rounded-[20px] items-center justify-evenly cursor-pointer mr-4 border text-[#EFEEE0] hover:fill-[#FACD66]";
  return (
    <motion.div
      className="flex flex-col w-full overflow-y-auto hide-scrollbar md:pl-20 mt-[60px] md:mt-[50px] "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-between items-center mt-4 md:w-[220px] mx-auto md:ml-2 ">
        <NavLink className='className="p-[10px] h-[36px] w-[178px] md:w-[120px] flex  rounded-[20px] items-center justify-evenly cursor-pointer mr-4 '>
          <button
            onClick={handleCol}
            className={`${col ? activeClassName : NotActive} `}
          >
            My Collection
          </button>
        </NavLink>
        <NavLink className='className="p-[10px] h-[36px] w-[178px] md:w-[120px] flex rounded-[20px] items-center justify-evenly cursor-pointer mr-4 '>
          <button
            onClick={handleLike}
            className={`${likes ? activeClassName : NotActive}`}
          >
            Likes
          </button>
        </NavLink>
      </div>
      <div className="h-full">
        <Routes>
          {col && (
            <Route
              path="/*"
              element={
                <MyCollection
                  collectionsongs={collectionsongs}
                  removeFromCollection={removeFromCollection}
                />
              }
            />
          )}
          {likes && <Route path="/" element={<Liked liked={liked} />} />}
        </Routes>
      </div>
    </motion.div>
  );
};
