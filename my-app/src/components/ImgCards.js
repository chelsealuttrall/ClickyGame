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
// import Blot19 from "./img/Blot19.jpg";
import "./ImgCards.css";
import pic from "./pic.json";

class ImgCards extends React.Component {
  handleClick(event) {
    event.preventDefault();
    console.log("clicked", event.target.id, event.target.clicked);

  }
  render() {
    return (
      <Container className="cards">
        <Col xs={6} md={4}>
          <Card className="cards">
            <Card.Body>
              <Image
                src={pic.image || Blot1}
                className="img"
                id="1" //{pic.id}
                clickHandled= {pic.clicked}
                onClick={this.handleClick}
              />
            </Card.Body>
          </Card>
          <Card className="cards">
            <Card.Body>
              <Image
                src={pic.image || Blot2}
                className="img"
                id="2" //{pic.id}
                clicked={pic.clicked}
                onClick={this.handleClick}
              />
            </Card.Body>
          </Card>
          <Card className="cards">
            <Card.Body>
              <Image
                src={pic.image || Blot3}
                className="img"
                id="3" //{pic.id}
                clicked={pic.clicked}
                onClick={this.handleClick}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4}>
          <Card className="cards">
            <Card.Body>
              <Image
                src={pic.image || Blot4}
                className="img"
                id="4" //{pic.id}
                clicked={pic.clicked}
                onClick={this.handleClick}
              />
            </Card.Body>
          </Card>
          <Card className="cards">
            <Card.Body>
              <Image
                src={pic.image || Blot5}
                className="img"
                id="5" //{pic.id}
                clicked={pic.clicked}
                onClick={this.handleClick}
              />
            </Card.Body>
          </Card>
          <Card className="cards">
            <Card.Body>
              <Image
                src={pic.image || Blot6}
                className="img"
                id="6" //{pic.id}
                clicked={pic.clicked}
                onClick={this.handleClick}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4}>
          <Card className="cards">
            <Card.Body>
              <Image
                src={pic.image || Blot7}
                className="img"
                id="7" //{pic.id}
                clicked={pic.clicked}
                onClick={this.handleClick}
              />
            </Card.Body>
          </Card>
          <Card className="cards">
            <Card.Body>
              <Image
                src={pic.image || Blot8}
                className="img"
                id="8" //{pic.id}
                clicked={pic.clicked}
                onClick={this.handleClick}
              />
            </Card.Body>
          </Card>
          <Card className="cards">
            <Card.Body>
              <Image
                src={pic.image || Blot9}
                className="img"
                id="9" //{pic.id}
                clicked={pic.clicked}
                onClick={this.handleClick}
              />
            </Card.Body>
          </Card>
        </Col>
      </Container>
    );
  }
}
export default ImgCards;
