import "./Card.css";
const Card = ({ users }) => {
  console.log(users);

  return (
    <div className="card">
      <h1 className="title">{users?.name} </h1>
      <p className="userName">{users?.username} </p>
      <p className="email">{users?.email} </p>
    </div>
  );
};

export default Card;
