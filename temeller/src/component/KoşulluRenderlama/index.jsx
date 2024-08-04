// Renderlama: Render ekrana basmak demektir.
// Koşşullu Renderlama: Koşşulu renderlama ekrana basılacak elemanın belirli bir koşul ile render edilmesidir.ör: kullanıcı varsa ekrana Kullanıcı yazdır.

import { useState } from "react";
import "./Style.css";

// Koşullu renderlama için iki yöntem vardır.
// 1-) Ternary Operatör: Bu yapı koşullu renderlamanın iki durumda gerçekleşeceği zaman kullanılır.Yani eğer bileşen varsa bu değilse şu kısım render edilsin demek.

// 2-) And(ve) Operatörü: Eğer bir koşul sağlanıyorsa ekrana şunu bas demek için kullanılır.Bu kullanım  ternary den farklı olarak ikinci bir durumu kontrol edemez.

const Example = () => {
  const [kullanıcıVarmı, setKullanıcıVarmı] = useState(false);
  const [admin, setAdmin] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      {isLoading ? <h1>Yükleniyor</h1> : <h1>Veriler Geldi</h1>}
      {kullanıcıVarmı ? (
        <h1 style={{ backgroundColor: kullanıcıVarmı && "green" }}>
          Kullanıcı
        </h1>
      ) : (
        <h1 style={{ backgroundColor: !kullanıcıVarmı && "red" }}>
          Kullanıcı Yok
        </h1>
      )}
      {admin && <h1>Merhaba Kullanıcı girişi yapıldı</h1>}
      <button
        onClick={() => {
          setKullanıcıVarmı(!kullanıcıVarmı);
        }}
      >
        Kullanıcı Durumunu Değiştir
      </button>
      {/* Buradaki ! kullanımı belirtilen durumun tam tersini almaya yarar.Yani true ise false false ise true olarak günceller. */}
      {console.log(kullanıcıVarmı)}
      {/* {isDarkMode ? (
        <button
          onClick={() => {
            setIsDarkMode(!isDarkMode);
          }}
        >
          Light
        </button>
      ) : (
        <button
          onClick={() => {
            setIsDarkMode(!isDarkMode);
          }}
        >
          Dark
        </button>
      )} */}
      <button
        onClick={() => {
          setIsDarkMode(!isDarkMode);
        }}
      >
        {isDarkMode ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default Example;
