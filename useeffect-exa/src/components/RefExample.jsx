import { useRef } from "react";

const RefExample = () => {
  // useRef değişken olarak bir jsx elementi depolayabiliyor
  const inputRef = useRef();
  const farklıRef = useRef();

  // butona tıklandığında çalışır
  const handleFocus = () => {
    // input elementine bu fonksiyon içerisinden erişmem gerekiyor eğer js yazıyır olsaydık querySelector ile erişirdik react'ta ise useRef kullanarak inputa erişicez

    inputRef.current.focus();
    inputRef.current.style.background = "red";
  };

  return (
    <div className="my-5 text-center">
      <h1>UseRef Örnek</h1>

      <div className="d-grid gap-2 mt-5">
        <button onClick={handleFocus} className="btn btn-warning">
          Odaklan
        </button>
        <input ref={inputRef} className="form-control" type="text" />
      </div>
    </div>
  );
};

export default RefExample;
