"use client";

import { inputs } from "@/app/utils/constants";
import Input from "./input";
import Link from "next/link";
import { FormEvent } from "react";
import { Product } from "@/app/types";
import { createProduct, updateProduct } from "@/app/utils/api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type Props = {
  editItem?: Product;
};

const Form = ({ editItem }: Props) => {
  const router = useRouter();

  // form gönderilince
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // formdata örneği al
    const formData = new FormData(e.target as HTMLFormElement);
    const productData = Object.fromEntries(formData.entries());

    if (!editItem) {
      //! yeni ürün oluştur
      // resim ekle
      const id = Math.round(Math.random() * 100);
      productData.image_url = `https://picsum.photos/seed/${id}/500/500`;

      // varsayılan rating ve yorum sayısı belirle
      productData.rating = "4";
      productData.reviewsCount = "0";

      // api'a istek at
      createProduct(productData as Product)
        .then(() => {
          toast.success("Ürün oluşturuldu");
          router.push("/products");
          router.refresh();
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } else {
      //! ürünü düzenle
      let updatedItem = { ...editItem, ...productData };

      updateProduct(updatedItem)
        .then(() => {
          toast.success("Ürün bilgileri güncellendi");

          router.push("/products");
          router.refresh();
        })
        .catch(() => {
          toast.error("Güncelleme işleminde hata oldu");
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5">
      {inputs.map((i, key) => (
        <Input
          key={key}
          item={i}
          // @ts-ignore
          value={editItem ? editItem[i.name] : ""}
        />
      ))}

      <div className="flex justify-end gap-5">
        <Link href="." className="bg-gray-300 hover:bg-gray-400 py-2 px-5 rounded-lg">
          Geri
        </Link>

        <button className="bg-blue-300 hover:bg-blue-400 py-2 px-5 rounded-lg">
          {editItem ? "Kaydet" : "Oluştur"}
        </button>
      </div>
    </form>
  );
};

export default Form;
