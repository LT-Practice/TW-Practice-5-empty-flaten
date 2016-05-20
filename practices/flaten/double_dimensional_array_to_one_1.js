'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var Arr = [];
collection.forEach(function (element) {
  if (element[0]) {
    getElement(element, Arr);
  }
  else {
    Arr.push(element);
  }
});

return Arr;
}

function getElement(elementArr, Arr) {
elementArr.forEach(function (item) {
  Arr.push(item);
})



}
module.exports = double_to_one;
