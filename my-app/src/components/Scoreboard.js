import React, {Component} from "react";
import { Container, Col } from "react-bootstrap";
//import BnWDot from "../assets/img/BnWDot.png";
import "./Scoreboard.css";
import "./ImgCards";

class Scoreboard extends Component {
  constructor(props){
    super(props);
  this.state = {
    score: props.value,
    topscore: 0,
  };}

  
  componentDidMount() {
      if (this.state.score > this.state.topscore) {
      let newTopScore = this.state.topscore + 1;
      this.setState({
      topscore: newTopScore,
    });
  }}
  render() {
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
  }
}
export default Scoreboard;

// const [clickedArray, setClickedArray] = useState([])

//   setTopScore(() => {
//     if (score > topscore) {
//       let newTopScore = topscore + 1;
//       topscore = newTopScore;
//     this.setTopScore({topscore=newTopScore})
//   }});
//   let topScoreBump = (score) => {
//     if (score > topscore) {
//       let newTopScore = topscore + 1;
//       topscore = newTopScore;
//     }
//     return topscore;
//   };
// };
// let score = props.state.value;

// if (score > topscore){
//   let currentTopscore = sessionStorage.getItem("topscore");
//   currentTopscore = topscore(currentTopscore)+1;
// }else {sessionStorage.topscore}
