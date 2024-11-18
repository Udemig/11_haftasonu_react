import { Link } from "react-router-dom";
import { Place } from "../../types";
import Rating from "./Rating";
import Status from "./Status";

const Card = ({ place }: { place: Place }) => {
  return (
    <Link
      to={`/place/${place.id}`}
      className="border rounded-md p-4 gap-3  grid grid-cols-3 min-h-[300px]"
    >
      <div>
        <img className="size-full object-cover rounded-lg" src={place.image_url} />
      </div>

      <div className="col-span-2 flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h1>{place.name}</h1>
            <Status data={place.availability} />
          </div>

          <p>{place.location}</p>

          <div className="flex gap-4">
            {place.amenities.slice(0, 2).map((i, key) => (
              <span key={key} className="border p-1 rounded-md">
                {i}
              </span>
            ))}
          </div>

          <Rating point={place.rating} />
        </div>

        <div className="flex flex-col items-end">
          <span className="text-2xl font-bold">{place.price_per_night}$</span>
          <span className="text-xs text-gray-400">vergiler ve ücretler dahildir</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
