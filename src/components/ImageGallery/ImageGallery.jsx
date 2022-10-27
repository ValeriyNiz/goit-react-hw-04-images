import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = props => {
  return (
    <ul className={styles.ImageGallery}>
      {props.images.map(image => {
        return (
          <ImageGalleryItem
            onClickItem={() => props.onClickItem(image.id)}
            key={image.id}
            src={image.webformatURL}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  onClickItem: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;
