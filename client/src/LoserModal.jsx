import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.css';

function LoserModal() {
  return (
    <div className={styles.modal}>
      <h2>Better Luck Next Time!</h2>
      <button>Quit Game</button>
      <button>Next Word</button>
    </div>
  )
}
// Quit Game => when clicked 'log out' the user
// Next Word => when clicked change to next word from word array
function Modal(props) {
  return ReactDOM.createPortal(LoserModal, document.querySelector("#loserModal"));
}

export default LoserModal;