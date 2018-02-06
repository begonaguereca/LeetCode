/*

Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.

*/

var intersection = function(nums1, nums2) {
  var dupsHolder = [];

  for (var i = 0; i <= nums1.length; i++) {
    if (nums2.indexOf(nums1[i]) !== -1) {
      dupsHolder.push(nums1[i]);
      let indexNums2 = nums2.indexOf(nums1[i]);
      nums2.splice(indexNums2,1);
    }
  }

  return dupsHolder;
};



// var nums1 = [1, 2, 2, 1];
// var nums2 = [2, 2];

// var nums1 = [2, 2];
// var nums2 = [1, 2, 2, 1];

// var nums1 = [2, 2];
// var nums2 = [2, 2];

intersection(nums1, nums2);


/*
Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2]
Output:[2]


Strategy:

loop through array, if value is found in second array
push that value into an array
return array holder

Time Complexity: O(n^2)


*/
