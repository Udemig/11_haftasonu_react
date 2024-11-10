import {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  useRef,
  useState,
} from "react";
import Display from "../src/Display";

const App = () => {
  //* 1) useState ile tutulan state'in tipini generic yardımıyla belirlemeliyiz
  const [count, setCount] = useState<number>(0);

  //* 3) veri tutan herhangi bir hook mesela useRef kullanırken'de tip tanımlamak zorundayız
  //* Her jsx elementinin kendine ait bir tipi vardır. (HTML......Element)
  const titleRef = useRef<HTMLHeadingElement>(null);

  //* 4) Fonksiyonlarda event parametresinin tipini tanımlak zorundayız.
  //* Eventin tipini tanımlarken jsx elementlerinde olduğu gibi react içerisindeki hazır tipleri kullanırız
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(e.target);
  };

  return (
    <div>
      <h1 ref={titleRef}>Selamlar</h1>

      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" />

        <button onClick={handleClick}>-</button>
      </form>

      <Display count={count} />

      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default App;
