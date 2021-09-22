import { useEffect } from 'react';
import React from 'react';
import css from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';

export default function Modal({ children, onClose }) {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const backDroppCloseModal = evt => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={css.overlay} onClick={backDroppCloseModal}>
      <div className={css.modal}>{children}</div>
    </div>
  );
}

Modal.propTypes = {
  onClickImage: PropTypes.func,
  imageForModal: PropTypes.string,
  titile: PropTypes.string,
};
