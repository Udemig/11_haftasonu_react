import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const RoomPage = ({ setIsAuth, setRoom }) => {
  // çıkış
  const logout = () => {
    // yetki state'ini false'a çek
    setIsAuth(false);

    // local'deki tokeni kaldır
    localStorage.removeItem("token");

    // firebase oturumunu kapat
    signOut(auth);
  };

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtaki girdiyi al
    const room = e.target[0].value.toLowerCase();

    // seçilen oda state'ini güncelle
    setRoom(room);
  };

  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Odası</h1>
      <p>Hangi Odaya Giriceksiniz</p>

      <input type="text" placeholder="ör:haftasonu" required />

      <button type="submit">Odaya Gir</button>
      <button type="button" onClick={logout}>
        Çıkış Yap
      </button>
    </form>
  );
};

export default RoomPage;
