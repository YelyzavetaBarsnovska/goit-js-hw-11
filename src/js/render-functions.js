import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery a');

const galleryContainer = document.querySelector('.gallery');
const loader = document.getElementById('loader');

export function createGallery(images) {
  const markup = images
    .map(image => {
      return `
      <li class="gallery-item">
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        </a>
        <div class="image-stats">
          <span>Likes <strong>${image.likes}</strong></span>
          <span>Views <strong>${image.views}</strong></span>
          <span>Comments <strong>${image.comments}</strong></span>
          <span>Downloads <strong>${image.downloads}</strong></span>
        </div>
      </li>
    `;
    })
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}
