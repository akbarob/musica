import React from "react";
import Background from "../Lead-image.png";
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

export const ViewChartOrAlbum = () => {
  const { songid } = useParams();
  const { data: songData, isFetching, error } = useGetSongDetailsQuery(songid);
  const { data: RelatedData } = useGetRelatedSongsQuery(songid);

  const RelatedSongs = RelatedData?.slice(0, 10);
  console.log(RelatedSongs);
  //   console.log(songData);

  //   console.log(songid);
  if (isFetching)
    return <Loader title="Loading songs, lyrics And Related songs" />;
  if (error) return <Error />;
  return (
    <div className=" w-full h-[85vh] overflow-y-auto hide-scrollbar ">
      <div className="w-full h-full absolute">
        <img
          className="absolute w-full h-full object-cover mix-blend-multiply "
          src={songData ? songData?.images.background : Background}
        />
      </div>

      <div className="relative z-20 md:flex mt-20 md:pl-[100px] px-auto ">
        <img
          src={songData ? songData?.images.coverart : Background}
          className="w-[357px] h-[289px] sm:w-[284px] sm:h-[288px] rounded-[35px] mx-auto md:mx-1 "
        />
        <div className=" mt-6 md:mt-32 ml-8 text-white flex flex-col mr-8">
          <p className="font-bold text-[35px]">{songData?.title}</p>
          <p className="text-[14px] mb-2">{songData?.subtitle}</p>
          <p className="text-[14px]">10 Related songs</p>
          <div className="flex justify-between items-center mt-4 sm:w-[292px] ">
            <div className="h-[36px] w-[87px] flex backdrop-blur-lg bg-white/10 rounded-[20px] items-center justify-evenly cursor-pointer ">
              <FaPlayCircle
                color="#FACD66"
                alt="Play/Pause"
                className="hiddem sm:block "
              />
              <p className="text-[12px]">Play all</p>
            </div>
            <div className="h-[36px] w-[151px] flex backdrop-blur-lg bg-white/10 rounded-[20px] items-center justify-evenly cursor-pointer">
              <img src={Add} alt="heart_icon" className="w-[16px] h-[16px]" />
              <p className="text-[12px]">Add to collection</p>
            </div>
            <div className="hidden h-[36px] w-[36px] sm:flex backdrop-blur-lg bg-white/10 rounded-[20px] items-center justify-evenly cursor-pointer">
              <img src={Heart} alt="heart_icon" className="w-[16px] h-[16px]" />
            </div>
            <div className="sm:hidden h-[36px] w-[90px] flex backdrop-blur-lg bg-white/10 rounded-[20px] items-center justify-evenly cursor-pointer">
              <img src={Add} alt="heart_icon" className="w-[16px] h-[16px]" />
              <p className="text-[12px]">Like</p>
            </div>
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
          <LongSongbar key={song.key} song={song} i={i} />
        ))}
      </div>
    </div>
  );
};
