import ActionTypes from "../actionTypes";

const initialState = {
  restaurants: [],
  isLoading: true,
  error: null,
};

const restaurantReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ActionTypes.REST_LOADING:
      return { ...state, isLoading: true };

    case ActionTypes.REST_ERROR:
      return { ...state, isLoading: false, error: action.payload.message };

    case ActionTypes.REST_SUCCESS:
      return {
        isLoading: false,
        error: null,
        restaurants: action.payload,
      };

    default:
      return state;
  }
};

export default restaurantReducer;
