import React from 'react';
import PropTypes from 'prop-types';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export default function ImageGalleryItem({ gallery, onClickGalleryItem }) {
  return (
    <>
      {gallery.map(({ webformatURL, largeImageURL, tags }) => (
        <li
          key={webformatURL}
          className={css.ImageGalleryItem}
          onClick={() => onClickGalleryItem(largeImageURL, tags)}
        >
          <img
            src={webformatURL}
            alt=""
            className={css.ImageGalleryItemImage}
          />
        </li>
      ))}
    </>
  );
}

ImageGalleryItem.propTypes = {
  gallery: PropTypes.array,
  onClickGalleryItem: PropTypes.func,
};
