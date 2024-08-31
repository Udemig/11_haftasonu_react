const Error = ({ msg, retry }) => {
  return (
    <div>
      <div className="bg-red-100 mt-20 p-10 rounded-md text-lg text-center">
        <p>Üzgünüz bir hata oluştu</p>

        <p className="font-semibold">{msg}</p>
      </div>

      <div className="flex justify-center my-10">
        <button
          onClick={retry}
          className="border p-2 px-4 rounded-md hover:bg-zinc-100 transition"
        >
          Tekrar Dene
        </button>
      </div>
    </div>
  );
};

export default Error;
