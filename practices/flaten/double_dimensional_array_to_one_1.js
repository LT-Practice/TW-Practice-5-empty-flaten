'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var arr = [];
  var n = collection.length;
  for (var i = 0; i < n; i++) {
    if (collection[i].length >= 1) {

      var m = collection[i].length;

      for (var j = 0; j < m; j++) {

        arr.push(collection[i][j]);

      }

    }

      else {

        arr.push(collection[i]);

      }

  }

return arr;

}
module.exports = double_to_one;
