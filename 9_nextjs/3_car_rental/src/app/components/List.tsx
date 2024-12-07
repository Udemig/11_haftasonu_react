import { getCars } from "../utils/service";
import Card from "./Card";

const List = async () => {
  const res = await getCars();

  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl font-bold">
        Bütün Araçları Keşfedin
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {res.data.map((i) => (
          <Card key={i._id} car={i} />
        ))}
      </div>
    </div>
  );
};

export default List;
