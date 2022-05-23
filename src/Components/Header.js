import React from "react";
import Logo from "../images/hanging-rope.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <img src={Logo} />
        </div>
        <h1>
          <span>
            <b>Hangman</b>
          </span>
          - <p>Interactive Word Game</p> <br />
          <button className="btn">
            The prisoner was strung up over a 5–legged stand, then a blank word
            would be presented by the <br />
            executioner. With each incorrect guess, a leg would be knocked away.
            If the word was guessed <br />
            correctly, the prisoner would be set free, if not, once all 5 legs
            were chopped, he would hang.
          </button>
        </h1>
      </div>
    </>
  );
};

export default Header;
