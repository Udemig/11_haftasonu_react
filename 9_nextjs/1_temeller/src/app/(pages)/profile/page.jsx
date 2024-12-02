import { delay } from "../products/page";

export const metadata = {
  title: "Profilinizi İnceleyin",
  description: "Profil bilgileriniz burada..",
};

const Profile = async () => {
  // api'ın cevap vermesini 3 sn bekledik (loader devrede)
  await delay(1000);

  // 3 sn sonra api'dan hata döndü
  // throw new Error("Aradığınız kullanıcı bulunamadı");

  return (
    <div>
      <h1>Profil Sayfası</h1>
    </div>
  );
};

export default Profile;
