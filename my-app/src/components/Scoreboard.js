import React from "react";
import { Container, Col } from "react-bootstrap";
//import BnWDot from "../assets/img/BnWDot.png";
import "./Scoreboard.css";
import "./ImgCards";


function Scoreboard (props) {
 
      let score= props.value;
      let topscore= 0;
 
let topScoreBump = (score) =>  {
  if (score > topscore) {
    topscore = score;
  } else {
    topscore = topscore;
  } return topscore;
}
     // let score = props.state.value;

  return (
    <Container className="flexy">
      <Col className="column">
        <h1 className="padding">Current Score:</h1>
        <h1 className="padding">{score}</h1>
      </Col>
      <hr></hr>
      <Col className="column">
        <h1 className="padding">Top Score:</h1>
        <h1 className="padding">{topScoreBump(score)}</h1>
      </Col>
    </Container>
  );
}
export default Scoreboard;


// const [clickedArray, setClickedArray] = useState([])