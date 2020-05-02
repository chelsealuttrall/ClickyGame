import React from "react";
import { Navbar} from "react-bootstrap";
//import BnWDot from "../assets/img/BnWDot.png";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand>
          
          <h1 className="text"
            size="60"
          >Rorschach's Clicky Game
          </h1>
          
          
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default NavBar;
