import React from 'react';
import ReactDOM from 'react-dom';

function WinnerModal() {
  return <div>WINNER!</div>
}


function Modal(props) {
  return ReactDOM.createPortal(WinnerModal, document.querySelector("#winnerModal"));
}

export default WinnerModal;