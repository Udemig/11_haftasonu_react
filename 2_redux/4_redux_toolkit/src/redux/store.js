import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import crudReducer from "./slices/crudSlice";

/*
 * createStore vs configureStore
 * reducer'ları otomatik olarak birleştirir
 * thunk otomatik kurulu gelir
 * devtools (geliştirici araçları) kurulu gelir
 */

const store = configureStore({
  reducer: { counterReducer, crudReducer },
});

// projeye tanıtmak için export et
export default store;
