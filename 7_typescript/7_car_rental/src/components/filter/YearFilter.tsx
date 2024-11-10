import { FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

const YearFilter = () => {
  const [params, setParams] = useSearchParams();
  const [year, setYear] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    params.set("year", year);

    setParams(params);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center bg-gray-700 rounded-[4px]"
    >
      <input
        type="number"
        className="w-24 py-[6px] px-2 rounded-[4px] shadow text-black"
        placeholder="ör:2023"
        onChange={(e) => setYear(e.target.value)}
      />

      <button className="">
        <img src="right-arrow.svg" />
      </button>
    </form>
  );
};

export default YearFilter;
