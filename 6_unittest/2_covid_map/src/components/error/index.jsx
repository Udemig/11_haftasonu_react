// comp ve testleri
const Error = ({ info, retry }) => {
  return (
    <div className="my-20 flex flex-col justify-center col-span-3">
      <div data-testid="error" className="bg-red-400 p-5 rounded-md">
        <p>Üzgünüz bir sorun oluştu</p>
        <p>{info}</p>
      </div>

      <button
        onClick={retry}
        className="border shadow mt-10 text-black p-2"
      >
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;
