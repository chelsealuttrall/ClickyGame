import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import ImgCards from "./components/ImgCards";
import Blot1 from "./components/img/Blot1.jpg";
import Blot2 from "./components/img/Blot2.jpg";
import Blot3 from "./components/img/Blot3.jpg";
import Blot4 from "./components/img/Blot4.jpg";
import Blot5 from "./components/img/Blot5.jpg";
import Blot6 from "./components/img/Blot6.jpg";
import Blot7 from "./components/img/Blot7.jpg";
import Blot8 from "./components/img/Blot8.jpg";
import Blot9 from "./components/img/Blot9.jpg";
import Scoreboard from "./components/Scoreboard.js";
var shuffle = require("shuffle-array");
//import Randomizer from "./Randomizer";

let picArray = [
  {
    id: 1,
    image: Blot1,
    clicked: false,
  },
  {
    id: 2,
    image: Blot2,
    clicked: false,
  },
  {
    id: 3,
    image: Blot3,
    clicked: false,
  },
  {
    id: 4,
    image: Blot4,
    clicked: false,
  },
  {
    id: 5,
    image: Blot5,
    clicked: false,
  },
  {
    id: 6,
    image: Blot6,
    clicked: false,
  },
  {
    id: 7,
    image: Blot7,
    clicked: false,
  },
  {
    id: 8,
    image: Blot8,
    clicked: false,
  },
  {
    id: 9,
    image: Blot9,
    clicked: false,
  },
];

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    cards: shuffle(picArray),
    selectedCards: []
  };

  // on componentDidMount
  // call game setup

  // gameSetup
  // create the array of cards with random images and points

  checkForDuplicate = (image) => {
    console.log(image.id);
    let selectedCards = this.state.selectedCards;
    if (selectedCards.includes(image.id)) {
      console.log("you're terrible!");
      this.setState({score:0});
    } else { 
      selectedCards.push(image.id);
      this.setState({
        selectedCards: selectedCards, 
        cards: shuffle(this.state.cards), 
        score: this.state.score+1
      }, () => {
        this.setState({
          topScore: (this.state.topScore < this.state.score) ? this.state.score : this.state.topScore
        })
      });
      console.log("bueno clicko")};



  };
  // if card is in selectedCards, you lose
  // Add to selectedCards
  //  if selectedCards.length == card.length , you win

  render() {
    return (
      <div>
        <NavBar />
        {/* <Scoreboard></Scoreboard> */}
        <Scoreboard score={this.state.score} topScore={this.state.topScore}></Scoreboard>
        <h3 className="objective">
          Objective: Click on each Rorschach Tile. Do not repeat. Try to click
          on each tile without repeating one that you've already clicked. If you
          re-click a tile, your game will start over. You want to achieve the
          top score.
        </h3>

        <Container>
          <ImgCards cards = {this.state.cards} checkForDuplicate = {this.checkForDuplicate} />
        </Container>
      </div>
    );
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
