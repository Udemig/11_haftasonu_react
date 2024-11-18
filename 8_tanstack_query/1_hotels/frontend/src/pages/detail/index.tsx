import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPlace } from "../../api";
import { Place } from "../../types";
import Container from "../../components/container";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Buttons from "./Buttons";
import Rating from "../../components/card/Rating";
import Features from "./Features";
import Status from "../../components/card/Status";

const Detail = () => {
  const { id } = useParams();

  const { isLoading, error, data, refetch } = useQuery<Place>({
    queryKey: ["place"],
    queryFn: () => getPlace(id as string),
  });

  return (
    <Container designs="max-w-[700px]">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error} refetch={refetch} />
      ) : (
        data && (
          <div className="flex flex-col gap-3">
            <Buttons />

            <div className="flex justify-between">
              <h1 className="text-3xl font-bold">{data.name}</h1>
              <Rating point={data.rating} expand />
            </div>

            <p className="text-zinc-700">{data.description}</p>
            <img className="rounded-lg" src={data.image_url} alt={data.name} />

            <Features array={data.amenities} />

            <div className="flex justify-between gap-2 items-center mt-5">
              <p className="text-xl font-semibold">
                ${data.price_per_night}
                <span className="text-sm text-gray-600">/gece</span>
              </p>

              <Status data={data.availability} expand />
            </div>
          </div>
        )
      )}
    </Container>
  );
};

export default Detail;
