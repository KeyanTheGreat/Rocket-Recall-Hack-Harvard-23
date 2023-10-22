import { useState, useRef } from "react";
import Card from "./Card";

const Cards = ({ sendDataToParent }) => { //going layers deep is hell, look into React Contexts, wormhole from paren di
  const [input, setInput] = useState(1);
  const handleInputChange = () => {
    setInput((input) => input + 1);
    sendDataToParent(input);
  };

  const [cards, setCards] = useState(
    [
      { id: 0, name: "slay", status: "", img: "/images/01.jpg" },
      { id: 0, name: "slay", status: "", img: "/images/01.jpg" },
      { id: 1, name: "slay", status: "", img: "/images/02.jpg" },
      { id: 1, name: "slay", status: "", img: "/images/02.jpg" },
      { id: 2, name: "slay", status: "", img: "/images/03.png" },
      { id: 2, name: "slay", status: "", img: "/images/03.png" },
      { id: 3, name: "slay", status: "", img: "/images/04.jpg" },
      { id: 3, name: "slay", status: "", img: "/images/04.jpg" },
      { id: 4, name: "slay", status: "", img: "/images/05.jpg" },
      { id: 4, name: "slay", status: "", img: "/images/05.jpg" },
      { id: 5, name: "slay", status: "", img: "/images/06.jpg" },
      { id: 5, name: "slay", status: "", img: "/images/06.jpg" },
      { id: 6, name: "slay", status: "", img: "/images/07.jpg" },
      { id: 6, name: "slay", status: "", img: "/images/07.jpg" },
      { id: 7, name: "slay", status: "", img: "/images/08.jpg" },
      { id: 7, name: "slay", status: "", img: "/images/08.jpg" },
    ].sort(() => Math.random() - 0.5)
  );

  const [previousCardState, setPreviousCardState] = useState(-1);
  const previousIndex = useRef(-1);
  const counter = 0;

  const matchCheck = (currentCard) => {
    if (cards[currentCard].id === cards[previousCardState].id) {
      cards[previousCardState].status = "active matched";
      cards[currentCard].status = "active matched";
      setPreviousCardState(-1);
    } else {
      cards[currentCard].status = "active";
      setCards([...cards]);
      setTimeout(() => {
        setPreviousCardState(-1);
        cards[currentCard].status = "unmatch";
        cards[previousCardState].status = "unmatch";
        setCards([...cards]);
      }, 1000);
    }
  };

  const clickhandler = (index) => {
    handleInputChange();
    if (index !== previousIndex.current) {
      if (cards[index].status === "active matched") {
        alert("already matched");
      } else {
        if (previousCardState === -1) {
          previousIndex.current = index;
          cards[index].status = "active";
          setCards([...cards]);
          setPreviousCardState(index);
          //   counter++;
          // handleInputChange();
        } else {
          matchCheck(index);
          previousIndex.current = -1;
          //   counter++;
          // handleInputChange();
          console.log("pop");
        }
      }
    } else {
      alert("card currently selected");
    }
  };

  return (
    <div className="containeri">
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            card={card}
            index={index}
            clickhandler={clickhandler}
          />
        );
      })}
    </div>
  );
};

export default Cards;