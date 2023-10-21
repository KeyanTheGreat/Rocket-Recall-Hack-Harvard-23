import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import './FirstTest.css';

const Game = () => {
    const [showButton, setShowButton] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  let randList = Array.from({ length: 30 }, () => Math.floor(Math.random() * 9) + 1);
  let buttonPresses = [];
  let index = 0
  const handleClick = () => {
    setClicked(true);
  };

  function changeColor(elementId, colorClass) {
    const element = document.getElementById(elementId);
    element.classList.remove('color-white', 'color-blue'); 
    element.classList.add(colorClass);
  }
  
  function repeat(){
    index += 1
    for (let i = 0; i < index; i++) {
        changeColor(randList[i],'color-blue')
        setTimeout(console.log('Before delay'), 1000);
        changeColor(randList[i],'color-white')
    }
  }
  const checkSequence = () => {
    if (buttonPresses.toString() === randList.slice(0, index-1).toString()) {
      buttonPresses = []; 
      setTimeout(console.log('Before delay'), 2000);
      repeat(index)
    } else {
        setShowButton(true);
        randList = [100,100]
    }
  };

  const handleButtonClick = (buttonId) => {
    buttonPresses.push(buttonId);
    
    if (buttonPresses.length === randList.slice(0, index-1).length) {
      checkSequence();
    }
  };
document.getElementById('1').addEventListener('click', () => handleButtonClick(1));
document.getElementById('2').addEventListener('click', () => handleButtonClick(2));
document.getElementById('3').addEventListener('click', () => handleButtonClick(3));
document.getElementById('1').addEventListener('click', () => handleButtonClick(4));
document.getElementById('2').addEventListener('click', () => handleButtonClick(5));
document.getElementById('3').addEventListener('click', () => handleButtonClick(6));
document.getElementById('1').addEventListener('click', () => handleButtonClick(7));
document.getElementById('2').addEventListener('click', () => handleButtonClick(8));
document.getElementById('3').addEventListener('click', () => handleButtonClick(9));

  repeat();


  return (
    <div className="container">
        <div className="grid-container">
  <button className="grid-item" id="1"></button> 
  <button className="grid-item" id="2"></button>
  <button className="grid-item" id="3"></button>
  <button className="grid-item" id="4"></button>
  <button className="grid-item" id="5"></button>
  <button className="grid-item" id="6"></button>
  <button className="grid-item" id="7"></button>
  <button className="grid-item" id="8"></button>
  <button className="grid-item" id="9"></button>
    </div>
    {showButton && <button
      className={`myButton ${clicked ? 'clicked' : ''} ${fadeIn ? 'fadeIn' : ''}`}
      onClick={handleClick}
    >
    <Link to="login">
     Incorrect, Next Task
    </Link>
    </button>}
    </div>
  );
};
<Link to="login">Log in</Link>
export default Game;