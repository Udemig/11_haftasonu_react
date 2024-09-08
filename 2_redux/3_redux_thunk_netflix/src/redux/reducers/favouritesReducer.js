import ActionTypes from "../actionTypes";

const initialState = {
  favorites: [],
  isLoading: true,
  error: null,
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FAV_LOADING:
      return { ...state, isLoading: true };

    case ActionTypes.FAV_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case ActionTypes.FAV_SUCCESS:
      return { isLoading: false, error: null, favorites: action.payload };

    case ActionTypes.ADD_TO_FAV:
      const updated = state.favorites.concat(action.payload);

      return { ...state, favorites: updated };

    case ActionTypes.REMOVE_FAV:
      const filtred = state.favorites.filter(
        (i) => i.id !== action.payload.id
      );

      return { ...state, favorites: filtred };

    default:
      return state;
  }
};

export default favoritesReducer;
