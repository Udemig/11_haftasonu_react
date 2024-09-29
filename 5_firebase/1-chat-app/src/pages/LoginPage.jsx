import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const LoginPage = ({ setIsAuth }) => {
  // butona tıklanınca google ile oturum aç
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        // yetkisini true'ya çekiyoruz
        setIsAuth(true);

        // sayfa yenilenince tekrar giriş yapmak zorunda olmasın diye localde tokenini saklıyoruz
        localStorage.setItem("token", res.user.refreshToken);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="login">
        <h1>Chat Odası</h1>
        <p>Devam Etmek İçin Giriş Yapın</p>

        <button onClick={handleClick}>
          <img width={30} src="g-logo.png" alt="google logo" />
          <span>Google ile Gir</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
