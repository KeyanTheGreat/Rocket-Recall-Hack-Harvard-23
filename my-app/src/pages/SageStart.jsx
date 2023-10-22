import React, { Link } from 'react-router-dom';
import { useState } from 'react';
import './SageStart.css';
import { Outlet } from 'react-router-dom';

const Button = () => {
  const [clicked, setClicked] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [linkText, setLinkText] =useState('')

  const handleClick = () => {
    setClicked(true);
  };

  setTimeout(() => {
    setFadeIn(true);
  }, 2000);

  return (
    <div className="container">
    <button
      className={`myButton ${clicked ? 'clicked' : ''} ${fadeIn ? 'fadeIn' : ''}`}
      onClick={handleClick}
    >
    <Link to="CardManager">
      Start Assessment
    </Link>
    <Outlet />
    </button>
    </div>
  );
};

export default Button;