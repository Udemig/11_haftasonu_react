import { Button, Form, Modal } from "react-bootstrap";
import { inputs } from "../constants";
import { addTask } from "../redux/slices/crudSlice";
import { useDispatch } from "react-redux";

const FormModal = ({ isOpen, close }) => {
  const dispatch = useDispatch();

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // formdata class'ında örnek al
    const formData = new FormData(e.target);

    // inputlardaki verileri bir nesne haline getir
    const taskData = Object.fromEntries(formData.entries());

    // reducer'a yeni görev ekleme haberi ver
    dispatch(addTask(taskData));

    // formu kapat
    close();
  };

  return (
    <Modal show={isOpen} centered className="text-black" onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Yeni Görev Ekle</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
          {inputs.map((prop) => (
            <Form.Group>
              <Form.Label>{prop.label}</Form.Label>
              <Form.Control
                name={prop.name}
                placeholder={prop.holder}
                type={prop.type}
                required
              />
            </Form.Group>
          ))}

          <Modal.Footer>
            <Button onClick={close} variant="secondary">
              İptal
            </Button>
            <Button type="submit">Oluştur</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
