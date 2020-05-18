import React from "react";
import { Container, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Blot1 from "./img/Blot1.jpg";
import Blot2 from "./img/Blot2.jpg";
import Blot3 from "./img/Blot3.jpg";
import Blot4 from "./img/Blot4.jpg";
import Blot5 from "./img/Blot5.jpg";
import Blot6 from "./img/Blot6.jpg";
import Blot7 from "./img/Blot7.jpg";
import Blot8 from "./img/Blot8.jpg";
import Blot9 from "./img/Blot9.jpg";
import Scoreboard from "./Scoreboard.js";
//import Blot19 from "./img/Blot19.jpg";
import "./ImgCards.css";
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

class ImgCards extends React.Component {
  state = {
    clickedArray: [],
    value: 0,
    shuffled: shuffle(picArray),
  };

  // addingToClickedArray = (clickedID) => {
  // this.setState({
  //   clickedArrray: this.state.clickedArray.concat([clickedID]),
  //   shuffled: shuffle(this.state.shuffled),
  // })};

  handleClick = (event) => {
    event.preventDefault();
    let clickedID = event.target.id;
    console.log("clicked", clickedID);
    // this.addingToClickedArray(clickedID);
    console.log("new state", this.state)
     if (!this.state.clickedArray.includes(event.target.id)) {
       console.log("unique click", this.state.clickedArray);
       this.setState({
        clickedArray: this.state.clickedArray.concat([clickedID]),
       value: this.state.value + 1,
       shuffled: shuffle(picArray),
   
    })} else { 
      console.log("uh-oh! You already clicked that one!");
      this.setState({
        clickedArray: [],
        value: 0,
        shuffled: shuffle(picArray),
    })}
  };

  render() {
   
      return (
        <>
        <Scoreboard></Scoreboard>
        <br></br>
        <Container className="cards">
          {this.state.shuffled.map((picArray) => (
            <Card className="card">
              <Card.Body>
                <Image
                  index=""
                  src={picArray.image}
                  className="img"
                  id={picArray.id}
                  // onClick={this.handleClick}
                  onClick={(event) => this.handleClick(event)}
                  value= {this.state.value}
                  // count={currentScore}
                />
              </Card.Body>
            </Card>
          ))}
        </Container>
        </>
      );
    };
  
}
export default ImgCards;
