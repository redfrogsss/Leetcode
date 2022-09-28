// https://leetcode.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

	let k = nums.length;

	let i = nums.length - 1;

	while(i >= 0) {
		if(nums[i] == val) {
			nums[i] = undefined;
			k--;
		}

		i--;
	}

	// sort nums
	nums.sort();

	return k;

};

removeElement([0,1,2,2,3,0,4,2], 2);
