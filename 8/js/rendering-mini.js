import {createPhotos} from './data.js';
import {openBigPictureWindow} from './rendering-full.js';

const picturesContainerElement = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').content.querySelector('a');

const similarPhotos = createPhotos();

const similarListFragment = document.createDocumentFragment();

similarPhotos.forEach(({url, likes, comments, description}) => {
  const photosElement = picturesTemplate.cloneNode(true);
  photosElement.querySelector('img').setAttribute('src', url);
  photosElement.querySelector('.picture__likes').textContent = likes;
  photosElement.querySelector('.picture__comments').textContent = comments.length;
  photosElement.querySelector('img').addEventListener('click', () => {
    openBigPictureWindow({url, likes, comments, description});
  });
  similarListFragment.append(photosElement);
});

picturesContainerElement.append(similarListFragment);
