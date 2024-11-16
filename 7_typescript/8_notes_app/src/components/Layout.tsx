import { Outlet, Navigate, useParams } from "react-router-dom";
import { Note } from "../types";

type Props = {
  notes: Note[];
};

const Layout = ({ notes }: Props) => {
  // urlden note'un idsini al
  const { id } = useParams();

  // id'si bilenen note'u dizide bul
  const found = notes.find((i) => i.id === id);

  // eğer bulamazsak anasayfaya yönlendir
  if (!found) return <Navigate to="/" replace />;

  // parent route içerisinde child route'u renderla
  // note verisini alt route'a gönder
  return <Outlet context={found} />;
};

export default Layout;
