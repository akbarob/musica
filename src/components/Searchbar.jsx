import React from "react";
import { FiSearch } from "react-icons/fi";

export default function Searchbar() {
  return (
    <form className="text-[#FFFFFF]/25 focus-within:text-gray-600 mb-4">
      <label htmlFor="search" className="sr-only">
        Search all files
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch aria-hidden="true" className="w-5 h-5 mx-4" />
        <input
          name="search"
          type={`search`}
          placeholder="Search Artists & Songs "
          autoComplete="off"
          id="search-field"
          className="border-none outline-none bg-transparent w-1/3"
        />
      </div>
    </form>
  );
}
