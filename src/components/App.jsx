import Button from './Button/Button';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import React, { Component } from 'react';
import styles from './App.module.css';
import { getImages } from 'http/getImages';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      images: [],
      page: 1,
      currentSearchString: '',
      largeImageUrl: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page && this.state.page !== 1) {
      this.setState({ isLoading: true });
      getImages(this.state.currentSearchString, this.state.page).then(data => {
        this.setState({
          images: this.state.images.concat(data.hits),
          isLoading: false,
        });
      });
    }
  }

  handleSearch(searchString) {
    getImages(searchString, 1).then(data => {
      this.setState({
        images: data.hits,
        currentSearchString: searchString,
        isLoading: false,
        page: 1,
      });
    });
  }

  loadNextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  onClickItem(id) {
    const currentImage = this.state.images.find(image => {
      return id === image.id;
    });

    this.setState({
      largeImageUrl: currentImage.largeImageURL,
    });
  }

  closeModal() {
    this.setState({
      largeImageUrl: null,
    });
  }

  render() {
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearch.bind(this)} />
        <ImageGallery
          onClickItem={this.onClickItem.bind(this)}
          images={this.state.images}
        />
        {!!this.state.images.length ? (
          <Button onClick={this.loadNextPage.bind(this)} />
        ) : null}
        <Loader isShown={this.state.isLoading} />
        {this.state.largeImageUrl ? (
          <Modal
            imgUrl={this.state.largeImageUrl}
            closeModal={this.closeModal.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}
