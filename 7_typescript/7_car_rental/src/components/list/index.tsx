import { useEffect, useState } from "react";
import { fetchCars } from "../../utils/fetchCars";
import { CarType } from "../../types";
import Warning from "./Warning";
import Card from "./Card";
import Button from "../button";
import { useSearchParams } from "react-router-dom";
import { param, use } from "framer-motion/client";

const List = () => {
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(5);

  const [params] = useSearchParams();

  // urldeki bütün arama parametrelerini al
  const paramsObj = Object.fromEntries(params.entries());

  // marka veya model değişince limiti 5'e çek
  useEffect(() => {
    setLimit(5);
  }, [params.get("make"), params.get("model")]);

  // api'dan verileri al
  useEffect(() => {
    fetchCars({ limit, ...paramsObj })
      .then((data) => setCars(data))
      .catch(() => setIsError(true));
  }, [limit, params]);

  //1) cars null ise > Henüz API'dan cevap gelmemiştir
  //2) isError true ise > API'dan hatalı cevap gelmemiştir
  //3) cars [] ise > Aranılan kriterde araç yoktur
  //3) cars dolu[] ise > API'dan veriler gelmiştir
  return (
    <div className="padding-x max-width">
      {!cars ? (
        <Warning>Yükleniyor...</Warning>
      ) : isError ? (
        <Warning>Bir hata oluştu</Warning>
      ) : cars.length < 1 ? (
        <Warning>Aranılan kriterlere uygun sonuç bulunamadı</Warning>
      ) : (
        cars.length >= 1 && (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, i) => (
                <Card car={car} key={i} />
              ))}
            </div>

            <div className="w-full flex-center py-10">
              {limit < 30 && (
                <Button title="Devamını Yükle" handleClick={() => setLimit(limit + 5)} />
              )}
            </div>
          </section>
        )
      )}
    </div>
  );
};

export default List;
