/*
 ! store oluşturma
 * 1. redux kütüphanesinden "createStore" methodu import edilir
 * 2. tutulacak olan verilere göre reducer'lar oluştrulur
 * 3. oluşturulan reducerlar "combineReducers" ile birleştirilir
 * 4. store'a birleştirilen reducerlar tanıtılır
*/

import { combineReducers, createStore } from "redux";
import userReducer from "./reducers/userReducer";
import todoReducer from "./reducers/todoReducer";

// birden fazla reducer varsa bunları birleştiririz
const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});

// store oluşturma
const store = createStore(rootReducer);

// projeye tanıtmak için export et
export default store;
