import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          DevTicket
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              Dashboard
            </Nav.Link>

            <Nav.Link as={NavLink} to="/new">
              Create Ticket
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Button
              variant="outline-secondary"
              onClick={() => {
                const currentTheme =
                  document.documentElement.getAttribute("data-bs-theme");

                if (currentTheme === "dark") {
                  document.documentElement.setAttribute(
                    "data-bs-theme",
                    "light",
                  );
                } else {
                  document.documentElement.setAttribute(
                    "data-bs-theme",
                    "dark",
                  );
                }
              }}
            >
              Toggle Theme
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
