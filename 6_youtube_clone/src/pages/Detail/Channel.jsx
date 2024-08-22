import millify from "millify";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

const Channel = ({ video }) => {
  return (
    <div className="flex justify-between">
      {/* sol */}
      <div className="flex items-center gap-4">
        <img
          className="rounded-full w-12 h-12"
          src={video.channelThumbnail[0].url}
        />

        <div>
          <h4 className="font-bold">{video.channelTitle}</h4>
          <p className="text-gray-400">{video.subscriberCountText}</p>
        </div>

        <button className="bg-white text-black px-3 h-9 transition hover:bg-gray-400 rounded-full">
          Abone Ol
        </button>
      </div>

      {/* sağ */}
      <div className="flex items-center bg-gri rounded-full cursor-pointer">
        <div className="py-2 px-6 flex items-center gap-2 font-bold border-r border-zinc-700 text-sm">
          <AiFillLike />
          <span>{millify(video.likeCount)}</span>
        </div>
        <div className="py-2 px-6">
          <AiFillDislike />
        </div>
      </div>
    </div>
  );
};

export default Channel;
