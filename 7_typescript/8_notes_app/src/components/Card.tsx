import { Note } from "../types";
import { Link } from "react-router-dom";
import { Badge, Card, Stack } from "react-bootstrap";

type Props = {
  note: Note;
};

const CustomCard = ({ note }: Props) => {
  return (
    <Link to={`/note/${note.id}`}>
      <Card>
        <Card.Body>
          <Stack className="align-items-center h-100 justify-content-between">
            <span className="fw-bold text-nowrap">{note.title}</span>

            <Stack direction="horizontal" className="justify-content-center gap-2">
              {note.tags.map((tag) => (
                <Badge key={tag.value}>{tag.label}</Badge>
              ))}
            </Stack>
          </Stack>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default CustomCard;
