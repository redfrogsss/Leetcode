// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  var x = 0,
    y = 0; // x is first value, y is second value
  var result = [];

  for (var i = 0; i < numbers.length; i++) {

    //no looping if result is found
    if (result.length === 0) {
      // select first value
      x = numbers[i];

      for (var j = 0; j < numbers.length; j++) {

        //no looping if result is found
        if (result.length === 0) {
          // select second value (!== first value)
          if (j !== i) {
            y = numbers[j];

            // compare sum value (first, second) to target
            var sum = x + y;

            // if sum === target then return ++index of two value
            if (sum === target) {
              // create result
              result = [i + 1, j + 1].sort((a, b) => {
                return a - b;
              });
            }
          } else {
            // skip this loop
            break;
          }
        }
      }
    }
  }

  return result;
};
