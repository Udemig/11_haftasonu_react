import api from "../../utils/api";
import ActionTypes from "../actionTypes";

// Normal Aksiyon Fonksiyonlar
// Sadece bir nesne return ederler
export const setLoading = (payload) => ({
  type: ActionTypes.REST_LOADING,
});

export const setRestaurants = (payload) => {
  return {
    type: ActionTypes.REST_SUCCESS,
    payload,
  };
};

// Normal Aksiyon Fonksiyonlar
// Sadece bir nesne return ederler
export const setError = (payload) => ({
  type: ActionTypes.REST_ERROR,
  payload,
});

//* Thunk Fonksiyonu
//* İçerisinde farklı bir fonksiyon return eder
//* Thunk bu fonksiyon içerisndeki fonksiyonu aksiyon tetiklendiği anda algılar ve çalıştırır bu fonksiyon içersinde api istekleri atılabilir
export const getRestaurants = () => {
  return async (dispatch) => {
    dispatch(setLoading());

    api
      .get("/restaurants")
      .then((res) => dispatch(setRestaurants(res.data)))
      .catch((err) => dispatch(setError(err)));
  };
};
