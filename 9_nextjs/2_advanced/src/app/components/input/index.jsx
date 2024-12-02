"use client";

import { useEffect } from "react";

const Input = () => {
  console.log("input bilşeni render edildi");
  useEffect(() => {}, []);

  return (
    <div>
      <h1>Input</h1>

      <span
        onClick={() => {}}
        className="bg-red-500 px-3 py-1 rounded-md text-base font-semibold"
      >
        client component
      </span>
    </div>
  );
};

export default Input;
