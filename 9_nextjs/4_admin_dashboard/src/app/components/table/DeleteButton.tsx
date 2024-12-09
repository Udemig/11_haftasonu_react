"use client";

import { deleteUser } from "@/app/utils/api";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

type Props = {
  userId: string;
};

const DeleteButton = ({ userId }: Props) => {
  const router = useRouter();

  // butona tıklanınca
  const handleDelete = () => {
    if (!confirm("Hesabı kaldırmak istediğinizden emin misiniz?")) return;

    deleteUser(userId)
      .then(() => {
        toast.success("Kullanıcının hesabı kaldırıldı");

        // sayfayı yenile (veriler api'dan tekrar alınacak)
        router.refresh();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <button
      onClick={handleDelete}
      className="border shadow p-2 rounded-md hover:shadow-lg hover:bg-red-200 text-red-500 transition"
    >
      <FaTrash />
    </button>
  );
};

export default DeleteButton;
