const Modal = ({ close }) => {
  return (
    <div className="modal d-block bg-black bg-opacity-75">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Todo'yu Düzenle</h5>
            <button onClick={close} className="btn-close"></button>
          </div>
          <div className="modal-body">
            {/* todo form alanı oluştur  */}
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button
              onClick={close}
              type="button"
              className="btn btn-secondary"
            >
              İptal
            </button>
            <button type="submit" className="btn btn-primary">
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
