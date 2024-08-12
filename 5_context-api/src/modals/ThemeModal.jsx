import { useState } from "react";

const ThemeModal = () => {
  const [isOpen, setIsOpen] = useState();

  const close = () => setIsOpen(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        Modalı {isOpen ? "gizle" : "göster"}
      </button>

      {isOpen && (
        <div className="modal d-block bg-black bg-opacity-50">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content text-black">
              <div className="modal-body pt-5">
                <input className="form-check-input me-3" type="checkbox" />
                <label>Koyu Mod</label>

                <br />
                <br />

                <input className="form-check-input me-3" type="checkbox" />
                <label>Açık Mod</label>
              </div>
              <div className="modal-footer">
                <button
                  onClick={close}
                  type="button"
                  className="btn btn-secondary"
                >
                  Kapat
                </button>
                <button
                  onClick={close}
                  type="button"
                  className="btn btn-primary"
                >
                  Tamam
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeModal;
