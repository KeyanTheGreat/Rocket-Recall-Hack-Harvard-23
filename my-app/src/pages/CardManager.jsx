import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Cards from "./Cards";
import './index.css'

export default function CardManager() {
    const [data, setData] = useState(0);
    const handleData = (childData) => {
        setData(childData);
        console.log('data handling');
    };
    return (
    <div className="cards-container ">
        <body className='body'>
        <h1 className='h1'>Solar Recall</h1>
        <Cards sendDataToParent={handleData} />
        <h2 className='h2'>Clicks: {data}</h2>
        <h3 className='h3'>Memorize the cards, and select matching pairs!</h3>
        </body>
        <button
      className={"myButtoni"}
    >
    <Link to='SendEmail'>
      Next
    </Link>
    <Outlet />
    </button>
    </div>
    );
}