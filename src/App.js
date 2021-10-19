import React, { useState, useEffect } from "react";
import Images from "./Components/Images";
import "normalize.css";
import "./scss/style.scss";
import CardsList from "./Components/cardImages.js";
import Navbar from "./Components/Navbar.js";
import Modals from "./Components/Modals.js";
import FirstGameContent from "./Components/FirstGameContent.js";

function shuffler(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function App() {
  const [initialCards, setInitialCards] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setInitialCards(shuffler(CardsList));
    setCards(shuffler(CardsList));
  }, []);

  const [counters, setCounters] = useState({
    round: 0,
    currentScore: 0,
    bestScore: 0,
  });

  const [settings, setSettings] = useState({
    firstRound: true,
    modalShowed: false,
    step: 1,
  });

  useEffect(() => {
    setCards(shuffler(CardsList));
    setCounters((prevState) => {
      return {
        ...prevState,
        currentScore: prevState.currentScore + 1,
      };
    });
  }, [counters.round]);

  const handleClick = (name, index) => {
    const { currentScore, round } = counters;
    console.table(initialCards);
    if (settings.firstRound) {
      setSettings((prevState) => {
        return { ...prevState, firstRound: false };
      });
    } else {
      if (round <= CardsList.length && name === initialCards[round]["name"]) {
        setCounters((prevState) => {
          return {
            ...prevState,
            round: round + 1,
          };
        });
        console.log("you won");
      } else {
        setCounters((prevState) => {
          return {
            ...prevState,
            bestScore: currentScore,
          };
        });
        // console.log("you loose");
      }
    }
    setCards(shuffler(CardsList));
  };

  const handleModal = (e) => {
    return;
  };

  return (
    <div className="content-div">
      {settings.firstRound ? (
        <Modals
          data={FirstGameContent}
          type="tutorial"
          step={settings.step}
          handleModal={handleModal}
        />
      ) : (
        <Modals type="game" />
      )}
      <Navbar scores={counters} />
      <main className="main-div">
        <Images cards={cards} handleClick={handleClick} />
      </main>
    </div>
  );
}

export default App;
