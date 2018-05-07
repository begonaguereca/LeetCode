/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.


 */

var maxSubArray = function(nums) {
  let fast = 0,
  slow = 0,
  subarray = [],
  largeSum = 0,
  currArray = [],
  currentSum = '';

  while (slow <= nums.length && fast <= nums.length) {
    let currentNum = nums[fast];
    if(currentSum === '') {
      currentSum = currentNum;
      largeSum = currentNum;
      subarray.push(currentNum)
    } else {
      currentSum += currentNum;
    }
    currArray.push(currentNum);
    console.log('sum',  slow, fast, currArray, largeSum)

    if(currentSum > largeSum) {
      subarray = currArray;
      largeSum = currentSum;
    }
    if(fast === nums.length-1) {
      slow++
      fast = slow;
      currArray = [];
      currentSum = 0;
    } else {
      fast++;
    }
  }
  console.log('FINAL', largeSum)
  return largeSum;
};


maxSubArray([-2,1]);
