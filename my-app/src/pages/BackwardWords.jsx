import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BackwardWords.css";

const sampleWords = [
  {
    word: "OLLEH",
    description: "HELLO",
  },
  {
    word: "TUNAEP",
    description: "PEANUT",
  },
  {
    word: "REPAPSWEN",
    description: "NEWSPAPER",
  },
  {
    word: "ANANAB",
    description: "BANANA",
  },
  {
    word: "OGNIB",
    description: "BINGO",
  },
  {
    word: "EMOSEWA",
    description: "AWESOME",
  },
  {
    word: "TEKCOR",
    description: "ROCKET",
  },
  {
    word: "LLACER",
    description: "RECALL",
  },
  {
    word: "GNIWARD",
    description: "DRAWING",
  },
  {
    word: "ESIRPUS",
    description: "SUPRISE",
  },
  {
    word: "HCTAW",
    description: "WATCH",
  },
  {
    word: "KNIRD",
    description: "DRINK",
  },
  {
    word: "GNIKCIK",
    description: "KICKING",
  },
  {
    word: "GNIDAOL",
    description: "LOADING",
  },
  {
    word: "ELBBUB",
    description: "BUBBLE",
  },
  {
    word: "REVEN",
    description: "NEVER",
  },
  {
    word: "YADSEUT",
    description: "TUESDAY",
  },
  {
    word: "YLIMAF",
    description: "FAMILY",
  },
  {
    word: "MIWS",
    description: "SWIM",
  },
  {
    word: "TELCARB",
    description: "BRACLET",
  },
  {
    word: "AZZIP",
    description: "PIZZA",
  },
  {
    word: "LICNEP",
    description: "PENCIL",
  },
];

const getRandomWord = () => {
  const randomPlace = Math.floor(Math.random() * sampleWords.length);
  return sampleWords[randomPlace];
};

const BackwardWords = () => {
  const [wordData, setWordData] = useState(getRandomWord());
  const [msg, setMsg] = useState("");
  const [displayWord, setDisplayWord] = useState(false);
  const [chosenLetters, setChosenLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [opacity1, setOpacity1] = useState(0);

  const letterSelectFunction = (letter) => {
    if (!chosenLetters.includes(letter)) {
      setChosenLetters([...chosenLetters, letter]);
      if (!wordData.word.includes(letter)) {
        setWrongGuesses(wrongGuesses + 1);
      }
    }
  };

  const displayLettersFunction = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (opacity == 1) {
      const time4 = setTimeout(() => {
        setOpacity(0);
      }, 4000);
    }
    const time = setTimeout(() => {
      setOpacity1(0.99);
    }, 20000);
    return Array.from(letters).map((letter, index) => (
      <button
        key={index}
        onClick={() => letterSelectFunction(letter)}
        disabled={chosenLetters.includes(letter)}
        className={`letter-button ${
          chosenLetters.includes(letter) ? "selected" : ""
        }`}
      >
        {letter}
      </button>
    ));
  };

  const checkWordGuessedFunction = () => {
    return wordData.word
      .split("")
      .every((letter) => chosenLetters.includes(letter));
  };

  const guessFunction = () => {
    if (checkWordGuessedFunction()) {
      setMsg("You have guessed the word correctly!");
    } else {
      setMsg("Try again!");
      setDisplayWord(true);
    }
  };

  return (
    <div className="container">
      <title1 className="yeet">WRITTEN IN REVERSE</title1>
      <div className="word-container">
        {Array.from(wordData.word).map((letter, index) => (
          <div
            key={index}
            className={`letter ${
              chosenLetters.includes(letter) ? "visible" : ""
            }`}
          >
            {chosenLetters.includes(letter) ? letter : ""}
          </div>
        ))}
      </div>
      <p className="word-description" style={{ opacity: opacity }}>
        {" "}
        WORD: {wordData.description}
      </p>
      <p className="uhhhh"> Number of wrong letters: {wrongGuesses}</p>
      <div className="button-section">
        <div className="guess-section"></div>
        <div className="letter-selection">{displayLettersFunction()}</div>
        {!msg && (
          <button
            onClick={guessFunction}
            disabled={!chosenLetters.length}
            className="guess-button"
            style={{ opacity: opacity1 }}
          >
            <Link to="SendEmail">Next</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default BackwardWords;
