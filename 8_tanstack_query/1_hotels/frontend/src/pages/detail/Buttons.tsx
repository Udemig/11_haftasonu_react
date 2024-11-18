import { useMutation } from "@tanstack/react-query";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deletePlace } from "../../api";
import { toast } from "react-toastify";

const Buttons = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationKey: ["deletePlace"],
    mutationFn: () => deletePlace(id as string),

    onSuccess: () => {
      toast.info("Konaklama noktası akıştan kaldırıldı");
      navigate("/");
    },

    onError: (err) => {
      console.log(err);
      toast.error("Üzgünüz bir sorun oluştu");
    },
  });

  return (
    <div className="flex justify-between mb-5">
      <Link to={".."} className="btn">
        <MdKeyboardArrowLeft />
        Geri
      </Link>

      <button disabled={isPending} onClick={() => mutate()} className="btn">
        <FaRegTrashAlt />
        Sil
      </button>
    </div>
  );
};

export default Buttons;
