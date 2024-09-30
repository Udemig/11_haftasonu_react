import Modal from "./index";

const EditModal = ({ isOpen, close }) => {
  return (
    <Modal isOpen={isOpen} close={close}>
      <h1>DÜZENELME İŞLERİ</h1>
    </Modal>
  );
};

export default EditModal;
