import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    // eklenicek parametreyi belirle
    searchParams.set("aramaTerimi", e.target[0].value);

    // url'i güncelle
    setSearchParams(searchParams);
  };

  const handleChange = (e) => {
    // eklenicek parametreyi belirle
    searchParams.set("sırala", e.target.value);

    // url'i güncelle
    setSearchParams(searchParams);
  };

  return (
    <div className="d-flex justify-content-between align-items-center my-4 gap-3">
      <div>
        <select
          defaultValue={searchParams.get("sırala")}
          onChange={handleChange}
          className="form-select"
        >
          <option value="">sırala</option>
          <option>a-z</option>
          <option>z-a</option>
        </select>
      </div>

      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          defaultValue={searchParams.get("aramaTerimi")}
          className="form-control"
          type="text"
          placeholder="kitap ismi giriniz..."
        />
        <button className="btn btn-primary">Ara</button>
      </form>
    </div>
  );
};

export default Filter;
