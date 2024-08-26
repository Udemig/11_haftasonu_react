const initialState = {
  user: null,
  token: null,
};

const userReducer = (state = initialState, action) => {
  // action type'ına göre state'in nasıl değişiceğine karar ver
  switch (action.type) {
    case "LOGIN":
      return state;

    case "REGISTER":
      return state;

    case "LOGOUT":
      return state;

    // burda tanımlı olmayan bir aksiyon tetiklenirse user state'inin sabir olarak kalmasını sağlar
    default:
      return state;
  }
};

export default userReducer;
