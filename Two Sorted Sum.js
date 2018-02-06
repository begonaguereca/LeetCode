/*

Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution and you may not use the same element twice.

*/

var twoSum = function(nums, target) {
  let diffHolder = {};
  let sumFinal = [];

  for (var i = 0; i <= nums.length; i++) {
    let curr = nums[i];
    let diff = target - curr;

    if (diffHolder[diff]) {
      sumFinal.push(nums.indexOf(diff + 1));
      sumFinal.push(i+1);
    } else {
      diffHolder[curr] = curr;
    }
  }
  return sumFinal;
};

let numbers = [2, 7, 11, 15];
let target = 9;

twoSum(numbers, target);

/*
Example:
Input: numbers=[2, 7, 11, 15], target=9
Output: [1, 2]


Strategy:

loop through array, if the diff between the target and current number is in our storage obj
then we found our pair and return the non zero index of the two numebers

if not, then add numbers to storage obj



Time Complexity: O(n^2)


*/
