/*
 ! reducer
 * state'in nasıl değişeceğine karar verir

 * reducer normal bir fonksiyondur ve 2 parametre alır
 * > state: reducer'da tutulan verinin son durumu
 * > action: state'in nasıl değişmesi gerektiğini söyleyen nesne
 
 * not: reducer fonksiyonunda return edilen veri state'in son hali olur
 
 * not-2: useReducer'dan farklı olarak initialState'i state parametresine varsayılan değer olarak atarız
*/

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  // action type'ına göre state'in nasıl değişiceğine karar ver
  switch (action.type) {
    case "ADD":
      return state;

    case "DELETE":
      return state;

    case "UPDATE":
      return state;

    default:
      return state;
  }
};

export default todoReducer;
