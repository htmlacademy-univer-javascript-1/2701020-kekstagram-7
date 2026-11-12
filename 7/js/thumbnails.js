import { photos } from './data.js';

// Находим шаблон и блок для фотографий
const pictureTemplate = document.querySelector('#picture');
const picturesContainer = document.querySelector('.pictures');

// Создаём фрагмент
const picturesFragment = document.createDocumentFragment();

// Создаём миниатюры фотографий
photos.forEach((photo) => {
  const pictureElement = pictureTemplate.content
    .querySelector('.picture')
    .cloneNode(true);

  pictureElement.querySelector('.picture__img').src = photo.url;
  pictureElement.querySelector('.picture__img').alt = photo.description;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;

  picturesFragment.appendChild(pictureElement);
});

// Добавляем фотографии на страницу
picturesContainer.appendChild(picturesFragment);