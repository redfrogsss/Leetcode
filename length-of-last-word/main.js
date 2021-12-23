// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  var result = 0; //num

  var loopFlag = true;
  var countFlag = false;

  var isSpace = (value) => {
    return value === " ";
  };

  //loop from last char
  for (var i = s.length - 1; i >= 0; i--) {
    if (loopFlag === true) {
      //count non-space char until space
      if (!isSpace(s[i]) & (countFlag === false)) {
        //find the first non-space char
        countFlag = true;
      }

      if (countFlag === true) {
        if (isSpace(s[i])) {
          loopFlag = false;
        } else {
          result++;
        }
      }
    }
  }

  //return result
  return result;
};

