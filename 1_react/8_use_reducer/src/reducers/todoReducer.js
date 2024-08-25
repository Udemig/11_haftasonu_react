/*
 * Reducer

 * state'in son halini
 * dispatch ile tetiklenen aksiyonu
 * parametre olarak alır
 
 * tetiklenen aksiyona bağlı olarak state'in nasıl değişeceğine karar verir

 * state'in son halini return eder
*/

const todoReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      // kaydedilecek todo nesnesini hazırla
      const newTodo = { id: new Date().getTime(), text: action.payload };

      // yeni todo'yu öncek todo'ların arasına ekle (yeni dizi)
      const updated = state.todos.concat(newTodo);

      // state'in son halini return et
      return { ...state, todos: updated };

    case "DELETE":
      // aksiyonun payloadıyla gelen id'li elemanı diziden kaldır
      const filtred = state.todos.filter((i) => i.id !== action.payload);

      // state'in son halini return et
      return { ...state, todos: filtred };

    case "SWITCH":
      return { ...state, isDarkTheme: !state.isDarkTheme };

    default:
      return state;
  }
};

export default todoReducer;
