import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Hangman from "./Components/Hangman";
import WrongLetters from "./Components/WrongLetters";
import Word from "./Components/Word";
import Notification from "./Components/Notification";
import Popup from "./Components/Popup";
import { showNotification as show, checkWin } from "./helpers/Helpers";
import YoutubeEmbed from "./Components/YoutubeEmbed";
// import useSound from "use-sound";
import "./App.css";

const words = ["hangman", "fox", "wrestling", "subaru", "python"]; //words are predefined
let selectedWord = words[Math.floor(Math.random() * words.length)]; //selecting a random word

function App() {
  // useState
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  // useEffect
  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;

      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification); //create showNotification fun as a helper
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
          } else {
            show(setShowNotification); //create showNotification fun as a helper
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]); //useEffect ends here! }

  // Restart game and play again
  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="row mt-4">
          <div className="col-12 col-sm-8 hm">
            <Hangman wrongLetters={wrongLetters} />
          </div>
          <div>
            <WrongLetters wrongLetters={wrongLetters} />
          </div>
          <div>
            <Word selectedWord={selectedWord} correctLetters={correctLetters} />
          </div>
          <div>
            <Popup
              correctLetters={correctLetters}
              wrongLetters={wrongLetters}
              selectedWord={selectedWord}
              setPlayable={setPlayable}
              playAgain={playAgain}
            />
          </div>
        </div>
        <div className="col-12 col-sm-4 youtube">
          <YoutubeEmbed embedId="rokGy0huYEA" />
          <p className="text-center">Youtube Embed</p>
        </div>
      </div>
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;

// useEffect - event listener , useEffect is the side effect of my app. every time the app re-render it adds the event listener
//within useEffect i create a function called handleKeydown
// event listener - listening for the keycode b/n 65 to 90
//keydown letter press.
//keycodes are the letter keys

//useEffect ends here! }, //this fun is called to cleanup the above event listener b/c anytime we'd have only 1 event listener running!

/* notification shows when we enter the same letter twice */

// the ff are the state & let's keep track & see if the game is  playable, track of the correctLetters & the wrongLetters
// let playable = true;
// const correctLetters = [];
// const wrongLetters = [];

//in the return section we will pass the props for each components
// eg. < Word selectedWord = { selectedWord } correctLetters={correctLetters} /> where
//  Word is the component &
//  selectedWord = { selectedWord } correctLetters = { correctLetters } are the props

//create showNotification fun as a helper
//it helps to check if our selectedWord includes our letter, if it does not include our letter. then we gonna add it to our letter. ie if it includes it twice , show the notification that we've entered it. the same thing with the wrong letters
