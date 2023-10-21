import React, { useState } from 'react';
import './FirstTest.css';

const Game = () => {
  const [clicked, setClicked] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  function changeColor(elementId, colorClass) {
    const element = document.getElementById(elementId);
    element.classList.remove('color-white'); // Remove other color classes
    element.classList.add(colorClass);
  }
  
  function repeat(randList, index){
    if (index = 0){
        randList = Array.from({ length: 30 }, () => Math.floor(Math.random() * 9) + 1);
    }
    
  }


  setTimeout(() => {
    setFadeIn(true);
  }, 2000);

  return (
    <div className="container">
        <div className="grid-container">
  <button className="grid-item">Button 1</button>
  <button className="grid-item">Button 2</button>
  <button className="grid-item">Button 3</button>
  <button className="grid-item">Button 4</button>
  <button className="grid-item">Button 5</button>
  <button className="grid-item">Button 6</button>
  <button className="grid-item">Button 7</button>
  <button className="grid-item">Button 8</button>
  <button className="grid-item">Button 9</button>
    </div>
    <button
      className={`myButton ${clicked ? 'clicked' : ''} ${fadeIn ? 'fadeIn' : ''}`}
      onClick={handleClick}
    >
    <Link to="secondtest">
      Next Task
    </Link>
    </button>
    </div>
  );
};

export default Game;