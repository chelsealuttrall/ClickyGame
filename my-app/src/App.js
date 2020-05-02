import React from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import ImgCards from '../src/components/ImgCards';
import Scoreboard from '../src/components/Scoreboard';




function App() {
  return (
    <div>
      <NavBar/>
      <Scoreboard></Scoreboard>
      <h3 className="objective">Objective: Click on each Rorschach Tile. Do not repeat. 
      Try to click on each tile without repeating one that you've already clicked. 
      If you re-click a tile, your game will start over. You want to achieve the top score.</h3>

      <Container>
        <ImgCards/>
      </Container>
    </div>
  );
}

export default App;
