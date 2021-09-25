import { useState, useEffect } from 'react';

import fetchGallery from '../services/Api';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import SearchBar from './Searchbar/Searchbar';
import css from '../components/Style.module.css';

export default function App() {
  const [gallery, setGallery] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [imageForModal, setImageForModal] = useState(null);
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (searchQuery === '') return;

    const options = {
      currentPage,
      searchQuery,
      error: null,
    };

    fetchGallery(options)
      .then(hits => setGallery(prevGallery => [...prevGallery, ...hits]))
      .then(() => {
        if (currentPage > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      })
      .catch(error => setError({ error }))
      .finally(() => setIsLoading(false));
  }, [currentPage, searchQuery]);

  const formSubmit = query => {
    setCurrentPage(1);
    setGallery([]);
    setError(null);
    setSearchQuery(query);
  };

  // --BUTTON LOAD MORE--

  const clickMoreBtn = () => {
    setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
  };

  // --MODAL--

  const toggleModal = () => {
    setShowModal(false);
    setImageForModal(null);
  };

  const onClickGalleryItem = url => {
    setImageForModal(url);
  };

  const shouldRenderBtnLoadMore = gallery.length > 0 && !isLoading;
  return (
    <>
      <SearchBar onSubmit={formSubmit} />

      <ImageGallery
        gallery={gallery}
        onClickImage={onClickGalleryItem}
        onClick={toggleModal}
      />

      {isLoading && <Loader />}

      {shouldRenderBtnLoadMore && <Button onClick={clickMoreBtn} />}

      {imageForModal && (
        <Modal onClose={toggleModal}>
          <img src={imageForModal} />
          title={title}
        </Modal>
      )}
    </>
  );
}
