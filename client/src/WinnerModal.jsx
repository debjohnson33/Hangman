import React from 'react';
import ReactDOM from 'react-dom';

function WinnerModal() {
  return (
    <div className="modal">
      <h2>WINNER!</h2>
      <button>Quit Game</button>
      <button>Next Word</button>
    </div>
  )
}
// Quit Game => when clicked 'log out' the user
// Next Word => when clicked change to next word from word array

function Modal(props) {
  return ReactDOM.createPortal(WinnerModal, document.querySelector("#winnerModal"));
}

export default WinnerModal;