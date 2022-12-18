let descriptionsId = 0;
function createDescriptionsID () {
  return descriptionsId++;
}

let photoId  = 1;
function createPhotoID () {
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

export {createPhotoID, createURL, createCommentsID, createDescriptionsID};
