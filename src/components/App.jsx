import { useState, useEffect } from 'react';
import { fetchGallery } from '../services/Api';
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
    fetchGallery({ searchQuery, currentPage })
      .then(responseHits => {
        setGallery(prevGallery => [...prevGallery, ...responseHits]);
        setIsLoading(false);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  }, [currentPage, searchQuery]);

  const formSubmit = query => {
    setCurrentPage();
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
      {isLoading && <Loader />}

      <ImageGallery gallery={gallery} onClickImage={onClickGalleryItem} />
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
