import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const List = ({ setDetailId }) => {
  const { isLoading, error, flights } = useSelector(
    (store) => store.flight
  );

  // kaçıncı elemandan itibaren kesiliecek
  const [start, setStart] = useState(0);

  // ekranda gösterilecek eleman sayısı
  const perPage = 10;

  // kaçıncı elemana kadar kesicez
  const end = start + perPage;

  // slice methodu ile başlangıç ve bitiş arasını kes
  const currFlights = flights.slice(start, end);

  // toplam sayfa sayısını hesapla
  const total = Math.ceil(flights.length / perPage);

  // yeni sayfaya tıklanınca
  const handlePageClick = (event) => {
    // başlangıç state'ini güncelle
    setStart(event.selected * perPage);
  };

  if (isLoading)
    return (
      <div className="list-wrapper">
        <Loader />
      </div>
    );

  if (error)
    return (
      <div className="list-wrapper">
        <Error msg={error} />
      </div>
    );

  return (
    <div className="p-3 p-md-4">
      <table className="table table-dark table-striped table-hover table-responsive mt-5">
        <thead>
          <tr>
            <th>id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currFlights.map((flight) => (
            <tr>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>
                <button
                  onClick={() => setDetailId(flight.id)}
                  className="button"
                >
                  Detay
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        breakLabel="..."
        nextLabel="ileri >"
        previousLabel="< geri"
        className="pagination"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={total}
        renderOnZeroPageCount={true}
      />
    </div>
  );
};

export default List;
