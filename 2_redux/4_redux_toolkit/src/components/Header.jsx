import { Container, Navbar, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/job_logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top me-3"
          />
          Redux Toolkit
        </Navbar.Brand>

        <Stack direction="horizontal" gap={3} className="text-black">
          <NavLink to="/">CRUD</NavLink>
          <NavLink to="/counter">Sayaç</NavLink>
        </Stack>
      </Container>
    </Navbar>
  );
};

export default Header;
