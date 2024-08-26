const initialState = {
  restaurants: [],
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case "X":
      return state;

    case "Y":
      return state;

    case "Z":
      return state;

    default:
      return state;
  }
};

export default restaurantReducer;
