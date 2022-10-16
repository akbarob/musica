import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import Other from "./pages/Other";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import MusicPlayer from "./components/musicPlayer/index";

function App() {
  console.log("akbdmus opemipos");
  return (
    <div className="flex flex-row h-screen font-quicksand">
      <Sidebar />
      <div className="flex flex-col bg-[#1E1E1E] py-4 px-8 w-full md:w-[calc(100vw-85px)]">
        <Searchbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="other" element={<Other />} />
        </Routes>
      </div>
      <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-transparent backdrop-blur-lg z-10">
        <MusicPlayer />
      </div>
    </div>
  );
}

export default App;
