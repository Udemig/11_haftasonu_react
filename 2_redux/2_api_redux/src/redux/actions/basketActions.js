import { v4 } from "uuid";
import api from "../../utils/api";
import ActionTypes from "../actionTypes";

//* Sepetteki elemanları alan Thunk Aksiyonu
export const getCart = () => (dispatch) => {
  dispatch({
    type: ActionTypes.CART_LOADING,
  });

  api
    .get("/cart")
    .then((res) =>
      dispatch({
        type: ActionTypes.CART_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ActionTypes.CART_ERROR,
        payload: err.message,
      })
    );
};

//* Sepete yeni eleman ekleyen Thunk Aksiyonu
export const addToBasket = (product) => (dispatch) => {
  //1) sepete eklenicek olan ürünün bilgilerini belirle
  const newItem = {
    id: v4(),
    productId: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    amount: 1,
  };

  //2) api'a sepete elemanı eklemek için istek at
  api
    .post("/cart", newItem)
    //3) istek başarılı olursa reducer'a haber ver
    .then(() =>
      dispatch({
        type: ActionTypes.ADD_TO_BASKET,
        payload: newItem,
      })
    );
};

//* Sepettteki elemanın miktarını güncelleyen Thuk Aksiyonu
export const updateItem = (id, newAmount) => (dispatch) => {
  api
    .patch(`/cart/${id}`, { amount: newAmount })
    // istek başarılı olursa reducer'a güncellemeyi haber ver
    .then((res) => {
      dispatch({
        type: ActionTypes.UPDATE_ITEM,
        payload: res.data,
      });
    });
};

//* Sepetten elemanı kaldıran thunk aksiyonu
export const deleteItem = (id) => (dispatch) => {
  // api'a silmek için istek at
  api
    .delete(`/cart/${id}`)
    // başarılı olursa reducer'a elemanın silinme haberini gönder
    .then(() =>
      dispatch({
        type: ActionTypes.DELETE_ITEM,
        payload: id,
      })
    );
};
