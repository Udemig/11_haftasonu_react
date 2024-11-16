import { Container } from "react-bootstrap";
import Form from "../components/Form";
import { NoteData, Tag } from "../types";

export type CreateProps = {
  handleSubmit: (data: NoteData) => void;
  createTag: (tag: Tag) => void;
  availableTags: Tag[];
} & Partial<NoteData>;

const Create = ({ handleSubmit, createTag, availableTags }: CreateProps) => {
  return (
    <Container className="py-5">
      <h2>Yeni Not Oluştur</h2>

      <Form
        handleSubmit={handleSubmit}
        createTag={createTag}
        availableTags={availableTags}
      />
    </Container>
  );
};

export default Create;
