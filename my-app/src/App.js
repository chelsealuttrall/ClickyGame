import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import ImgCards from '../src/components/ImgCards';
import Scoreboard from '../src/components/Scoreboard';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      topscore: 0
    }

  return (
    <div>
      <NavBar/>
      <Scoreboard score={this.state.score} topscore={this.state.topscore}></Scoreboard>
      <h3 className="objective">Objective: Click on each Rorschach Tile. Do not repeat. 
      Try to click on each tile without repeating one that you've already clicked. 
      If you re-click a tile, your game will start over. You want to achieve the top score.</h3>

      <Container>
        <ImgCards/>
      </Container>
    </div>
  )
}
}
export default App;



// incrementCount(this.state.props) {
//   this.setState(() => {
//     // Important: read `state` instead of `this.state` when updating.
//     return props.count + 1 ;
//   });
// }

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
