import { useFormik } from "formik";
import schema from "./schema";
import InputField from "./InputField";
import { inputs } from "./constants";

const App = () => {
  // useFormik: formik'in bütün özelliklerini kullanamamozo sağlayan hook
  const formik = useFormik({
    // state'i tutulacak olan form verilerinin ilk değeri
    initialValues: {
      email: "",
      age: "",
    },

    // formiğin hata yönetimi yapması için kuralları söyle
    validationSchema: schema,

    // form gönderildiğinde (hata yoksa) çalışıcak olan fonksiyon
    onSubmit: (values) => {
      alert("Form gönderildi:: " + JSON.stringify(values));
    },
  });

  return (
    <div className="vh-100 vw-100">
      <div className="container py-5">
        <h2 className="text-center">FORMIK</h2>

        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-4 mt-5"
        >
          {inputs.map((props) => (
            <InputField formik={formik} {...props} />
          ))}

          <button type="submit" className="my-5">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
