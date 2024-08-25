// HOC
// Farklı component veya jsx elementlerini kapsar
// Kapsadığı bu elemenalar children prop'u aracılığı ile hoc'larda erişlilebilir olur

import { useState } from "react";

const Modal = ({ children }) => {
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
              {/* Modal bileşenin kapsadığı içeriği burada ekrana bastık */}
              <div className="modal-body pt-5">{children}</div>

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

export default Modal;
