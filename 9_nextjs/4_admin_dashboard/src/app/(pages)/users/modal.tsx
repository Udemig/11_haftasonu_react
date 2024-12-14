import { User } from "@/app/types";
import { getUserById } from "@/app/utils/api";
import Link from "next/link";
import { MdClose } from "react-icons/md";

type Props = {
  id: string;
};

const Modal = async ({ id }: Props) => {
  const user: User = await getUserById(id);

  // ekrna basılcak olan nesnenin alanlarından bir dizi oluştur
  const fields = [
    {
      label: "Email",
      value: user.email,
    },
    {
      label: "Ülke",
      value: user.address.country,
    },
    {
      label: "Şehir",
      value: user.address.city,
    },
    {
      label: "Sokak",
      value: user.address.street,
    },
    {
      label: "Posta Kodu",
      value: user.address.postal_code,
    },
    {
      label: "Telefon",
      value: user.phone,
    },
    {
      label: "Sipariş Sayısı",
      value: user.orders.length,
    },
  ];

  return (
    <div className="fixed bg-black/10 inset-0 backdrop-blur-[2px] z-[999999] grid place-items-center">
      <div className="bg-white rounded-lg shadow py-8 px-14 pb-16">
        <div className="flex justify-end">
          <Link
            href="/users"
            className="shadow p-2 rounded-lg hover:shadow-lg hover:bg-gray-200 transition"
          >
            <MdClose />
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-semibold text-center my-5">
            {user.name}
          </h1>

          {fields.map((field, key) => (
            <div className="flex justify-between gap-16" key={key}>
              <span>{field.label}</span>
              <span className="font-semibold">{field.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
