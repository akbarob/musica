import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import Other from "./pages/Other";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import MusicPlayer from "./components/musicPlayer/index";
import { ViewChartOrAlbum } from "./pages/ViewChartOrAlbum";
import Background from "./Lead-image.png";
import { Collection } from "./pages/Collection";

function App() {
  console.log("akbdmus opemipos");
  return (
    <div className="flex flex-row h-screen font-quicksand relative">
      <Sidebar />
      <div className="flex flex-col bg-[#1E1E1E] w-full ">
        <Searchbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ViewChartOrAlbum" element={<ViewChartOrAlbum />} />
          <Route path="collections" element={<Collection />} />
        </Routes>
      </div>
      <div className="absolute h-[100px] bottom-0 left-0 right-0 flex animate-slideup bg-transparent backdrop-blur-lg z-50 border-t-2 border-white/20">
        <MusicPlayer />
      </div>
    </div>
  );
}

export default App;
// md:w-[calc(100vw-95px)]
