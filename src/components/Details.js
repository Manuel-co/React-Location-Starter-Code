import React from "react";

const Details = () => {
  return (
    <div className=" h-screen flex justify-center items-center">
      <div>
        <img alt="food"></img>
        <h1 className=" font-bold text-2xl">Food Name</h1>
        <h2 className=" text-4xl text-blue-600">Ingredients</h2>
        {/* ingredients here */}
      </div>
    </div>
  );
};

export default Details;
