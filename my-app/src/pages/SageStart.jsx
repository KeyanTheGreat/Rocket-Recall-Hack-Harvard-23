import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './SageStart.css';
import { Outlet } from 'react-router-dom';

const Button = () => {
  const [clicked, setClicked] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  setTimeout(() => {
    setFadeIn(true);

  }, 500);

  return (
    <div className="containerss">
    <button
      className={`myButtonss ${clicked ? 'clicked' : ''} ${fadeIn ? 'fadeIn' : ''}`}
      onClick={handleClick}
    >
    <Link to='CardManager'>
      Start Games!
    </Link>
    <Outlet />
    </button>
    </div>
  );
};

export default Button;