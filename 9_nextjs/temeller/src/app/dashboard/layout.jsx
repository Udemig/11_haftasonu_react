import Link from "next/link";

const Layout = ({ children, notifications, users, revenue }) => {
  return (
    <div className="flex flex-col gap-10">
      <div>{children}</div>

      <div className="text-lg flex gap-5 justify-center text-blue-500">
        <Link href="/dashboard">Admin Paneli</Link>
        <Link href="/dashboard/settings">Panel Ayarları</Link>
      </div>

      <div className="flex gap-5">
        <div className="flex flex-1 flex-col gap-5">
          <div className="border p-6 rounded">{notifications}</div>

          <div className="border p-6 rounded">{users}</div>
        </div>

        <div className="border p-6 rounded">{revenue}</div>
      </div>
    </div>
  );
};

export default Layout;
