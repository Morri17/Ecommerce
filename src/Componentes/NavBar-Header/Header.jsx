import "./Header.css";
import CartWidget from "../CarWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="header-container" bg="Light" expand="lg">
      <Container >
        <Navbar.Brand as={Link} to="/">
          SHOP | THE NORTH FACE 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/productos">
              Productos
            </Nav.Link>
            <Nav.Link as={Link} to="/productos/camperas">
              Camperas
            </Nav.Link>
            <Nav.Link as={Link} to="/productos/remeras">
              Remeras
            </Nav.Link>
            <Nav.Link as={Link} to="/productos/buzos">
              Buzos
            </Nav.Link>
            <Nav.Link as={Link} to="/productos/pantalones">
              Pantalones
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default Header;
