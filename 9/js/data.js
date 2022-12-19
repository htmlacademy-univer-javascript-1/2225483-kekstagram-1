import {getRandomArrayElement, getRandomNumber} from './util.js';
import {createPhotoID, createURL, createCommentsID, createDescriptionsID} from './counters.js';

const NAMES = [
  'Александр',
  'Маргарита',
  'Евгений',
  'Анна',
  'Михаил',
  'Виктория'];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];


const PHOTO_DESCRIPTIONS = [
  'У моря',
  'На празднике жизни',
  'С семьей',
  'Каникулы проведены на ура!'];

const PHOTO_COUNT = 25;

function createComments() {
  return {
    id: createCommentsID(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES)
  };
}

function createPhotoDescriptions () {
  return {
    id: createPhotoID(),
    url: `photos/${createURL()}.jpg`,
    description: PHOTO_DESCRIPTIONS[createDescriptionsID()],
    likes: getRandomNumber(15, 200),
    comments: Array.from({length: getRandomNumber(1, 25)}, createComments)
  };
}

const createPhotos = () => Array.from({length: PHOTO_COUNT}, createPhotoDescriptions);

export {createPhotos};
