import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
  return (
    <div
      className={`w-full rounded-lg sm:rounded-none sm:w-[350px] 940:w-[600px] pl-4 bg-white h-50 flex items-center  pr-3`}
    >
      <input
        type="text"
        placeholder="Search Products"
        className="w-full h-full outline-0"
      />
      <IoSearch className="text-2xl" />
    </div>
  );
};

export default SearchBox;
