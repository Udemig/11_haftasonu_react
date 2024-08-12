import { toast } from "react-toastify";
import api from "../utils/api";

const Form = ({ setTodos }) => {
  // form gönderilince çalışrı
  const handleSubmit = (e) => {
    e.preventDefault();

    // formdan verileri al
    const text = e.target[0].value;
    const status = e.target[1].value;

    // input boşsa uyarı ver fonksiyonu durdur
    if (!text.trim()) {
      return toast.warn("Lütfen içeriği belirleyin");
    }

    // API'a gönderilecek nesneyi hazırla
    const newTodo = {
      title: text,
      status,
      date: new Date().toLocaleString("en-us"),
    };

    // oluşturduğumuz nesneyi API'a gönder
    api
      .post("/todos", newTodo)
      // oluşturulan nesneyi state'e kaydet (arayüze eklenir)
      .then((res) => {
        setTodos((todos) => [res.data, ...todos]);

        toast.success("Todo oluşturuldu");
      })
      // istek başarısız olursa uyarı gönder
      .catch((err) => toast.error("Bir sorun oluştu!!"));

    // formu sıfırla
    e.target.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center gap-3 my-5"
    >
      <input
        placeholder="ör:react projesi yap"
        className="form-control shadow"
      />

      <select className="form-select w-50 shadow">
        <option value="daily">Günlük</option>
        <option value="job">İş</option>
        <option value="important">Önemli</option>
      </select>

      <button className="btn btn-primary shadow">Gönder</button>
    </form>
  );
};

export default Form;
