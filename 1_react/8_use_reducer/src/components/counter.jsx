import { useReducer } from "react";
import counterReducer from "../reducers/counterReducer";

const Counter = () => {
  /*
   * Bizden istediği argümanlar:
   * 1) reducer >> state'in nasıl değişeceğine karar veren fonksiyon
   * 2) initialState >> tutucağımız state'in ilk hali
   
   * Bize döndürdüğü değerler:
   * 1) state >> state'in güncel hali
   * 2) dispatch >> aksiyon'ları reducer'a aktaran method
   */
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div className="h-screen">
      <h1 className="text-center my-5">SAYAÇ</h1>

      <div className="d-flex justify-content-center gap-4 align-items-center">
        <button onClick={() => dispatch("SIFIRLA")}>Sıfırla</button>
        <button onClick={() => dispatch("AZALT")}>-</button>
        <span className="fs-1 lead">{count}</span>
        <button onClick={() => dispatch("ARTTIR")}>+</button>
      </div>
    </div>
  );
};

export default Counter;
