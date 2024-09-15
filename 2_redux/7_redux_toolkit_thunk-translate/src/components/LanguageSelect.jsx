import { useMemo } from "react";
import { useSelector } from "react-redux";
import ReactSelect from "react-select";

const LanguageSelect = ({
  sourceLang,
  targetLang,
  setSourceLang,
  setTargetLang,
}) => {
  const { isLoading, error, langs } = useSelector((store) => store.lang);

  /*
   * Dil dizisinideki nesnelerin key değerlerini:
   * code > value
   * name > label'a çevirmeliyiz
   * her render sırasında gereksiz hesaplamanın önüne geçmek için useMemo kullandık
   */
  const formatted = useMemo(
    () =>
      langs.map((i) => ({
        label: i.name,
        value: i.code,
      })),
    [langs]
  );

  return (
    <div className="flex gap-2 text-black">
      <ReactSelect
        value={sourceLang}
        onChange={(e) => setSourceLang(e)}
        isDisabled={isLoading}
        isLoading={isLoading}
        options={formatted}
        className="flex-1"
      />

      <button className="bg-zinc-700 py-2 px-6 hover:bg-zinc-800 transition rounded text-white">
        Değiş
      </button>

      <ReactSelect
        value={targetLang}
        onChange={(e) => setTargetLang(e)}
        isDisabled={isLoading}
        isLoading={isLoading}
        options={formatted}
        className="flex-1"
      />
    </div>
  );
};

export default LanguageSelect;
