import ActionTypes from "../actionTypes";

const initialState = {
  cart: [],
  isLoading: true,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CART_LOADING:
      return { ...state, isLoading: true };

    case ActionTypes.CART_ERROR:
      return { ...state, isLoading: false, error: action.payload.message };

    case ActionTypes.CART_SUCCESS:
      return { isLoading: false, error: null, cart: action.payload };

    case ActionTypes.ADD_TO_BASKET:
      return {
        ...state,
        cart: state.cart.concat(action.payload),
      };

    case ActionTypes.UPDATE_ITEM:
      const updated = state.cart.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );

      return { ...state, cart: updated };

    case ActionTypes.DELETE_ITEM:
      const filtred = state.cart.filter((i) => i.id !== action.payload);

      return { ...state, cart: filtred };

    default:
      return state;
  }
};

export default cartReducer;
