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

function App() {
  console.log("akbdmus opemipos");
  const [Collectionsongs, setCollectionsongs] = useState([]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("musica", JSON.stringify(items));
  };
  const AddToCollection = (song) => {
    const newCollection = [...Collectionsongs, song];
    setCollectionsongs(newCollection);
    saveToLocalStorage(newCollection);
    console.log(newCollection);
  };

  const removeFromCollection = (song) => {
    const newCollection = Collectionsongs.filter(
      (songID) => songID.key !== song.key
    );
    setCollectionsongs(newCollection);
    saveToLocalStorage(newCollection);
    console.log("removed song:");
  };
  useEffect(() => {
    const songsCollection = JSON.parse(localStorage.getItem("musica"));
    setCollectionsongs(songsCollection);
  }, []);
  return (
    <div className="flex flex-row h-screen font-quicksand relative">
      <Sidebar />
      <div className="flex flex-col bg-[#1E1E1E] w-full pb-24">
        <Searchbar />
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />

            <Route path="ViewChartOrAlbum" element={<ViewChartOrAlbum />} />
            <Route
              path="song/:songid"
              element={
                <ViewChartOrAlbum
                  AddToCollection={AddToCollection}
                  Collectionsongs={Collectionsongs}
                />
              }
            />
            <Route
              path="collections"
              element={
                <Collection
                  Collectionsongs={Collectionsongs}
                  removeFromCollection={removeFromCollection}
                />
              }
            />
            <Route path="search/:search" element={<Search />} />
          </Routes>
        </AnimatePresence>
      </div>
      <div className="absolute h-[100px] bottom-0 left-0 right-0 flex animate-slideup bg-transparent backdrop-blur-lg z-50 border-t-2 border-white/20">
        <MusicPlayer />
      </div>
    </div>
  );
}

export default App;
// md:w-[calc(100vw-95px)]
