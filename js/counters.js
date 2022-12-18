let descpiptionsId = 0;
function createDescpiptionsID () {
  return descpiptionsId++;
}

let photoId  = 1;
function createID () {
  return photoId ++;
}

let url = 1;
function createURL () {
  return url++;
}

let commentsId = 1;
function createCommentsID () {
  return commentsId++;
}

export {createID, createURL, createCommentsID, createDescpiptionsID};
