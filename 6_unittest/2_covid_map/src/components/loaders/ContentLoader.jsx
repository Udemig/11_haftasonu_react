import React from "react";

const ContentLoader = () => {
  const arr = new Array(10).fill("");

  return arr.map((_, k) => (
    <div
      key={k}
      data-testid="card-loader"
      className="p-5 border text-black shadow rounded-md text-transparent select-none bg-gray-100 animate-pulse"
    >
      <div className="text-sm mb-2 w-20 rounded-lg bg-gray-400">.</div>
      <div className="text-lg w-3/4 md:w-44 rounded-lg bg-gray-400">.</div>
    </div>
  ));
};

export default ContentLoader;
