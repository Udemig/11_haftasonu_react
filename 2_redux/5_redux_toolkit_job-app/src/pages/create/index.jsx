import { statusOpt, typeOpt } from "../../constants";
import Input from "./Input";
import Select from "./Select";
import "./create.scss";
import api from "../../api/index";
import { useDispatch } from "react-redux";
import { createJob } from "../../redux/slices/jobSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // formdata oluştur
    const formData = new FormData(e.target);
    const jobData = Object.fromEntries(formData.entries());

    // tarih ekle
    jobData.date = Date.now();

    // api'a ekleme isteği at
    api
      .post("/jobs", jobData)
      .then((res) => {
        dispatch(createJob(res.data));
        navigate("/");
        toast.success("İş başarıyla eklendi");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("İş eklenirken bir sorun oluştu");
      });
  };

  return (
    <div className="add-page">
      <section className="container">
        <h2>Yeni İş Ekle</h2>

        <form onSubmit={handleSubmit}>
          <Input label="Pozison" name="position" />
          <Input label="Şirket" name="company" />
          <Input label="Lokasyon" name="location" />
          <Select label="Durum" name="status" options={statusOpt} />
          <Select label="Tür" name="type" options={typeOpt} />

          <div className="btn-wrapper">
            <button className="btn-shine">
              <span>Gönder</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Create;
