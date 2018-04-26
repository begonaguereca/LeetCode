/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4

*/



var singleNumber = function(nums) {
  nums.sort((a, b) => {return a -b });

  for(var i =nums.length-1; i >=0; i--) {
    console.log(nums);
    if(nums[i] === nums[i+1]) {
      nums.splice(i, 2);
      i--;
    }
  }

  return nums[0];
};



singleNumber([4,1,2,1,2]);
