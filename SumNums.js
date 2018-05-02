/*

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/

var twoSum = function(nums, target) {
  let final = [],
  slow = 0,
  fast = 0;

  while(slow < nums.length) {
    //console.log(slow, fast, nums[fast] + nums[slow])
    if(nums[fast] + nums[slow] === target && fast !== slow ) {
      final = [slow, fast];
      break;
    }

    if(fast === nums.length-1) {
      fast = 0;
      slow++;
    } else {
      fast++;
    }
  }

  return final;
};




let  nums = [3,2,4], target = 6;

twoSum(nums, target);
