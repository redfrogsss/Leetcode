// https://leetcode.com/problems/plus-one/

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    var i = digits.length - 1;

    var f = false;
    
    while(f !== true) {

        if(digits[i] === 9) {
            digits[i] = 0;

            if(i === 0) {
                digits.unshift(0);
            } else {
                i = i-1;
            }

        } else {
            digits[i] += 1;
            f = true;
        }
    }

    return digits;
};
