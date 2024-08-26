import { toast } from "react-toastify";
import { v4 } from "uuid";
import ActionTypes from "../actionTypes";
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
    // ADD aksiyonu tetiklenirse todo oluştur
    case ActionTypes.ADD:
      // -todo nesnesi oluştur
      const newTodo = {
        id: v4(),
        text: action.payload,
        is_done: false,
        createdAt: new Date().toLocaleDateString(),
      };

      // -nesneyi diziye ekle
      const added = state.todos.concat(newTodo);

      toast.success("todo oluşturuldu");

      // -state'i güncelle
      return { todos: added };

    // DELETE aksiyonu tetiklenirse todo'yu kaldır
    case ActionTypes.DELETE:
      // payload ile gelen id'yi diziden kaldır
      const filtred = state.todos.filter((i) => i.id !== action.payload);

      toast.error("todo silindi");

      return { todos: filtred };

    // UPDATE aksiyonu tetiklenirse dizideki eski elemanı güncelle
    case ActionTypes.UPDATE:
      const updated = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );

      toast.info("todo güncellendi");

      return { todos: updated };

    default:
      return state;
  }
};

export default todoReducer;
