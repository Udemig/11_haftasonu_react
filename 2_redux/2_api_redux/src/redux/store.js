import { combineReducers, createStore, applyMiddleware } from "redux";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";
import restaurantReducer from "./reducers/restaurantReducer";
import { thunk } from "redux-thunk";

// reducer'ları birleştir
const rootReducer = combineReducers({
  product: productReducer,
  restaurant: restaurantReducer,
  cart: cartReducer,
});

/*
 * applyMiddleware herhangi bir arayazılımı redux'a dahil etmeye yarar.
 * biz burda thunk'u dahil etmek için kullancaz
 */
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
