import { useQuery } from "@tanstack/react-query";
import { sortOptions } from "../../constants";
import { getPlaces } from "../../api";
import { Place } from "../../types";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [params, setParams] = useSearchParams();

  // api'dan otel verilerini al
  const { isPending, data } = useQuery<Place[]>({
    queryKey: ["places"],
    queryFn: () => getPlaces(),
  });

  // otelleirn lokasyonlarında oluşan benzersiz elemanlara sahip bir dizi oluştur
  const locations = [...new Set(data?.map((i) => i.location))];

  // seçili değeri url'e parametre olarak ekle
  const handleChange = (name: string, value: string) => {
    params.set(name, value);

    setParams(params);
  };

  return (
    <form className="lg:mt-28 flex flex-col gap-4 lg:gap-10">
      <div className="field">
        <label>Nereye ? </label>

        {!isPending && (
          <select
            defaultValue={params.get("location") || ""}
            onChange={(e) => handleChange("location", e.target.value)}
            className="input"
          >
            <option value="">Seçiniz</option>
            {locations?.map((i) => (
              <option value={i}>{i}</option>
            ))}
          </select>
        )}
      </div>

      <div className="field">
        <label>Konaklama yeri adına göre ara</label>
        <input
          defaultValue={params.get("title") || ""}
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="örn:Seaside Villa"
          className="input"
          type="text"
        />
      </div>

      <div className="field">
        <label>Sıralama Ölçütü ? </label>

        <select
          defaultValue={params.get("order") || ""}
          onChange={(e) => handleChange("order", e.target.value)}
          className="input"
        >
          {sortOptions.map((i, key) => (
            <option key={key} value={i.value}>
              {i.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => setParams({})}
          type="reset"
          className="bg-blue-500 p-1 px-4 text-white rounded-md w-fit"
        >
          Filtreleri Temizle
        </button>
      </div>
    </form>
  );
};

export default Filter;
