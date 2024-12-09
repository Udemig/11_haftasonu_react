import Image from "next/image";
import Input from "./Input";
import { BiSolidBellRing } from "react-icons/bi";
import profile from "@/app/assets/images/man.webp";

const Header = () => {
  return (
    <header className="border-b bg-white p-2 flex justify-between">
      <Input />

      <div className="flex gap-5 items-center">
        <BiSolidBellRing className="text-xl cursor-pointer" />

        <div className="flex gap-3">
          <Image src={profile} width={40} height={40} className="object-contain" alt="profile" />

          <div>
            <p className="font-semibold">Furkan Evin</p>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
