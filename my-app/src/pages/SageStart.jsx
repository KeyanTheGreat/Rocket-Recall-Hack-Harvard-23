import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './SageStart.css';
import { Outlet } from 'react-router-dom';

const Button = () => {
  const [clicked, setClicked] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [linkText, setLinkText] = useState('')
  const [gameList, setGameList] = useState(['CardManager', 'SequenceMemory', 'BackwardWords']);
  const randomGame = Math.floor(Math.random() * 3);
  const handleClick = () => {
    setClicked(true);
  };

  setTimeout(() => {
    setFadeIn(true);
    setLinkText(gameList[randomGame])
  }, 500);

  return (
    <div className="containerss">
    <button
      className={`myButtonss ${clicked ? 'clicked' : ''} ${fadeIn ? 'fadeIn' : ''}`}
      onClick={handleClick}
    >
    <Link to={linkText}>
      Start Games!
    </Link>
    <Outlet />
    </button>
    </div>
  );
};

export default Button;