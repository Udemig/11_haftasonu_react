import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/slices/crudSlice";

const ConfirmModal = ({ id, isOpen, handleClose }) => {
  const dispatch = useDispatch();

  // onaylanınca çalışır
  const handleDelete = () => {
    // silmek istediğimizi reducer'a bildir
    dispatch(deleteTask(id));

    // modalı kapat
    handleClose();
  };

  return (
    <Modal show={isOpen} onHide={handleClose} centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="text-black">
        <h5>Bu görevi silmek istediğinizden emin misiniz?</h5>
        <p className="text-secondary">
          Onaylarsanız tekrardan geri dönülemez
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          İptal
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Sil
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
