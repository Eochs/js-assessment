exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var listOfFiles = [];
    var dirStack = [];

    processDir(data);

    function processDir(dir) {
      var i, file;
      var files = dir.files;
      var len = files.length;

      dirStack.push( dir.dir );

      for (i = 0; i < len; i++) {
        file = files[i];
        if (typeof file === 'string') {
          if (!dirName || dirStack.indexOf(dirName) > -1) {
            listOfFiles.push(files[i]);
          }
        } else {
          processDir(files[i]);
        }
      }

      dirStack.pop();
    }

    return listOfFiles;
  },


  permute: function(arr) {
  	
  	var permutations = [];

  	function createPermutations(permuted, remaining) {
  		var i, firstElem;
  		
  		// base case
  		if (remaining.length < 2)
  			permutations.push(permuted.concat(remaining));
  		else {
  			for (i = 0; i < remaining.length; i++) {
  				var cloneRem = remaining.slice();
  				firstElem = cloneRem.splice(i, 1);
  				createPermutations(permuted.concat(firstElem), cloneRem);
  			}
  		}
  	}
  	for (var j = 0; j < arr.length; j++) {
  		var cloneArr = arr.slice();
  		var startingElem = cloneArr.splice(j, 1);
  		createPermutations([startingElem], cloneArr);
  	}
  	return permutations;
  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
