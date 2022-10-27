import Button from './Button/Button';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import { getImages } from 'http/getImages';

export const App = () => {
  const [isLoading, setIsLoadindg] = useState(false);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [currentSearchString, setCurrentSearchString] = useState('');
  const [largeImageUrl, setLargeImageUrl] = useState(null);

  useEffect(() => {
    if (page !== 1) {
      setIsLoadindg(true);
      getImages(currentSearchString, page).then(data => {
        setImages(images.concat(data.hits));
        setIsLoadindg(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleSearch = searchString => {
    getImages(searchString, 1).then(data => {
      setImages(data.hits);
      setCurrentSearchString(searchString);
      setIsLoadindg(false);
      setPage(1);
    });
  };

  const loadNextPage = () => {
    setPage(page + 1);
  };

  const onClickItem = id => {
    const currentImage = images.find(image => {
      return id === image.id;
    });

    setLargeImageUrl(currentImage.largeImageURL);
  };

  const closeModal = () => {
    setLargeImageUrl(null);
  };

  return (
    <div className={styles.App}>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery onClickItem={onClickItem} images={images} />
      {!!images.length ? <Button onClick={loadNextPage} /> : null}
      <Loader isShown={isLoading} />
      {largeImageUrl ? (
        <Modal imgUrl={largeImageUrl} closeModal={closeModal} />
      ) : null}
    </div>
  );
};
