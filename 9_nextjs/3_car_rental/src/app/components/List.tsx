import { CarType } from "../utils/types";

type ReturnType = Promise<{
  message: string;
  data: CarType[];
}>;

const getCars = async (): ReturnType => {
  const res = await fetch("http://localhost:3001/api/vehicles");

  if (!res.ok) {
    throw new Error("Araçları alırken bir hata oluştu");
  }

  return res.json();
};

const List = async () => {
  const res = await getCars();

  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl font-bold">
        Bütün Araçları Keşfedin
      </h1>

      <div>
        {res.data.map((i) => (
          <div key={i._id}>
            <h1>{i.make}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
