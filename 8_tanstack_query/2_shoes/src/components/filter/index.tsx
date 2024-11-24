import { useEffect, useState } from "react";
import Color from "./Color";
import Gender from "./Gender";
import Price from "./Price";
import Size from "./Size";
import { useDebounce } from "@uidotdev/usehooks";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [size, setSize] = useState<string[]>([]);
  const [color, setColor] = useState<string[]>([]);
  const [gender, setGender] = useState<string>("");
  const [price, setPrice] = useState<string>("0");
  const debouncedPrice = useDebounce(price, 500);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params: Record<string, string> = {};

    if (size.length > 0) params.size = size.join(",");
    if (color.length > 0) params.color = color.join(",");
    if (gender) params.gender = gender;
    if (debouncedPrice !== "0") params.price = debouncedPrice;

    setSearchParams(params);
  }, [size, color, gender, debouncedPrice]);

  return (
    <div className="max-lg:fixed max-lg:inset-0 z-10 max-lg:bg-zinc-900 max-lg:bg-opacity-60 backdrop-blur-md grid place-items-center">
      <div className="max-lg:max-w-lg max-lg:h-[80vh] max-lg:min-w-[380px]">
        <div className="max-lg:bg-white max-lg:flex max-lg:justify-between max-lg:p-4 rounded-t-md">
          <h2 className="text-xl font-semibold">Filtreler</h2>

          <button className="lg:hidden font-semibold">X</button>
        </div>

        <form className="max-lg:p-5 bg-gray h-full flex flex-col gap-6 rounded-b-md">
          <Size selected={size} setSelected={setSize} />
          <Color selected={color} setSelected={setColor} />
          <Gender selected={gender} setSelected={setGender} />
          <Price selected={price} setSelected={setPrice} />

          <button
            type="reset"
            className="border border-gray-dark p-2 rounded-lg hover:bg-gray-dark hover:text-white transition"
          >
            Sıfırla
          </button>
        </form>
      </div>
    </div>
  );
};

export default Filter;
