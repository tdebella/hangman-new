import React from "react";

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className="word">
      {selectedWord.split("").map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
};

export default Word;


// in order to get the displayed word, we need selectedWord & correctLetters
// show hidden word
//split() b/n characters. it returns an array of characters
//we need the 'key' to mapping through the selected letter in the selected word
//we should display those letters across
