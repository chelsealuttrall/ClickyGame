import React, {Component} from "react";
import { Container, Col } from "react-bootstrap";
//import BnWDot from "../assets/img/BnWDot.png";
import "./Scoreboard.css";
import "./ImgCards";


class Scoreboard extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      score: props.value,
      topscore: 0,
    }
  }
     // let score = props.state.value;
render(){
  return (
    <Container className="flexy">
      <Col className="column">
        <h1 className="padding">Current Score:</h1>
        <h1 className="padding">{this.state.score}</h1>
      </Col>
      <hr></hr>
      <Col className="column">
        <h1 className="padding">Top Score:</h1>
        <h1 className="padding">{this.state.topscore}</h1>
      </Col>
    </Container>
  );
}}
export default Scoreboard;


// const [clickedArray, setClickedArray] = useState([])