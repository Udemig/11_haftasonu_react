import api from "../../utils/api";
import ActionTypes from "../actionTypes";

// kategori veirlini alıp reducer'a bildiren thunk aksiyonu
export const getGenres = () => (dispatch) => {
  // yüklenmeninin başladığını reducer'a bildir
  dispatch({ type: ActionTypes.GENRE_LOADING });

  // api'dan kategorileri iste
  api
    .get("/genre/movie/list", { params: { language: "tr" } })
    // başarılı olursa reducer'a veriyi haber ver
    .then((res) =>
      dispatch({
        type: ActionTypes.GENRE_SUCCESS,
        payload: res.data.genres,
      })
    )
    // başarısız olursa reducer'a hatayı haber ver
    .catch((err) =>
      dispatch({
        type: ActionTypes.GENRE_ERROR,
        payload: err.message,
      })
    );
};

// favorilerdeki filmleri al
export const getFavorites = () => (dispatch) => {
  dispatch({ type: ActionTypes.FAV_LOADING });

  api
    .get("/account/19719088/favorite/movies")
    .then((res) =>
      dispatch({
        type: ActionTypes.FAV_SUCCESS,
        payload: res.data.results,
      })
    )
    .catch((err) =>
      dispatch({
        type: ActionTypes.FAV_ERROR,
        payload: err.message,
      })
    );
};

// favorilere ekle / çıkar
export const toggleFavorite = (movie, isAdd) => (dispatch) => {
  api
    .post(`/account/19719088/favorite`, {
      media_type: "movie",
      media_id: movie.id,
      favorite: isAdd,
    })
    .then(() => {
      // isAdd true ise api'a da eklendiği için reducer'a ekleme haberi veriyoruz
      // isAdd false ise api'danda kaldırdığımız için reducer'a silme haberi gönderiyoruz
      isAdd
        ? dispatch({ type: ActionTypes.ADD_TO_FAV, payload: movie })
        : dispatch({ type: ActionTypes.REMOVE_FAV, payload: movie });
    })
    .catch((err) => console.log(err));
};
