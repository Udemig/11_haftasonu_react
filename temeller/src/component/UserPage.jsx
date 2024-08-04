import { useEffect, useState } from "react";
import Card from "./Card";

const UserPage = () => {
  // Users
  const [users, setUsers] = useState();
  const [id, setId] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, [id]);

  return (
    <div>
      {console.log(users)}
      <h1>{users?.name} </h1>
      <h2>{id} </h2>
      <button
        onClick={() => {
          setId(id + 1);
        }}
      >
        Arttır
      </button>
      <button
        onClick={() => {
          setId(id - 1);
        }}
      >
        Azalt
      </button>
      {users && <Card users={users} />}
      {/* {users ? <Card users={users} /> : <h1>Kullanıcı Yok</h1>} */}

      {/* Yukarıdaki kullanım eğer users varsa Card yapısını ekrana basar yoksa herhangi birşey yapmaz. */}
    </div>
  );
};

export default UserPage;
