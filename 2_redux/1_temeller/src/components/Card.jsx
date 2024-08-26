import { useDispatch } from "react-redux";
import { useState } from "react";
import Modal from "./Modal";
import { deleteTodo, updateTodo } from "../redux/actions";

const Card = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = () => {
    // onaylamazsa fonksiyonu durdur
    if (!confirm("Silmek istediğinizden emin misiniz ?")) return;

    // reducer'a todoyu silmek için haber gönder
    //- dispatch({ type: DELETE, payload: todo.id });
    dispatch(deleteTodo(todo.id));
  };

  // tamamla butonuna tıklanınca is_done değerini tersine çevir
  const handleStatus = () => {
    // güncel nesneyi oluştur
    const updatedTodo = { ...todo, is_done: !todo.is_done };

    // reducer'a bir todo'nun güncellenmesi gerektiğini haber ver
    //- dispatch({ type: UPDATE, payload: updatedTodo });
    dispatch(updatedTodo(updatedTodo));
  };

  return (
    <div className="border shadow-lg p-4 my-5 rounded">
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? "Tamamlandı" : "Devam Ediyor"}</h6>
      <p>{todo.createdAt}</p>

      <button onClick={() => setIsOpen(true)} className="bg-primary">
        Düzenle
      </button>
      <button onClick={handleStatus} className="bg-success mx-3">
        {todo.is_done ? "Geri Al" : "Tamamla"}
      </button>
      <button onClick={handleDelete} className="bg-danger">
        Sil
      </button>

      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
    </div>
  );
};

export default Card;
