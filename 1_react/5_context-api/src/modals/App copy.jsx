import FormModal from "./FormModal";
import ThemeModal from "./ThemeModal";
import WarnModal from "./WarnModal";
import Modal from "./Modal";

const App = () => {
  return (
    <div className="container py-5 d-flex flex-column gap-5 align-items-center">
      <WarnModal />

      <FormModal />

      <ThemeModal />

      <hr className="text-danger" />

      <Modal>
        <h2>UYARI SİSTEME ERİŞİMİNİZ YOK</h2>
      </Modal>

      <Modal>
        <label htmlFor="">İsniz</label>
        <input className="form-control" type="text" />
      </Modal>

      <Modal>
        <input className="form-check-input me-3" type="checkbox" />
        <label htmlFor="">Koyu Mod</label>
      </Modal>
    </div>
  );
};

export default App;
