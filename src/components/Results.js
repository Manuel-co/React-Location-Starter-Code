import React from "react";

const Results = () => {
  return (
    <div className=" mt-5 w-screen flex justify-center items-center">
      <div className="w-4/5 grid grid-cols-3 px-2 py-3 gap-4">
        <div className=" h-40 w-80 py-2 px-4 rounded-md shadow-md backdrop-blur-3xl bg-slate-300 flex justify-between items-center hover:cursor-pointer">
          <img className="image" alt="food"></img>
          <h1 className=" text-blue-600 font-bold text-xl">Food Name</h1>
        </div>
        );
      </div>
    </div>
  );
};

export default Results;
