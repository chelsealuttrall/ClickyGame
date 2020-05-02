import React from "react";
import { Container, Card, Col } from "react-bootstrap";
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
//import Blot19 from "./img/Blot19.jpg";
import "./ImgCards.css";
//import Randomizer from "./Randomizer";

let picArray = [
  {
    id: 1,
    image: { Blot1 },
    clicked: false,
  },
  {
    id: 2,
    image: { Blot2 },
    clicked: false,
  },
  {
    id: 3,
    image: { Blot3 },
    clicked: false,
  },
  {
    id: 4,
    image: { Blot4 },
    clicked: false,
  },
  {
    id: 5,
    image: { Blot5 },
    clicked: false,
  },
  {
    id: 6,
    image: { Blot6 },
    clicked: false,
  },
  {
    id: 7,
    image: { Blot7 },
    clicked: false,
  },
  {
    id: 8,
    image: { Blot8 },
    clicked: false,
  },
  {
    id: 9,
    image: { Blot9 },
    clicked: false,
  },
];



class ImgCards extends React.Component {
  handleClick(event) {
    event.preventDefault();
    console.log("clicked", event.target.id, event.target.clicked);
  }

  componentDidMount() {
    let mappingCards =  picArray.map((picArray) => 
    <Image
    index="1"
    src={picArray.image}
    className="img"
    id={picArray.id}
    clickHandled={picArray.clicked}
    onClick={handleClick()}
  />)
  };

  render() {
    return (
      <Container className="cards">
        <Col xs={6} md={4}>
          <Card className="cards">
            <Card.Body>
              {/* >>>>card goes here<<< */}
            </Card.Body>
          </Card>
        </Col>
      </Container>
    );
  }
}
export default ImgCards;
