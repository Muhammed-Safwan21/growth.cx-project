import { Button, Nav, Navbar } from "react-bootstrap";
import logo from "./logo.jpg";
import "./Header.scss";

function Header() {
  return (
    <Navbar expand="lg" className="header">
      <Navbar.Brand href="#home">
        <img src={logo} alt="growthcx logo"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="ms-auto fw-bold align-items-center">
          <Nav.Link href="#">Why us?</Nav.Link>
          <Nav.Link href="#">
            <s>Your pains</s> <br />
            Our fixes
          </Nav.Link>
          <Nav.Link href="#">Growth</Nav.Link>
          <Nav.Link href="#">Eye-openers</Nav.Link>
          <Nav.Link href="#">Customers</Nav.Link>
          <Nav.Link href="#" className="nav-link-button">
            <Button className="nav-button">Hope on a call</Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
