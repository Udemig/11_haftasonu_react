import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext } from "react";
import { toast } from "react-toastify";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  // state'de olan değişimleri oto. olarak 1. param ile belirtilen state'e aktarılır
  const [basket, setBasket] = useLocalStorage("basket", []);

  // sepete ürün ekler
  const addToBasket = (newProduct) => {
    //1) bu üründen sepette var mı?
    const found = basket.find((i) => i.id === newProduct.id);

    if (!found) {
      //2) ürün sepette yoksa > ürünü sepete ekle (miktar 1)
      setBasket([...basket, { ...newProduct, amount: 1 }]);

      toast.success("Ürün sepete eklendi");
    } else {
      //3) ürün sepette varsa > miktarını arttır
      //a) bulunan ürün nesnesinin miktar değerini 1 arttır
      const updated = { ...found, amount: found.amount + 1 };

      //b) sepet dizisindeki eski ürün yerine güncel halini koy
      const newBasket = basket.map((i) =>
        i.id === updated.id ? updated : i
      );

      //c) state'i güncelle
      setBasket(newBasket);

      toast.info(`Ürün miktarı arttırıldı (${updated.amount})`);
    }
  };

  // sepetten ürün çıkar
  const removeFromBasket = (delete_id) => {
    // miktarı azaltılacak / silincek ürünü sepette bul
    const found = basket.find((i) => i.id === delete_id);

    if (found.amount > 1) {
      // miktar 1'den fazlaysa > miktarını 1 azalt
      const updated = { ...found, amount: found.amount - 1 };

      const newBasket = basket.map((i) =>
        i.id === updated.id ? updated : i
      );

      setBasket(newBasket);

      toast.info(`Ürün miktarı azaltıldı (${updated.amount})`);
    } else {
      // miktar 1 ise > ürünü diziden kaldır
      const filtred = basket.filter((i) => i.id !== delete_id);

      setBasket(filtred);

      toast.error("Ürün sepetten kaldırıldı");
    }
  };

  // sepeti temizle
  const clearBasket = () => {
    toast.success(`Siparişiniz alındı`);

    setBasket([]);
  };

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, clearBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};
