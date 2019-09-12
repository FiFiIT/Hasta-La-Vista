import React from "react";
import vodka from "../../img/vodka.png";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" exapnd="lg">
      <Navbar.Brand href="/">
        <img
          alt="Vódka"
          src={vodka}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        Wódzitsu
      </Navbar.Brand>
      <Navbar.Collapse id="wodzitsu-navbar">
        <Nav className="mr-auto">
          <NavDropdown title="Rezerwacja Kortów" id="rezerwacja-kortow">
            <NavDropdown.Item href="/squash">Squash</NavDropdown.Item>
            <NavDropdown.Item href="/badminton">Badminton</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
