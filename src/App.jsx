import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import Other from "./pages/Other";
import Sidebar from "./components/Sidebar";

function App() {
  console.log("akbdmus opemipos");
  return (
    <div className="flex flex-row relative h-screen w-full font-quicksand">
      <Sidebar />
      <div className="bg-[#1E1E1E] py-4 px-8 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="other" element={<Other />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
