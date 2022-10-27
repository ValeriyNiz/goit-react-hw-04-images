import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyUp.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyUp);
  }

  onKeyUp(event) {
    if (event.key === 'Escape') {
      this.props.closeModal();
    }
  }

  onClick(event) {
    if (event.currentTarget !== event.target) {
      return;
    }

    this.props.closeModal();
  }

  render() {
    return (
      <div
        onClick={this.onClick.bind(this)}
        onKeyUp={this.onKeyPress}
        className={styles.Overlay}
        tabIndex="0"
      >
        <div className={styles.Modal}>
          <img src={this.props.imgUrl} alt="largeImage" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default Modal;
