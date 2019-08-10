import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import octocat from "../Static/Icons/Octocat.png";

export default function Header(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
      <Navbar.Brand href="/">Fortnite API</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">About Me</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="https://github.com/rayzon1/fortnite-search-api" target="_blank">
            <img
              src={octocat}
              style={{ width: "4rem", height: "3rem" }}
              alt="github-icon"
            />
          </Nav.Link>
          {/* <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
