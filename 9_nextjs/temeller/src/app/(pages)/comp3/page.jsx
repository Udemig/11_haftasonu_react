import Link from "next/link";

const Comp3 = () => {
  return (
    <div>
      <h1>
        <span className="text-red-500">COMP3</span> Bileşeni
      </h1>

      <br />

      <Link href="/comp4" className="text-blue-500">
        Diğer(4) Compa Git
      </Link>
    </div>
  );
};

export default Comp3;
