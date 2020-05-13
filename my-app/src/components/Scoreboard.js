import React from "react";
import { Container, Col } from "react-bootstrap";
//import BnWDot from "../assets/img/BnWDot.png";
import "./Scoreboard.css";
import "./ImgCards";

function Scoreboard(props) {
   

  return (
    <Container className="flexy">
      <Col className="column">
        <h1 className="padding">Current Score:</h1>
        <h1 className="padding">{props.score}</h1>
      </Col>
      <hr></hr>
      <Col className="column">
        <h1 className="padding">Top Score:</h1>
        <h1 className="padding">{props.topscore}</h1>
      </Col>
    </Container>
  );
}

export default Scoreboard;