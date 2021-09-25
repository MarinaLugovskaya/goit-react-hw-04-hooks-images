import axios from 'axios';

export default function fetchGallery({ searchQuery, currentPage } = {}) {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=20541911-f3d3c691a8e03834e792077a0&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
}

export { fetchGallery };
