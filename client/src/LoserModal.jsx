import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.css';

function LoserModal({onQuit, onNextWord, word}) {
  return (
    <div className={styles.modal}>
      <h2 className={styles.loser}>Better Luck Next Time!</h2>
      <p>The word was: {word}</p>
      <button className={styles.btn} onClick={onQuit} >Quit Game</button>
      <button className={styles.btn} onClick={onNextWord} >Next Word</button>
    </div>
  )
}
// Quit Game => when clicked 'log out' the user
// Next Word => when clicked change to next word from word array
function Modal(props) {
  return ReactDOM.createPortal(LoserModal, document.querySelector("#loserModal"));
}

export default LoserModal;