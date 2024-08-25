import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Detail = () => {
  const [book, setBook] = useState(null);

  const navigate = useNavigate();

  // 1) url'deki parametreyi al
  const { id } = useParams();

  // 2) id'sine göre kitabın bilgilerini api'dan iste
  useEffect(() => {
    axios
      .get(`http://localhost:3090/books/${id}`)
      .then((res) => setBook(res.data))
      // api'dan hata gelirse navigate methodu yardımıyla kullanıcyı undefined sayfasına yönlendir ve hata kodunuda undefined sayfasına aktar
      .catch((err) =>
        navigate("/undefined", { state: err.response.status })
      );
  }, []);

  return !book ? (
    <Loader />
  ) : (
    <div className="row my-5 p-5">
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <img
          className="rounded img-fluid shadow"
          src={book.image}
          style={{ maxWidth: "400px" }}
        />
      </div>

      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center my-3">
        <h1>{book.title}</h1>

        <div className="my-4">
          <BookInfo title="Yazar" value={book.author} />
          <BookInfo title="Yıl" value={book.year} />
          <BookInfo title="Sayfa Sayısı" value={book.page} />
          <BookInfo title="Ücret" value={book.price + "₺"} />
          <BookInfo title="Açıklama" value={book.description} />
        </div>
      </div>
    </div>
  );
};

export default Detail;

// Bu sayfadaki 2.component
const BookInfo = ({ title, value }) => {
  return (
    <p className="fs-5">
      <span className="badge bg-danger me-3">{title}</span>
      <span>{value}</span>
    </p>
  );
};
