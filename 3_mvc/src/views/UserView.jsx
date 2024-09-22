// View: Arayüz katmanıdır sadece html ve css kodlaını içerir
const UserView = ({ users }) => {
  return (
    <div>
      <h1>Kullanıcılar</h1>

      {users.map((user) => (
        <h3>{user.name}</h3>
      ))}
    </div>
  );
};

export default UserView;
