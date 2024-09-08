import { Splide, SplideSlide } from "@splidejs/react-splide";
import { baseImgUrl } from "../../utils/constants";

const ActorList = ({ actors }) => {
  return (
    <div>
      <h2 className="font-semibold text-lg md:text-xl my-5">Oyuncular</h2>

      <Splide
        options={{ autoWidth: true, gap: "10px", pagination: false }}
      >
        {actors.map((actor, key) => (
          <SplideSlide key={key}>
            <div className="w-[160px] h-full">
              <img
                className="rounded h-[90%] object-cover "
                src={
                  actor.profile_path
                    ? baseImgUrl + actor.profile_path
                    : "/default.webp"
                }
              />

              <h2 className="text-center">{actor.original_name}</h2>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ActorList;
