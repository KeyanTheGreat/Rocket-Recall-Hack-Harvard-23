import { Outlet, Link } from "react-router-dom";
import React, { useState, useMemo, useContext } from 'react';
import './SequenceMemory.css';
import GlobalContext, {Users} from '../globals'
import {stats} from '../globals'
;
const Game = () => {
//index is the score. once they fail, (the next comment is where) the index will hold how many boxes they got to. 
  const [opacity, setOpacity] = useState(1);

  const [buttonText, setButtonText] = useState('Start');

  const randList = useMemo(() => Array.from({ length: 30 }, () => Math.floor(Math.random() * 9) + 1), []);

  const [buttonPresses, setButtonPresses] = useState([]);

  const [index, setIndex] = useState(1);

  const [link, setlink] = useState('');
  let User = useContext(GlobalContext);
 
  const [buttonColors, setButtonColors] = useState({
    b1: '',
    b2: '',
    b3: '',
    b4: '',
    b5: '',
    b6: '',
    b7: '',
    b8: '',
    b9: ''
});
const click = () => {
    repeat();
    setOpacity(0);
  };

  function repeat(){
    setIndex(prevIndex => prevIndex + 1);
    for (let i = 0; i < index; i++) {
        const timeouto = setTimeout(() => {
        setButtonColors((prevState) => ({
            ...prevState,
            ['b' + randList[i]]: 'blue'
          }));
        }, 1500 * (i ));
          const timeout = setTimeout(() => {
             setButtonColors((prevState) => ({
                ...prevState,
                ['b' + randList[i]]: 'white'
             }));
            console.log(i);
            console.log(randList);
          }, 1500 * (i + 1));
          
    }
  };
  const checkSequence = (buttonId) => {
    if ((buttonPresses +"," + buttonId).toString() === randList.slice(0, index-1).toString()) {
        setButtonPresses(prevButtonPresses => []);
        const timeout = setTimeout(() => {
          console.log('Correct sequence');
        }, 2000);
    repeat()
    } else {
        console.log('Incorrect sequence');
        setlink('SendEmail')
        setButtonText('Incorrect :( --- Next')
        setOpacity(1);
        // console.log("Stats" + Users)
        // Array.from(User.stats[MEMORY]).push(index);
        // console.log(User)
        stats.memory_acc.push(index)
        console.log(stats)
        //this is what happens if they fail. index here will hold total value
        
    }
  };

  const handleButtonClick = (buttonId) => {
    if (buttonText == 'Incorrect :( --- Next'){

    } else {
    setButtonPresses(prevButtonPresses => [...prevButtonPresses, buttonId]);
    if (buttonPresses.length === randList.slice(0, index-1).length -1) {
        console.log((buttonId));
        console.log(randList[0]);
      if(index == 2 && buttonId.toString() ==  randList[0].toString()){
        const timeout = setTimeout(() => {
            // Perform the desired operation after the delay
            console.log('Correct sequence');
          }, 2000);
          setButtonPresses(prevButtonPresses => []);
      repeat()
      } else{
        console.log(' CheckSequence');
      checkSequence(buttonId);
      }
    }
}
  };

  return (
    <div className="containersm" style={{display: 'flex', flexDirection: 'column'}}>
        <div className="grid-container">
  <button className="grid-item" id="1" onClick={() => {handleButtonClick(1)}}  style={{ backgroundColor: buttonColors.b1 }}></button> 
  <button className="grid-item" id="2" onClick={() => {handleButtonClick(2)}}  style={{ backgroundColor: buttonColors.b2 }}></button>
  <button className="grid-item" id="3" onClick={() => {handleButtonClick(3)}}  style={{ backgroundColor: buttonColors.b3 }}></button>
  <button className="grid-item" id="4" onClick={() => {handleButtonClick(4)}}  style={{ backgroundColor: buttonColors.b4 }}></button>
  <button className="grid-item" id="5" onClick={() => {handleButtonClick(5)}} style={{ backgroundColor: buttonColors.b5 }}></button>
  <button className="grid-item" id="6" onClick={() => {handleButtonClick(6)}}  style={{ backgroundColor: buttonColors.b6 }}></button>
  <button className="grid-item" id="7" onClick={() => {handleButtonClick(7)}}  style={{ backgroundColor: buttonColors.b7}}></button>
  <button className="grid-item" id="8" onClick={() => {handleButtonClick(8)}} style={{ backgroundColor: buttonColors.b8 }}></button>
  <button className="grid-item" id="9" onClick={() => {handleButtonClick(9)}} style={{ backgroundColor: buttonColors.b9 }}></button>
    </div>
    <button className={"myButton"} onClick={() => {click()}} style={{ opacity: opacity }}> <Link to= {link}>
    {buttonText} 
    </Link></button>
    <h className='hsm'>Memorize the squares that are colored blue, and after they stop flashing, click on them in the order they lit up!</h >
    </div>
  );
};
export default Game;
