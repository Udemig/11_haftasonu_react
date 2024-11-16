import { FormEvent, useRef, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ReactSelect from "react-select/creatable";
import { v4 } from "uuid";
import { Tag } from "../types";
import { CreateProps } from "../pages/Create";

const CustomForm = ({
  handleSubmit,
  createTag,
  availableTags,
  title = "",
  tags = [],
  markdown = "",
}: CreateProps) => {
  const navigate = useNavigate();
  const titleRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>(tags);

  // form gönderilince
  const handleForm = (e: FormEvent) => {
    e.preventDefault();

    // inputlardaki verilere eriş
    const title = titleRef.current?.value || "";
    const markdown = textRef.current?.value || "";

    // global notlar state'ine kaydet
    handleSubmit({ title, markdown, tags: selectedTags });

    // anasayfaya yönlendir
    navigate("/");
  };

  return (
    <Form onSubmit={handleForm}>
      {/* Başlık - Etiket Inputu */}
      <Row className="my-4">
        <Col>
          <Form.Group>
            <Form.Label>Başlık</Form.Label>
            <Form.Control defaultValue={title} ref={titleRef} />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group>
            <Form.Label>Etiketler</Form.Label>
            <ReactSelect
              options={availableTags}
              value={selectedTags}
              onChange={(allTags) => setSelectedTags(allTags as Tag[])}
              onCreateOption={(text: string) => {
                // etiket nesnesi oluştur
                const newTag = { label: text, value: v4() };

                // global state'e aktar
                createTag(newTag);

                // seçili etiketler state'ine ekle
                setSelectedTags([...selectedTags, newTag]);
              }}
              isMulti
              className="text-black"
            />
          </Form.Group>
        </Col>
      </Row>

      {/* İçerik Text Area */}
      <Form.Group>
        <Form.Label>İçerik (markdown destekler)</Form.Label>
        <Form.Control
          ref={textRef}
          as="textarea"
          style={{ minHeight: "300px", maxHeight: "450px" }}
          defaultValue={markdown}
        />
      </Form.Group>

      {/* Butonlar */}
      <Stack direction="horizontal" className="justify-content-end mt-5" gap={4}>
        <Link to={".."}>
          <Button type="button" variant="secondary">
            Geri
          </Button>
        </Link>

        <Button type="submit">Kaydet</Button>
      </Stack>
    </Form>
  );
};

export default CustomForm;
