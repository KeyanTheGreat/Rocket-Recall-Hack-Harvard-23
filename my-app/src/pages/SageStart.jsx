import React, { useState } from 'react';
import './SageStart.css';

const Button = () => {
  const [clicked, setClicked] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [linkText, setLinkText] = useState('')
  const [gameList, setGameList] = useState(['CardManager', 'SequenceMemory']);
  const randomGame = Math.floor(Math.random() * 2);

  const handleClick = () => {
    setClicked(true);
  };

  setTimeout(() => {
    setFadeIn(true);
    setLinkText(gameList[randomGame]);
  }, 500);

  return (
    <div className="container">
    <button
      className={`myButtonss ${clicked ? 'clicked' : ''} ${fadeIn ? 'fadeIn' : ''}`}
      onClick={handleClick}
    >
    <Link to="CardManager">
      Start Assessment
    </Link>
    </button>
    </div>
  );
};

export default Button;