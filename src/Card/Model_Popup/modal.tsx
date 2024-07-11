import React, { useState } from 'react';
import './style.scss';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="open-modal-btn" onClick={toggleModal}> Open Modal</button>
      {isOpen && (
        <div className="modal" onClick={toggleModal}>
          <div className="modal__inner" onClick={(e) => e.stopPropagation()}>
            <div className="modal__header">
              <p>Welcome to Nodemy</p>
              <i className="fas fa-times" onClick={toggleModal}></i>
            </div>
            <div className="modal__body">
              <h2>Modal</h2>
              <p>Đây là phần body của modal</p>
            </div>
            <div className="modal__footer">
              <button onClick={toggleModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
