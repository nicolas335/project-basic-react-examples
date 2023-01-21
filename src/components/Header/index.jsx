import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="fw-bold" as={Link} to="/">
          REACT EXAMPLES
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Practicas en clase" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/showHideMessage">
                Show / Hide Message
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/stopwatchTimer">
                Stopwatch / Timer
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/progressBar">
                Progress Bar
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/taskManager">
                Task Manager
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Mis practicas" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/myPractice/showHideMessage">
              Show / Hide Message 2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/myPractice/counter">
                Counter
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/showHideMessageMiPractica">
              showHideMessageMiPractica
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/">
                Task Manager with validations
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/">
                ...
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
