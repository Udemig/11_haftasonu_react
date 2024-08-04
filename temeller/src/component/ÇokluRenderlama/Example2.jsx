import { useEffect, useState } from "react";
import usersData from "../../constants";
// Çoklu Renderlama: Çoklu Renderlama bir grup veri için ekrana elemanlar renderlar.bunu yaparken verileri map ile döner.Burada oluşturulan yapı için en kapsayıcıya bir key atanması gerekir.Bu key benzersiz bir değer olmalıdır.
const Example2 = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);
  return (
    <>
      <table className="table table-dark my-5 table-responsive table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>userName</th>
            <th>email</th>
            <th>company</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{user?.id} </td>
              <td>{user?.name}</td>
              <td>{user?.username}</td>
              <td>{user?.email} </td>
              <td>{user?.company.name}</td>
            </tr>
          ))}
        </tbody>
        {console.log(users)}
      </table>
      <table className="table table-dark my-5 table-responsive table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>Soyad</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => (
            <tr>
              <td>{user.id} </td>
              <td>{user.name}</td>
              <td>{user.surname}</td>
            </tr>
          ))}
        </tbody>
        {console.log(users)}
      </table>
    </>
  );
};

export default Example2;
