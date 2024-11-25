"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Bu layout bileşeninin (auth) route grubu içerisinde oluşturduğumuz için sadece bu route grubundaki sayfalara etki eder
const Layout = ({ children }) => {
  const [name, setName] = useState();
  // mevcut sayfanın yolunu alır
  const path = usePathname();

  return (
    <div className="flex w-full p-5 gap-10">
      <aside className="text-base nav flex flex-col border rounded">
        <form className="mb-5 flex flex-col ">
          <label>Merhaba, {name}</label>
          <input
            className="text-black"
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </form>

        <Link className={path === "/login" ? "active" : ""} href="/login">
          Giriş Yap
        </Link>

        <Link className={path === "/signup" ? "active" : ""} href="/signup">
          Kaydol
        </Link>

        <Link className={path === "/forgotpass" ? "active" : ""} href="/forgotpass">
          Şifremi Unuttum
        </Link>
      </aside>

      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
