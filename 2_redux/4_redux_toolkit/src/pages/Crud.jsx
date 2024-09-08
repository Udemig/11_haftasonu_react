import { Container, Button, Stack, Table } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import FormModal from "../components/FormModal";
import { useSelector } from "react-redux";

const Crud = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { tasks } = useSelector((store) => store.crudReducer);

  // todo taskleri listele
  console.log(tasks);

  return (
    <div className="vh-100">
      <Container>
        <Stack className="align-items-end my-5">
          <Button onClick={() => setIsOpen(true)}>Yeni Görev Ekle</Button>
        </Stack>

        <Table variant="dark" responsive striped hover bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Görev</th>
              <th>Yazan</th>
              <th>Atanan</th>
              <th>Tarih</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Navbar Revizyonu</td>
              <td>Mehmet</td>
              <td>Ahmet</td>
              <td>11.09.2024</td>
              <td>
                <Button size="sm">
                  <MdEdit />
                </Button>
                <Button className="ms-2" size="sm" variant="danger">
                  <FaTrashAlt />
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>

      <FormModal isOpen={isOpen} close={() => setIsOpen(false)} />
    </div>
  );
};

export default Crud;
