import { useCallback, useState } from "react";
import Display from "./display";

const CBExample = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  // sorun: bu bileşen her render oluduğunda bu fonksiyondan bellekte yeni bir kopya oluşur. Bu kopyayı display bileşnine gönderdiğmizde farklı bir fonksiyon sanıp gereksiz rendera sebep olur

  // çözün: useCallback aracılığı ile count değğişmeddiği müddetçe updateCount methodunun bellekte farklı kopyları oluşmasını önledik hep aynı methodu bellekten alıp Display bileşeni gönderdik display bileşinide bunu farklı bir fonksiyon zannetmeyip rendera sebe olmadı.
  const updateCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2>useCallback Example</h2>

      <Display count={count} updateCount={updateCount} />

      <br />

      <br />
      <br />
      <br />

      {/* sayaçtan bağımsız bir input oluşturalım */}
      <input onChange={(e) => setText(e.target.value)} type="text" />
      <p>{text}</p>
    </div>
  );
};

export default CBExample;
