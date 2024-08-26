import { combineReducers, createStore } from "redux";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";
import restaurantReducer from "./reducers/restaurantReducer";

// reducer'ları birleştir
const rootReducer = combineReducers({
  productReducer,
  restaurantReducer,
  cartReducer,
});

// store'u oluştur
const store = createStore(rootReducer);

export default store;
