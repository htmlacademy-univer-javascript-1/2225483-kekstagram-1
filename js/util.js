const DELAY = 500;

function getRandomNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//источник:https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const isEscape = (evt) => evt.key === 'Escape';

const getRandomElements = (array, elementsCount) => {
  const elementNumbers = [];
  const randomArray = [];

  for(let i = 0; i < array.length; i++){
    const number = getRandomNumber(0, array.length - 1);

    if(elementNumbers.indexOf(number) === -1){
      randomArray.push(array[number]);
      elementNumbers.push(number);
    }

    if(randomArray.length === elementsCount){
      break;
    }
  }
  return randomArray;
};

const debounce = (callback) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), DELAY);
  };
};

export {isEscape, getRandomElements, debounce};
