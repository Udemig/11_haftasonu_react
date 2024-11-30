import Link from "next/link";

const Comp1 = () => {
  return (
    <div>
      <h1>
        Burası
        <span className="text-red-500 mx-3">Comp1</span> Bileşeni
      </h1>

      <br />

      <Link href="/comp1/comp2" className="text-blue-500">
        2. Sayfaya Git
      </Link>
    </div>
  );
};

export default Comp1;
