import React from "react";

/* 
 * Sorun:
 * Şuan display bileşenin içeriği değişmeyecek olsa bile yani count sabit olsa bile bir üst Parent bieşen render edildiğinde bu bileşende gereksiz yere tekrar render oluyor.
 * Eğer bu bielşen gerçek bir projede kapsamlı bir bileşen olsaydı gereksiz render edilmesi performans sorunlarına yol açar

*/

const Display = ({ count, updateCount }) => {
  console.log("😀 Display Bielşeni Renderlandı");

  return (
    <>
      <h2>{count}</h2>
      <br />
      <button onClick={updateCount}>Arttır</button>
    </>
  );
};

/*
 * Çözüm
 * React.memo(): bu fonksiyon bir önceki render sonucunu hafızada tutar. Bileşenin aldığı prop'lar değişmediği müddetçe bileşenin kapsayıcı bileşenden kaynaklı render olmasının önüne geçer
 */

export default React.memo(Display);

/*
 * React.memo() çalışma mantığındaki açık.
 * React memo gelen proplar değişmediği müddetçe tekrardan render'ı engeller.
 * String / Boolean / Number gibi proplarda sorun yoktur
 * Ama fonksiyon prop'larında aynı fonksiyon gelse bile tekrardan rendera sebep olur
 */
