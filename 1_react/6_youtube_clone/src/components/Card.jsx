import millify from "millify";
import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ video, isRow }) => {
  const [isHover, setIsHover] = useState(false);

  // hover olduysa ve gifli thumbnail varsa onu kullan yoksa normal thumbnail dizisi içerisndeki son elemanı al (kaliteli)
  const source =
    isHover && video.richThumbnail && video.richThumbnail[0]
      ? video.richThumbnail[0].url
      : video.thumbnail[video.thumbnail.length - 1].url;

  return (
    <Link
      to={`/watch?v=${video.videoId}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`${isRow && "row"} cursor-pointer`}
    >
      {/* resim alanı */}
      <div>
        <img className="rounded-lg w-full h-full" src={source} />
      </div>

      {/* alt detay alanı */}
      <div className="flex gap-4 mt-5">
        <img
          className={`w-14 h-14 rounded-full`}
          src={video.channelThumbnail && video.channelThumbnail[0].url}
        />

        <div>
          <h4 className="font-bold line-clamp-2">{video.title}</h4>

          <p>{video.channelTitle}</p>

          <div className="flex gap-3">
            <p>
              <span>{millify(video.viewCount)}</span>
              <span className="text-sm ms-1 view">Görüntülenme</span>
            </p>
            *{" "}
            <p>
              {video.isLive ? (
                <span className="bg-red-500 py-1 px-2 rounded-lg">
                  Canlı
                </span>
              ) : (
                video.publishedTimeText
              )}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
