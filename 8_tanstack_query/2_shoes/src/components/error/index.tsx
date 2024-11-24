type Props = {
  info: string;
  refetch: () => void;
};

const Error = ({ info, refetch }: Props) => {
  return (
    <div className="flex flex-col gap-10 my-10 text-center">
      <div>
        <p className="text-gray-500">Üzgünüz bir sorun oluştu</p>
        <p className="text-gray-700">{info}</p>
      </div>

      <div>
        <button
          className="border border-gray-700 p-2 rounded-md hover:bg-gray-300"
          onClick={refetch}
        >
          Tekrar Dene
        </button>
      </div>
    </div>
  );
};

export default Error;
