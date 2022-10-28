import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import MusicPlayer from "./components/musicPlayer/index";
import { ViewChartOrAlbum } from "./pages/ViewChartOrAlbum";
import { Collection } from "./pages/Collection";
import Search from "./pages/Search";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Liked from "./components/Liked";
import MyCollection from "./components/MyCollection";

function App() {
  const [collectionSongs, setCollectionsongs] = useState([]);
  const [liked, setLiked] = useState([]);
  console.log("liked:", liked?.length);
  console.log("collectionsongs:", collectionSongs?.length);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("musica-collection", JSON.stringify(items));
  };
  const saveToLikedLocalStorage = (items) => {
    localStorage.setItem("musica-liked", JSON.stringify(items));
  };

  const AddToCollection = (song) => {
    const newCollection = [...collectionSongs, song];
    setCollectionsongs(newCollection);
    saveToLocalStorage(newCollection);
    console.log(collectionSongs);
  };
  const removeFromCollection = (song) => {
    const newCollection = collectionSongs.filter(
      (songID) => songID.key !== song.key
    );
    setCollectionsongs(newCollection);
    saveToLocalStorage(newCollection);
    console.log("removed song:");
  };
  const AddToLiked = (song) => {
    const newCollection = [...liked, song];
    setLiked(newCollection);
    saveToLikedLocalStorage(newCollection);
    console.log(liked);
  };
  const removeFromLiked = (song) => {
    const newCollection = liked.filter((songID) => songID.key !== song.key);
    setLiked(newCollection);
    saveToLikedLocalStorage(newCollection);
    console.log("removed liked:");
  };

  return (
    <div className="flex flex-row h-screen font-quicksand relative my-auto">
      <Sidebar />
      <div className="flex flex-col bg-[#1E1E1E] w-full pb-24">
        <Searchbar />
        <AnimatePresence>
          <Routes>
            <Route
              path="/*"
              element={
                <Home
                  AddToLiked={AddToLiked}
                  liked={liked}
                  removeFromLiked={removeFromLiked}
                />
              }
            />
            <Route path="ViewChartOrAlbum" element={<ViewChartOrAlbum />} />
            <Route
              path="song/:songid"
              element={
                <ViewChartOrAlbum
                  AddToCollection={AddToCollection}
                  removeFromCollection={removeFromCollection}
                  AddToLiked={AddToLiked}
                  removeFromLiked={removeFromLiked}
                  collectionsongs={collectionSongs}
                  liked={liked}
                />
              }
            />
            <Route
              path="collections/*"
              element={
                <Collection
                  collectionsongs={collectionSongs}
                  liked={liked}
                  removeFromCollection={removeFromCollection}
                  removeFromLiked={removeFromLiked}
                />
              }
            />

            <Route path="search/:search" element={<Search />} />
          </Routes>
        </AnimatePresence>
      </div>
      <div className="absolute h-[70px] md:h-[100px] bottom-0 left-0 right-0 flex animate-slideup bg-transparent backdrop-blur-lg z-50 border-t-2 border-white/20">
        <MusicPlayer />
      </div>
    </div>
  );
}

export default App;
// md:w-[calc(100vw-95px)]
