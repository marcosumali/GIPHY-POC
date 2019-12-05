import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class NavbarComponent extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">
            <div className="Navbar-header">Galler<span style={{ fontWeight: 'bold' }}>easy</span></div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Search</Nav.Link>
              <Nav.Link href="/favourites">Favourites</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
