import React from "react";
import { Container, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";

//import Blot19 from "./img/Blot19.jpg";
import "./ImgCards.css";


class ImgCards extends React.Component {
 

  // addingToClickedArray = (clickedID) => {
  // this.setState({
  //   clickedArrray: this.state.clickedArray.concat([clickedID]),
  //   shuffled: shuffle(this.state.shuffled),
  // })};

  render() {
   
      return (
        <>
        
        <br></br>
        <Container className="cards">
          {this.props.cards.map((picArray) => (
            <Card className="card">
              <Card.Body>
                <Image
                  index=""
                  src={picArray.image}
                  className="img"
                  id={picArray.id}
                  // onClick={this.handleClick}
                  // onClick={(event) => this.handleClick(event)}
                  onClick={() => {this.props.checkForDuplicate(picArray)}}

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
