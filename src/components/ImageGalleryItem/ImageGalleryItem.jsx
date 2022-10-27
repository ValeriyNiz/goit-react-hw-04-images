import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = props => {
  return (
    <li onClick={props.onClickItem} className={styles.ImageGalleryItem}>
      <img
        className={styles['ImageGalleryItem-image']}
        src={props.src}
        alt="Фото"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  onClickItem: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
