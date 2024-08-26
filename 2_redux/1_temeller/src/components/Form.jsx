import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addTodo } from "../redux/actions";

const Form = () => {
  // aksiyonları reducer'a ileten bu methodu redux'ta bu şekilde kuruyoruz
  const dispatch = useDispatch();

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtaki yazıya eriş
    const text = e.target[0].value.trim();

    // yazı yoksa uyarı gönder
    if (!text) return toast.warn("Lütfen içeriği belirleyin!");

    // reducer'a yeni bir todo'nun eklenmesi geretiğini haber ver
    dispatch(addTodo(text));

    // formu sıfırla
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input
        className="form-control"
        type="text"
        placeholder="örn: typescript projesi yap"
      />
      <button className="btn btn-warning">Gönder</button>
    </form>
  );
};

export default Form;
