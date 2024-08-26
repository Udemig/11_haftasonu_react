import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../redux/actions";

const Modal = ({ todo, close }) => {
  const dispatch = useDispatch();

  // inputun referansını oluştur
  const inputRef = useRef(null);

  const handleSave = () => {
    // 1) inputtaki değere eriş
    const newText = inputRef.current.value;

    // 2) todo nesnesinin text değerini güncelle
    const updated = { ...todo, text: newText };

    // 3) reducer'a todo'nun güncellenmesi gerektiğini haber ver
    //- dispatch({ type: ActionTypes.UPDATE, payload: updated });
    dispatch(updateTodo(updated));

    // 4) modal'ı kapat
    close();
  };

  return (
    <div class="modal d-block text-dark bg-black bg-opacity-50">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Todo'yu Güncelle</h5>
            <button
              onClick={close}
              type="button"
              class="btn-close"
            ></button>
          </div>
          <div class="modal-body my-3">
            <label className="form-label">Yeni Başlık</label>
            <input
              ref={inputRef}
              className="form-control shadow"
              defaultValue={todo.text}
            />
          </div>
          <div class="modal-footer">
            <button
              onClick={close}
              type="button"
              class="btn btn-secondary"
            >
              Vazgeç
            </button>
            <button
              onClick={handleSave}
              type="button"
              class="btn btn-primary"
            >
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
