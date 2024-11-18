import { CgUnavailable } from "react-icons/cg";
import { MdEventAvailable } from "react-icons/md";

const Status = ({ data, expand }: { data: boolean; expand?: boolean }) => {
  return (
    <div
      className={`flex items-center gap-4 border p-2 rounded-md ${
        data ? "bg-green-100" : "bg-red-100"
      }`}
    >
      {data ? (
        <MdEventAvailable className="text-xl text-green-700" />
      ) : (
        <CgUnavailable className="text-xl text-red-700" />
      )}

      {expand && (
        <p className="font-bold">
          {data ? "Şuan Konaklanabilir" : "Konaklama için müsait değil"}
        </p>
      )}
    </div>
  );
};

export default Status;
