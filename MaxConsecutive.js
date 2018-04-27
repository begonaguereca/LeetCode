/*
START: 1 PM
END:
Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
*/



var findMaxConsecutiveOnes = function(nums) {
  let count = 0,
  fast = 0,
  slow = 0,
  currentCount = 0;

  while(fast < nums.length) {
    if(nums[fast] ===1) currentCount++;

    if(nums[fast] === 0) {
      count = Math.max(count, currentCount);
      slow = fast+1;
      currentCount = 0;
    } else if (fast === nums.length-1) {
      count = Math.max(count, currentCount);
    }
    fast++;
  }
  return count;
};


findMaxConsecutiveOnes([0,1]);
