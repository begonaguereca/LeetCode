/*
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/

var twoSum = function(nums, target) {
  let result = [];
  let holder = {};

  nums.forEach(function(num, i) {
    let diff = target - num;

    if (holder[diff] && holder[diff] !== num) {
      let indexDiff = nums.indexOf(holder[diff]);
      result.push(i);
      result.push(indexDiff);
    } else {
      holder[num] = num;
    }
  });
  return result;
};

var nums = [2, 7, 11, 15];
var target = 9;

twoSum(nums, target);

/*
Input: arr and int
Given nums = [2, 7, 11, 15], target = 9,

Output: arr


Strategy:
  iterate through array of nums
  have an obj to store arrays that you've already checked
  check if the difference of the current number and the tagret number are equal to a value in the array
  if true then return those two indexes
  else add the num to the obj


Time Complexity:
o(n) becuase of the for loop

*/
