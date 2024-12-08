"use client";

import { useState } from "react";
import { CarType } from "../utils/types";
import Loader from "./Loader";

type Props = {
  car: CarType;
};

const Button = ({ car }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  // sipariş butonuna tıklanınca
  const handleClick = () => {
    setIsLoading(true);

    // 1) backende ödeme sayfasının linkini oluşturması için istek atıyoruz
    fetch("http://localhost:3001/api/checkout", {
      method: "POST",
      body: JSON.stringify(car),
    })
      // 2) gelen veriyi işle
      .then((res) => res.json())
      // 3) kullanıcıyı satın alma sayfasına yönlendir
      .then((data) => {
        window.location.href = data.url;
      })
      // state'i güncelle
      .finally(() => setIsLoading(false));
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 w-full text-center p-2 rounded-lg text-white font-bold transition hover:bg-blue-600 "
    >
      {isLoading ? <Loader /> : <span>Kirala</span>}
    </button>
  );
};

export default Button;
