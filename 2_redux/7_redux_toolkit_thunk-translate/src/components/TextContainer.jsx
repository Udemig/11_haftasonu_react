import { useSelector } from "react-redux";
import Loader from "./Loader";

const TextContainer = ({ text, setText }) => {
  const { isLoading, error, answer } = useSelector(
    (store) => store.translate
  );

  return (
    <div className="flex gap-3 mt-5 md:gap-[105px] max-md:flex-col">
      <div className="flex-1">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full min-h-[300px] max-h-[500px] text-black text-[20px] rounded p-[10px]"
        ></textarea>
      </div>

      <div className="flex-1 relative">
        <textarea
          value={answer}
          disabled
          className="w-full min-h-[300px] max-h-[500px]  text-[20px] rounded p-[10px] text-gray-300"
        ></textarea>

        {isLoading && (
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default TextContainer;
