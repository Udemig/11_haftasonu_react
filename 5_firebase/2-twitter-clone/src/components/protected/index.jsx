import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../../firebase";

const Protected = () => {
  // kullanıcın sayfayı göremeye yetkisi var mı? state'i
  const [isAuth, setIsAuth] = useState();

  // kullanıcının oturum verilerini al
  useEffect(() => {
    // onAuthStateChanged: kullanıcı oturumu izler
    onAuthStateChanged(auth, (user) => {
      setIsAuth(user ? true : false);
    });
  }, []);

  // eğer kullanıcnın oturumu kapalıysa logine yönlendir
  if (isAuth === false) {
    return <Navigate to="/" />;
  }

  // parent route içerisinde alt route elementini renderla
  return <Outlet />;
};

export default Protected;
