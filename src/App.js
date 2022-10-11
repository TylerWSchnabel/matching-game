import React, { useState } from "react";
import  NCAALogo  from './files/NCAA-Logo.png'
import Scoreboard from "./components/Scoreboard";
import { schools } from "./components/Schools";
import './App.css';
import CardArea from "./components/CardArea";


const App =()=> {

  const [cards, setCards] = useState([]);
  //const [clicked, setClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
 
  const shuffleCards = () =>{
    const shuffledDeck = schools
    for (let i = shuffledDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }
    setCards(shuffledDeck);
  }

  /* const rightAnswer = () => {
      setScore(score + 1);
  }

  const reset = () => {
      setScore(0);
      setClicked([]);
  }

  const checkBest = () => {
      if (score > best){
          setBest(score);
      }
  } */

  return (
    <div className="App">
      
      <header className="App-header">
        <img src={ NCAALogo } alt='NCAA Logo' className="headLogo"/>
        <h1 className="title">College Football Memory Game</h1>
        <Scoreboard score ={score} best={ best }/>
      </header>
      <div className="gameArea">
        <CardArea shuffleCards={ shuffleCards } cards ={ cards }/>
        
      </div>
    </div>
    
  );
}

export default App;
