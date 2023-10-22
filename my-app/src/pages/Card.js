import { useState } from "react";
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Card({ card, index, clickhandler }) {
  return (
    <div className={`card ${card.status}`} onClick={() => clickhandler(index)}>
      <img className='img'src={card.img} alt={card.name} />
      
    </div>
  );
}