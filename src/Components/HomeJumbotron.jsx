import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

export default function HomeJumbotron() {
  return (
    <Jumbotron fluid style={{margin: 0, backgroundColor: "rgba(198, 236, 255, 0.5)"}}>
      <Container>
        <h1 className="font">Fortnite Search</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </Container>
    </Jumbotron>
  );
}
