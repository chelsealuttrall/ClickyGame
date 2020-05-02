import React from "react";
import { Container, Col } from "react-bootstrap";
//import BnWDot from "../assets/img/BnWDot.png";
import "./Scoreboard.css";
import "./ImgCards";


class Scoreboard extends React.Component {
  state = {
    currentScore: 0,
    topScore: 0,
  };

 
//   //top populate
//   topScorePopulate = (...props) => {
      
//     if (props.badClick) {
//       if (this.state.currentScore > this.state.topScore) {
//         this.state.topScore = this.state.currentScore;
//         //score wipe out/ "badClick"
//         this.state.currentScore = 0;
        
//       } else {
//    //     score wipe out/ "badClick"
//         this.state.currentScore = 0;
//       }
//     }
//   };
//   //score increment/ "goodClick"
//   scoreIncrement = (...props) => {
//     if (props.goodClick) {
//       let currentScore = this.state.currentScore;
//       currentScore = currentScore + 1;
//       this.state.currentScore = currentScore;
      
//       return currentScore
//     }
//   };

  render() {
    return (
      <Container className="flexy">
        <Col className="column">
          <h1 className="padding">Current Score:</h1>
          <h1 className="padding">{this.state.currentScore}</h1>
        </Col>
        <hr></hr>
        <Col className="column">
          <h1 className="padding">Top Score:</h1>
          <h1 className="padding">{this.state.topScore}</h1>
        </Col>
      </Container>
    );
  }
}

export default Scoreboard;
