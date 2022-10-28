import React, { useState } from "react";
import { Heart, Add } from "../assets";
import { FaPlayCircle } from "react-icons/fa";
import { LongSongbar } from "../components/LongSongbar";
import { useParams } from "react-router-dom";
import {
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery,
} from "../redux/services/Api";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useSelector } from "react-redux";

export const ViewChartOrAlbum = ({
  AddToCollection,
  collectionsongs,
  removeFromCollection,
  AddToLiked,
  removeFromLiked,
  liked,
}) => {
  const { songid } = useParams();

  console.log("collections:", collectionsongs);
  console.log(songid);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data: songData, isFetching, error } = useGetSongDetailsQuery(songid);
  const { data: RelatedData } = useGetRelatedSongsQuery(songid);

  const RelatedSongs = RelatedData?.slice(0, 10);
  console.log(RelatedSongs);
  // console.log(songData);
  // const songId = songData.key;
  console.log(songData);

  //   console.log(songid);
  if (isFetching)
    return <Loader title="Loading songs, lyrics And Related songs" />;
  if (error) return <Error />;

  return (
    <div className=" w-full h-[85vh] overflow-y-auto hide-scrollbar ">
      <div className="w-full h-full absolute">
        <img
          className="absolute w-full h-full object-cover mix-blend-multiply "
          src={songData && songData?.images.background}
        />
      </div>

      <div className="relative  md:flex mt-20 md:pl-[100px] px-auto">
        <img
          src={songData && songData?.images.coverart}
          className="w-[357px] h-[289px] sm:w-[284px] sm:h-[288px] rounded-[35px] mx-auto md:mx-1 "
        />
        <div className=" mt-6 md:mt-32 ml-8 text-white flex flex-col mr-8">
          <p className="font-bold text-[35px]">{songData?.title}</p>
          <p className="text-[14px] mb-2">{songData?.subtitle}</p>
          <p className="text-[14px]">10 Related songs</p>
          <div className="flex justify-between items-center mt-4 sm:w-[292px] ">
            <button className="h-[36px] w-[87px] flex backdrop-blur-lg bg-white/10 ">
              <FaPlayCircle
                color="#FACD66"
                alt="Play/Pause"
                className="hiddem sm:block "
              />
              <p className="text-[12px]">Play all</p>
            </button>
            {collectionsongs?.filter((song) => song.key === songData.key)[0] ? (
              <button
                className="h-[36px] w-[151px] flex backdrop-blur-lg bg-white/10 "
                onClick={() => removeFromCollection(songData)}
              >
                <img src={Add} alt="heart_icon" className="w-[16px] h-[16px]" />
                <p className="text-[12px]">Already in collection</p>
              </button>
            ) : (
              <button
                className="h-[36px] w-[151px] flex backdrop-blur-lg bg-white/10 "
                onClick={() => AddToCollection(songData)}
              >
                <img src={Add} alt="music_icon" className="w-[16px] h-[16px]" />
                <p className="text-[12px]">Add to collection</p>
              </button>
            )}
            {liked?.filter((song) => song.key === songData.key)[0] ? (
              <button
                className="hidden h-[36px] w-[36px] sm:flex backdrop-blur-lg bg-white/10 "
                onClick={() => removeFromLiked(songData)}
              >
                {" "}
                <Heart className="w-[16px] h-[14px] max-w-none fill-[#E5524A] stroke-black" />
              </button>
            ) : (
              <button
                className="hidden h-[36px] w-[36px] sm:flex backdrop-blur-lg bg-white/10 "
                onClick={() => AddToLiked(songData)}
              >
                <Heart className="w-[16px] h-[14px] max-w-none  stroke-[#EFEEE0]" />
              </button>
            )}
            {liked?.filter((song) => song.key === songData.key)[0] ? (
              <button
                className="sm:hidden h-[36px] w-[90px] flex backdrop-blur-lg bg-white/10 hover:bg-[#FACD66]/20  rounded-[20px] items-center justify-evenly cursor-pointer"
                onClick={() => removeFromLiked(songData)}
              >
                {" "}
                <Heart className="w-[16px] h-[14px] max-w-none fill-[#E5524A] stroke-black" />
                <p className="text-[12px]">Like</p>
              </button>
            ) : (
              <button
                className="sm:hidden h-[36px] w-[90px] flex backdrop-blur-lg bg-white/10 hover:bg-[#FACD66]/20  rounded-[20px] items-center justify-evenly cursor-pointer"
                onClick={() => AddToLiked(songData)}
              >
                <Heart className="w-[16px] h-[14px] max-w-none  stroke-[#EFEEE0]" />
                <p className="text-[12px]">Like</p>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="p-10 md:px-24 z-40 ">
        <div className="overflow-y-auto w-full relative backdrop-blur text-white">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1].text.map((line, i) => (
              <p className=" z-50" key={`lyrics-${line}-${i}`}>
                {line}
              </p>
            ))
          ) : (
            <p className=" my-1 text-base">Sorry, No Lyrics Found!</p>
          )}
        </div>
      </div>
      <div className="md:px-[100px] px-5 relative">
        <h3 className="text-3xl text-white/50 mb-6 font-semibold">
          Related songs
        </h3>
        {RelatedSongs?.map((song, i) => (
          <LongSongbar
            key={song.key}
            song={song}
            i={i}
            data={RelatedSongs}
            activeSong={activeSong}
            isPlaying={isPlaying}
            AddToLiked={AddToLiked}
            removeFromLiked={removeFromLiked}
            liked={liked}
          />
        ))}
      </div>
    </div>
  );
};
