import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Searchbar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${search}`);
  };

  return (
    <form
      className="bg-[
      #1D2123]  absolute  text-[#FFFFFF]/25 focus-within:text-white mb-4 z-10 py-4 pl-20 w-full"
      onSubmit={handleSubmit}
    >
      <FiSearch
        className="md:hidden text-white/25 w-[20px] h-[20px] absolute top-6 right-6 cursor-pointer"
        onClick={() => setShowSearch(!showSearch)}
      />

      <label htmlFor="search" className="sr-only">
        Search all Songs
      </label>
      <div
        className={`flex flex-row justify-start items-center ml-8 mt-2 md:mt-0 ${
          showSearch ? "flex" : "hidden md:flex"
        }`}
      >
        <FiSearch aria-hidden="true" className="w-5 h-5 mx-4 " />
        <input
          name="search"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Artists & Songs "
          autoComplete="off"
          id="search-field"
          className="border-none outline-none bg-transparent w-1/2 "
        />
      </div>
    </form>
  );
}
