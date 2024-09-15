import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import ConfirmModal from "./ConfirmModal";
import FormModal from "./FormModal";

const TaskTable = () => {
  const [isDelOpen, setIsDelOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const { tasks } = useSelector((store) => store.crudReducer);

  return (
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
        {tasks.map((task, i) => (
          <>
            <tr>
              <td>{i + 1}</td>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.assigned}</td>
              <td>{task.end_date}</td>
              <td>
                <Button onClick={() => setIsEditOpen(true)} size="sm">
                  <MdEdit />
                </Button>
                <Button
                  onClick={() => setIsDelOpen(true)}
                  className="ms-2"
                  size="sm"
                  variant="danger"
                >
                  <FaTrashAlt />
                </Button>
              </td>
            </tr>

            <FormModal
              task={task}
              isOpen={isEditOpen}
              close={() => setIsEditOpen(false)}
            />

            <ConfirmModal
              id={task.id}
              isOpen={isDelOpen}
              handleClose={() => setIsDelOpen(false)}
            />
          </>
        ))}
      </tbody>
    </Table>
  );
};

export default TaskTable;
