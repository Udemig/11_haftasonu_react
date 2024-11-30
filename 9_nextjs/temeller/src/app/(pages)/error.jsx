"use client";

// bir sayfada hata olduğu durumda otomatik olarak render edilir

// hatanın bilgilerini ve sayfayı yenilemey yarayan methodu prop olarak alır

const Error = ({ error, reset }) => {
  return (
    <div className="flex flex-col gap-10 justify-center text-center text-xl">
      <h2>Üzgünüz bir sorun oluştu</h2>

      <p>{error.message}</p>

      <button onClick={reset}>Tekrar Dene.</button>
    </div>
  );
};

export default Error;
