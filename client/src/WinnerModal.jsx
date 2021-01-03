import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.css';

function WinnerModal({onQuit, onNextWord}) {
  return (
    <div className={styles.modal}>
      <h2 className={styles.winner}>WINNER!</h2>
      <button className={styles.btn} onClick={onQuit} >Quit Game</button>
      <button className={styles.btn} onClick={onNextWord} >Next Word</button>
    </div>
  )
}
// Quit Game => when clicked 'log out' the user
// Next Word => when clicked change to next word from word array

function Modal(props) {
  return ReactDOM.createPortal(WinnerModal, document.querySelector("#winnerModal"));
}

export default WinnerModal;