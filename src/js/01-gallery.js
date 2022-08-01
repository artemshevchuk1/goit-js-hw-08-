// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const image = creategalleryItems(galleryItems);
gallery.insertAdjacentHTML('beforeend', image);

function creategalleryItems(items) {
    return items
        .map(({ preview, original, description, }) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`})
        .join('');
};

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250
 });

console.log(lightbox);