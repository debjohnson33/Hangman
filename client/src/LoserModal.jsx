import React from 'react';
import ReactDOM from 'react-dom';

function LoserModal() {
  return <div>Better Luck Next Time!</div>
}

function Modal(props) {
  return ReactDOM.createPortal(LoserModal, document.querySelector("#loserModal"));
}

export default LoserModal;