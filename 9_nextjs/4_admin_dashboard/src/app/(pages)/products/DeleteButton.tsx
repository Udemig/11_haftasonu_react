"use client";

import Loader from "@/app/components/loader";
import { deleteProduct } from "@/app/utils/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

type Props = {
  id: string;
};

const DeleteButton = ({ id }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  /// butona tıklanınca
  const handleDelete = () => {
    if (!confirm("Ürünü silmek istediğinizden emin misiniz?")) return;

    setIsLoading(true);

    deleteProduct(id)
      // silme işlemi başarılı olursa
      .then(() => {
        // sayfayı yenile (ürünler tekrar alınsın)
        router.refresh();

        toast.warning("Ürün kaldırıldı");
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <button
      onClick={handleDelete}
      className="py-1 px-3 bg-[#f3a5a5] hover:bg-[#f45757] transition rounded-md"
    >
      {isLoading ? <Loader /> : "Sil"}
    </button>
  );
};

export default DeleteButton;
