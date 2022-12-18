function getRandomNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}//источник:https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random


function checkLengthString (line, maximum) {
  return line.length <= maximum;
}

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];
checkLengthString('14', 2222);
export {getRandomArrayElement, getRandomNumber};
