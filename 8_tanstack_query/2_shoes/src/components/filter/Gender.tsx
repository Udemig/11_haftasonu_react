import { FilterProps } from "../../types";

const Gender = ({ selected, setSelected }: FilterProps<string>) => {
  return (
    <div>
      <h2 className="mb-4 font-semibold">Cinsiyet</h2>

      <div className="flex items-center gap-3">
        <input
          onClick={() => setSelected("men")}
          checked={selected === "men"}
          type="radio"
          id="men"
          name="gender"
        />
        <label htmlFor="men" className="font-semibold">
          Erkek
        </label>
      </div>

      <div className="flex items-center gap-3">
        <input
          onClick={() => setSelected("women")}
          checked={selected === "women"}
          type="radio"
          id="women"
          name="gender"
        />
        <label htmlFor="women" className="font-semibold">
          Kadın
        </label>
      </div>
    </div>
  );
};

export default Gender;
