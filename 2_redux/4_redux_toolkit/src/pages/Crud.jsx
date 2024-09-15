import { Container, Button, Stack, Table } from "react-bootstrap";
import { useState } from "react";
import FormModal from "../components/FormModal";
import TaskTable from "../components/TaskTable";

const Crud = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="vh-100">
      <Container>
        <Stack className="align-items-end my-5">
          <Button onClick={() => setIsOpen(true)}>Yeni Görev Ekle</Button>
        </Stack>

        <TaskTable />
      </Container>

      <FormModal isOpen={isOpen} close={() => setIsOpen(false)} />
    </div>
  );
};

export default Crud;
