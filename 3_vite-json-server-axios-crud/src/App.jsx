import { useEffect, useState } from "react";
import api from "./utils/api";
import ListItem from "./components/ListItem";
import Form from "./components/Form";
import { toast } from "react-toastify";

const App = () => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const params = { _sort: "-date", _page: 1 };

    api
      .get("/todos", { params })
      .then((res) => setTodos(res.data.data))
      .catch((err) => toast.error("Veriler yüklenmedi!!"));
  }, []);

  return (
    <div className="bg-dark min-vh-100 w-100 text-light">
      <div className="container py-5">
        <h2 className="text-center mb-5">
          Server <span className="text-warning">CRUD</span>
        </h2>

        <Form setTodos={setTodos} />

        <ul className="list-group">
          {!todos ? (
            <p>Yükleniyor..</p>
          ) : (
            todos.map((todo) => (
              <ListItem key={todo.id} todo={todo} setTodos={setTodos} />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
