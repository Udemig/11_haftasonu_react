import Input from "../components/input";
import Label from "../components/label";

const Iletisim = () => {
  console.log("İletişim Render Edildi");

  return (
    <div className="text-4xl text-center my-40">
      <h1>İletişim Sayfası</h1>

      <span className="bg-blue-500 px-3 py-1 rounded-md text-base font-semibold">
        server component
      </span>

      <div className="mt-10 flex flex-col gap-10">
        <Label />
        <Input />
      </div>
    </div>
  );
};

export default Iletisim;
