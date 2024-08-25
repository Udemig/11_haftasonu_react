import { useMemo, useState } from "react";

const MemoExample = () => {
  const [count, setCount] = useState(0);

  /*
   * React bileşenindeki state her değiştiğinde güncellemenin ekrana yansıması için bileşen render edilir.

   * Sorun: Aşağıdaki hesaplama bileşene her render olduğunda gereksiz yere en baştan tekrar hesaplanıyordu

   * Çözüm: useMemo kullanığ yağtığımız hesaplamnın sonucunu cache'e atarak ve her render sırasında yeni snuç üretmek yerine cache'deki veriyi kullanarak gereksiz hesaplamanın önüne geçiyoruz
  */
  const yeniDizi = useMemo(() => {
    console.log("Hesaplama yapıldı");

    // 1) maaliyetli hesaplama > 100000 elemanllı bir dizi oluştur
    const dizi = new Array(100000).fill("Merhaba Dünya");

    // 2) maaliyetli hesaplama > diziyi dön ve yeni dizi oluştur
    return dizi.map((item) => item + "!");
  }, []);

  return (
    <div>
      <h2>MemoExample</h2>

      <button onClick={() => setCount(count + 1)}>
        Sayacı Arttır ({count})
      </button>
    </div>
  );
};

export default MemoExample;
