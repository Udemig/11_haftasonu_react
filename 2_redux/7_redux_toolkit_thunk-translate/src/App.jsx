import { useDispatch, useSelector } from "react-redux";
import LanguageSelect from "./components/LanguageSelect";
import TextContainer from "./components/TextContainer";
import { useEffect, useState } from "react";
import { getLangs, translateText } from "./redux/actions";
import { en, tr } from "./constants";

const App = () => {
  const { answer } = useSelector((store) => store.translate);
  const dispatch = useDispatch();

  const [sourceLang, setSourceLang] = useState(tr);
  const [targetLang, setTargetLang] = useState(en);
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(getLangs());
  }, []);

  useEffect(() => {
    dispatch(translateText({ sourceLang, targetLang, text }));
  }, [targetLang]);

  const handleTranslate = () => {
    dispatch(translateText({ sourceLang, targetLang, text }));
  };

  // seçilen dillerin yerini değiştir
  const handleSwap = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setText(answer);
  };

  return (
    <div className="bg-zinc-900 h-screen text-white grid place-items-center">
      <div className="w-[80vw] max-w-[1100px] flex flex-col justify-center">
        <h1 className="text-center text-4xl font-semibold mb-7">
          Çeviri +
        </h1>

        {/* Üst Kısım */}
        <LanguageSelect
          sourceLang={sourceLang}
          targetLang={targetLang}
          setSourceLang={setSourceLang}
          setTargetLang={setTargetLang}
          handleSwap={handleSwap}
        />

        {/* Text Alanları */}
        <TextContainer setText={setText} text={text} />

        {/* Buton */}
        <button
          onClick={handleTranslate}
          className="bg-zinc-700 px-5 py-3 rounded-md font-semibold hover:ring-2 hover:bg-zinc-900 cursor-pointer transition mt-3 disabled:brightness-50"
        >
          Çevir
        </button>
      </div>
    </div>
  );
};

export default App;
