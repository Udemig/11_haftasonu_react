import { useEffect, useState } from "react";
import UserView from "../views/UserView";
import UserModel from "../models/UserModel";

// Controller: Kullanıcı etkileşiemini karşılar
const UserController = () => {
  const [users, setUsers] = useState([]);

  // class'tan bir nesne oluşturduk (instance)
  const model = new UserModel();

  // kullanıcnın sayfaya giriş anında çalışacak olan fonksiyon controllerde tetiklenir
  useEffect(() => {
    model.getUsers().then((data) => setUsers(data));
  }, []);

  return <UserView users={users} />;
};

export default UserController;
