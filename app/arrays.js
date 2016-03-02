exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var foundIndex = -1;
    arr.forEach(function(elem, index){
      if (elem === item) foundIndex = index;
    });
    return foundIndex;
  },

  sum : function(arr) {
    return arr.reduce(function(acc, elem){
      return acc + elem;
    });
  },

  remove : function(arr, item) {
    return arr.filter(function(elem){
      return (elem === item) ? false : true;
    });
  },

  removeWithoutCopy : function(arr, item) {
    var n = arr.length;
    for (var i = 0; i < n; i++){
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    return arr.concat(item);
  },

  truncate : function(arr) {
    return arr.slice(0,-1);
  },

  prepend : function(arr, item) {
    return [].concat(item).concat(arr);
  },

  curtail : function(arr) {
    return arr.slice(1);
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    return arr.slice(0,index).concat(item).concat(arr.slice(index));
  },

  count : function(arr, item) {
    return arr.reduce(function(acc, elem){
      return (elem === item) ? acc + 1 : acc;
    }, 0);
  },

  duplicates : function(arr) {
    var dups = [];
    var counts = {};
    arr.sort().forEach(function(elem){
      counts[elem] = (elem in counts) ? counts[elem]+1 : 1;
      if (counts[elem] === 2) {
        dups.push(elem);
      }
    });
    return dups;
  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
