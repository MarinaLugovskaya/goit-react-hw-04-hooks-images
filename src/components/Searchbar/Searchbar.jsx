import React, { useState } from 'react';
import css from '../Searchbar/Searchbar.module.css';

export default function SearchBar({ onSubmit }) {
  const [inSearch, setInSearch] = useState('');

  const handleFormSubmit = evt => {
    evt.preventDefault();
    onSubmit(inSearch);
    setInSearch('');
  };

  const handleChange = evt => setInSearch(evt.currentTarget.value);

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleFormSubmit}>
        <button type="submit" className={css.SearchForm_button}>
          <span className={css.SearchForm_button_labe}>Search</span>
        </button>

        <input
          className={css.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inSearch}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
