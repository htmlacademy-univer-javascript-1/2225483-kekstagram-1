function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}//источник:https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//если минимум больше максимума меняет их местами

function fitString ( stringToTest, maxLeght){
  const stringToTestStr = String(stringToTest);
  if (stringToTestStr.length > maxLeght){
    return false;
  }
  else {return true;}
}
getRandomIntInclusive(1,2);
fitString('1',2);
