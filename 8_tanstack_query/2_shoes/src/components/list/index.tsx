import { useQuery } from "@tanstack/react-query";
import api from "../../api";
import { Shoe } from "../../types";
import Loader from "../loader";
import Error from "../error";
import Card from "./Card";

const List = () => {
  const { isLoading, error, data, refetch } = useQuery<Shoe[]>({
    queryKey: ["shoes"],
    queryFn: () => api.get(`/shoes`).then((res) => res.data),
  });

  if (isLoading) return <Loader />;

  if (error) return <Error info={error.message} refetch={refetch} />;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6 md:gap-y-8 xl:gap-y-10">
      {data?.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
