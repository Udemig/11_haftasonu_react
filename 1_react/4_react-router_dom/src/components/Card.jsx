import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <div className="col">
      <div className="card shadow p-2">
        <img className="rounded" src={book.image} />

        <div className="card-body">
          <h4>{book.title}</h4>
          <h5>{book.author}</h5>
        </div>

        <Link to={`/detay/${book.id}`} className="btn btn-primary w-100">
          Detay Gör
        </Link>
      </div>
    </div>
  );
};

export default Card;
