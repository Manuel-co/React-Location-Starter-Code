import { React, useState } from "react";
import Results from "./Results";

const Search = () => {
  const [searchItem, setSearchItem] = useState("");
 
  const getFood= ()=>{}
  return (
    <div className="container text-center">
      <div className=" pt-4">
        <div className=" mb-6">
          <h1 className="text-4xl text-blue-600 font-bold">
            Search For Food Recipes
          </h1>
        </div>
        <div className=" flex justify-center items-center gap-5">
          <input
            className=" px-2 py-1 border-2 border-blue-600 rounded-md outline-none"
            type="text"
            name="food"
            value={searchItem}
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
          />
          <button
            className=" px-5 py-2 rounded-md bg-blue-600 text-white font-medium"
            onClick={() => {
              getFood();
            }}
          >
            Search
          </button>
        </div>
      </div>
      <Results/>
    </div>
  );
};

export default Search;
