import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = props => {
  const { closeModal, imgUrl } = props;

  const onKeyUp = useCallback(
    event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyUp);

    return () => {
      document.removeEventListener('keydown', onKeyUp);
    };
  }, [onKeyUp]);

  const onClick = event => {
    if (event.currentTarget !== event.target) {
      return;
    }

    closeModal();
  };

  return (
    <div
      onClick={onClick}
      onKeyUp={onKeyUp}
      className={styles.Overlay}
      tabIndex="0"
    >
      <div className={styles.Modal}>
        <img src={imgUrl} alt="largeImage" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default Modal;
