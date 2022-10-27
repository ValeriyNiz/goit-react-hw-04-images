import React from 'react';
import PropTypes from 'prop-types';
import { Circles } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = props => {
  return (
    <Circles
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperClass={styles.LoaderOverlay}
      visible={props.isShown}
    />
  );
};

Loader.propTypes = {
  isShown: PropTypes.bool.isRequired,
};

export default Loader;
