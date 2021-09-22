import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import css from "../ImageGallery/ImageGallery.module.css";

function ImageGallery({ gallery, onClickImage }) {
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem gallery={gallery} onClickGalleryItem={onClickImage} />
    </ul>
  );
}

ImageGallery.propTypes = {
  gallery: PropTypes.array,
};

export default ImageGallery;
