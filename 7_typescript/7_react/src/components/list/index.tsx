import { useEffect, useState } from "react";
import { fetchCars } from "../../utils/fetchCars";
import { CarType } from "../../types";
import Warning from "./Warning";
import Card from "./Card";

const List = () => {
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  // api'dan verileri al
  useEffect(() => {
    fetchCars()
      .then((data) => setCars(data))
      .catch(() => setIsError(true));
  }, []);

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
          </section>
        )
      )}
    </div>
  );
};

export default List;
