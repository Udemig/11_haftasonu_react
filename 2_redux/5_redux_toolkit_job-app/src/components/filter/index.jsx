import Select from "../../pages/create/Select";
import Input from "../../pages/create/Input";
import React, { useEffect, useState } from "react";
import { sortOpt, statusOpt, typeOpt } from "../../constants";
import "../../pages/create/create.scss";
import api from "../../api/index";
import { useDispatch } from "react-redux";
import {
  setError,
  setJobs,
  setLoading,
} from "../../redux/slices/jobSlice";

const Filter = () => {
  const [text, setText] = useState();
  const [debouncedText, setDebouncedText] = useState();
  const [status, setStatus] = useState();
  const [type, setType] = useState();
  const [sort, setSort] = useState();

  const dispatch = useDispatch();

  /*
   * Debounce
   * Bir fonksiyonun çok sık gerçekleşmesini önlemek için kullanılır. Her tuşa basıldğında arama yapmak yerine, kullanıcının yazmayı bitirmesini bekleyip, belirli bir süre geçtikten sonra arama yapar.
   * Bu işlem performansı arttırır gereksiz ağ isteklerini ve renderları önler.
   */
  useEffect(() => {
    if (text === undefined) return;

    // her tuş vuruşunda bir sayaç başla
    // ve sayaç bitiminde elde edilen metni state'e aktar
    const timer = setTimeout(() => setDebouncedText(text), 500);

    // eğer süre bitmeden useEffect tekrar çalışırsa (yeni tuşa basılırsa) önceki sayıcı iptal et
    return () => clearTimeout(timer);
  }, [text]);

  // filtrelere göre api'dan verileri al
  useEffect(() => {
    const params = {
      q: debouncedText,
      status,
      type,
      _sort: sort === "a-z" || sort === "z-a" ? "company" : "date",
      _order: sort === "a-z" || sort === "En Eski" ? "asc" : "desc",
    };

    dispatch(setLoading());

    api
      .get("/jobs", { params })
      .then((res) => dispatch(setJobs(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  }, [debouncedText, status, type, sort]);

  // bütün filtreleri sıfırla
  const handleReset = (e) => {
    // inputları sıfırla
    e.target.reset();

    // state'leri sıfırla
    setText();
    setDebouncedText();
    setSort();
    setType();
    setStatus();
  };

  return (
    <div className="filter-sec">
      <h2>Filtreleme Formu</h2>

      <form onReset={handleReset}>
        <Input label="Ara" handleChange={(e) => setText(e.target.value)} />

        <Select
          label="Durum"
          options={statusOpt}
          handleChange={(e) => setStatus(e.target.value)}
        />
        <Select
          label="Tür"
          options={typeOpt}
          handleChange={(e) => setType(e.target.value)}
        />
        <Select
          label="Sırala"
          options={sortOpt}
          handleChange={(e) => setSort(e.target.value)}
        />

        <div className="btn-wrapper">
          <button type="reset" className="btn-shine">
            <span>Filtreleri Sıfırla</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(Filter);
