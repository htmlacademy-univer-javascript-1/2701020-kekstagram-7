// Функция для получения случайного числа
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Функция для получения случайного элемента массива
const getRandomArrayElement = (elements) =>
  elements[getRandomNumber(0, elements.length - 1)];

// Описания фотографий
const descriptions = [
  'Отличный день!',
  'Красивый вид',
  'Мой любимый момент',
  'Немного воспоминаний',
  'Прекрасное настроение',
  'Путешествие продолжается',
];

// Имена комментаторов
const names = [
  'Артём',
  'Мария',
  'Иван',
  'Анна',
  'Дмитрий',
  'Екатерина',
  'Максим',
];

// Тексты комментариев
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// Счётчик идентификаторов комментариев
let commentId = 1;

// Создание одного комментария
const createComment = () => {
  const firstMessage = getRandomArrayElement(messages);
  const secondMessage = getRandomArrayElement(messages);

  const message = getRandomNumber(1, 2) === 1
    ? firstMessage
    : `${firstMessage} ${secondMessage}`;

  return {
    id: commentId++,
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: message,
    name: getRandomArrayElement(names),
  };
};

// Создание массива комментариев
const createComments = () => {
  const commentsCount = getRandomNumber(0, 30);

  return Array.from({ length: commentsCount }, createComment);
};

// Создание массива фотографий
const photos = Array.from({ length: 25 }, (_, index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomNumber(15, 200),
  comments: createComments(),
}));

console.log(photos);