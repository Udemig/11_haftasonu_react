import ReactSelect from "react-select";
import { fuels } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";

const SelectFilter = () => {
  const [params, setParams] = useSearchParams();

  const fuel = params.get("fuel_type");

  const selected = !fuel
    ? fuels[0] //
    : fuels.find((i) => i.value === fuel);

  return (
    <div className="flex justify-center bg-gray-700 rounded-[4px] items-center">
      <label className="mx-2" htmlFor="fuel">
        Yakıt:
      </label>

      <ReactSelect
        inputId="fuel"
        options={fuels}
        className="text-black min-w-[130px]"
        defaultValue={selected}
        onChange={(e) => {
          params.set("fuel_type", e!.value.toLowerCase());

          setParams(params);
        }}
      />
    </div>
  );
};

export default SelectFilter;
