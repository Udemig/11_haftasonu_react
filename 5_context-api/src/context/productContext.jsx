/*
 * Context API
 * Uygulamadaki birden çok bileşenin ihtiyacı olan verileri bileşenlerden bağımsız bir şekilde konumlanan merkezlerde yönetmeye yarar
 
 * Context yapısı içerisnde verilerin state'ini ve verileri değiştirmeyey yarayan fonksiyonları tutulabilir

 * Context, tuttuğumuz değişkenleri bileşenlere doğrudan aktarım yapabilen merkezi state yönetim aracıdır
 */

import { createContext, useState } from "react";

//! Context yapısının temelini oluşturma
export const ProductContext = createContext();

//! Bir sağlayıcı bileşeni tanımla - HOC
export const ProductProvider = ({ children }) => {
  // context yapısı içerisinde tutulan state
  const [products, setProducts] = useState(null);

  // state'i güncellemeye yarayan methodlar
  const createProduct = () => {};

  // context yapısında tuttuğumuz state/method'ları uygulamaya sağla
  return (
    <ProductContext.Provider value={{ products, createProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
