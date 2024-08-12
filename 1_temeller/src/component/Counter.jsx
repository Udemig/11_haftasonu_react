import { useEffect, useState } from "react";
import "./Counter.css";

// Burada oluşturulan component 'Bir Function Component dir.'
const Counter = () => {
  const [counter, setCounter] = useState(0);
  // Bileşenin Ekrana Gelmesi
  //   useEffect(() => {
  //     console.log("Bileşen Ekrana Geldi");
  //   }, []);
  //   // Bileşenin Güncellenmesi
  //   useEffect(() => {
  //     console.log("Bileşen Güncellendi");
  //   }, [counter]);
  //   // Bileşenin Ekrandan Kaldırılması
  //   useEffect(() => {
  //     return () => {
  //       console.log("Bileşen Ekrdan Kaldırıldı");
  //     };
  //   }, []);

  return (
    <div className="container">
      <h1 className="title">Counter Example</h1>

      <button className="arttır" onClick={() => setCounter(counter + 1)}>
        Arttır
      </button>
      {counter}
      <button className="azalt" onClick={() => setCounter(counter - 1)}>
        Azalt
      </button>
    </div>
  );
};

export default Counter;
