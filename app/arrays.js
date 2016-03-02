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
    })
  },

  removeWithoutCopy : function(arr, item) {

  },

  append : function(arr, item) {

  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
