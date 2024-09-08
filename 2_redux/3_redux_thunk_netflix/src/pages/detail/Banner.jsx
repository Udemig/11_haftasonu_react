import { baseImgUrl } from "../../utils/constants";

const Banner = ({ movie }) => {
  return (
    <div className="h-[20vh] drop-shadow-[0_0_80px_rgba(255,255,255,0.2)] relative">
      <img
        className="size-full object-cover rounded-sm"
        src={baseImgUrl + movie.backdrop_path}
      />

      <div className="bg-black absolute inset-0 grid place-items-center bg-opacity-30">
        <h2 className="text-3xl md:text-4xl font-semibold font-mono">
          {movie.title}
        </h2>
      </div>
    </div>
  );
};

export default Banner;
