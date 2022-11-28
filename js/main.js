const PHOTO_DESCRIPTIONS = [
  'У моря',
  'На празднике жизни',
  'С семьей',
  'Каникулы проведены на ура!'];
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const INDEX_MIN = 1;
const INDEX_MAX = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;
const NAMES = [
  'Александр',
  'Маргарита',
  'Евгений',
  'Анна',
  'Михаил',
  'Виктория'];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}//источник:https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function fitString ( stringToTest, maxLenght){
  return stringToTest.length <= maxLenght;
}

let photoIdCounter = INDEX_MIN-1;

let userIdCounter = INDEX_MAX-1;

function createComments() {
  userIdCounter++;
  return [{
    id: userIdCounter,
    avatar: `img/avatar-${ getRandomIntInclusive(AVATAR_MIN, AVATAR_MAX) }.svg`,
    message: COMMENTS[getRandomIntInclusive(0, COMMENTS.length-1)],
    name: NAMES[getRandomIntInclusive(0, NAMES.length-1)]
  }];
}

function createPhotoDescript() {
  photoIdCounter++;
  return {
    id: photoIdCounter,
    url: `photos/${photoIdCounter}.jpg`,
    description: PHOTO_DESCRIPTIONS[getRandomIntInclusive(0, PHOTO_DESCRIPTIONS.length)],
    likes: getRandomIntInclusive(LIKES_MIN, LIKES_MAX),
    comments: createComments()
  };
}

for (let i = INDEX_MIN; i <= INDEX_MAX ; i++){
  // eslint-disable-next-line
  console.log(createPhotoDescript());
}
getRandomIntInclusive(1,2);
fitString('000',2);
