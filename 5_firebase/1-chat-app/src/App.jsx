import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RoomPage from "./pages/RoomPage";
import { auth } from "./firebase";
import ChatPage from "./pages/ChatPage";

const App = () => {
  // kullanıcının yetkisi var mı state'i
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("token") || false
  );

  // kullanıcın girmek isteği odanın state'i
  const [room, setRoom] = useState(null);

  // yetkisi yoksa: login page'i ekrana bas
  if (!isAuth) return <LoginPage setIsAuth={setIsAuth} />;

  // yetkisi varsa:
  return (
    <div className="container">
      {room ? (
        // oda seçildiyse: sohbet sayfası
        <ChatPage room={room} setRoom={setRoom} />
      ) : (
        // oda seçilmediyse: oda seçme sayfası
        <RoomPage setIsAuth={setIsAuth} setRoom={setRoom} />
      )}
    </div>
  );
};

export default App;
