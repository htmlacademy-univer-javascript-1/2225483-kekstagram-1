function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}//источник:https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//если минимум больше максимума меняет их местами

function fitString ( stringToTest, maxLenght){
  return stringToTest.length <= maxLenght;
}
getRandomIntInclusive(1,2);
fitString('111',2);
