import { photos } from './data.js';
import { openBigPicture } from './big-picture.js';

// Находим блок с миниатюрами
const picturesContainer = document.querySelector('.pictures');

// Обрабатываем клики по миниатюрам
picturesContainer.addEventListener('click', (evt) => {
  const picture = evt.target.closest('.picture');

  if (!picture) {
    return;
  }

  const pictures = Array.from(
    picturesContainer.querySelectorAll('.picture')
  );

  const pictureIndex = pictures.indexOf(picture);

  if (pictureIndex !== -1) {
    openBigPicture(photos[pictureIndex]);
  }
});