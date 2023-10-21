import React, { useState, Link } from 'react';  
import './SageStart.css';

const Button = () => {
  const [clicked, setClicked] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

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
    <Link to="firsttest">
      Start Assessment
    </Link>
    </button>
    </div>
  );
};

export default Button;