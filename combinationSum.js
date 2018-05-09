/*
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]

*/

var combinationSum = function(candidates, target) {
    let final = [];
    let dictionary = {};

  const recurseInner = (list, sum, arr) => {
    if(sum === target) {
      arr = arr.sort((a, b) => {return a - b});
      if(!dictionary[arr]) {
        final.push(arr);
        dictionary[arr] = true;
        //console.log(dictionary)
      }
      return;
    } else if (sum > target) {
      return;
    } else {
      list.forEach((val, i) => {
        //sum = sum + val;
        recurseInner(list, sum + val, arr.concat(list[i]));
      });
    }
  };

  recurseInner(candidates, 0, []);
  return final;
};


combinationSum([2,3,6,7], 7);
