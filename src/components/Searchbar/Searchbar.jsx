import React from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

const Searchbar = props => {
  const onSubmit = event => {
    event.preventDefault();

    props.onSubmit(event.target.elements.search.value);
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={styles['SearchForm-button']}>
          <span className={styles['SearchForm-button-label']}>Search</span>
        </button>
        <input
          name="search"
          className={styles['SearchForm-input']}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
