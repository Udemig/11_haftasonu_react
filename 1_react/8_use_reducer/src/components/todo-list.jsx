import { useReducer } from "react";
import todoReducer from "../reducers/todoReducer";

const initialState = {
  todos: [],
  isDarkTheme: true,
};

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    // inpputtaki yazıya eriş
    const text = e.target[0].value;

    // yeni bir todo oluşturulucağından reducer'a haber ver
    dispatch({ type: "CREATE", payload: text });

    // formu sıfırla
    e.target.reset();
  };

  return (
    <div
      className={`vh-100 vw-100 container ${
        !state.isDarkTheme && "bg-white text-black"
      }`}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-center py-5">Todo List</h1>
        <button onClick={() => dispatch({ type: "SWITCH" })}>
          Mod Değiş
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="d-flex gap-3 align-items-center justify-content-center"
      >
        <input type="text" />
        <button>Gönder</button>
      </form>

      <ul className="list-group my-5">
        {state.todos.map((item) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={item.id}
          >
            <span>{item.text}</span>

            <button
              onClick={() =>
                dispatch({ type: "DELETE", payload: item.id })
              }
              className="btn bg-danger"
            >
              sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
