/* 
 * Hem reducer'ı hem de reducer'ın aksiyonlarını tek noktada oluşturmamızı sağlar.

 * slice olışturma ? 
 * import createSlice
 * name: slice ismi > string
 * initialState: başlangıç state'i
 * reducers: aksiyonların görevini tanımladığımız fonksiyonları ifade eder

*/

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 1, x: [] },
  //* hem aksiyonları hemde görevlerini tanımla
  reducers: {
    increase: (state, action) => {
      state.count++;
    },

    decrease: (state, action) => {
      state.count--;
    },

    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

// store'a tanıtmak için export
export default counterSlice.reducer;

// aksiyon oluşturan fonksiyonlaro export et
export const { increase, decrease, setCount } = counterSlice.actions;
