import { useEffect, useState } from "react";
import api from "../../api";
import Container from "../../components/container";
import Item from "./Item";
import millify from "millify";
import HomeLoader from "../../components/loaders/HomeLoader";

const Statistics = () => {
  const [isLoading, setLoading] = useState(true);
  const [totals, setTotals] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    api
      .get("/totals")
      .then((res) => setTotals(res.data[0]))
      .catch(() => setIsError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container designs="!py-0">
      <div className="bg-white shadow-lg rounded-xl p-5 grid grid-cols-3 gap-5 mt-[-34px] md:mt-[-48px]">
        {isLoading ? (
          <HomeLoader />
        ) : isError ? (
          <p className="text-center col-span-3">
            İstatistikler alınamıyor...
          </p>
        ) : (
          <>
            <Item
              color="text-pink-500"
              text="Toplam Vaka"
              value={millify(totals.confirmed)}
            />
            <Item
              color="text-green-400"
              text="Toplam İyileşen"
              value={millify(totals.recovered)}
            />
            <Item
              color="text-gray-500"
              text="Toplam Vefat"
              value={millify(totals.deaths)}
            />
          </>
        )}
      </div>
    </Container>
  );
};

export default Statistics;
