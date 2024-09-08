import { Splide, SplideSlide } from "@splidejs/react-splide";
import ReactPlayer from "react-player";

const VideoList = ({ videos }) => {
  // eğer filmin fragmanları yoksa bu bileşeni renderlama
  if (!videos) return;

  return (
    <div className="my-5">
      <h2 className="font-semibold text-lg md:text-xl my-5">Fragmanlar</h2>

      <Splide options={{ pagination: false }}>
        {videos.map((video, key) => (
          <SplideSlide key={key}>
            <div className="w-full h-[30vh] md:h-[50vh]">
              <ReactPlayer
                width={"100%"}
                height={"100%"}
                controls
                url={`https://www.youtube.com/watch?v=${video?.key}`}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default VideoList;
