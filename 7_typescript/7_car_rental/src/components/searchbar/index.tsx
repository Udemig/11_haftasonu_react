import ReactSelect from "react-select";
import { makes } from "../../utils/constants";
import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [params, setParams] = useSearchParams();
  const [make, setMake] = useState<string>(params.get("make") || "");
  const [model, setModel] = useState<string>(params.get("model") || "");

  // string dizisini nesne dizisine çevirdik (her render sırasında gereksiz hesaplamanın önüne geçtik)
  const options = useMemo(() => makes.map((make) => ({ value: make, label: make })), []);

  // form gönderilince
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // marka ve modeli url'e arama parametresi olarak ekle
    setParams({ make, model });
  };

  // urldeki seçili markayı al
  const selected = {
    label: params.get("make") || "",
    value: params.get("make") || "",
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="searchbar gap-3 flex items-center justify-center"
    >
      <div className="searchbar__item">
        <div className="w-full flex flex-col">
          <label htmlFor="make">Marka</label>
          <ReactSelect
            inputId="make"
            onChange={(e) => setMake(e!.value)}
            options={options}
            defaultValue={selected}
            className="w-full text-black"
            placeholder="Marka Seçiniz..."
          />
        </div>

        <button aria-label="search" className="ml-3 sm:hidden">
          <img alt="magnifying glass" src="/search.svg" className="size-[40px]" />
        </button>
      </div>

      <div className="searchbar__item flex flex-col !items-start ">
        <label htmlFor="model">Model</label>

        <div className="flex w-full">
          <p className="absolute ml-3 mt-1">
            <img alt="car from front" src="/model-icon.png" width={25} />
          </p>

          <input
            title="search for spesific model"
            id="model"
            type="text"
            className="searchbar__input rounded text-black"
            placeholder="Örn: Civic"
            onChange={(e) => setModel(e.target.value)}
            defaultValue={params.get("model") || ""}
          />

          <button aria-label="search" className="ml-3">
            <img alt="magnifying glass" src="/search.svg" className="size-[40px]" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
