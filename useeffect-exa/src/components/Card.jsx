const Card = ({ recipe }) => {
  return (
    <div className="bg-light text-dark p-3 rounded mb-5">
      <div className="d-flex gap-3">
        <img className="rounded" src={recipe.image} height={200} />

        <div>
          <h1 className="fw-bold">{recipe.name}</h1>
          <p className="badge bg-danger">{recipe.rating}</p>
          <p>
            Süre:{" "}
            <span className="badge bg-primary">
              {recipe.prepTimeMinutes} dk
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
