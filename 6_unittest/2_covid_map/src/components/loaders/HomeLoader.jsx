import React from "react";
import { PiVirus } from "react-icons/pi";

const HomeLoader = () => {
  return (
    <div
      data-testid="home-loader"
      className="flex justify-center col-span-3"
    >
      <PiVirus
        className={`text-green-500 text-2xl md:text-5xl max-md:scale-[1.4] md:scale-[1.2] animate-spin`}
      />
    </div>
  );
};

export default HomeLoader;
