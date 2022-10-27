import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = props => {
  return (
    <button onClick={props.onClick} className={styles.Button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
