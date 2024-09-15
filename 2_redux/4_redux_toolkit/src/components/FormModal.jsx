import { Button, Form, Modal } from "react-bootstrap";
import { inputs } from "../constants";
import { addTask, editTask } from "../redux/slices/crudSlice";
import { useDispatch } from "react-redux";

const FormModal = ({ task, isOpen, close }) => {
  const dispatch = useDispatch();

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // formdata class'ında örnek al
    const formData = new FormData(e.target);

    // inputlardaki verileri bir nesne haline getir
    const taskData = Object.fromEntries(formData.entries());

    if (!task) {
      // reducer'a yeni görev ekleme haberi ver
      dispatch(addTask(taskData));
    } else {
      // reducer'a güncelleneme haberi ver
      dispatch(editTask({ id: task.id, ...taskData }));
    }

    // formu kapat
    close();
  };

  return (
    <Modal show={isOpen} centered className="text-black" onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>
          {task ? "Görevi Düzenle" : "Yeni Görev Ekle"}
        </Modal.Title>
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
                defaultValue={task && task[prop.name]}
                required
              />
            </Form.Group>
          ))}

          <Modal.Footer>
            <Button onClick={close} variant="secondary">
              İptal
            </Button>
            <Button type="submit">{task ? "Güncelle" : "Oluştur"}</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
